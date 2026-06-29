import type { Metadata } from "next";
import LpShell from "@/components/lp/LpShell";
import TrackRecord from "@/components/lp/TrackRecord";
import LeadForm from "@/components/lp/LeadForm";
import Backdrop from "@/components/Backdrop";
import LpBackground from "@/components/bg/LpBackground";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";

const NV = "NEEDS-VALIDATION: founder";
const CTA = "Book a DID consultation";

export const metadata: Metadata = {
  title: "Decentralized Identity and Verifiable Credentials | LBM Solutions",
  description:
    "Verify who your users are without holding their data. Standards-based decentralized identity (W3C DID/VC), verifiable credentials, and reusable KYC. Book a DID consultation.",
  alternates: { canonical: "https://www.lbmsolution.com/lp/blockchain-identity-did" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Decentralized Identity and Verifiable Credentials | LBM Solutions",
    description:
      "Decentralized identity and verifiable credentials that let users prove what they need to, and nothing more. Privacy for them, compliance for you.",
    url: "https://www.lbmsolution.com/lp/blockchain-identity-did",
    type: "website",
  },
};

const TENSION = [
  { old: "You collect and store personal data", did: "Users hold their own credentials" },
  { old: "You are a honeypot for breaches", did: "Nothing for attackers to steal" },
  { old: "Re-verify users from scratch each time", did: "Reusable, portable credentials" },
  { old: "Privacy and compliance fight each other", did: "Selective disclosure satisfies both" },
];

const CAPABILITIES = [
  { n: "C.01", title: "Prove age without revealing birthdate", body: "Selective disclosure lets a user prove a claim and nothing more." },
  { n: "C.02", title: "Reusable KYC", body: "Verify once, reuse the credential across services." },
  { n: "C.03", title: "Sybil resistance", body: "One real human, one account, for airdrops and governance." },
  { n: "C.04", title: "Credential-gated access", body: "Show membership without exposing identity." },
  { n: "C.05", title: "Compliant onboarding", body: "Meet KYC and AML duties with less stored PII." },
];

const BUILD = [
  { n: "B.01", title: "DID infrastructure", body: "W3C DIDs plus resolvers." },
  { n: "B.02", title: "Verifiable credentials", body: "Issue, hold, and verify on the W3C VC standard." },
  { n: "B.03", title: "Selective disclosure and ZK proofs", body: "Prove a claim, hide the rest." },
  { n: "B.04", title: "Wallet integration", body: "Credential wallets for your users." },
  { n: "B.05", title: "Reusable KYC flows", body: "Integrate KYC providers plus VC issuance." },
  { n: "B.06", title: "Proof of personhood", body: "Sybil resistance for access, airdrops, and voting." },
];

const AUDIENCE = [
  { title: "Fintechs", body: "Compliant onboarding with less PII liability." },
  { title: "Web3 products", body: "Sybil resistance and credential-gating." },
  { title: "Enterprises", body: "Access across partners and suppliers." },
  { title: "Marketplaces and platforms", body: "Stop re-verifying the same users." },
];

const PROCESS = [
  { sn: "1", t: "Week 1", title: "Consultation and mapping", body: "Identity requirements plus a privacy and compliance map." },
  { sn: "2", t: "Weeks 2 to 4", title: "Architecture", body: "DID and VC design plus standards choice." },
  { sn: "3", t: "Weeks 5 to 12", title: "Build", body: "Issuance, verification, and wallet integration." },
  { sn: "4", t: "Weeks 12 to 15", title: "Audit and compliance review", body: "Security plus regulatory check." },
];

const FAQ_ITEMS: FaqItem[] = [
  { q: "What is decentralized identity in practical terms?", a: "Instead of you collecting and storing a user's personal data, the user holds verifiable credentials in their own wallet and presents only the specific claim you need. You verify the claim cryptographically without keeping the underlying data." },
  { q: "How does this help with KYC and AML compliance?", a: "You still meet your verification duties, but you store far less personal data. A user can be verified once and reuse that credential, and you can confirm the verification happened without warehousing the PII that makes you a breach target." },
  { q: "Do users need a crypto wallet?", a: "They need a credential wallet, which we integrate into your product. It does not have to look or feel like a crypto wallet to the end user, and the experience can match your existing onboarding." },
  { q: "Which standards do you build on?", a: "We build on W3C DID and Verifiable Credentials standards rather than a proprietary scheme, so your credentials stay portable and interoperable instead of locking you in." },
  { q: "How does selective disclosure or ZK fit in?", a: "Selective disclosure lets a user reveal one claim, such as being over 18, without exposing their birthdate or the rest of the document. Zero-knowledge proofs extend this to prove a statement is true while revealing none of the underlying data." },
  { q: "Is it audited for compliance?", a: "Yes. We audit for both security and regulatory fit, and the compliance review is scheduled into the build before launch, not bolted on afterward." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Blockchain identity and decentralized ID (DID)",
  serviceType: "Decentralized identity and verifiable credentials development",
  description:
    "Standards-based decentralized identity on W3C DID and Verifiable Credentials, with selective disclosure, reusable KYC, wallet integration, and proof of personhood. Verify users without storing their data.",
  provider: { "@type": "Organization", name: "LBM Solutions", url: "https://www.lbmsolution.com" },
  url: "https://www.lbmsolution.com/lp/blockchain-identity-did",
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

export default function BlockchainIdentityDid() {
  return (
    <LpShell cta={CTA}>
      {/* HERO + lead form. Question-led: open with the buyer's verify-vs-store dilemma. */}
      <section className="lp-hero bg-host">
        <Backdrop motif="hero" />
        <LpBackground variant="siderays-br" />
        <div className="wrap">
          <div>
            <div className="kick mono">
              <span>
                <span className="acc"></span> Blockchain identity and DID <span className="acc"></span>
              </span>
            </div>
            <h1>
              Verify who your users are, <span className="pp">without holding their data</span>
            </h1>
            <p className="sub">
              Decentralized identity and verifiable credentials that let users prove what they need to, and nothing more.
              Privacy for them, compliance for you, less liability for everyone.
            </p>
            <p className="reassure">30 minutes with an identity architect. We will map your verify-versus-store tradeoff.</p>
          </div>

          <LeadForm
            source="blockchain-identity-did"
            submitLabel={CTA}
            fields={[
              { name: "goal", label: "Primary goal", options: ["KYC", "Sybil resistance", "Access control", "Privacy"] },
              { name: "stage", label: "Stage", options: ["Exploring", "Building", "Live"] },
              { name: "company", label: "Company size", options: ["1 to 50", "51 to 250", "250+"] },
            ]}
            footnote="An identity architect responds within 1 business day. No sales pressure."
            trust={
              <>
                <div className="logos">
                  <span className="src">
                    <Nv>Fintech, Web3, and enterprise identity teams</Nv>
                  </span>
                </div>
                <blockquote>
                  <Nv>We design privacy and compliance together and audit for both before launch, so you verify users without becoming the data you have to defend.</Nv>
                  <span className="who">
                    <Nv>LBM Solutions, identity engineering</Nv>
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
          { n: "20", suffix: "+", label: "Identity systems shipped" },
          { n: "10", suffix: "+", label: "Years on identity" },
          { n: "28", suffix: "+", label: "Industry domains served" },
          { n: "55", suffix: "+", label: "Global clients" },
        ]}
      />

      {/* Signature section: tension -> resolution */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="01" title="The tension" />
            <h2 className="h2">
              You need to verify users. <span className="g">You do not want the liability of storing their data.</span>
            </h2>
            <div className="tablewrap" style={{ marginTop: 46 }}>
              <table className="pricetable">
                <thead>
                  <tr>
                    <th>The old way</th>
                    <th>The DID way</th>
                  </tr>
                </thead>
                <tbody>
                  {TENSION.map((row) => (
                    <tr key={row.old}>
                      <td>{row.old}</td>
                      <td>{row.did}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="secnote">
              Selective disclosure resolves the conflict: users prove the one thing you need, you verify it, and you
              never become the honeypot.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="02" title="What you can do with it" />
            <h2 className="h2">
              Verification, <span className="g">minus the data hoard.</span>
            </h2>
            <div className="practices">
              {CAPABILITIES.map((c) => (
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

      {/* What we build */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="03" title="What we build" />
            <h2 className="h2">
              From DIDs to wallets, <span className="g">the whole identity stack.</span>
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

      {/* Who this is for */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="04" title="Who this is for" />
            <h2 className="h2">
              Built for teams that <span className="g">verify users constantly.</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              {AUDIENCE.map((a) => (
                <div key={a.title}>
                  <h4>
                    <span className="x">→</span> {a.title}
                  </h4>
                  <p>{a.body}</p>
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
            <SectionLabel index="05" title="The path to launch" />
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
            <p className="secnote">Launch and support begins in week 15 and beyond: live system plus monitoring.</p>
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
                  We share sector, region, and real outcomes (onboarding time saved, PII storage reduced, Sybil attacks
                  blocked) from shipped identity systems on the consultation.{" "}
                  <Nv>Named and anonymized references are available under NDA.</Nv> We do not publish
                  numbers we cannot verify.
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
              Proof, <span className="g">not adjectives.</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              <div><h4><span className="x">→</span> Standards-based</h4><p>W3C DID and VC, not a proprietary lock-in.</p></div>
              <div><h4><span className="x">→</span> Privacy and compliance designed together</h4><p>Not one at the cost of the other.</p></div>
              <div><h4><span className="x">→</span> Audited both ways</h4><p>For security and for regulatory fit.</p></div>
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
              Verify users, reduce liability, <span className="pp">respect privacy, all at once.</span>
            </h2>
            <p>30-minute call with an identity architect. No obligation.</p>
            <div className="row">
              <a href="#lead-form" className="btn btn-pri">
                {CTA}
              </a>
            </div>
            <p className="micro">An identity architect responds within 1 business day.</p>
          </Reveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </LpShell>
  );
}
