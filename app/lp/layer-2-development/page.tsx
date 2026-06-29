import type { Metadata } from "next";
import LpShell from "@/components/lp/LpShell";
import TrackRecord from "@/components/lp/TrackRecord";
import LeadForm from "@/components/lp/LeadForm";
import Backdrop from "@/components/Backdrop";
import LpBackground from "@/components/bg/LpBackground";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";

const NV = "NEEDS-VALIDATION: founder";
const CTA = "Book my scaling strategy call";

export const metadata: Metadata = {
  title: "Layer 2 Development | ZK and Optimistic Rollups | LBM Solutions",
  description:
    "ZK or Optimistic, custom or off-the-shelf. We build the Layer 2 that matches your throughput, cost, and security needs. Book a scaling strategy call and we will tell you which rollup fits.",
  alternates: { canonical: "https://www.lbmsolution.com/lp/layer-2-development" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Layer 2 Development | ZK and Optimistic Rollups | LBM Solutions",
    description:
      "ZK or Optimistic, custom or off-the-shelf. We build the Layer 2 that matches your throughput, cost, and security needs for teams that have outgrown a single chain.",
    url: "https://www.lbmsolution.com/lp/layer-2-development",
    type: "website",
  },
};

const DECISION = [
  { need: "Lowest fees, privacy, and fast finality", lean: "ZK Rollup" },
  { need: "EVM equivalence, simpler tooling, lower cost to build", lean: "Optimistic Rollup" },
  { need: "App-specific control and a custom gas token", lean: "Sidechain or Appchain" },
  { need: "Not sure yet", lean: "Book the call" },
];

const BUILD = [
  { n: "B.01", title: "ZK Rollups", body: "Validity proofs with the lowest finality risk." },
  { n: "B.02", title: "Optimistic Rollups", body: "EVM-equivalent and fast to ship." },
  { n: "B.03", title: "Custom sequencers", body: "Your own ordering and fee logic." },
  { n: "B.04", title: "L2 to L1 bridges", body: "Secure deposit and withdraw flows." },
  { n: "B.05", title: "Data availability setup", body: "Celestia, EigenDA, or blobs." },
  { n: "B.06", title: "Rollup-as-a-service deployment", body: "Built on OP Stack, Arbitrum Orbit, and zkSync." },
];

const WHY = [
  { title: "We build both ZK and Optimistic", body: "So our advice is not biased by what we can sell." },
  { title: "We benchmark your real workload", body: "Before we recommend an architecture, not after." },
  { title: "Audit and bridge security are launch-blockers", body: "Treated as requirements, not afterthoughts." },
];

const FAQ_ITEMS: FaqItem[] = [
  { q: "ZK vs Optimistic, what actually decides it?", a: "Your throughput target, finality needs, privacy requirements, and how much you want to spend to build. ZK gives faster finality and lower fees at higher build cost. Optimistic gives EVM equivalence and a simpler path to ship. We benchmark your real workload and put the recommendation in writing." },
  { q: "Can you migrate our existing contracts to L2?", a: "Yes. EVM-equivalent rollups let most contracts move with little change. We review your contracts and integrations first and tell you what, if anything, needs to be reworked before migration." },
  { q: "How secure is the bridge?", a: "We treat the bridge as a launch-blocker. Deposit and withdraw flows are designed for safety first and audited before mainnet, because bridges are where most L2 value is lost." },
  { q: "Do we run our own sequencer or use a shared one?", a: "It depends on the control and revenue you want versus the operational load you can carry. We work through the tradeoff in the strategy call and design either a custom sequencer or a shared setup to match." },
  { q: "What is the timeline for a production rollup?", a: "A framework-based deployment can reach a working testnet in a few weeks. A custom rollup build takes longer. You get a written timeline in the scaling audit before any build starts." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Layer 2 development",
  serviceType: "Layer 2 rollup development",
  description:
    "ZK and Optimistic rollup development, custom sequencers, L2 to L1 bridges, and data availability setup for teams that have outgrown a single chain, with workload benchmarking before any architecture decision.",
  provider: { "@type": "Organization", name: "LBM Solutions", url: "https://www.lbmsolution.com" },
  url: "https://www.lbmsolution.com/lp/layer-2-development",
  areaServed: "Worldwide",
};

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="label">
      <span className="mono i">{index}</span>
      <span className="mono">{title}</span>
      <span className="rule" />
    </div>
  );
}

function Nv({ children }: { children: React.ReactNode }) {
  return (
    <span className="nv" title={NV}>
      {children}
    </span>
  );
}

export default function Layer2Development() {
  return (
    <LpShell cta={CTA}>
      {/* HERO + lead form. This hub leads with the buyer's decision, not a problem. */}
      <section className="lp-hero bg-host">
        <Backdrop motif="hero" />
        <LpBackground variant="aurora" />
        <div className="wrap">
          <div>
            <div className="kick mono">
              <span>
                <span className="acc"></span> Layer 2 development <span className="acc"></span>
              </span>
            </div>
            <h1>
              Scale your dApp with the <span className="pp">right rollup</span>, without betting on the wrong one
            </h1>
            <p className="sub">
              ZK or Optimistic, custom or off-the-shelf. We build the Layer 2 that matches your throughput, cost, and
              security needs. For teams that have outgrown a single chain.
            </p>
            <p className="reassure">
              We will tell you which rollup fits, even if it is not the one you expected. 30 minutes. Talk to an L2
              engineer, not a salesperson.
            </p>
          </div>

          <LeadForm
            source="layer-2-development"
            submitLabel={CTA}
            fields={[
              { name: "setup", label: "Current setup", options: ["Single chain", "Existing L2", "Pre-launch"] },
              {
                name: "volume",
                label: "Monthly transaction volume",
                options: ["Under 100K", "100K to 1M", "1M to 10M", "10M+"],
              },
            ]}
            footnote="An L2 engineer replies within 1 business day. No sales pressure."
            trust={
              <>
                <div className="logos">
                  <span className="src">
                    <Nv>DeFi, GameFi, and consumer dApp teams, US, UAE, Singapore</Nv>
                  </span>
                </div>
                <blockquote>
                  <Nv>We build the rollup, the bridge, and the tooling as one system, so your users get low fees without trusting an unproven stack.</Nv>
                  <span className="who">
                    <Nv>LBM Solutions, scaling engineering</Nv>
                  </span>
                </blockquote>
              </>
            }
          />
        </div>
      </section>

      {/* Trust strip */}
      <TrackRecord
        stats={[
          { n: "28", suffix: "+", label: "Products launched" },
          { n: "190", suffix: "+", label: "Digital experts" },
          { n: "10", suffix: "+", label: "Years of delivery" },
          { n: "54", suffix: "+", label: "Global clients" },
        ]}
      />

      {/* The decision framework, this page's signature section */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="01" title="The decision framework" />
            <h2 className="h2">
              Which Layer 2 is <span className="g">right for you?</span>
            </h2>
            <div className="tablewrap" style={{ marginTop: 46 }}>
              <table className="pricetable">
                <thead>
                  <tr>
                    <th>If you need</th>
                    <th>Lean toward</th>
                    <th>Next step</th>
                  </tr>
                </thead>
                <tbody>
                  {DECISION.map((row) => (
                    <tr key={row.need}>
                      <td>{row.need}</td>
                      <td>{row.lean}</td>
                      <td>
                        <a href="#lead-form">Book the call ↗</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="secnote">
              Most teams searching for an L2 already know they need one. The hard part is choosing the type. We help you
              decide on the call, then build it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What we build */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="02" title="What we build" />
            <h2 className="h2">
              From rollup to bridge, <span className="g">the whole scaling stack.</span>
            </h2>
            <div className="spec">
              {BUILD.map((b) => (
                <a href="#lead-form" key={b.n}>
                  <span className="sn">{b.n}</span>
                  <span>
                    <span className="st">{b.title}</span>
                    <span className="sd">{b.body}</span>
                  </span>
                  <span className="ar">↗</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why us */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="03" title="Why us" />
            <h2 className="h2">
              Advice you can trust, <span className="g">because we build both.</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              {WHY.map((w) => (
                <div key={w.title}>
                  <h4>
                    <span className="x">→</span> {w.title}
                  </h4>
                  <p>{w.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case studies */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="04" title="Recent work" />
            <h2 className="h2">Recent work</h2>
            <div className="results">
              <div className="card">
                <h3>References available under NDA</h3>
                <p>
                  We share rollup type, region, and real outcomes (fee reduction, migration time, throughput at launch)
                  from deployed L2s on the strategy call.{" "}
                  <Nv>Named and anonymized references are available under NDA.</Nv>{" "}
                  We do not publish numbers we cannot verify.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="05" title="Questions buyers ask" />
            <h2 className="h2">Questions buyers ask</h2>
            <Faq items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final">
        <Backdrop motif="beam" />
        <div className="dots2" aria-hidden="true" />
        <div className="wrap">
          <Reveal>
            <h2>
              Stop guessing which rollup to build. <span className="pp">We will tell you in one call.</span>
            </h2>
            <p>30-minute call with an L2 engineer. An architecture recommendation, no pitch.</p>
            <div className="row">
              <a href="#lead-form" className="btn btn-pri">
                {CTA}
              </a>
            </div>
            <p className="micro">An L2 engineer replies within 1 business day.</p>
          </Reveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </LpShell>
  );
}
