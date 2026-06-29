import type { Metadata } from "next";
import LpShell from "@/components/lp/LpShell";
import TrackRecord from "@/components/lp/TrackRecord";
import LeadForm from "@/components/lp/LeadForm";
import Backdrop from "@/components/Backdrop";
import LpBackground from "@/components/bg/LpBackground";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";

const NV = "NEEDS-VALIDATION: founder";
const CTA = "Book my appchain design session";

export const metadata: Metadata = {
  title: "Sidechain and Appchain Development | LBM Solutions",
  description:
    "Dedicated sidechains and appchains for products that have outgrown shared networks. Your gas, your throughput, your rules. Book an appchain design session.",
  alternates: { canonical: "https://www.lbmsolution.com/lp/sidechain-and-appchain-development" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Sidechain and Appchain Development | LBM Solutions",
    description:
      "Dedicated sidechains and appchains for products that have outgrown shared networks. Predictable fees, dedicated block space, and economics you control.",
    url: "https://www.lbmsolution.com/lp/sidechain-and-appchain-development",
    type: "website",
  },
};

const STOP = [
  { bad: "Gas spikes you cannot control", good: "Predictable, app-set fees" },
  { bad: "Block space you compete for", good: "Dedicated throughput" },
  { bad: "Network rules you cannot change", good: "Your own governance" },
  { bad: "Congestion at your busiest moment", good: "Headroom you provisioned" },
];

const BUILD = [
  { n: "01", title: "Cosmos SDK appchains", body: "Custom modules, IBC-ready from day one." },
  { n: "02", title: "Polygon Supernets and CDK chains", body: "Polygon-secured appchains for EVM teams." },
  { n: "03", title: "Avalanche subnets", body: "A dedicated subnet with your custom VM." },
  { n: "04", title: "EVM sidechains", body: "Your own EVM chain plus a secure bridge." },
  { n: "05", title: "Custom gas token setup", body: "Users pay fees in your token, not someone else's." },
  { n: "06", title: "Bridge to L1 and L2", body: "Secure asset movement, audited before value flows." },
];

const FIT = [
  { title: "Your fees are eating unit economics", body: "Shared-chain gas is now a line item that grows with usage." },
  { title: "You need guaranteed throughput at peak", body: "Games and high-frequency apps cannot share a congested lane." },
  { title: "You want custom gas or governance", body: "A token-paid fee model or rules a shared chain will never give you." },
  { title: "A shared chain's limits are now yours", body: "You are large enough that the network caps your product." },
];

const PROCESS = [
  { sn: "1", t: "Week 1", title: "Design session", body: "Throughput and fee economics model." },
  { sn: "2", t: "Weeks 2 to 4", title: "Architecture", body: "Chain spec plus bridge design." },
  { sn: "3", t: "Weeks 5 to 14", title: "Build", body: "Testnet appchain running." },
  { sn: "4", t: "Weeks 14 to 18", title: "Audit and bridge hardening", body: "Audited chain and bridge." },
];

const FAQ_ITEMS: FaqItem[] = [
  { q: "Sidechain vs appchain vs L2, what is the difference for me?", a: "A sidechain or appchain is a chain you control: your gas, your throughput, your governance, secured by its own validators or a parent chain. An L2 inherits a base layer's security but shares its rules. We work through which fits your throughput and economics in the design session and put the recommendation in writing." },
  { q: "How is an appchain secured?", a: "It depends on the framework. A Cosmos appchain runs its own validator set, a Polygon CDK or Supernet chain inherits Polygon security, and an Avalanche subnet runs a dedicated validator group. We model the security and the attack cost before we build." },
  { q: "Can users pay gas in our own token?", a: "Yes. A custom gas token is one of the main reasons teams move to an appchain. We set up the fee model so users pay in your token, and we model the economics so it is sustainable." },
  { q: "What does it cost to run ongoing?", a: "Running costs depend on validator count, throughput, and monitoring scope. We give you a written estimate in the design session and can run the chain for you under a defined monthly SLA." },
  { q: "Who maintains it after launch?", a: "You own the chain and the code from day one. You can run it yourself with the runbook we hand you, or we can stay on for monitoring and incident response under a managed-ops agreement." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sidechain and appchain development",
  serviceType: "Sidechain and appchain development",
  description:
    "Dedicated sidechains and appchains on Cosmos SDK, Polygon CDK, and Avalanche, with custom gas tokens, dedicated throughput, audited bridges, and economics modeled before the build.",
  provider: { "@type": "Organization", name: "LBM Solutions", url: "https://www.lbmsolution.com" },
  url: "https://www.lbmsolution.com/lp/sidechain-and-appchain-development",
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

export default function SidechainAndAppchainDevelopment() {
  return (
    <LpShell cta={CTA}>
      {/* HERO + lead form. MESSAGE MATCH: mirror the ad's verb (build/give/own); fallback "Give". */}
      <section className="lp-hero bg-host">
        <Backdrop motif="hero" />
        <LpBackground variant="silk" />
        <div className="wrap">
          <div>
            <div className="kick mono">
              <span>
                <span className="acc"></span> Sidechain and appchain development <span className="acc"></span>
              </span>
            </div>
            <h1>
              Give your dApp its own chain. <span className="pp">Your gas, your throughput, your rules.</span>
            </h1>
            <p className="sub">
              Dedicated sidechains and appchains for products that have outgrown shared networks. Predictable fees,
              dedicated block space, and economics you control.
            </p>
            <p className="reassure">30 minutes. We model your throughput and fee economics live. Talk to an engineer, not a salesperson.</p>
          </div>

          <LeadForm
            source="sidechain-and-appchain-development"
            submitLabel={CTA}
            fields={[
              { name: "reason", label: "Why an appchain", options: ["Fees", "Throughput", "Custom rules", "Not sure"] },
              { name: "volume", label: "Current monthly on-chain volume", options: ["Under $100K", "$100K to $1M", "$1M to $10M", "$10M+"] },
            ]}
            footnote="An engineer replies within 1 business day. No sales pressure."
            trust={
              <>
                <div className="logos">
                  <span className="src">
                    <Nv>Product teams across US, UAE, Singapore</Nv>
                  </span>
                </div>
                <blockquote>
                  <Nv>We match the chain design to your throughput and cost targets, so you launch an appchain you can actually afford to run.</Nv>
                  <span className="who">
                    <Nv>LBM Solutions, infrastructure team</Nv>
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
          { n: "21", suffix: "+", label: "Products launched" },
          { n: "10", suffix: "+", label: "Years of delivery" },
          { n: "31", suffix: "+", label: "Industry domains served" },
          { n: "53", suffix: "+", label: "Global clients" },
        ]}
      />

      {/* Signature section: what you stop depending on */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="01" title="Stop depending on a shared chain" />
            <h2 className="h2">
              Stop letting someone else&apos;s network <span className="g">decide your product&apos;s limits.</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              {STOP.map((s) => (
                <div key={s.bad}>
                  <h4><span className="x">→</span> {s.good}</h4>
                  <p>Instead of {s.bad.toLowerCase()}.</p>
                </div>
              ))}
            </div>
            <p className="secnote">
              When your app outgrows a shared chain, its congestion, its fees, and its rules become your ceiling. An
              appchain gives you sovereignty over throughput and economics without the full weight of running a Layer 1.
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
              The right framework, <span className="g">not our favorite one.</span>
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

      {/* Who this is for: self-qualification */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="03" title="Who this is for" />
            <h2 className="h2">
              An appchain makes sense <span className="g">if any of these is true.</span>
            </h2>
            <div className="practices">
              {FIT.map((f) => (
                <div className="practice" key={f.title}>
                  <span className="n">✓</span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
            <p className="secnote">
              If you are pre-product-market-fit, we will tell you to stay on a shared chain. Honesty over upsell.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="04" title="The path to launch" />
            <h2 className="h2">
              A modeled economy, <span className="g">a visible timeline.</span>
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
            <p className="secnote">Launch and ops begins in week 18 and beyond: live chain plus monitoring.</p>
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
                  We share chain type, region, and real outcomes (peak TPS, fee savings, uptime) from launched appchains
                  on the design session. <Nv>Named and anonymized references are available under NDA.</Nv>{" "}
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
              <div><h4><span className="x">→</span> We model your economics before we build</h4><p>So the chain pays for itself.</p></div>
              <div><h4><span className="x">→</span> Multi-framework by design</h4><p>Cosmos, Polygon CDK, or Avalanche. The right tool, not our favorite tool.</p></div>
              <div><h4><span className="x">→</span> Bridge security audited</h4><p>Audited before any value moves across it.</p></div>
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
              Your product should not be limited <span className="pp">by someone else&apos;s chain.</span>
            </h2>
            <p>30-minute call. We model your economics live. No obligation.</p>
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
