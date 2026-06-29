import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const NV = "NEEDS-VALIDATION: founder";

export const metadata: Metadata = {
  title: "AI & Custom Software Engineering for B2B SaaS | LBM Solutions",
  description:
    "Add AI agents, automation, and custom features to your SaaS without derailing your roadmap. Engineering built for scale-ups that need to ship.",
  alternates: {
    canonical: "https://www.lbmsolution.com/industries/b2b-saas",
  },
  openGraph: {
    title: "AI & Custom Software Engineering for B2B SaaS | LBM Solutions",
    description:
      "Add AI agents, automation, and custom features to your SaaS without derailing your roadmap. Engineering built for scale-ups that need to ship.",
    url: "https://www.lbmsolution.com/industries/b2b-saas",
    type: "website",
  },
};

/* ---------- data ---------- */

// §2 trust metrics. Every value is unverified, rendered as [NEEDS-VALIDATION].
const METRICS = [
  { label: "Products shipped" },
  { label: "Engineers" },
  { label: "Embeds with your team in days, not months" },
];

// §3 stakes ledger. Each fear (left) resolves to the LBM answer at the same index (right).
const STAKES: { cant: string; does: string }[] = [
  {
    cant: "pull senior engineers off revenue features to experiment with LLMs",
    does: "build the AI layer in parallel so your core team stays on revenue",
  },
  {
    cant: "wait two quarters to hire and onboard an AI team",
    does: "staff a senior team in days, not two quarters",
  },
  {
    cant: "ship a fragile AI demo that breaks in front of customers",
    does: "ship with evals, fallbacks, and monitoring so it survives real users",
  },
  {
    cant: "hand your codebase to a contractor who disappears at handoff",
    does: "document and hand off clean so your team owns it the day we leave",
  },
];

// §4 solution pillars.
const PILLARS = [
  {
    n: "01",
    title: "We ship in parallel",
    body: "A dedicated team builds the AI layer alongside your roadmap, so your core engineers stay on revenue features.",
  },
  {
    n: "02",
    title: "Production code, not prototypes",
    body: "We build AI features that survive real users, proper evals, fallbacks, and monitoring, not a demo that works once.",
  },
  {
    n: "03",
    title: "We integrate into your stack",
    body: "We work inside your codebase, your conventions, and your CI, and we document everything so your team owns it cleanly at handoff.",
  },
];

// §5 service router. Spec lists 6 services across 4 distinct routes; routes reused as shown.
const SERVICES = [
  {
    n: "01",
    title: "AI agents & automation",
    desc: "Embed agents that handle real workflows in your product.",
    href: "/ai-agents-and-automation",
  },
  {
    n: "02",
    title: "Generative AI features",
    desc: "Copilots, summarization, search, and content tooling.",
    href: "/generative-ai-development",
  },
  {
    n: "03",
    title: "Custom software development",
    desc: "The features your roadmap can't get to.",
    href: "/contact",
  },
  {
    n: "04",
    title: "CRM engineering",
    desc: "Build or extend the CRM your GTM team actually needs.",
    href: "/contact",
  },
  {
    n: "05",
    title: "Internal tooling",
    desc: "Automate the ops work slowing your team down.",
    href: "/contact",
  },
  {
    n: "06",
    title: "Integrations & APIs",
    desc: "Connect your product to the tools your customers use.",
    href: "/contact",
  },
];

// §6 differentiators. The product-builders chip avoids unverified product names.
const PROOF: { stat: string; head: string; body: string }[] = [
  {
    stat: "PRODUCT BUILDERS",
    head: "We're product builders",
    body: "We ship our own SaaS, we understand roadmaps, churn, and shipping under pressure, because we live it.",
  },
  {
    stat: "SENIOR BY DEFAULT",
    head: "Senior by default",
    body: "The engineers who scope your work write the code. No bait-and-switch to juniors after the contract signs.",
  },
  {
    stat: "NO LOCK-IN",
    head: "Clean handoff, no lock-in",
    body: "Documented, tested, and built to your conventions so your team owns it the day we leave.",
  },
  {
    stat: "FIXED SCOPE",
    head: "Fixed scope, named timelines",
    body: "You know what ships and when, before we start.",
  },
];

// §8 footer links row.
const RELATED = [
  { title: "AI agents & automation", href: "/ai-agents-and-automation" },
  { title: "Generative AI features", href: "/generative-ai-development" },
  { title: "Custom software development", href: "/contact" },
];

/* ---------- JSON-LD ---------- */

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI and Custom Software Engineering for B2B SaaS",
  serviceType: "B2B SaaS AI and custom software engineering",
  description:
    "Add AI agents, automation, and custom features to your SaaS without derailing your roadmap. Engineering built for scale-ups that need to ship.",
  url: "https://www.lbmsolution.com/industries/b2b-saas",
  provider: {
    "@type": "Organization",
    name: "LBM Solutions",
    url: "https://www.lbmsolution.com",
  },
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
      name: "B2B SaaS",
      item: "https://www.lbmsolution.com/industries/b2b-saas",
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

export default function IndustriesB2bSaas() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero !border-0">
          <img src="https://media.worksbuddy.ai/1781681611979-39ce84ff4427-b2b.png?w=1920&h=900" alt="" className="absolute top-0 right-0 w-full h-full object-cover" />
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-sm lg:hidden"></div>

          <div className="dots" aria-hidden="true" />
          <div className="wrap">
            <div className="kick mono">
              <span>
                <span className="br"></span> Industries / B2B SaaS{" "}
                <span className="br"></span>
              </span>
            </div>
            <h1 className="b2b_heading">
              Add AI to Your SaaS Without Derailing Your{" "}
              <span className="pp">Roadmap</span>
            </h1>
            <div className="herofle">
              <p className="lede !mt-6">
                The engineering partner for B2B SaaS scale-ups that need AI
                agents, automation, and custom features shipped, without pulling
                your core team off the roadmap.
              </p>
              <div className="ctacol !mt-6">
                <Link href="/contact" className="btn btn-pri">
                  Book a 30-min product engineering call
                </Link>
                <p className="reassure">
                  Bring your roadmap. We&apos;ll show you what we can build in
                  parallel.
                </p>
                <Link href="/contact" className="tlink">
                  See how we scoped an AI feature in 2 weeks →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Track record — expanded stats */}
        <section className="trec" style={{ borderBottom: "0" }}>
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
                    25<span className="acc">+</span>
                  </span>
                </p>
                <p className="d">
                  <strong>Product</strong>
                </p>
              </div>
              <div className="trec-stat">
                <p className="v">
                  <span className="nv" title={NV}>
                    200<span className="acc">+</span>
                  </span>
                </p>
                <p className="d">
                  <strong>Engineers </strong>
                </p>
              </div>
              <div className="trec-stat">
                <p className="v">5<span className="acc"> Days</span></p>
                <p className="d">
                  <strong>Embeds </strong>
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
                Your roadmap is full. Your AI backlog is{" "}
                <span className="g">growing.</span>
              </h2>
              <p className="subh">
                Your customers and your board both want AI in the product. But
                your core team is already underwater on the roadmap, and hiring a
                specialized AI team takes six months you don&apos;t have.
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
                So the AI roadmap sits in the backlog while competitors ship.
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
                AI shipped alongside{" "}
                <span className="g">your roadmap</span>
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
                <span className="g">SaaS teams</span>
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
                Why SaaS teams{" "}
                <span className="g">choose us</span>
              </h2>
              <div className="proof">
                {PROOF.map((p) => (
                  <div className="pcard" key={p.head}>
                    <span className="pstat">{p.stat}</span>
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
                Selected <span className="g">SaaS work</span>
              </h2>
              <div className="cols2">
                <div className="card">
                  <span className="tg mono">AI Feature Delivery · B2B SaaS Scale-up</span>
                  <h3>Scoped in 2 weeks. Shipped in parallel. Zero hours pulled from their core roadmap.</h3>
                  <p>
                    Embedded a dedicated team to ship an AI layer inside the
                    client&apos;s existing stack. Built with evals, fallbacks, and
                    monitoring from day one, integrated into their codebase and CI,
                    documented and handed off clean.
                  </p>
                </div>
                <div className="card">
                  <span className="tg mono">Smart Contract Audit and Remediation · Web3 Protocol</span>
                  <h3>From kickoff to clean report before their launch date.</h3>
                  <p>
                    Full audit of protocol contracts ahead of mainnet launch.
                    Findings ranked by severity, fixes implemented and re-verified,
                    final report delivered for investor and exchange due diligence.
                  </p>
                </div>
              </div>
              <Link href="/case-studies" className="tlink">
                View SaaS case studies →
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
                Ship the AI features your roadmap{" "}
                <span className="pp">can&apos;t reach</span>
              </h2>
              <p>
                Tell us what&apos;s stuck in your backlog. We&apos;ll scope it,
                give you a timeline, and show you how we build alongside your
                team, in one call.
              </p>
              <div className="row">
                <Link href="/contact" className="btn btn-pri">
                  Book a 30-min product engineering call
                </Link>
              </div>
              <p className="micro">
                No commitment. Walk away with a scoped plan either way.
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
