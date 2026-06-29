import type { Metadata } from "next";
import LpShell from "@/components/lp/LpShell";
import TrackRecord from "@/components/lp/TrackRecord";
import LeadForm from "@/components/lp/LeadForm";
import Backdrop from "@/components/Backdrop";
import LpBackground from "@/components/bg/LpBackground";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";

const NV = "NEEDS-VALIDATION: founder";
const CTA = "Get my fixed-fee rollup quote";

export const metadata: Metadata = {
  title: "Optimistic Rollup Development | LBM Solutions",
  description:
    "Launch an EVM-equivalent Layer 2 on the OP Stack or Arbitrum Orbit without rewriting your contracts. Fixed price, fixed timeline. Get a fixed-fee rollup quote.",
  alternates: { canonical: "https://www.lbmsolution.com/lp/optimistic-rollup-development" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Optimistic Rollup Development | LBM Solutions",
    description:
      "EVM-equivalent Layer 2 on the OP Stack and Arbitrum Orbit. Your existing Solidity ships as-is. Fixed price, fixed timeline, written into the contract.",
    url: "https://www.lbmsolution.com/lp/optimistic-rollup-development",
    type: "website",
  },
};

const WINS = [
  {
    n: "OR.01",
    title: "Your code just works",
    body: "EVM-equivalent by design. Your existing Solidity ships as-is. No rewrite, no reaudit of logic you already trust.",
  },
  {
    n: "OR.02",
    title: "Faster to build than ZK",
    body: "Lower complexity and lower cost mean a sooner mainnet date. Optimistic is the pragmatic path when time-to-market is the priority.",
  },
  {
    n: "OR.03",
    title: "Mature, battle-tested tooling",
    body: "OP Stack and Arbitrum Orbit are production frameworks with real ecosystems behind them. You build on proven rails, not a research project.",
  },
];

const BUILD = [
  { n: "B.01", title: "OP Stack rollups", body: "Optimism Superchain-compatible L2s." },
  { n: "B.02", title: "Arbitrum Orbit chains", body: "Custom Orbit L2 and L3 chains." },
  { n: "B.03", title: "Contract migration", body: "Your L1 contracts moved cleanly to L2." },
  { n: "B.04", title: "Custom gas tokens", body: "Let users pay fees in your token." },
  { n: "B.05", title: "Secure bridges", body: "Deposit and withdraw with fraud-proof safety." },
  { n: "B.06", title: "Sequencer and RPC setup", body: "Your own ordering and endpoints." },
];

const PROCESS = [
  { sn: "1", t: "Week 1", title: "Scope and quote", body: "Fixed price locked in writing." },
  { sn: "2", t: "Weeks 2 to 5", title: "Configure and deploy", body: "Testnet rollup live." },
  { sn: "3", t: "Weeks 5 to 8", title: "Bridge and migrate", body: "Contracts on L2, bridge tested." },
  { sn: "4", t: "Weeks 8 to 10", title: "Audit and harden", body: "Audited and monitored." },
];

const FAQ_ITEMS: FaqItem[] = [
  { q: "Will my existing contracts work as-is?", a: "Yes. OP Stack and Arbitrum Orbit are EVM-equivalent, so your compiled Solidity runs on the rollup without changes. We migrate the deployed contracts and verify behavior on testnet before mainnet, so you are not rewriting or re-architecting your application." },
  { q: "How fast can we be on mainnet?", a: "Most framework rollup launches reach testnet inside five weeks and mainnet in about ten, depending on bridge and migration scope. You get a written timeline in the week-one scope and quote, and the date is part of the fixed-fee contract." },
  { q: "OP Stack or Arbitrum Orbit, which is right?", a: "It depends on the ecosystem you want to plug into, whether you need an L2 or L3, and your gas-token and governance needs. We work through the tradeoff in the scope phase and put the recommendation in writing before you commit." },
  { q: "Is the fixed fee really fixed?", a: "Yes. The price and timeline are written into the contract after the week-one scope. If we discover something that changes scope, you approve it before any change to cost. No open-ended billing." },
  { q: "How do you secure the bridge?", a: "Bridge and withdrawal code is audited before mainnet, not after. We treat bridge security as non-negotiable and schedule the audit into the build, then monitor deposits and withdrawals after launch under an agreed SLA." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Optimistic rollup development",
  serviceType: "Optimistic rollup development",
  description:
    "EVM-equivalent Layer 2 rollups on the OP Stack and Arbitrum Orbit, with contract migration, secure bridges, custom gas tokens, and sequencer setup, delivered on a fixed-fee, fixed-timeline contract.",
  provider: { "@type": "Organization", name: "LBM Solutions", url: "https://www.lbmsolution.com" },
  url: "https://www.lbmsolution.com/lp/optimistic-rollup-development",
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

export default function OptimisticRollupDevelopment() {
  return (
    <LpShell cta={CTA}>
      {/* HERO + lead form. MESSAGE MATCH: mirror the ad verb (launch/build/ship); fallback "Launch". */}
      <section className="lp-hero bg-host">
        <Backdrop motif="hero" />
        <LpBackground variant="beams" />
        <div className="wrap">
          <div>
            <div className="kick mono">
              <span>
                <span className="acc"></span> Optimistic rollup development <span className="acc"></span>
              </span>
            </div>
            <h1>
              Launch your <span className="pp">optimistic rollup</span> without rewriting a single contract
            </h1>
            <p className="sub">
              EVM-equivalent Layer 2 on the OP Stack and Arbitrum Orbit. Your existing Solidity ships as-is. For teams
              that need to scale now, not next year.
            </p>
            <p className="reassure">Fixed price, fixed timeline, written into the contract. No scope creep.</p>
          </div>

          <LeadForm
            source="optimistic-rollup-development"
            submitLabel={CTA}
            fields={[
              { name: "launching", label: "What you are launching", options: ["New L2", "Migrating existing dApp", "Not sure"] },
              { name: "window", label: "Target launch window", options: ["Within 3 months", "3 to 6 months", "6 months+"] },
            ]}
            footnote="Fixed-fee quote within 1 business day. No credit card."
            trust={
              <>
                <div className="logos">
                  <span className="src">
                    <Nv>DeFi, consumer, and NFT teams, US, UAE, Singapore</Nv>
                  </span>
                </div>
                <blockquote>
                  <Nv>We scope to a fixed mainnet timeline and ship against it, with fraud proofs and bridges audited before launch.</Nv>
                  <span className="who">
                    <Nv>LBM Solutions, rollup engineering</Nv>
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
          { n: "23", suffix: "+", label: "Products launched" },
          { n: "205", suffix: "+", label: "Digital experts" },
          { n: "10", suffix: "+", label: "Years of delivery" },
          { n: "47", suffix: "+", label: "Global clients" },
        ]}
      />

      {/* Why optimistic wins for you */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="01" title="Why optimistic wins for you" />
            <h2 className="h2">
              Why funded teams pick optimistic <span className="g">to ship fast.</span>
            </h2>
            <div className="practices">
              {WINS.map((p) => (
                <div className="practice" key={p.n}>
                  <span className="n">{p.n}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
            <p className="secnote">
              Optimistic rollups push fees down dramatically against L1, so your users pay a fraction of mainnet gas.
              When time-to-market is the goal, it is the path that gets you live first.
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
              From framework rollup to custom chain, <span className="g">the whole stack.</span>
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

      {/* The launch path */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="03" title="The launch path" />
            <h2 className="h2">
              Most clients are on mainnet <span className="g">in about 10 weeks.</span>
            </h2>
            <div className="steps">
              {PROCESS.map((s) => (
                <div className="step" key={s.sn}>
                  <span className="sn">{s.sn}</span>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                  <span className="t">{s.t}</span>
                </div>
              ))}
            </div>
            <p className="secnote">Mainnet launch and support begins in week 10 and beyond: live rollup plus monitoring.</p>
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
                  We share framework, region, and real outcomes (time to mainnet, fee reduction, migration scope) from
                  launched rollups on the scoping call. <Nv>Named and anonymized references are available under NDA.</Nv>{" "}
                  We do not publish numbers we cannot verify.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why us */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="05" title="Why us" />
            <h2 className="h2">
              Proof, <span className="g">not adjectives.</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              <div><h4><span className="x">→</span> Fixed-fee, no scope creep</h4><p>Written into every contract.</p></div>
              <div><h4><span className="x">→</span> We migrate your contracts</h4><p>You do not rewrite anything.</p></div>
              <div><h4><span className="x">→</span> Bridge security is non-negotiable</h4><p>Audited before mainnet, not after.</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="06" title="Questions buyers ask" />
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
              Your rollup could be on mainnet <span className="pp">in about 10 weeks.</span>
            </h2>
            <p>Quote within 1 business day. Fixed price, fixed date.</p>
            <div className="row">
              <a href="#lead-form" className="btn btn-pri">
                {CTA}
              </a>
            </div>
            <p className="micro">No credit card. No scope creep.</p>
          </Reveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </LpShell>
  );
}
