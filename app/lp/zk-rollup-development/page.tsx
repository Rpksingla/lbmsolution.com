import type { Metadata } from "next";
import LpShell from "@/components/lp/LpShell";
import LeadForm from "@/components/lp/LeadForm";
import Backdrop from "@/components/Backdrop";
import LpBackground from "@/components/bg/LpBackground";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";
import TrackRecord from "@/components/lp/TrackRecord";

const NV = "NEEDS-VALIDATION: founder";
const CTA = "Request my ZK feasibility assessment";

export const metadata: Metadata = {
  title: "ZK Rollup Development | LBM Solutions",
  description:
    "Validity rollups built by engineers who understand the proving system. PLONK, Groth16, STARKs, and Halo2 work, custom circuits, and audit-first delivery. Request a ZK feasibility assessment.",
  alternates: { canonical: "https://www.lbmsolution.com/lp/zk-rollup-development" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "ZK Rollup Development | LBM Solutions",
    description:
      "Validity rollups with low finality risk and low fees, built by engineers who work at the proving-system layer. Request a ZK feasibility assessment.",
    url: "https://www.lbmsolution.com/lp/zk-rollup-development",
    type: "website",
  },
};

const COMPETENCIES = [
  { n: "ZK.01", title: "Proving systems", body: "PLONK, Groth16, STARKs, and Halo2. We pick the system that fits your constraint count and verification cost, and we can defend the choice in a technical call." },
  { n: "ZK.02", title: "Rollup stacks", body: "Working familiarity with zkSync, Polygon zkEVM, Scroll, and Starknet, so you build on the stack that matches your EVM and tooling needs." },
  { n: "ZK.03", title: "Circuit engineering", body: "Custom circuit design and constraint optimization. The hard part of ZK is the circuit, and that is the work we do." },
];

const WHY_ZK = [
  { h: "Validity, not assumption", p: "No seven-day challenge window. Finality is cryptographic, not optimistic." },
  { h: "Privacy by construction", p: "Prove a statement is true without revealing the data behind it." },
  { h: "Lowest long-run cost", p: "Proof compression beats paying to settle every transaction on L1." },
  { h: "Audit-friendly security", p: "The security model is math you can review, not an assumption you have to trust." },
];

const BUILD = [
  { n: "B.01", title: "zkEVM rollups", body: "EVM-compatible validity rollups for existing Solidity teams." },
  { n: "B.02", title: "App-specific ZK rollups", body: "Custom circuits tuned for one use case and its throughput target." },
  { n: "B.03", title: "ZK bridges", body: "Trust-minimized cross-chain transfers verified by proofs, not multisigs." },
  { n: "B.04", title: "Custom circuits", body: "Constraint-optimized circuits written for your specific logic." },
  { n: "B.05", title: "Prover infrastructure", body: "Proving and verification deployment, sized for your proof volume." },
  { n: "B.06", title: "ZK identity and privacy modules", body: "Selective disclosure and privacy-preserving verification." },
];

const PROCESS = [
  { sn: "1", t: "Week 1", title: "Feasibility assessment", body: "Is ZK right for you, and which stack. Written recommendation." },
  { sn: "2", t: "Weeks 2 to 5", title: "Circuit and architecture design", body: "Spec plus a constraint plan." },
  { sn: "3", t: "Weeks 6 to 16", title: "Build and prove", body: "Working testnet with live proofs." },
  { sn: "4", t: "Weeks 16 to 20", title: "Audit and optimization", body: "Audited circuits and performance tuning." },
];

const WHY_US = [
  { h: "We design circuits, not just deploy templates", p: "Circuit design is the hard part of ZK, and it is the part we do ourselves." },
  { h: "We will talk you out of ZK if it is wrong for you", p: "Honesty over upsell. If an optimistic rollup or an L2 fits better, we say so." },
  { h: "Audit-first", p: "Circuits are reviewed before mainnet, every time, never after." },
];

const FAQ_ITEMS: FaqItem[] = [
  { q: "Do I actually need ZK, or is an optimistic rollup enough?", a: "It depends on your finality, privacy, and cost requirements. ZK gives cryptographic finality with no challenge window and supports privacy, but circuits cost more to build. If an optimistic rollup fits better, we will tell you in the feasibility assessment." },
  { q: "Which proving system do you recommend and why?", a: "It depends on your constraint count, verification cost, and the stack you want to settle on. We work through PLONK, Groth16, STARKs, and Halo2 against your case and put the recommendation in writing." },
  { q: "How long does a custom circuit take to build and audit?", a: "Most app-specific circuits reach a proving testnet inside 16 weeks and complete audit and optimization by week 20, depending on circuit complexity. You get a written timeline in the feasibility assessment." },
  { q: "What does prover infrastructure cost to run?", a: "Proving cost scales with circuit size and proof volume. We size and price the prover deployment as part of the architecture design so there are no surprises at mainnet." },
  { q: "Who owns the circuit IP?", a: "You do, from day one. Your circuits, your repos, your IP. NDA on request." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ZK rollup development",
  serviceType: "ZK rollup development",
  description:
    "Validity rollups, custom ZK circuits, prover infrastructure, and ZK bridges built at the proving-system layer with PLONK, Groth16, STARKs, and Halo2, audited before mainnet.",
  provider: { "@type": "Organization", name: "LBM Solutions", url: "https://www.lbmsolution.com" },
  url: "https://www.lbmsolution.com/lp/zk-rollup-development",
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

export default function ZkRollupDevelopment() {
  return (
    <LpShell cta={CTA}>
      {/* HERO + lead form. Technical-credibility-first: proving system named in the H1. */}
      <section className="lp-hero bg-host">
        <Backdrop motif="hero" />
        <LpBackground variant="threads" />
        <div className="wrap">
          <div>
            <div className="kick mono">
              <span>
                <span className="acc"></span> ZK rollup development <span className="acc"></span>
              </span>
            </div>
            <h1>
              ZK rollups built by engineers who understand the <span className="pp">proving system</span>
            </h1>
            <p className="sub">
              Validity rollups with the lowest finality risk and the lowest fees, designed for teams who need privacy,
              scale, and a security model that holds up under audit.
            </p>
            <p className="reassure">
              Reviewed by a ZK engineer. We will tell you honestly if a ZK rollup is overkill for your case.
            </p>
          </div>

          <LeadForm
            source="zk-rollup-development"
            submitLabel={CTA}
            fields={[
              { name: "usecase", label: "Use case", options: ["Scaling", "Privacy", "Identity", "Other"] },
              { name: "stage", label: "Project stage", options: ["Exploring", "Funded", "Building", "Live"] },
            ]}
            footnote="A ZK engineer replies within 1 business day. No reset, no sales pitch."
            trust={
              <>
                <div className="logos">
                  <span className="src">
                    <Nv>zkSync, Polygon zkEVM, Scroll, and Starknet ecosystems</Nv>
                  </span>
                </div>
                <blockquote>
                  <Nv>We design and audit the circuits ourselves, so your proofs are sound and your costs are predictable before you commit to mainnet.</Nv>
                  <span className="who">
                    <Nv>LBM Solutions, cryptography team</Nv>
                  </span>
                </blockquote>
              </>
            }
          />
        </div>
      </section>

      {/* Credibility-first strip (signature section of this page) */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="01" title="We work at the proving-system layer" />
            <h2 className="h2">
              Not blockchain expertise. <span className="g">Proving-system expertise.</span>
            </h2>
            <div className="practices">
              {COMPETENCIES.map((c) => (
                <div className="practice" key={c.n}>
                  <span className="n">{c.n}</span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Metric strip */}
      <TrackRecord
        stats={[
          { n: "19", suffix: "+", label: "Products launched" },
          { n: "225", suffix: "+", label: "Digital experts" },
          { n: "10", suffix: "+", label: "Years of delivery" },
          { n: "56", suffix: "+", label: "Global clients" },
        ]}
      />

      {/* Why ZK, framed for the technical buyer */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="02" title="Why ZK" />
            <h2 className="h2">
              The case for ZK, <span className="g">made in math.</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              {WHY_ZK.map((w) => (
                <div key={w.h}>
                  <h4><span className="x">→</span> {w.h}</h4>
                  <p>{w.p}</p>
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
            <SectionLabel index="03" title="What we build" />
            <h2 className="h2">
              From custom circuit to live prover, <span className="g">the whole stack.</span>
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
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="04" title="The path to mainnet" />
            <h2 className="h2">
              A written recommendation first, <span className="g">then proofs.</span>
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
            <p className="secnote">Mainnet and prover ops begin in week 20 and beyond: live system plus monitoring.</p>
          </Reveal>
        </div>
      </section>

      {/* Case studies */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="05" title="Recent work" />
            <h2 className="h2">Recent work</h2>
            <div className="results">
              <div className="card">
                <h3>References available under NDA</h3>
                <p>
                  We share use case, region, and real outcomes (proof time, cost reduction, throughput) from shipped ZK
                  systems on the feasibility assessment.{" "}
                  <Nv>Named and anonymized references are available under NDA.</Nv>{" "}
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
            <SectionLabel index="06" title="Why us" />
            <h2 className="h2">
              Proof, <span className="g">not adjectives.</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              {WHY_US.map((w) => (
                <div key={w.h}>
                  <h4><span className="x">→</span> {w.h}</h4>
                  <p>{w.p}</p>
                </div>
              ))}
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
              Find out if a ZK rollup is right for you, <span className="pp">from people who build them.</span>
            </h2>
            <p>An honest technical answer in 1 business day. No pitch.</p>
            <div className="row">
              <a href="#lead-form" className="btn btn-pri">
                {CTA}
              </a>
            </div>
            <p className="micro">Reviewed by a ZK engineer. We will tell you if ZK is overkill for your case.</p>
          </Reveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </LpShell>
  );
}
