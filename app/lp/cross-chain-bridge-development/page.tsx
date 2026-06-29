import type { Metadata } from "next";
import LpShell from "@/components/lp/LpShell";
import TrackRecord from "@/components/lp/TrackRecord";
import LeadForm from "@/components/lp/LeadForm";
import Backdrop from "@/components/Backdrop";
import LpBackground from "@/components/bg/LpBackground";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";

const NV = "NEEDS-VALIDATION: founder";
const CTA = "Book my bridge security review";

export const metadata: Metadata = {
  title: "Cross-Chain Bridge Development | LBM Solutions",
  description:
    "Security-first cross-chain bridges with audited contracts, validated message-passing, and a threat model written before code. Book a bridge security review.",
  alternates: { canonical: "https://www.lbmsolution.com/lp/cross-chain-bridge-development" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Cross-Chain Bridge Development | LBM Solutions",
    description:
      "Security-first cross-chain bridges with audited contracts, validated message-passing, and a threat model written before a line of code.",
    url: "https://www.lbmsolution.com/lp/cross-chain-bridge-development",
    type: "website",
  },
};

const REVERSAL = [
  {
    n: "R.01",
    title: "Threat model first",
    body: "We map every attack surface before we build. The risk picture comes before the quote.",
  },
  {
    n: "R.02",
    title: "Audited message-passing",
    body: "Not just the contracts. The relay and the verification path are reviewed too.",
  },
  {
    n: "R.03",
    title: "No single point of failure",
    body: "Multi-validator or proof-based verification, so one compromised key cannot drain the bridge.",
  },
  {
    n: "R.04",
    title: "Audit before mainnet, always",
    body: "Independent audit is written into the scope. No exceptions, no grading our own homework.",
  },
];

const BUILD = [
  { n: "01", title: "Lock-and-mint bridges", body: "Classic asset bridging, hardened against the known exploit patterns." },
  { n: "02", title: "Burn-and-mint bridges", body: "Native cross-chain tokens with controlled supply across chains." },
  { n: "03", title: "Liquidity network bridges", body: "Fast swaps routed through pools, with slippage and depth controls." },
  { n: "04", title: "ZK and proof-based bridges", body: "Trust-minimized verification for the highest-value flows." },
  { n: "05", title: "Message-passing bridges", body: "Arbitrary cross-chain calls, not just token transfers." },
  { n: "06", title: "Bridge aggregator integration", body: "LayerZero, Wormhole, Axelar, and CCIP when a battle-tested layer fits." },
];

const SECURITY = [
  { n: "01", title: "Verification layer", body: "How messages are proven: multi-sig, light client, or ZK, chosen to match your risk tolerance." },
  { n: "02", title: "Rate limits and circuit breakers", body: "Automatic pause on anomalies so an exploit cannot empty the bridge in one block." },
  { n: "03", title: "Monitoring", body: "On-chain watch with incident alerting, so a problem is seen fast, not after the funds move." },
  { n: "04", title: "Recovery plan", body: "What happens if something goes wrong, defined upfront and agreed in the scope." },
];

const PROCESS = [
  { sn: "1", t: "Week 1", title: "Security architecture review", body: "Threat model plus a design recommendation." },
  { sn: "2", t: "Weeks 2 to 4", title: "Bridge design", body: "A verified architecture spec." },
  { sn: "3", t: "Weeks 5 to 12", title: "Build", body: "Testnet bridge with monitoring." },
  { sn: "4", t: "Weeks 12 to 16", title: "Audit and pen test", body: "Independent audit report." },
];

const FAQ_ITEMS: FaqItem[] = [
  { q: "How do you prevent the exploits that hit other bridges?", a: "We start with a written threat model that maps every attack surface, then design verification, rate limits, and circuit breakers around it. Most bridge hacks trace back to validator-key compromise, unverified messages, or missing pause controls. We close those paths before mainnet and confirm them in an independent audit." },
  { q: "Do you build on LayerZero, Wormhole, or Axelar, or from scratch?", a: "Both. When a battle-tested messaging layer fits your security and cost profile, we integrate it. When you need trust-minimized or custom verification, we build it. We make the call in the security review and put the reasoning in writing." },
  { q: "Is the audit included?", a: "Yes. An independent audit is written into the scope, not sold as an add-on later. We do not grade our own homework." },
  { q: "What happens if there is an incident after launch?", a: "You get a recovery plan defined before mainnet, plus monitoring and circuit breakers that can pause the bridge automatically. We can stay on for incident response under a defined SLA agreed in the scope." },
  { q: "How do you handle cross-chain message verification?", a: "We choose the verification model to match your risk tolerance: multi-sig, light client, or ZK proofs. The relay and verification path are reviewed alongside the contracts, because that is where value actually moves." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cross-chain bridge development",
  serviceType: "Cross-chain bridge development",
  description:
    "Security-first cross-chain bridge development with audited contracts, validated message-passing, multi-validator or proof-based verification, and a threat model written before mainnet.",
  provider: { "@type": "Organization", name: "LBM Solutions", url: "https://www.lbmsolution.com" },
  url: "https://www.lbmsolution.com/lp/cross-chain-bridge-development",
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

export default function CrossChainBridgeDevelopment() {
  return (
    <LpShell cta={CTA}>
      {/* HERO + lead form. MESSAGE MATCH: security-first, names the bridge-hack problem head-on. */}
      <section className="lp-hero bg-host">
        <Backdrop motif="hero" />
        <LpBackground variant="threads" />
        <div className="wrap">
          <div>
            <div className="kick mono">
              <span>
                <span className="acc"></span> Cross-chain bridge development <span className="acc"></span>
              </span>
            </div>
            <h1>
              Bridges are the most-hacked thing in crypto. <span className="pp">Yours won&apos;t be.</span>
            </h1>
            <p className="sub">
              Security-first cross-chain bridges with audited contracts, validated message-passing, and a threat model
              written before a line of code. Interoperability you can defend.
            </p>
            <p className="reassure">
              We threat-model your bridge design on the first call. 30 minutes. Talk to a security engineer, not a salesperson.
            </p>
          </div>

          <LeadForm
            source="cross-chain-bridge-development"
            submitLabel={CTA}
            fields={[
              { name: "bridge_type", label: "Bridge type", options: ["Asset", "Token", "Messaging", "Not sure"] },
              { name: "chains", label: "Chains to connect", options: ["Two chains", "Three to five", "More than five", "Not sure yet"] },
            ]}
            footnote="A security engineer replies within 1 business day. No sales pressure."
            trust={
              <>
                <div className="logos">
                  <span className="src">
                    <Nv>DeFi, token, and GameFi teams, US, UAE, Singapore</Nv>
                  </span>
                </div>
                <blockquote>
                  <Nv>We treat a bridge as security-critical from day one: threat modeling, audits, and monitoring built in, not added after the first incident.</Nv>
                  <span className="who">
                    <Nv>LBM Solutions, security engineering</Nv>
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
          { n: "22", suffix: "+", label: "Products launched" },
          { n: "210", suffix: "+", label: "Digital experts" },
          { n: "32", suffix: "+", label: "Industry domains served" },
          { n: "48", suffix: "+", label: "Global clients" },
        ]}
      />

      {/* Risk reversal, the signature section */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="01" title="The risk, reversed" />
            <h2 className="h2">
              Billions have been lost to bridge exploits. <span className="g">We build like we know that.</span>
            </h2>
            <p className="secnote" style={{ marginTop: 18 }}>
              Bridges hold value in transit, which makes them the single most attacked surface in crypto.{" "}
              <Nv>Cross-chain bridges have repeatedly been among the largest exploits in the industry.</Nv> Every informed buyer knows
              the history. So we design for it from the first day.
            </p>
            <div className="practices" style={{ marginTop: 46 }}>
              {REVERSAL.map((p) => (
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
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="02" title="What we build" />
            <h2 className="h2">
              Every bridge pattern, <span className="g">hardened.</span>
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

      {/* Security model, the differentiator */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="03" title="Our security model" />
            <h2 className="h2">
              How we keep value safe <span className="g">across chains.</span>
            </h2>
            <div className="practices">
              {SECURITY.map((s) => (
                <div className="practice" key={s.n}>
                  <span className="n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
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
              Security at every step, <span className="g">a visible timeline.</span>
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
            <p className="secnote">Mainnet and monitoring begins in week 16 and beyond: live bridge plus ongoing on-chain watch.</p>
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
                  We share bridge type, region, and real outcomes (value moved, incident count, uptime) from shipped
                  bridges on the security review.{" "}
                  <Nv>Named and anonymized references are available under NDA.</Nv> We do not publish
                  numbers we cannot verify.
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
              Security is the product, <span className="g">not a checkbox.</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              <div><h4><span className="x">→</span> Security is the product</h4><p>Not a line item bolted on at the end.</p></div>
              <div><h4><span className="x">→</span> We threat-model before we quote</h4><p>You see the risk picture first, in writing.</p></div>
              <div><h4><span className="x">→</span> Independent audit included</h4><p>We do not grade our own homework.</p></div>
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
              Do not become the next <span className="pp">bridge-hack headline.</span>
            </h2>
            <p>30-minute call with a security engineer. Free threat model on the call. No obligation.</p>
            <div className="row">
              <a href="#lead-form" className="btn btn-pri">
                {CTA}
              </a>
            </div>
            <p className="micro">A security engineer replies within 1 business day.</p>
          </Reveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </LpShell>
  );
}
