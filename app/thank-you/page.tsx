import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Backdrop from "@/components/Backdrop";

const BASE = "https://www.lbmsolution.com";

export const metadata: Metadata = {
  title: "Thank you | LBM Solutions",
  description: "Your brief has reached us. We reply within one business day with next steps or a scoping call slot.",
  alternates: { canonical: `${BASE}/thank-you` },
  robots: { index: false, follow: true },
};

export default function ThankYou() {
  return (
    <>
      <Header />
      <main>
        <section className="hero bg-host">
          <Backdrop motif="hero" />
          <div className="wrap legalbody">
            <Reveal>
              <div className="kick mono">
                <span>
                  <span className="acc"></span> Received <span className="acc"></span>
                </span>
              </div>
              <h1>Thank you. Your brief has reached us.</h1>
              <p className="lede">
                A senior engineer will review it and reply within one business day with next steps or a
                scoping call slot. No sales sequence.
              </p>
              <div className="row" style={{ marginTop: "28px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <Link href="/case-studies" className="btn btn-pri">
                  See our work
                </Link>
                <Link href="/" className="btn btn-ghost">
                  Back to home
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
