import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "lenis/dist/lenis.css";
import ScrollProgress from "@/components/ScrollProgress";
import OrgJsonLd from "@/components/OrgJsonLd";
import SmoothScroll from "@/components/SmoothScroll";
import NavScroll from "@/components/NavScroll";
import BackToTop from "@/components/BackToTop";

// Headings + UI labels: Satoshi (self-hosted, from Fontshare).
const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    { path: "./fonts/Satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Satoshi-900.woff2", weight: "900", style: "normal" },
  ],
});

// Body / paragraphs: Manrope (self-hosted, from Fontshare).
const manrope = localFont({
  variable: "--font-manrope",
  display: "swap",
  src: [
    { path: "./fonts/Manrope-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Manrope-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Manrope-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Manrope-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Manrope-800.woff2", weight: "800", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lbmsolution.com"),
  title: "Blockchain & AI Engineering for Fintech | LBM Solutions",
  description:
    "We build and audit production blockchain and AI systems for fintech and B2B SaaS teams. Senior engineers, audit-first, shipped in 6 to 12 weeks. Book a 30-minute architecture review.",
  openGraph: {
    title: "Blockchain & AI Engineering for Fintech | LBM Solutions",
    description:
      "We build and audit production blockchain and AI systems for fintech and B2B SaaS teams. Senior engineers, audit-first, shipped in 6 to 12 weeks.",
    url: "https://www.lbmsolution.com/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body>
        <OrgJsonLd />
        <ScrollProgress />
        <NavScroll />
        <SmoothScroll>
          {children}
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
