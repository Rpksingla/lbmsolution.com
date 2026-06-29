import type { Metadata } from "next";
import LpShell from "@/components/lp/LpShell";
import TrackRecord from "@/components/lp/TrackRecord";
import LeadForm from "@/components/lp/LeadForm";
import Backdrop from "@/components/Backdrop";
import LpBackground from "@/components/bg/LpBackground";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";

const NV = "NEEDS-VALIDATION: founder";
const CTA = "Book an enterprise consultation";

export const metadata: Metadata = {
  title: "Enterprise Blockchain Development | LBM Solutions",
  description:
    "Permissioned blockchain on Hyperledger Fabric and enterprise stacks, built to pass compliance, integrate with your systems, and reach production. Book an enterprise consultation.",
  alternates: { canonical: "https://www.lbmsolution.com/lp/enterprise-blockchain-development" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Enterprise Blockchain Development | LBM Solutions",
    description:
      "Permissioned blockchain on Hyperledger Fabric and enterprise stacks, built for privacy, governance, auditability, and integration with the systems you already run.",
    url: "https://www.lbmsolution.com/lp/enterprise-blockchain-development",
    type: "website",
  },
};

const CRITERIA = [
  { req: "Data privacy and permissioning", how: "Channels, private data collections, and role-based access." },
  { req: "Regulatory compliance", how: "Auditable ledger, GDPR-aware design, jurisdiction fit." },
  { req: "Integration with existing systems", how: "APIs into the ERP, CRM, and databases you already use." },
  { req: "Governance and control", how: "Consortium governance model with defined upgrade paths." },
  { req: "Performance at scale", how: "Throughput sized to your real transaction volume." },
  { req: "Total cost of ownership", how: "Transparent build and run economics, written down." },
];

const BUILD = [
  { n: "01", title: "Hyperledger Fabric networks", body: "Permissioned, channel-based privacy." },
  { n: "02", title: "Consortium blockchains", body: "Multi-org governance and onboarding." },
  { n: "03", title: "Private EVM networks", body: "Enterprise Ethereum on Besu or Quorum." },
  { n: "04", title: "System integration", body: "ERP, CRM, and legacy database connectors." },
  { n: "05", title: "Smart contracts and chaincode", body: "Business logic, written to be audited." },
  { n: "06", title: "Identity and access", body: "Integration with your enterprise IAM." },
];

const SECTORS = [
  { n: "01", title: "Finance", body: "Settlement, trade finance, and reconciliation." },
  { n: "02", title: "Supply chain", body: "Provenance and end-to-end traceability." },
  { n: "03", title: "Healthcare", body: "Auditable records and consent management." },
  { n: "04", title: "Government", body: "Registries and transparent records." },
  { n: "05", title: "Insurance", body: "Claims automation and fraud reduction." },
];

const PROCESS = [
  { sn: "1", t: "Weeks 1 to 2", title: "Discovery and requirements", body: "Scoped requirements plus success criteria." },
  { sn: "2", t: "Weeks 3 to 5", title: "Architecture and compliance", body: "Solution doc plus governance model." },
  { sn: "3", t: "Weeks 6 to 14", title: "Pilot build", body: "Working network with real integration." },
  { sn: "4", t: "Weeks 14 to 20", title: "Audit, security, and UAT", body: "Tested, audited, user-accepted." },
];

const FAQ_ITEMS: FaqItem[] = [
  { q: "Hyperledger Fabric or private Ethereum, how do you choose?", a: "It depends on your privacy model, the parties in the network, and the tooling your team already knows. We work through the tradeoff in discovery and put the recommendation in writing before any build begins." },
  { q: "How does this integrate with our existing ERP and systems?", a: "We design integration first. The network connects to your ERP, CRM, and databases through defined APIs, so it fits the systems the business actually runs on rather than a sandbox." },
  { q: "How do you handle compliance and data privacy?", a: "Privacy and compliance are part of the architecture, not an afterthought. We use channels, private data collections, and role-based access, with an auditable ledger and GDPR-aware, jurisdiction-fit design." },
  { q: "Who governs a multi-organization network?", a: "We model the consortium governance up front: who can join, who approves changes, and how upgrades happen. Multi-party networks need those rules defined from day one." },
  { q: "What does ongoing support look like?", a: "Production rollout is backed by a defined, contractual SLA agreed in the scope. You get monitoring, incident response, and a clear escalation path rather than best-effort help." },
  { q: "Who owns the solution and the code?", a: "You do, from day one. Your repos, your network, your IP. NDA available on request." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enterprise blockchain development",
  serviceType: "Enterprise blockchain development",
  description:
    "Permissioned and consortium blockchain on Hyperledger Fabric, Besu, and Quorum, built for privacy, governance, auditability, and integration with existing enterprise systems.",
  provider: { "@type": "Organization", name: "LBM Solutions", url: "https://www.lbmsolution.com" },
  url: "https://www.lbmsolution.com/lp/enterprise-blockchain-development",
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

export default function EnterpriseBlockchainDevelopment() {
  return (
    <LpShell cta={CTA}>
      {/* HERO + lead form */}
      <section className="lp-hero bg-host">
        <Backdrop motif="hero" />
        <LpBackground variant="beams" />
        <div className="wrap">
          <div>
            <div className="kick mono">
              <span>
                <span className="acc"></span> Enterprise blockchain development <span className="acc"></span>
              </span>
            </div>
            <h1>
              Enterprise blockchain that passes <span className="pp">compliance, integration, and the board</span>
            </h1>
            <p className="sub">
              Permissioned blockchain solutions on Hyperledger Fabric and enterprise stacks, built for organizations that
              need privacy, governance, auditability, and integration with the systems you already run.
            </p>
            <p className="reassure">A structured discovery call with a solutions architect. NDA available on request.</p>
          </div>

          <LeadForm
            source="enterprise-blockchain-development"
            submitLabel={CTA}
            fields={[
              { name: "use_case", label: "Use case", options: ["Finance", "Supply chain", "Healthcare", "Government", "Other"] },
              { name: "stage", label: "Stage", options: ["Exploring", "Pilot planned", "Pilot built", "Scaling"] },
              { name: "org_size", label: "Organization size", options: ["Under 250 staff", "250 to 5,000", "5,000+"] },
            ]}
            footnote="A solutions architect responds within 1 business day. NDA available on request."
            trust={
              <>
                <div className="logos">
                  <span className="src">
                    <Nv>Enterprise teams in finance, supply chain, and healthcare</Nv>
                  </span>
                </div>
                <blockquote>
                  <Nv>We connect blockchain to the systems you already run, so a deployment becomes part of your stack rather than a science project.</Nv>
                  <span className="who">
                    <Nv>LBM Solutions, enterprise engineering</Nv>
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
          { n: "26", suffix: "+", label: "Products launched" },
          { n: "10", suffix: "+", label: "Years of delivery" },
          { n: "34", suffix: "+", label: "Industry domains served" },
          { n: "52", suffix: "+", label: "Global clients" },
        ]}
      />

      {/* Enterprise criteria block (signature section) */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="01" title="Your evaluation, answered" />
            <h2 className="h2">
              What your evaluation will check, <span className="g">and how we answer it.</span>
            </h2>
            <div className="tablewrap">
              <table className="pricetable">
                <thead>
                  <tr>
                    <th>Your requirement</th>
                    <th>How we deliver</th>
                  </tr>
                </thead>
                <tbody>
                  {CRITERIA.map((row) => (
                    <tr key={row.req}>
                      <td>{row.req}</td>
                      <td>{row.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem, enterprise-framed */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="02" title="The real problem" />
            <h2 className="h2">
              Most enterprise blockchain pilots <span className="g">never reach production.</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              <div><h4><span className="x">→</span> Built as a demo, not a system</h4><p>A proof of concept that dies in IT review.</p></div>
              <div><h4><span className="x">→</span> No governance model</h4><p>A multi-party network with no rules for who controls it.</p></div>
              <div><h4><span className="x">→</span> Compliance left to the end</h4><p>Treated as an afterthought instead of a design input.</p></div>
              <div><h4><span className="x">→</span> No path to your real systems</h4><p>Nothing connecting the pilot to what the business runs on.</p></div>
            </div>
            <p className="secnote">
              We build for production from day one: a pilot designed to scale, not a proof of concept that stalls in review.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What we build */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="03" title="What we build" />
            <h2 className="h2">
              Permissioned networks, <span className="g">integrated and audited.</span>
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

      {/* Use cases by sector */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="04" title="Use cases by sector" />
            <h2 className="h2">
              Where enterprise blockchain <span className="g">earns its place.</span>
            </h2>
            <div className="practices">
              {SECTORS.map((s) => (
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
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="05" title="The path to production" />
            <h2 className="h2">
              A staged program, <span className="g">scoped and visible.</span>
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
            <p className="secnote">Production rollout and support begins in week 20 and beyond: live network plus an SLA-backed agreement.</p>
          </Reveal>
        </div>
      </section>

      {/* Case studies */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="06" title="Recent work" />
            <h2 className="h2">Recent work</h2>
            <div className="results">
              <div className="card">
                <h3>References available under NDA</h3>
                <p>
                  We share sector, region, and real outcomes from enterprise deployments on the discovery call.{" "}
                  <Nv>Named and anonymized enterprise references are available under NDA.</Nv>{" "}
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
            <SectionLabel index="07" title="Why us" />
            <h2 className="h2">
              Built for review, <span className="g">not for the demo.</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              <div><h4><span className="x">→</span> Production-grade, not pilot-ware</h4><p>We build to pass IT and compliance review.</p></div>
              <div><h4><span className="x">→</span> Integration-first</h4><p>It connects to your stack, not a sandbox.</p></div>
              <div><h4><span className="x">→</span> Governance modeled up front</h4><p>Multi-party networks get rules from day one.</p></div>
              <div><h4><span className="x">→</span> SLA-backed support</h4><p>Defined, contractual, and ongoing.</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="08" title="Questions buyers ask" />
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
              Move from pilot to production <span className="pp">with a partner who has done it before.</span>
            </h2>
            <p>A structured discovery call with a solutions architect. NDA available on request.</p>
            <div className="row">
              <a href="#lead-form" className="btn btn-pri">
                {CTA}
              </a>
            </div>
            <p className="micro">A solutions architect responds within 1 business day.</p>
          </Reveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </LpShell>
  );
}
