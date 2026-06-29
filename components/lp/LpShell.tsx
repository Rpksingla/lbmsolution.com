import Link from "next/link";
import LpAnalytics from "./LpAnalytics";

/* Standalone landing-page chrome for paid traffic (ConversionLab 1:1 attention
   ratio): logo-only header with a SINGLE CTA that jumps to the form, and a
   minimal legal footer. No top nav, no external links except privacy. Used by
   every /docs/landing-p page. Server component. */

export default function LpShell({
  cta,
  children,
}: {
  cta: string;
  children: React.ReactNode;
}) {
  return (
    <div className="lp">
      <LpAnalytics />
      <header className="lp-top">
        <div className="lp-top-in">
          <span className="tbrand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="brand-logo h-[40px] w-auto lg:h-auto"
              src="/lbm-logo.png"
              alt="LBM Solutions"
              width={246}
              height={48}
            />
          </span>
          <a href="#lead-form" className="btn btn-pri">
            {cta}
          </a>
        </div>
      </header>

      <main>{children}</main>

      <footer className="lp-foot !py-6">
        <div className="lp-foot-in">
          <span className="font-bold !text-black ">LBM Solutions Pvt. Ltd</span>
          <span className="lp-foot-links !gap-3 flex">
            <Link href="/privacy-policy" className="font-bold !text-black ">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="font-bold !text-black ">Terms and Conditions</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
