import type { Metadata } from "next";
import LpShell from "@/components/lp/LpShell";
import TrackRecord from "@/components/lp/TrackRecord";
import LeadForm from "@/components/lp/LeadForm";
import Backdrop from "@/components/Backdrop";
import LpBackground from "@/components/bg/LpBackground";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";

const NV = "NEEDS-VALIDATION: founder";
const CTA = "Get my oracle integration quote";

export const metadata: Metadata = {
  title: "Oracle Integration for Smart Contracts | LBM Solutions",
  description:
    "Chainlink and multi-oracle integration done right: reliable price feeds, VRF randomness, and external data, hardened against the manipulation that drains protocols. Get a scoped quote.",
  alternates: { canonical: "https://www.lbmsolution.com/lp/oracle-integration" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Oracle Integration for Smart Contracts | LBM Solutions",
    description:
      "Chainlink and multi-oracle integration done right: reliable price feeds, VRF randomness, and external data, hardened against manipulation. Get a scoped quote.",
    url: "https://www.lbmsolution.com/lp/oracle-integration",
    type: "website",
  },
};

const USE_CASES = [
  { uc: "Your DeFi protocol needs prices", we: "Price feeds (Chainlink Data Feeds), manipulation-resistant" },
  { uc: "Your game or lottery needs fairness", we: "Verifiable randomness (Chainlink VRF)" },
  { uc: "Your contract reacts to events", we: "Automation and keepers (time and condition triggers)" },
  { uc: "You need off-chain API data on-chain", we: "Any API to on-chain (custom external adapters)" },
  { uc: "You need cross-chain data", we: "CCIP and cross-chain messaging" },
  { uc: "You back assets and need proof", we: "Proof-of-reserves feeds for backed assets" },
];

const DANGERS = [
  { title: "Price manipulation", body: "Single-source feeds get gamed. We use aggregated, decentralized data." },
  { title: "Stale data", body: "We add heartbeat and deviation checks so your contract never trusts an old price." },
  { title: "Bad randomness", body: "Pseudo-random is exploitable. We use verifiable randomness." },
  { title: "No fallback", body: "We design for oracle failure, not just the happy path." },
];

const ORACLES = ["Chainlink", "Pyth", "API3", "Chronicle", "UMA"];

const PROCESS = [
  { sn: "1", t: "Days 1 to 3", title: "Data scoping", body: "What data, what frequency, what risk, then a quote." },
  { sn: "2", t: "Week 1", title: "Integration design", body: "Oracle choice plus safety mechanisms." },
  { sn: "3", t: "Weeks 2 to 4", title: "Build and test", body: "Integrated and tested on testnet." },
  { sn: "4", t: "Weeks 4 to 5", title: "Audit", body: "Integration reviewed for manipulation vectors." },
];

const FAQ_ITEMS: FaqItem[] = [
  { q: "Which oracle should we use?", a: "It depends on your latency, cost, and security needs. We are oracle-agnostic and pick the right provider for your use case, then put the decision in writing in the integration design." },
  { q: "How do you prevent price manipulation?", a: "We use aggregated, decentralized data instead of single-source feeds, and we add heartbeat and deviation checks so your contract rejects stale or anomalous prices. The integration is reviewed for manipulation vectors before mainnet." },
  { q: "Can you get any API on-chain?", a: "Yes. For data that no off-the-shelf feed provides, we build custom external adapters that bring an API on-chain in a verifiable, fault-tolerant way." },
  { q: "Is the integration audited?", a: "Yes. We review the integration itself for manipulation and failure modes, not just the surrounding contract, and schedule that review into the build rather than after it." },
  { q: "What does it cost to run feeds ongoing?", a: "Ongoing cost depends on the oracle, the number of feeds, and update frequency. We model the running cost during data scoping so there are no surprises after launch." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Oracle integration",
  serviceType: "Blockchain oracle integration",
  description:
    "Chainlink and multi-oracle integration for smart contracts: reliable price feeds, VRF randomness, automation, and external data, hardened against manipulation and audited before mainnet.",
  provider: { "@type": "Organization", name: "LBM Solutions", url: "https://www.lbmsolution.com" },
  url: "https://www.lbmsolution.com/lp/oracle-integration",
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

export default function OracleIntegration() {
  return (
    <LpShell cta={CTA}>
      {/* HERO + lead form. MESSAGE MATCH: mirror the ad's verb (integrate/connect); fallback "Connect". */}
      <section className="lp-hero bg-host">
        <Backdrop motif="hero" />
        <LpBackground variant="aurora" />
        <div className="wrap">
          <div>
            <div className="kick mono">
              <span>
                <span className="acc"></span> Oracle integration <span className="acc"></span>
              </span>
            </div>
            <h1>
              Connect your smart contracts to <span className="pp">real-world data</span>, safely
            </h1>
            <p className="sub">
              Chainlink and multi-oracle integration done right: reliable price feeds, VRF randomness, and external data,
              hardened against the manipulation that drains protocols.
            </p>
            <p className="reassure">We will scope your data needs and quote it, usually within 1 business day. Talk to an engineer, not a salesperson.</p>
          </div>

          <LeadForm
            source="oracle-integration"
            submitLabel={CTA}
            fields={[
              { name: "data", label: "Data you need", options: ["Price feeds", "Randomness", "Automation", "API data", "Several of these"] },
              { name: "chain", label: "Chain", options: ["Ethereum", "Layer 2", "Cosmos", "Solana", "Other"] },
            ]}
            footnote="No credit card. No sales pressure. An engineer replies within 1 business day."
            trust={
              <>
                <div className="logos">
                  <span className="src">
                    <Nv>Chainlink, Pyth, and API3 integrations across DeFi, GameFi, and RWA</Nv>
                  </span>
                </div>
                <blockquote>
                  <Nv>We integrate the right data sources for your use case and harden the feed path, so a bad price or stale update cannot drain your protocol.</Nv>
                  <span className="who">
                    <Nv>LBM Solutions, oracle engineering</Nv>
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
          { n: "27", suffix: "+", label: "Products launched" },
          { n: "195", suffix: "+", label: "Digital experts" },
          { n: "33", suffix: "+", label: "Industry domains served" },
          { n: "51", suffix: "+", label: "Global clients" },
        ]}
      />

      {/* SIGNATURE SECTION: organized by use case */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="01" title="Start from your use case" />
            <h2 className="h2">
              What does your contract <span className="g">need from the real world?</span>
            </h2>
            <div className="tablewrap" style={{ marginTop: 46 }}>
              <table className="pricetable">
                <thead>
                  <tr><th>Your use case</th><th>What we integrate</th></tr>
                </thead>
                <tbody>
                  {USE_CASES.map((row) => (
                    <tr key={row.uc}><td>{row.uc}</td><td>{row.we}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The danger */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="02" title="Why this needs experts" />
            <h2 className="h2">
              A bad oracle integration <span className="g">is a drained protocol.</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              {DANGERS.map((d) => (
                <div key={d.title}>
                  <h4><span className="x">→</span> {d.title}</h4>
                  <p>{d.body}</p>
                </div>
              ))}
            </div>
            <p className="secnote">
              The data your contract trusts is your contract&apos;s attack surface. We treat the integration as a security
              problem first, and we design for the case where an oracle goes wrong.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Oracles we work with */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="03" title="Oracles we work with" />
            <h2 className="h2">
              Oracle-agnostic, <span className="g">by design.</span>
            </h2>
            <div className="spec">
              {ORACLES.map((o) => (
                <a href="#lead-form" key={o}>
                  <span className="sn">▣</span>
                  <span>
                    <span className="st">{o}</span>
                    <span className="sd">Integrated and hardened for production.</span>
                  </span>
                  <span className="ar">↗</span>
                </a>
              ))}
            </div>
            <p className="secnote">
              We pick the right oracle for your latency, cost, and security needs, not just Chainlink by default.{" "}
              <Nv>Chainlink, Pyth, API3, and custom feeds are all in scope.</Nv>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="04" title="How the work runs" />
            <h2 className="h2">
              From data scoping <span className="g">to monitored feeds.</span>
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
            <p className="secnote">Mainnet and monitoring begins after the audit: live feeds, watched for staleness and deviation.</p>
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
                  We share use case, region, and real outcomes from shipped integrations on the scoping call, across
                  lending protocols, Web3 games, and RWA platforms.{" "}
                  <Nv>Named and anonymized references are available under NDA.</Nv>{" "}
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
              <div><h4><span className="x">→</span> We harden against manipulation</h4><p>The number one oracle attack vector, designed out from the start.</p></div>
              <div><h4><span className="x">→</span> Oracle-agnostic</h4><p>The right provider for your case, not just Chainlink by default.</p></div>
              <div><h4><span className="x">→</span> Audited integrations</h4><p>The integration is reviewed, not just the contract.</p></div>
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
              Get the real-world data your contract needs, <span className="pp">without the risk.</span>
            </h2>
            <p>A scoped quote within 1 business day. No obligation.</p>
            <div className="row">
              <a href="#lead-form" className="btn btn-pri">
                {CTA}
              </a>
            </div>
            <p className="micro">An engineer replies within 1 business day.</p>
          </Reveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </LpShell>
  );
}
