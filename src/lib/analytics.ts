/**
 * Keyless global lead-intel for Yurekh Solutions — no GA4, no account needed.
 *
 * Every lead captured via captureLead() automatically includes:
 *   - Source: Google / Bing / referral site / direct / Instagram etc.
 *   - UTM campaign parameters (if the visitor arrived via an ad/link)
 *   - Landing page + page the lead came from
 *   - Country / city (via free keyless geo lookup, fire-and-forget)
 *   - Device type, language, timezone
 *
 * All of this lands in the yurekhsolutions@gmail.com inbox with each lead,
 * so inquiry source is visible globally without any analytics dashboard.
 *
 * Optional: if a real GA4 Measurement ID is ever added below, GA4 also loads.
 */

/* Set a real ID (G-XXXXXXXXXX) to also enable GA4. "G-XXXXXXXXXX" = GA4 skipped. */
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let loaded = false;
let geo: { country?: string; city?: string } = {};

const hasRealGaId = () =>
  GA_MEASUREMENT_ID &&
  !GA_MEASUREMENT_ID.includes("XXXX") &&
  GA_MEASUREMENT_ID.startsWith("G-");

/* ---------- geo lookup (free, keyless, fire-and-forget) ---------- */
const fetchGeo = () => {
  try {
    fetch("https://ipapi.co/json/", { keepalive: true })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d && typeof d === "object") {
          geo = {
            country: [d.city, d.region, d.country_name].filter(Boolean).join(", ") || undefined,
            city: d.country_name,
          };
          try {
            sessionStorage.setItem("yk_geo", JSON.stringify(geo));
          } catch { /* ignore */ }
        }
      })
      .catch(() => { /* geo is best-effort */ });
  } catch { /* ignore */ }
};

/* ---------- UTM + referrer capture (once per session) ---------- */
const captureEntry = () => {
  try {
    const p = new URLSearchParams(window.location.search);
    const entry = {
      landing: window.location.href,
      referrer: document.referrer || "direct",
      utm_source: p.get("utm_source") || "",
      utm_medium: p.get("utm_medium") || "",
      utm_campaign: p.get("utm_campaign") || "",
      first_page: window.location.pathname,
    };
    if (!sessionStorage.getItem("yk_entry")) {
      sessionStorage.setItem("yk_entry", JSON.stringify(entry));
    }
  } catch { /* ignore */ }
};

/** Human-readable source, e.g. "Google Search", "LinkedIn", "Direct" */
export const getSource = (): string => {
  try {
    const entry = JSON.parse(sessionStorage.getItem("yk_entry") || "{}");
    if (entry.utm_source) return entry.utm_source;
    const ref: string = entry.referrer || "";
    if (!ref || ref === "direct") return "Direct / Unknown";
    if (ref.includes("google.")) return "Google Search";
    if (ref.includes("bing.")) return "Bing Search";
    if (ref.includes("yahoo.")) return "Yahoo Search";
    if (ref.includes("linkedin.")) return "LinkedIn";
    if (ref.includes("instagram.")) return "Instagram";
    if (ref.includes("facebook.")) return "Facebook";
    if (ref.includes("x.com") || ref.includes("twitter.")) return "X / Twitter";
    if (ref.includes("youtube.")) return "YouTube";
    if (ref.includes("yurekh.com")) return "Yurekh.com (internal)";
    try {
      return "Referral: " + new URL(ref).hostname.replace("www.", "");
    } catch {
      return "Referral";
    }
  } catch {
    return "Direct / Unknown";
  }
};

/** Full lead context — merged into every captured lead email. */
export const getLeadContext = (): Record<string, string> => {
  try {
    const entry = JSON.parse(sessionStorage.getItem("yk_entry") || "{}");
    const savedGeo = JSON.parse(sessionStorage.getItem("yk_geo") || "{}");
    const g = geo.country ? geo : savedGeo;
    return {
      "Lead Source": getSource(),
      Country: g.country || g.city || "Unknown",
      "Landing Page": entry.landing || window.location.href,
      Referrer: entry.referrer || "direct",
      UTM: [entry.utm_source, entry.utm_medium, entry.utm_campaign].filter(Boolean).join(" / ") || "-",
      Device: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? "Mobile" : "Desktop",
      Language: navigator.language,
      Timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      "Captured At": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST",
    };
  } catch {
    return { "Lead Source": getSource() };
  }
};

/** Optional GA4 — only loads when a real Measurement ID is configured. */
export const initAnalytics = () => {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  captureEntry();
  fetchGeo();
  if (!hasRealGaId()) return; // keyless mode — nothing else to load

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: true });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
};

/**
 * Track a lead action. In keyless mode the event is logged to console and,
 * more importantly, the lead email (sent by captureLead) already carries
 * full source attribution — so nothing is lost without GA4.
 */
export const trackLead = (source: string, data: Record<string, string> = {}) => {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        event_category: "lead",
        event_label: source,
        ...data,
      });
    }
    if (typeof console !== "undefined") {
      console.info(`[lead] ${source}`, { source: getSource(), ...data });
    }
  } catch { /* tracking must never break the lead flow */ }
};

export const trackEvent = (action: string, category: string, label?: string) => {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", action, {
        event_category: category,
        ...(label ? { event_label: label } : {}),
      });
    }
  } catch { /* ignore */ }
};

/** WhatsApp click-to-chat link with source-aware pre-filled message. */
export const getWhatsAppLink = (context: string): string => {
  const src = getSource();
  const text = encodeURIComponent(
    `Hi Yurekh Solutions! I found you via ${src}${context ? ` (${context})` : ""}. I want to discuss my business.`
  );
  return `https://wa.me/919136242706?text=${text}`;
};
