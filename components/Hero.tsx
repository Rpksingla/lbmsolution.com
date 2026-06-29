import Backdrop from "@/components/Backdrop";
import HeroCubes from "@/components/HeroCubes";

const TICKER_ITEMS = [
  <>Zero post-launch exploits</>,
  <>Solidity · Rust · Move</>,
  <>
    <b>48hr</b> audit quotes
  </>,
  <>US · UK · UAE · Singapore · Worldwide</>,
  <>LangGraph · CrewAI · Langfuse</>,
  <>
    <b>4hr</b> response on new briefs
  </>,
  /* FOUNDER INPUT NEEDED: verified TVL-secured figure and verified
     contracts-shipped count. Previous items ("$400M+ TVL secured",
     "200+ contracts shipped") were unvalidated and have been removed.
     Restore them here once real figures are confirmed. */
];

function TickerTrack() {
  return (
    <>
      {TICKER_ITEMS.map((item, i) => (
        <span className="it" key={i}>
          {item}
        </span>
      ))}
    </>
  );
}

export default function Hero({ className = "" }: { className?: string }) {
  return (
    <>
    <header className={`hero bg-host ${className}`.trim()}>
       <img src="https://media.worksbuddy.ai/1781609267595-623253acf345-1.png?w=1920&h=900" alt="" className="absolute top-0 right-0 w-full h-full object-cover" />
       <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-sm lg:hidden"></div>
      {/* <Backdrop motif="hero" /> */}
      <div className="hero-cubes" aria-hidden="true">
        {/* <HeroCubes /> */}
      </div>
      <div className="wrap lg:!pb-20">
        {/* FOUNDER INPUT NEEDED: confirm founding year. Homepage says
            "since 2014"; /smart-contract-audits says "contracts audited
            since 2019" (audit practice start). Both can be true, but the
            founder should confirm 2014 before launch. */}
        <div className="kick mono hr" style={{ "--d": 0 } as React.CSSProperties}>
          <span>
            <span className="br"></span> Blockchain and AI engineering since
            2014 <span className="br"></span>
          </span>
        </div>
        <h1 className="hr hero_heading" style={{ "--d": 1 } as React.CSSProperties}>
          We build <span className="pp">production</span> blockchain and AI
          systems for fintech and SaaS teams
        </h1>
        <div className="herostack !mb-10">
          <p className="lede hr" style={{ "--d": 2 } as React.CSSProperties}>
            Senior engineers only. Audit-first delivery. We stay through launch
            and beyond.{" "}
            <b>
              Most engagements ship in 6 to 12 weeks, and you own the code.
            </b>
          </p>
          <div className="ctacol hr" style={{ "--d": 3 } as React.CSSProperties}>
            <a href="/contact" className="btn btn-pri">
              Book a 30-minute architecture review
            </a>
            <p className="reassure">
              We review your project, suggest the right approach, and give you a
              price range. No sales pitch. If we are not the right fit, we will
              tell you who is.
            </p>
            <a href="#how-we-work" className="tlink">
              See how we work →
            </a>
          </div>
        </div>
      </div>
    </header>

      <div className="ticker hr" style={{ "--d": 4 } as React.CSSProperties}>
        <div className="track !relative">
          {/* rendered twice for a continuous loop */}
          <TickerTrack />
          <TickerTrack />
        </div>
      </div>
      </>
  );
}
