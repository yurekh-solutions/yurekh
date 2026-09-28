/**
 * Server-side lead delivery to the yurekhsolutions@gmail.com inbox via
 * FormSubmit (keyless). Returns a real result so callers only show a
 * success state after confirmed delivery — never a false positive.
 *
 * Behavior:
 * - Awaits the FormSubmit response and checks HTTP status.
 * - 10s timeout via AbortController (offline / slow networks fail fast).
 * - Never throws — failures resolve to { ok: false, error } so the UI
 *   can show a recoverable error and offer a retry / WhatsApp fallback.
 *
 * Note: FormSubmit sends a one-time activation email on the very first
 * submission — click "Activate" once and every lead after that is delivered.
 */
import { getLeadContext, trackLead } from "./analytics";

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

    // Attach global attribution — source, country, landing page, device —
    // so every inquiry in the inbox shows exactly where the lead came from.
    const context = getLeadContext();

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    let res: Response;
    try {
      res = await fetch("https://formsubmit.co/ajax/yurekhsolutions@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: subject,
          _template: "table",
          _captcha: "false",
          ...data,
          ...context,
        }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }

    if (!res.ok) {
      return { ok: false, error: `FormSubmit returned HTTP ${res.status}` };
    }
    return { ok: true };
  } catch (e) {
    const error =
      e instanceof Error ? (e.name === "AbortError" ? "Request timed out" : e.message) : "Network failure";
    return { ok: false, error };
  }
};
