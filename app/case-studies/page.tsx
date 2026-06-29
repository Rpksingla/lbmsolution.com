import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Backdrop from "@/components/Backdrop";
import CaseGrid from "@/components/CaseGrid";

export const metadata: Metadata = {
  title: "Case Studies | LBM Solutions",
  description:
    "Real blockchain projects and the outcomes they shipped: end-to-end Web3 ecosystems and a production-grade blockchain explorer. Filter by service and see the numbers.",
  alternates: { canonical: "https://www.lbmsolution.com/case-studies" },
  openGraph: {
    title: "Case Studies | LBM Solutions",
    description:
      "Real blockchain projects and the outcomes they shipped. Filter by service and see the numbers.",
    url: "https://www.lbmsolution.com/case-studies",
    type: "website",
  },
};

const AGG = [
  { v: "8", p: "Products in Minati's Web3 ecosystem" },
  { v: "Zero", p: "Tokens lost in PoxScan's 50M swap" },
  { v: "5", p: "Industries in AiMintz's token economy" },
];

// Review-platform logos supplied by the founder (hosted on media.worksbuddy.ai).
// Rendered in uniform-size boxes so each logo reads at the same scale regardless
// of its native aspect ratio.
const REVIEW_LOGOS = [
  { name: "Clutch", src: "https://media.worksbuddy.ai/1780981013049-0cfdf25713a2-clutch.png?w=406&h=115" },
  { name: "GoodFirms", src: "https://media.worksbuddy.ai/1780981013052-c0016af8579f-goodfirms.png?w=542&h=84" },
  { name: "Trustpilot", src: "https://media.worksbuddy.ai/1780981013058-a2a7228d410a-trustpilot.png?w=960&h=236" },
];

export default function CaseStudiesIndex() {
  return (
    <>
      <Header />
      <main>
        {/* Hero + aggregate metrics */}
        <section className="hero bg-host !pb-0 !border-0" id="top">
          <Backdrop motif="hero" />
          <div className="wrap">
            <Reveal>
              <div className="kick mono">
                <span>
                  <span className="acc"></span> Case studies <span className="acc"></span>
                </span>
              </div>
              <h1>
                Real projects, <span className="pp">real outcomes</span>
              </h1>
              <p className="lede !mt-6">
                A sample of the blockchain platforms and Web3 ecosystems we have shipped, with the real
                clients and the real numbers behind them. Each case study leads with one hard outcome,
                then shows exactly how we got there.
              </p>
              <div className="stats abtmetrics">
                {AGG.map((m, i) => (
                  <div className="stat" key={i}>
                    <div className="v">{m.v}</div>
                    <p>{m.p}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Reviewed-on logo bar */}
        <div className="logobar">
          <div className="in">
            {/* <span className="mono lb">Reviewed on</span> */}
            <div className="logos">
              {REVIEW_LOGOS.map((s) => (
                <span className={`logo logo-${s.name.toLowerCase()}`} key={s.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.src} alt={`${s.name} reviews`} />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Filter + grid */}
        <section>
          <div className="wrap">
            <Reveal>
              <CaseGrid />
            </Reveal>
          </div>
        </section>

        {/* Soft dual CTA */}
        <section className="softcta">
          <div className="wrap">
            <Reveal>
              <h2 className="h2">
                See one that looks like your project? <span className="g">Two  <br />ways from here.</span>
              </h2>
              <p className="subh">
                Talk to the engineers who shipped these, or read how we work first. No forms, no pressure.
              </p>
              <div className="softcta-row">
                <a href="/contact" className="btn btn-pri">
                  Book a 30-minute call
                </a>
                <a href="/about" className="btn btn-ghost">
                  How we work
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
