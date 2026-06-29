"use client";

import Script from "next/script";
import { useEffect } from "react";
import { captureAttribution } from "@/lib/utm";

/* Landing-page analytics: loads gtag.js (GA4 and/or Google Ads) and captures
   campaign attribution on mount. The <Script> tags render only when a measurement
   ID is configured, so unconfigured dev/builds stay clean. UTM capture runs
   regardless so the lead record keeps its source even before tags are wired. */

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID;

export default function LpAnalytics() {
  useEffect(() => {
    captureAttribution();
  }, []);

  const loaderId = GA_ID || ADS_ID;
  if (!loaderId) return null;

  return (
    <>
      <Script
        id="gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${
          GA_ID ? `gtag('config','${GA_ID}');` : ""
        }${ADS_ID ? `gtag('config','${ADS_ID}');` : ""}`}
      </Script>
    </>
  );
}
