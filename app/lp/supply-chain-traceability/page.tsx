import type { Metadata } from "next";
import LpShell from "@/components/lp/LpShell";
import TrackRecord from "@/components/lp/TrackRecord";
import LeadForm from "@/components/lp/LeadForm";
import Backdrop from "@/components/Backdrop";
import LpBackground from "@/components/bg/LpBackground";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";

const NV = "NEEDS-VALIDATION: founder";
const CTA = "Book a traceability workshop";

export const metadata: Metadata = {
  title: "Blockchain Supply Chain Traceability | LBM Solutions",
  description:
    "Prove where every product came from. End-to-end traceability that makes recalls faster, counterfeits visible, and audits painless. Book a traceability workshop.",
  alternates: { canonical: "https://www.lbmsolution.com/lp/supply-chain-traceability" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Blockchain Supply Chain Traceability | LBM Solutions",
    description:
      "End-to-end traceability that makes recalls faster, counterfeits visible, and audits painless. From raw material to shelf, every step verifiable.",
    url: "https://www.lbmsolution.com/lp/supply-chain-traceability",
    type: "website",
  },
};

const OUTCOMES = [
  { n: "O.01", title: "Recalls in hours, not weeks", body: "Trace an affected batch instantly and scope exactly which products are involved." },
  { n: "O.02", title: "Counterfeits exposed", body: "Every genuine item is verifiable, so fakes have nowhere to hide." },
  { n: "O.03", title: "Audits that take minutes", body: "An immutable, shareable record replaces the document hunt." },
  { n: "O.04", title: "Provable origin and ESG claims", body: "Back up ethically sourced with data, not a marketing line." },
  { n: "O.05", title: "Less dispute, more trust", body: "Partners see the same single record, so there is nothing to reconcile." },
];

const HOWITWORKS = [
  { n: "H.01", title: "Every step is recorded", body: "Source, process, ship, and receive are captured as the product moves." },
  { n: "H.02", title: "The record cannot be altered", body: "Once a step is written, it is locked. No quiet edits after the fact." },
  { n: "H.03", title: "Everyone sees the same truth", body: "Suppliers, logistics, and retailers read one shared record. No reconciliation." },
  { n: "H.04", title: "A scan reveals the full history", body: "A QR or NFC scan opens the complete, verified journey of any item." },
];

const BUILD = [
  { n: "B.01", title: "Provenance tracking", body: "Origin-to-shelf history for every item." },
  { n: "B.02", title: "Batch and lot traceability", body: "Instant recall scoping down to the lot." },
  { n: "B.03", title: "Anti-counterfeit verification", body: "QR and NFC authenticity checks." },
  { n: "B.04", title: "Partner network onboarding", body: "Suppliers, logistics, and retailers on one ledger." },
  { n: "B.05", title: "IoT and ERP integration", body: "Pull data from sensors and your existing systems." },
  { n: "B.06", title: "Consumer-facing verification", body: "Scan-to-verify for your end customers." },
];

const INDUSTRIES = [
  "Food and beverage",
  "Pharmaceuticals",
  "Luxury goods",
  "Manufacturing",
  "Agriculture",
  "Automotive parts",
];

const PROCESS = [
  { sn: "1", t: "Week 1", title: "Use-case workshop", body: "Mapped supply chain plus an ROI estimate." },
  { sn: "2", t: "Weeks 2 to 4", title: "Pilot design", body: "Scope, partner, and integration plan." },
  { sn: "3", t: "Weeks 5 to 12", title: "Pilot build", body: "Live traceability on one product line." },
  { sn: "4", t: "Weeks 12 to 16", title: "Validate and measure", body: "Measured outcomes against the ROI estimate." },
];

const FAQ_ITEMS: FaqItem[] = [
  { q: "Do our suppliers need to use blockchain too?", a: "No. Suppliers interact through simple web forms, a scan app, or a direct feed from their existing system. The shared ledger runs underneath. Onboarding is designed to take minimal effort on their side." },
  { q: "How fast can we run a pilot?", a: "Most pilots go live on one product line inside 8 to 12 weeks after the use-case workshop, depending on how many partners and systems we integrate. You get a written timeline in the workshop." },
  { q: "Does this integrate with our ERP and IoT?", a: "Yes. Integration comes first. We pull data from your ERP, warehouse systems, and IoT sensors so the record builds from data you already capture, not double entry." },
  { q: "How does it actually stop counterfeits?", a: "Each genuine item carries a unique, verifiable identity tied to its recorded history. A QR or NFC scan confirms whether an item is authentic and where it came from, so a fake cannot present a valid record." },
  { q: "What ROI do similar companies see?", a: "It depends on your sector and where your current pain sits, such as recall cost, counterfeit losses, or audit time. We estimate the ROI for your specific chain during the workshop. We do not publish numbers we cannot verify." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Supply chain traceability",
  serviceType: "Supply chain traceability",
  description:
    "End-to-end supply chain traceability that makes recalls faster, exposes counterfeits, and turns audits into minutes, with provenance recorded on a shared, tamper-proof ledger.",
  provider: { "@type": "Organization", name: "LBM Solutions", url: "https://www.lbmsolution.com" },
  url: "https://www.lbmsolution.com/lp/supply-chain-traceability",
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

export default function SupplyChainTraceability() {
  return (
    <LpShell cta={CTA}>
      {/* HERO + lead form. Outcome-led for an ops/compliance buyer; tech minimized. */}
      <section className="lp-hero bg-host">
        <Backdrop motif="hero" />
        <LpBackground variant="silk" />
        <div className="wrap">
          <div>
            <div className="kick mono">
              <span>
                <span className="acc"></span> Supply chain traceability <span className="acc"></span>
              </span>
            </div>
            <h1>
              Prove where every product came from, <span className="pp">instantly, and beyond dispute</span>
            </h1>
            <p className="sub">
              End-to-end traceability that makes recalls faster, counterfeits visible, and audits painless. From raw
              material to shelf, every step is verifiable.
            </p>
            <p className="reassure">A 45-minute workshop. We map your supply chain and show where traceability pays off. Free, no obligation.</p>
          </div>

          <LeadForm
            source="supply-chain-traceability"
            submitLabel={CTA}
            fields={[
              { name: "industry", label: "Industry", options: ["Food", "Pharma", "Luxury", "Manufacturing", "Other"] },
              { name: "company", label: "Company size", options: ["Under 250 staff", "250 to 5,000", "5,000+"] },
              { name: "goal", label: "Main goal", options: ["Recalls", "Counterfeits", "Compliance", "ESG"] },
            ]}
            footnote="A specialist responds within 1 business day. No sales pressure."
            trust={
              <>
                <div className="logos">
                  <span className="src">
                    <Nv>Food, pharma, luxury, and manufacturing teams across the US, UK, UAE, and Singapore</Nv>
                  </span>
                </div>
                <blockquote>
                  <Nv>We digitize the chain of custody end to end, so a recall or audit becomes a query instead of a fire drill.</Nv>
                  <span className="who">
                    <Nv>LBM Solutions, traceability team</Nv>
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
          { n: "29", suffix: "+", label: "Products launched" },
          { n: "10", suffix: "+", label: "Years of delivery" },
          { n: "35", suffix: "+", label: "Industry domains served" },
          { n: "49", suffix: "+", label: "Global clients" },
        ]}
      />

      {/* Outcomes block (signature section, lead with ROI) */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="01" title="What it does for the business" />
            <h2 className="h2">
              What traceability does <span className="g">for your business.</span>
            </h2>
            <div className="practices">
              {OUTCOMES.map((o) => (
                <div className="practice" key={o.n}>
                  <span className="n">{o.n}</span>
                  <h3>{o.title}</h3>
                  <p>{o.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem (operations-framed) */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="02" title="The real problem" />
            <h2 className="h2">
              When something goes wrong, <span className="g">can you trace it in minutes?</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              <div><h4><span className="x">→</span> Slow, expensive recalls</h4><p>Paper trails and disconnected systems make recalls slow and costly.</p></div>
              <div><h4><span className="x">→</span> Counterfeits slip in</h4><p>Fakes get through because origin cannot be proven.</p></div>
              <div><h4><span className="x">→</span> Records that disagree</h4><p>Partners keep separate records that never quite match.</p></div>
              <div><h4><span className="x">→</span> Claims you cannot back</h4><p>Sustainably sourced is a claim you cannot actually prove.</p></div>
            </div>
            <p className="secnote">
              The cost is not just the incident. It is the time, the disputes, and the trust you lose every time you
              cannot answer a simple question fast: where did this come from?
            </p>
          </Reveal>
        </div>
      </section>

      {/* How it works (tech, kept simple) */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="03" title="How it works" />
            <h2 className="h2">
              One shared record <span className="g">everyone can trust.</span>
            </h2>
            <div className="practices">
              {HOWITWORKS.map((h) => (
                <div className="practice" key={h.n}>
                  <span className="n">{h.n}</span>
                  <h3>{h.title}</h3>
                  <p>{h.body}</p>
                </div>
              ))}
            </div>
            <p className="secnote">
              The shared record runs on enterprise blockchain. That is the how, not the headline. See the{" "}
              <a href="/lp/enterprise-blockchain-development">enterprise blockchain development</a> page for the technical detail.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What we build */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="04" title="What we build" />
            <h2 className="h2">
              From provenance to the shelf scan, <span className="g">the whole system.</span>
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

      {/* Industries */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="05" title="Industries we serve" />
            <h2 className="h2">
              Built for regulated <span className="g">and high-value supply chains.</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              {INDUSTRIES.map((ind) => (
                <div key={ind}><h4><span className="x">→</span> {ind}</h4></div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="06" title="How we get you there" />
            <h2 className="h2">
              Prove value on one line, <span className="g">then scale.</span>
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
            <p className="secnote">Scale (week 16 and beyond): roll out across product lines and partners once the pilot proves its numbers.</p>
          </Reveal>
        </div>
      </section>

      {/* Case studies */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="07" title="Recent work" />
            <h2 className="h2">Recent work</h2>
            <div className="results">
              <div className="card">
                <h3>References available under NDA</h3>
                <p>
                  We share sector, region, and real outcomes (recall time cut, counterfeit reduction, audit time) from
                  delivered programs on the workshop call. <Nv>Named and anonymized references are available under NDA.</Nv>{" "}
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
            <SectionLabel index="08" title="Why us" />
            <h2 className="h2">
              Outcome first, <span className="g">technology second.</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              <div><h4><span className="x">→</span> We start with your ROI, not the tech</h4><p>The pilot is designed to prove value fast.</p></div>
              <div><h4><span className="x">→</span> Integration-first</h4><p>Works with your ERP, IoT, and your partners&apos; systems.</p></div>
              <div><h4><span className="x">→</span> Production-grade</h4><p>Built to scale beyond the pilot, not a demo.</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="09" title="Questions buyers ask" />
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
              Turn we think it came from there into <span className="pp">we can prove it.</span>
            </h2>
            <p>A free 45-minute session. We map your chain and the ROI. No obligation.</p>
            <div className="row">
              <a href="#lead-form" className="btn btn-pri">
                {CTA}
              </a>
            </div>
            <p className="micro">A specialist responds within 1 business day.</p>
          </Reveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </LpShell>
  );
}
