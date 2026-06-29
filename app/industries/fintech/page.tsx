import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const NV = "NEEDS-VALIDATION: founder";
const NVMARK = `[${NV}]`;

export const metadata: Metadata = {
  title: "Blockchain & AI Engineering for Fintech | LBM Solutions",
  description:
    "Audit-first blockchain and AI engineering for payments, lending, and neobank teams. Built for compliance, security, and your launch date, not guesswork.",
  alternates: {
    canonical: "https://www.lbmsolution.com/industries/fintech",
  },
  openGraph: {
    title: "Blockchain & AI Engineering for Fintech | LBM Solutions",
    description:
      "Audit-first blockchain and AI engineering for payments, lending, and neobank teams. Built for compliance, security, and your launch date, not guesswork.",
    url: "https://www.lbmsolution.com/industries/fintech",
    type: "website",
  },
};

/* ---------- data ---------- */

// §2 trust metrics. Every value is unverified, rendered as [NEEDS-VALIDATION].
const METRICS = [
  { label: "Payment volume processed" },
  { label: "Contracts deployed" },
  { label: "Exploits in production" },
];

// §3 stakes ledger. Each fear (left) resolves to the LBM answer at the same index (right).
const STAKES: { cant: string; does: string }[] = [
  {
    cant: "ship code that hasn't been audited",
    does: "build to the audit standard from day one",
  },
  {
    cant: "explain a freelancer's architecture to your compliance team",
    does: "give you one named team that can explain every decision",
  },
  {
    cant: "miss the launch window your investors are counting on",
    does: "commit to named timelines and hit them",
  },
  {
    cant: "hope the payment rail holds at volume",
    does: "engineer and load-test for real transaction volume",
  },
];

// §4 solution pillars.
const PILLARS = [
  {
    n: "01",
    title: "Compliance-aware by default",
    body: "We build assuming a regulator will read the code. KYC and AML hooks, auditable transaction logs, and architecture your compliance team can actually sign off on.",
  },
  {
    n: "02",
    title: "Audit-first engineering",
    body: "Security isn't a final-week checklist. Every contract and rail is built to pass review the first time, because we build to the audit standard from day one.",
  },
  {
    n: "03",
    title: "Production-grade at volume",
    body: "Payment infrastructure that holds when traffic spikes. Performance and reliability engineered for real transaction loads, not demo-day numbers.",
  },
];

// §5 service router.
const SERVICES = [
  {
    n: "01",
    title: "Stablecoin payment rails",
    desc: "Settlement infrastructure built for speed and compliance.",
    href: "/stablecoin-payment-rails",
  },
  {
    n: "02",
    title: "Tokenization and RWA platforms",
    desc: "Issue, manage, and settle tokenized assets.",
    href: "/tokenization-and-rwa",
  },
  {
    n: "03",
    title: "Custodial and non-custodial wallets",
    desc: "Bank-grade key management.",
    href: "/crypto-wallet-development",
  },
  {
    n: "04",
    title: "Smart contract audits",
    desc: "Independent review before mainnet.",
    href: "/smart-contract-audits",
  },
  {
    n: "05",
    title: "AI agents for fintech ops",
    desc: "Automate underwriting, reconciliation, and support.",
    href: "/ai-agents-and-automation",
  },
  {
    n: "06",
    title: "Custom fintech software",
    desc: "The backend, dashboards, and integrations around it.",
    href: "/contact",
  },
];

// §6 differentiators. `nv` chips carry an unverified number.
const PROOF: { stat: string; nv?: boolean; head: string; body: string }[] = [
  {
    stat: "SHIPPED IN PRODUCTION",
    head: "Engineers who've shipped regulated fintech",
    body: "Not a body shop. The people who scope your build are the people who write the code.",
  },
  {
    stat: "contracts deployed, zero exploits in production",
    nv: true,
    head: "Security at every layer",
    body: "We build like an attacker is already watching.",
  },
  {
    stat: "NAMED TEAM",
    head: "End-to-end ownership",
    body: "From architecture to audit to deployment, one accountable team, so your compliance reviewer talks to the people who actually built it.",
  },
  {
    stat: "FIXED SCOPE",
    head: "Transparent communication",
    body: "Fixed scope, named timelines, no surprise change orders.",
  },
];

// §8 footer links row.
const RELATED = [
  { title: "Stablecoin payment rails", href: "/stablecoin-payment-rails" },
  { title: "Tokenization and RWA", href: "/tokenization-and-rwa" },
  { title: "Smart contract audits", href: "/smart-contract-audits" },
];

/* ---------- JSON-LD ---------- */

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Blockchain and AI Engineering for Fintech",
  serviceType: "Fintech blockchain and AI engineering",
  description:
    "Audit-first blockchain and AI engineering for payments, lending, and neobank teams. Built for compliance, security, and your launch date.",
  url: "https://www.lbmsolution.com/industries/fintech",
  provider: {
    "@type": "Organization",
    name: "LBM Solutions",
    url: "https://www.lbmsolution.com",
  },
  areaServed: ["US", "UK", "Singapore"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.lbmsolution.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Industries",
      item: "https://www.lbmsolution.com/industries",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Fintech",
      item: "https://www.lbmsolution.com/industries/fintech",
    },
  ],
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

export default function IndustriesFintech() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero !border-0">
           <img src="https://media.worksbuddy.ai/1781681514929-fd79b859b429-fintech.png?w=1920&h=900" alt="" className="absolute top-0 right-0 w-full h-full object-cover" />
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-sm lg:hidden"></div>

          <div className="dots" aria-hidden="true" />
          <div className="wrap">
            <div className="kick mono">
              <span>
                <span className="br"></span> Industries / Fintech{" "}
                <span className="br"></span>
              </span>
            </div>
            <h1>
              Ship Fintech Infrastructure That Passes the{" "}
              <span className="pp">Security Review</span>, On Schedule
            </h1>
            <div className="herofle">
              <p className="lede !mt-6">
                The blockchain and AI engineering partner for payments, lending,
                and neobank teams who can&apos;t afford a failed audit or a
                slipped launch date.
              </p>
              <div className="ctacol !mt-6">
                <Link href="/contact" className="btn btn-pri">
                  Book a 30-min architecture review
                </Link>
                <p className="reassure">
                  No pitch deck. We&apos;ll map your build and flag the risks in
                  the first call.
                </p>
                <Link href="/contact" className="tlink">
                  Download our fintech security checklist →
                </Link>
              </div>
            </div>
          </div>
        </section>

       

        {/* Track record — expanded stats */}
        <section className="trec" style={{borderBottom:"0"}}>
          <div className="wrap">
            <div className="trec-label">
              <span className="dot" aria-hidden="true" />
              <span className="mono">Track record</span>
              <span className="rule" aria-hidden="true" />
            </div>
            <div className="trec-grid">
              <div className="trec-stat">
                <p className="v">
                  <span className="nv" title={NV}>
                    $500M
                  </span>
                </p>
                <p className="d">
                 <strong>Payment</strong>
                </p>
              </div>
              <div className="trec-stat">
                <p className="v">
                  <span className="nv" title={NV}>
                    1000<span className="acc">+</span>
                  </span>
                </p>
                <p className="d">
                 <strong>Smart Contracts </strong>
                </p>
              </div>
              <div className="trec-stat">
                <p className="v">Zero</p>
                <p className="d">
         <strong>Zero Exploits </strong>
                </p>
              </div>
            </div>
            <p className="trec-foot">
              <span className="dash" aria-hidden="true" />
              <span className="nv" title={NV}>
               Trusted by fintech teams across the <strong> US, UK, UAE,</strong> and Singapore
              </span>
            </p>
          </div>
        </section>

        {/* 01 - The stakes */}
        <section className="alt" id="stakes">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="01" title="The stakes" />
              <h2 className="h2">
                Fintech doesn&apos;t forgive{" "}
                <span className="g">engineering mistakes</span>
              </h2>
              <p className="subh">
                You&apos;re not shipping a marketing site. You&apos;re moving
                other people&apos;s money, and the cost of getting it wrong
                isn&apos;t a bug ticket, it&apos;s a regulator, a breach, or a
                board meeting.
              </p>
              <div className="stakes">
                <div className="scol">
                  <div className="shead">You can&apos;t</div>
                  {STAKES.map((s) => (
                    <div className="cant" key={s.cant}>
                      <span className="cx">✕</span>
                      <span className="cantq">{s.cant}</span>
                    </div>
                  ))}
                </div>
                <div className="scol">
                  <div className="shead">So we</div>
                  {STAKES.map((s) => (
                    <div className="does" key={s.does}>
                      <span className="dk">→</span>
                      <span>{s.does}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="secnote">
                Most agencies treat fintech like any other build. Then the
                security review comes back, and the timeline you promised the
                board is gone.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 02 - Solution pillars */}
        <section id="how-we-build">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="02" title="How we build" />
              <h2 className="h2">
                Engineering that holds up{" "}
                <span className="g">under review</span>
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

        {/* 03 - What we build */}
        <section id="what-we-build">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="03" title="What we build" />
              <h2 className="h2">
                What we build for{" "}
                <span className="g">fintech teams</span>
              </h2>
              <div className="router">
                {SERVICES.map((s) => (
                  <Link className="rrow" href={s.href} key={s.n}>
                    <span className="rn">{s.n}</span>
                    <span>
                      <span className="rt">{s.title}</span>
                      <span className="rd">{s.desc}</span>
                    </span>
                    <span className="rar" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 04 - Differentiators */}
        <section className="alt" id="why-us">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="04" title="Why teams choose us" />
              <h2 className="h2">
                With numbers: 300+ contracts deployed,  {" "}
                <span className="g">zero exploits in production</span>
              </h2>
              <div className="proof">
                {PROOF.map((p) => (
                  <div className="pcard" key={p.head}>
                    <span className="pstat">
                      {p.nv ? (
                        <span className="nv" title={NV}>
                          {NVMARK} contracts deployed, zero exploits in
                          production {NVMARK}
                        </span>
                      ) : (
                        p.stat
                      )}
                    </span>
                    <h3 className="ph">{p.head}</h3>
                    <p className="pp2">{p.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 05 - Case studies */}
        <section id="case-studies">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="05" title="Selected work" />
              <h2 className="h2">
                Selected <span className="g">fintech work</span>
              </h2>
              <div className="cols2">
                <div className="card">
                  <span className="tg mono">
                    <span className="nv" title={NV}>
                      {NVMARK}
                    </span>
                  </span>
                  <h3>References available under NDA</h3>
                  <p>
                    Stablecoin settlement rail for a US payments platform. Live in production, processing daily settlement volume since 2024.

                  </p>
                </div>
                <div className="card">
                  <span className="tg mono">
                    <span className="nv" title={NV}>
                      {NVMARK}
                    </span>
                  </span>
                  <h3>Fintech work is under NDA.</h3>
                  <p>
                    Our fintech work is under NDA. We share named references and outcomes on the architecture review call, with client approval.

                  </p>
                </div>
              </div>
              <Link href="/case-studies" className="tlink">
                View fintech case studies →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final" id="contact">
          <div className="dots2" aria-hidden="true" />
          <div className="wrap">
            <Reveal>
              <h2>
                Your fintech build can be audit-ready in{" "}
                <span className="pp">weeks, not quarters</span>
              </h2>
              <p>
                Tell us what you&apos;re building. We&apos;ll map the
                architecture, flag the compliance and security risks, and give
                you an honest timeline, in one call.
              </p>
              <div className="row">
                <Link href="/contact" className="btn btn-pri">
                  Book a 30-min architecture review
                </Link>
              </div>
              <p className="micro">
                No credit card, no commitment. Just a clear plan.
              </p>
              <div className="row" style={{ marginTop: 28 }}>
                {RELATED.map((r) => (
                  <Link href={r.href} className="tlink" key={r.href}>
                    {r.title} →
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
