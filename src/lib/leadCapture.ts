/**
 * Lead delivery via Web3Forms (production-grade, CORS-safe).
 * Returns a real result so callers only show success after confirmed delivery.
 *
 * Behavior:
 * - POSTs to Web3Forms API with access key.
 * - 15s timeout per attempt via AbortController, with one automatic retry
 *   on transient network failures.
 * - Never throws — failures resolve to { ok: false, error } so the UI
 *   can show a recoverable error and offer a retry.
 */
import { getLeadContext, trackLead } from "./analytics";

const WEB3FORMS_KEY = "492b33ae-7b79-4302-9a66-d5f8688bccdb";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export interface LeadResult {
  ok: boolean;
  error?: string;
}

export const captureLead = async (
  subject: string,
  data: Record<string, string>
): Promise<LeadResult> => {
  try {
    // Fire the lead conversion event (keyless console + optional GA4).
    trackLead(subject, data);

    // Attach global attribution — source, country, landing page, device.
    const context = getLeadContext();

    // Web3Forms is production-grade with proper CORS support.
    // Retry once on transient network failures.
    let lastError = "Network failure";
    for (let attempt = 0; attempt < 2; attempt++) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);

      let res: Response;
      try {
        res = await fetch(WEB3FORMS_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: subject,
            from_name: data.Name || data.firstName || "Website Visitor",
            ...data,
            ...context,
          }),
          signal: controller.signal,
        });
      } catch (e) {
        lastError = e instanceof Error ? (e.name === "AbortError" ? "Request timed out" : e.message) : "Network failure";
        clearTimeout(timeout);
        continue;
      }
      clearTimeout(timeout);

      const json = await res.json().catch(() => null);

      if (res.ok && json?.success) {
        return { ok: true };
      }
      lastError = json?.message || `Web3Forms returned HTTP ${res.status}`;
      // 4xx errors (except 429 throttling) will fail identically on retry.
      if (res.status >= 400 && res.status < 500 && res.status !== 429) {
        break;
      }
    }
    return { ok: false, error: lastError };
  } catch (e) {
    const error =
      e instanceof Error ? (e.name === "AbortError" ? "Request timed out" : e.message) : "Network failure";
    return { ok: false, error };
  }
};
