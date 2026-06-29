/* Captures Google Ads / campaign attribution from the landing URL and persists
   it for the session, so a lead submitted after scrolling or a privacy click
   still carries its true source. Written on LP mount (see LpAnalytics), read at
   submit time and attached to both the lead record and the conversion event. */

const KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
] as const;

const STORE = "lbm_attribution";

export type Attribution = Partial<Record<(typeof KEYS)[number], string>>;

/** Reads attribution params off the current URL and stores them for the session.
    First touch wins: an existing capture is not overwritten by a later in-site nav. */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const found: Attribution = {};
  for (const k of KEYS) {
    const v = params.get(k);
    if (v) found[k] = v;
  }
  if (Object.keys(found).length === 0) return;
  try {
    if (!sessionStorage.getItem(STORE)) {
      sessionStorage.setItem(STORE, JSON.stringify(found));
    }
  } catch {
    /* storage blocked (private mode); non-fatal */
  }
}

/** Returns the stored attribution for this session, or an empty object. */
export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORE);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}
