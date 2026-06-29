import type { Metadata } from "next";
import LpShell from "@/components/lp/LpShell";
import TrackRecord from "@/components/lp/TrackRecord";
import LeadForm from "@/components/lp/LeadForm";
import Backdrop from "@/components/Backdrop";
import LpBackground from "@/components/bg/LpBackground";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";

const NV = "NEEDS-VALIDATION: founder";
const CTA = "Book my L1 architecture review";

export const metadata: Metadata = {
  title: "Launch Your Own Layer 1 Blockchain | LBM Solutions",
  description:
    "Custom sovereign chains and appchains on Cosmos SDK and Substrate for funded teams. Real throughput, real validators, a real launch date. Book an L1 architecture review.",
  alternates: { canonical: "https://www.lbmsolution.com/lp/layer-1-blockchain-development" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Launch Your Own Layer 1 Blockchain | LBM Solutions",
    description:
      "Custom sovereign chains and appchains on Cosmos SDK and Substrate for funded teams who need real throughput, real validators, and a real launch date.",
    url: "https://www.lbmsolution.com/lp/layer-1-blockchain-development",
    type: "website",
  },
};

const PILLARS = [
  {
    n: "L1.01",
    title: "Consensus you can defend",
    body: "We pick and tune the consensus model to your security and throughput needs. Cosmos SDK, Substrate, and Tendermint experience, not theory.",
  },
  {
    n: "L1.02",
    title: "Validator-ready from genesis",
    body: "We hand you a chain with a working validator set and onboarding docs. Genesis ceremony and validator runbook included.",
  },
  {
    n: "L1.03",
    title: "Economic security designed in",
    body: "Tokenomics, staking, and slashing modeled before mainnet. We model the attack cost, not just the happy path.",
  },
];

const BUILD = [
  { n: "B.01", title: "Sovereign app-chains", body: "Cosmos SDK chains with custom modules. 10 to 20 weeks." },
  { n: "B.02", title: "Substrate / Polkadot parachains", body: "Runtime plus parachain integration. 12 to 24 weeks." },
  { n: "B.03", title: "Custom consensus layers", body: "Tendermint and BFT tuning for your throughput target." },
  { n: "B.04", title: "Validator and node infrastructure", body: "Genesis, validator set, and monitoring." },
  { n: "B.05", title: "Native tokenomics and staking", body: "Inflation, slashing, and governance baked in." },
  { n: "B.06", title: "Cross-chain connectivity", body: "IBC and bridge readiness from day one." },
];

const PROCESS = [
  { sn: "1", t: "Week 1", title: "Architecture review", body: "Fixed scope plus a chain design doc." },
  { sn: "2", t: "Weeks 2 to 4", title: "Consensus and tokenomics", body: "Your economic security model." },
  { sn: "3", t: "Weeks 5 to 12", title: "Core build", body: "Testnet running." },
  { sn: "4", t: "Weeks 12 to 16", title: "Validator onboarding and audit", body: "Audited testnet and validator set." },
];

const FAQ_ITEMS: FaqItem[] = [
  { q: "How long to go from idea to mainnet?", a: "Most chains reach testnet inside 12 weeks and mainnet in 16 to 28 weeks, depending on consensus and validator scope. You get a written timeline in the architecture review." },
  { q: "Cosmos SDK or Substrate, how do you choose?", a: "It depends on your throughput target, governance needs, and the ecosystem you want to connect to. We work through the tradeoff in the architecture review and put the decision in writing." },
  { q: "Who owns the code and the chain?", a: "You do, from day one. Your repos, your genesis, your IP. NDA on request." },
  { q: "Do you run validators after launch?", a: "We hand you a working validator set and runbook, and we can stay on for monitoring and incident response under a defined SLA agreed in the scope." },
  { q: "How do you handle the audit?", a: "Consensus and economic-security code is audited before mainnet. We schedule the audit into the build, not after it." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Layer 1 blockchain development",
  serviceType: "Layer 1 blockchain development",
  description:
    "Custom sovereign Layer 1 chains and appchains on Cosmos SDK and Substrate, with consensus, validators, tokenomics, and economic security designed before mainnet.",
  provider: { "@type": "Organization", name: "LBM Solutions", url: "https://www.lbmsolution.com" },
  url: "https://www.lbmsolution.com/lp/layer-1-blockchain-development",
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

export default function Layer1BlockchainDevelopment() {
  return (
    <LpShell cta={CTA}>
      {/* HERO + lead form. MESSAGE MATCH: mirror the ad's verb (build/launch/create); fallback "Launch". */}
      <section className="lp-hero bg-host">
        <Backdrop motif="hero" />
        <LpBackground variant="siderays" />
        <div className="wrap">
          <div>
            <div className="kick mono">
              <span>
                <span className="acc"></span> Layer 1 blockchain development <span className="acc"></span>
              </span>
            </div>
            <h1>
              Launch your own <span className="pp">Layer 1 blockchain</span>, production-ready, not a prototype
            </h1>
            <p className="sub">
              Custom sovereign chains and appchains built on Cosmos SDK and Substrate for funded teams who need real
              throughput, real validators, and a real launch date.
            </p>
            <p className="reassure">No NDA needed for the first call. 30 minutes. Talk to an engineer, not a salesperson.</p>
          </div>

          <LeadForm
            source="layer-1-blockchain-development"
            submitLabel={CTA}
            fields={[
              { name: "stage", label: "Project stage", options: ["Idea", "Funded", "Building", "Live"] },
              { name: "budget", label: "Budget range", options: ["Under $100K", "$100K to $300K", "$300K+"] },
            ]}
            footnote="No credit card. No sales pressure. You will hear from an engineer within 1 business day."
            trust={
              <>
                <div className="logos">
                  <span className="src">
                    <Nv>Series A infra teams, US, UAE, Singapore</Nv>
                  </span>
                </div>
                <blockquote>
                  <Nv>We design the consensus, economics, and client software together, so your chain launches with validators and tooling ready on day one.</Nv>
                  <span className="who">
                    <Nv>LBM Solutions, protocol engineering</Nv>
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
          { n: "24", suffix: "+", label: "Products launched" },
          { n: "220", suffix: "+", label: "Digital experts" },
          { n: "10", suffix: "+", label: "Years of delivery" },
          { n: "58", suffix: "+", label: "Global clients" },
        ]}
      />

      {/* Problem-aware framing */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="01" title="The real problem" />
            <h2 className="h2">
              Most blockchain developers <span className="g">have never shipped a Layer 1.</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              <div><h4><span className="x">→</span> Sovereignty is not a bolt-on</h4><p>You cannot bolt sovereignty onto someone else&apos;s chain.</p></div>
              <div><h4><span className="x">→</span> Consensus bugs are forever</h4><p>You cannot risk a consensus bug discovered after mainnet.</p></div>
              <div><h4><span className="x">→</span> ERC-20 is not chain experience</h4><p>You cannot depend on a team that has only ever deployed a token.</p></div>
              <div><h4><span className="x">→</span> Slipped launches cost trust</h4><p>You cannot explain to investors why launch slipped two quarters.</p></div>
            </div>
            <p className="secnote">
              Building your own chain is the most demanding thing in this space. Consensus, validators, tokenomics, and
              economic security all have to be right on day one. There is a way to do this without betting the company on it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Solution pillars */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="02" title="How we de-risk it" />
            <h2 className="h2">
              Three things we get right <span className="g">before your genesis block.</span>
            </h2>
            <div className="practices">
              {PILLARS.map((p) => (
                <div className="practice" key={p.n}>
                  <span className="n">{p.n}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we build */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="03" title="What we build" />
            <h2 className="h2">
              From appchain to mainnet, <span className="g">the whole stack.</span>
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

      {/* Process */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="04" title="The path to mainnet" />
            <h2 className="h2">
              A fixed scope, <span className="g">a visible timeline.</span>
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
            <p className="secnote">Mainnet launch and support begins in week 16 and beyond: live chain plus monitoring.</p>
          </Reveal>
        </div>
      </section>

      {/* Case studies */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="05" title="Recent work" />
            <h2 className="h2">Recent work</h2>
            <div className="results">
              <div className="card">
                <h3>References available under NDA</h3>
                <p>
                  We share chain type, region, and real outcomes (TPS, validator count, uptime) from launched chains on
                  the architecture review. <Nv>Named and anonymized references are available under NDA.</Nv>{" "}
                  We do not publish numbers we cannot verify.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why us */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="06" title="Why us" />
            <h2 className="h2">
              Proof, <span className="g">not adjectives.</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              <div><h4><span className="x">→</span> We have shipped consensus-layer code</h4><p>Not just smart contracts.</p></div>
              <div><h4><span className="x">→</span> Senior engineers only</h4><p>No juniors learning on your genesis block.</p></div>
              <div><h4><span className="x">→</span> Fixed-fee, written scope</h4><p>No it-depends billing.</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="07" title="Questions buyers ask" />
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
              Your chain could be on testnet <span className="pp">in under 12 weeks.</span>
            </h2>
            <p>30-minute call with a consensus engineer. No obligation.</p>
            <div className="row">
              <a href="#lead-form" className="btn btn-pri">
                {CTA}
              </a>
            </div>
            <p className="micro">No NDA needed for the first call.</p>
          </Reveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </LpShell>
  );
}
