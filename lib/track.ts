/** GTM/GA4 analytics. Mirrors every event to window.dataLayer (GTM) and to
    gtag (GA4) when present; both are no-ops when the tag has not loaded. */
type GtagFn = (...args: unknown[]) => void;
type AnalyticsWindow = Window & {
  dataLayer?: Record<string, unknown>[];
  gtag?: GtagFn;
};

export function track(event: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as AnalyticsWindow;
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...params });
  w.gtag?.("event", event, params);
}

/** Fires the GA4 `generate_lead` event and, when an Ads conversion is configured
    (NEXT_PUBLIC_ADS_ID + label), the matching Google Ads conversion. Call once on
    a successful lead submit. */
export function trackConversion(params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as AnalyticsWindow;
  track("generate_lead", params);
  const adsId = process.env.NEXT_PUBLIC_ADS_ID;
  const label = process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL;
  if (adsId && label) {
    w.gtag?.("event", "conversion", { send_to: `${adsId}/${label}`, ...params });
  }
}
