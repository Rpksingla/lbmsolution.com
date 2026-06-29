import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";
import Backdrop from "@/components/Backdrop";

const NV = "NEEDS-VALIDATION: founder";

export const metadata: Metadata = {
  title: "Smart Contract Audits for DeFi & Tokenization | LBM Solutions",
  description:
    "Audit-first smart contract security for DeFi and tokenization teams. Senior auditors, multi-tool coverage, fixed-fee scope in writing.",
  alternates: {
    canonical: "https://www.lbmsolution.com/smart-contract-audits",
  },
  openGraph: {
    title: "Smart Contract Audits for DeFi & Tokenization | LBM Solutions",
    description:
      "Audit-first smart contract security for DeFi and tokenization teams. Senior auditors, multi-tool coverage, fixed-fee scope in writing.",
    url: "https://www.lbmsolution.com/smart-contract-audits",
    type: "website",
  },
};

/* ---------- data ---------- */

const PROBLEMS = [
  "A script ran, a PDF came back, and someone called it a review.",
  "A junior did the work. The senior name on the cover never opened the repo.",
  "Findings came back vague. No severity, no reproduction steps, no fix.",
  "The audit shipped on time, and the bug shipped right alongside it.",
];

const LAYERS = [
  {
    n: "01",
    title: "Static analysis",
    body: "Slither and Mythril flag known vulnerability classes and dangerous patterns across the codebase.",
    tool: "Slither · Mythril",
  },
  {
    n: "02",
    title: "Fuzzing and symbolic execution",
    body: "Echidna and Foundry hammer your invariants with inputs your test suite never tried.",
    tool: "Echidna · Foundry",
  },
  {
    n: "03",
    title: "Manual line-by-line review",
    body: "Two senior auditors read every line, focused on business-logic and economic flaws that no tool detects.",
    tool: "Two senior auditors",
  },
  {
    n: "04",
    title: "Formal verification (on request)",
    body: "Certora proofs on the critical paths, where a single wrong assumption drains the protocol.",
    tool: "Certora",
  },
  {
    n: "05",
    title: "Remediation and re-audit",
    body: "We verify each fix and confirm it did not open a new hole.",
    tool: "Fix verification",
  },
];

const REPORT_CONTENTS = [
  "Every finding rated Critical, High, Medium, Low, or Informational.",
  "For each finding: reproduction steps, the impact if exploited, and a concrete recommended fix.",
  "A fix-verification section confirming what was remediated and re-checked.",
  "The exact tools, versions, and commit hashes reviewed, so the audit is reproducible.",
  "The named auditors, their credentials, and our signed attestation.",
];

const SCOPE = [
  {
    n: "01",
    title: "DeFi protocols",
    body: "Lending, AMMs, perpetuals, options, yield aggregators. Multi-contract systems with composability risk.",
    timeline: "3 to 8 weeks",
  },
  {
    n: "02",
    title: "Token contracts",
    body: "ERC-20, BEP-20, SPL, ERC-3643, ERC-721, with vesting, staking, and transfer restrictions.",
    timeline: "1 to 2 weeks",
  },
  {
    n: "03",
    title: "Tokenization platforms",
    body: "Security tokens, real-world asset tokens, transfer-agent integrations. Compliance-aware.",
    timeline: "4 to 8 weeks",
  },
  {
    n: "04",
    title: "Wallet contracts",
    body: "Custodial and non-custodial logic, MPC integrations, account abstraction (ERC-4337).",
    timeline: "2 to 4 weeks",
  },
  {
    n: "05",
    title: "NFT and marketplace contracts",
    body: "Royalty enforcement, auctions, lazy minting.",
    timeline: "2 to 4 weeks",
  },
  {
    n: "06",
    title: "Bridges and L2 contracts",
    body: "Cross-chain messaging and settlement. The highest-risk category we audit.",
    timeline: "4 to 10 weeks",
  },
];

const ENGAGEMENT = [
  {
    sn: "01",
    week: "Week 1, scoping",
    body: "We review the codebase, define scope, map dependencies, and lock a fixed price.",
    get: "A written scope and fixed quote you keep, whether or not you continue.",
  },
  {
    sn: "02",
    week: "Weeks 2 to 3, audit",
    body: "Two senior auditors run the full five-layer pass.",
    get: "A preliminary findings report.",
  },
  {
    sn: "03",
    week: "Week 4, findings review",
    body: "We walk your team through each finding, severity, and fix.",
    get: "A detailed findings document.",
  },
  {
    sn: "04",
    week: "Week 5, fix verification",
    body: "You implement, we re-audit the changes and confirm no regressions.",
    get: "A fix-verification report.",
  },
  {
    sn: "05",
    week: "Week 6, final report",
    body: "Publishable report with our attestation.",
    get: "The final PDF and signed attestation.",
  },
];

const WHY = [
  {
    title: "Senior auditors only",
    body: "Every audit is led by an engineer with 5+ years of Solidity and at least 20 prior audits. We do not put juniors on your code, and their names are on the report.",
  },
  {
    title: "Audit-first, not bolt-on",
    body: "We design for security from week 1. Our pre-mainnet checklist has [NEEDS-VALIDATION: founder] items, each with a documented fix path.",
    nvNote: true,
  },
  {
    title: "Fixed fee, no scope creep",
    body: "Price locks in writing after scoping. If the codebase grows mid-engagement, we re-scope before we continue, not after.",
  },
  {
    title: "Post-launch guarantee",
    body: "If we miss a Critical or High finding and you hit it within 90 days of launch, we audit the fix at no charge and help with the disclosure. It is written into every contract.",
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "How long does an audit take?",
    a: "A standard audit on 5 to 15 contracts runs 2 to 4 weeks: a week of scoping, two to three weeks of audit, plus a remediation cycle. Complex protocols needing formal verification run 4 to 8 weeks. We lock your timeline in writing during scoping.",
  },
  {
    q: "What tools do you use?",
    a: "Slither and Mythril for static analysis, Echidna and Foundry for fuzzing, manual review by two senior auditors, and Certora for formal verification on request. Every report lists the exact tools and versions.",
  },
  {
    q: "Who owns the report?",
    a: "You do. Publish it, share it with investors, or attach it to your launch. We may reference the engagement in our portfolio only with your permission.",
  },
  {
    q: "What if a bug is found after launch?",
    a: "If we miss a Critical or High finding and you hit it within 90 days of launch, we audit the fix at no charge and help with disclosure. This is in every contract.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, a mutual NDA before any code review, covering your code, business model, and investor information.",
  },
  {
    q: "Can you audit Rust or Move?",
    a: "Yes. Solidity on Ethereum, Base, Arbitrum, Optimism, Polygon, and zkSync; Rust on Solana, Near, and Aptos; Move on Sui and Aptos. Move and Rust sometimes run slightly longer due to tooling.",
  },
];

/* ---------- JSON-LD ---------- */

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Smart Contract Audits",
  serviceType: "Smart contract security audit",
  description:
    "Audit-first smart contract security for DeFi and tokenization teams. Senior auditors, multi-tool coverage, fixed-fee scope in writing.",
  url: "https://www.lbmsolution.com/smart-contract-audits",
  provider: {
    "@type": "Organization",
    name: "LBM Solutions",
    url: "https://www.lbmsolution.com",
  },
  areaServed: ["US", "UAE", "Singapore", "UK"],
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
      name: "Blockchain engineering",
      item: "https://www.lbmsolution.com/blockchain-engineering",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Smart contract audits",
      item: "https://www.lbmsolution.com/smart-contract-audits",
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

export default function SmartContractAudits() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero bg-host " style={{ borderBottom: "0" }}>
          <img src="https://media.worksbuddy.ai/1781676472764-d972800057e3-smart.png?w=1920&h=900" alt="" className="absolute top-0 right-0 w-full h-full object-cover" />
           <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-sm lg:hidden"></div>
          {/* <Backdrop motif="scan" /> */}
          <div className="wrap">
            <Reveal>
              <div className="kick">
                <span className="mono">Smart contract audits</span>
              </div>
              <h1 className="h1">
                Ship audited smart contracts before your <br />
                <span className="pp">mainnet date</span>
              </h1>
              <div className="herofle !mt-6 !mb-4 md:!mb-20">
                <p className="lede">
                  Senior auditors, multi-tool coverage, and a fixed-fee scope in
                  writing. We audit Solidity, Rust, and Move contracts for
                  fintech, DeFi, and tokenization teams.
                </p>
                <div className="ctacol !mt-6">
                  <a href="/contact" className="btn btn-pri">
                    Get a fixed-fee audit quote
                  </a>
                  <p className="reassure">
                    Fixed-fee quote in 48 hrs.
                  </p>
                  <a href="#report" className="tlink">
                    See a sample audit report →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Metric strip */}
        {/* <div className="trustbar">
          <div className="in">
            <span className="mono lb">Track record</span>
            <span className="src">
              <span className="nv" title={NV}>
                $500M+
              </span>{" "}
              in TVL secured
            </span>
            <span className="src">
              <span className="nv" title={NV}>
                1000+
              </span>{" "}
              contracts audited since 2019
            </span>
            <span className="src">Zero exploits on code we signed off</span>
            <span className="rt">
              <span className="nv" title={NV}>
                Audits delivered for Series A to C teams across the US, UAE,
                Singapore, and the UK.
              </span>
            </span>
          </div>
        </div> */}

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
              TRUSTED BY PROTOCOL TEAMS ACROSS THE US, UK, SINGAPORE, AND THE UAE 

              </span>
            </p>
          </div>
        </section>

        {/* 01 - Problem */}
        <section id="problem" className="bg-host">
          <Backdrop motif="blueprint" />
          <div className="wrap">
            <Reveal>
              <SectionLabel index="01" title="The problem" />
              <h2 className="h2">
                Most contract failures don&apos;t start in the code.{" "}
                <span className="g">They start in the audit.</span>
              </h2>
              <p className="subh">
                A clean audit report does not mean clean code. It means whoever
                reviewed it ran the usual tools and found nothing. That is not
                the same as security, and the difference is where the money gets
                lost.
              </p>
              <div className="why" style={{ marginTop: 46 }}>
                {PROBLEMS.map((p) => (
                  <div key={p}>
                    <h4>
                      <span className="x">✕</span> {p}
                    </h4>
                  </div>
                ))}
              </div>
              <p className="secnote">
                You are launching with real money on the line. Investors expect
                security. Users expect security. Your name is attached to all of
                it. A weak audit quietly puts the three at risk and you find out
                the hard way. An audit should be done right, not just done. Here
                is what that looks like.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 02 - How we audit */}
        <section id="method" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="02" title="How we audit" />
              <h2 className="h2">
                Five layers, applied to every contract{" "}
                <span className="g">regardless of size</span>
              </h2>
              <p className="subh">
                Tools catch the known patterns fast. Senior engineers catch the
                things tools were never built to see. We run both, in this
                order.
              </p>
              <div className="steps">
                {LAYERS.slice(0, 4).map((l) => (
                  <div className="step" key={l.n}>
                    <span className="sn">{l.n}</span>
                    <h4>{l.title}</h4>
                    <p>{l.body}</p>
                    <span className="t">{l.tool}</span>
                  </div>
                ))}
              </div>
              <div className="steps">
                {LAYERS.slice(4).map((l) => (
                  <div className="step" key={l.n}>
                    <span className="sn">{l.n}</span>
                    <h4>{l.title}</h4>
                    <p>{l.body}</p>
                    <span className="t">{l.tool}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 03 - The report artifact */}
        <section id="report" className="bg-host">
          <Backdrop motif="glow" />
          <div className="wrap">
            <Reveal>
              <SectionLabel index="03" title="The deliverable" />
              <h2 className="h2">
                What you get, <span className="g">not just what we do</span>
              </h2>
              <p className="subh">
                Every engagement ends with a report your team can publish on the
                repo, hand to investors, and attach to the launch post. It
                contains:
              </p>
              <div className="why" style={{ marginTop: 46 }}>
                {REPORT_CONTENTS.map((c) => (
                  <div key={c}>
                    <h4>
                      <span className="x">→</span> {c}
                    </h4>
                  </div>
                ))}
              </div>
              <a href="/contact" className="tlink">
                See a sample audit report →
              </a>
            </Reveal>
          </div>
        </section>

        {/* 04 - What we audit */}
        <section id="scope" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="04" title="What we audit" />
              <h2 className="h2">
                From a single contract{" "}
                <span className="g">to a full protocol</span>
              </h2>
              <p className="subh">
                Solidity, Rust, and Move. Each category lists a typical timeline
                so you can self-qualify before a call.
              </p>
              <div className="practices">
                {SCOPE.map((s) => (
                  <div className="practice" key={s.n}>
                    <span className="n">{s.n}</span>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                    <p className="mono gray" style={{ marginTop: 18 }}>
                      {s.timeline}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 05 - How the engagement runs */}
        <section id="engagement">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="05" title="How the engagement runs" />
              <h2 className="h2">
                Scoping first.{" "}
                <span className="g">Everything else locks after.</span>
              </h2>
              <div className="steps">
                {ENGAGEMENT.slice(0, 4).map((e) => (
                  <div className="step" key={e.sn}>
                    <span className="sn">{e.sn}</span>
                    <h4>{e.week}</h4>
                    <p>{e.body}</p>
                    <span className="t">You get: {e.get}</span>
                  </div>
                ))}
              </div>
              <div className="steps">
                {ENGAGEMENT.slice(4).map((e) => (
                  <div className="step" key={e.sn}>
                    <span className="sn">{e.sn}</span>
                    <h4>{e.week}</h4>
                    <p>{e.body}</p>
                    <span className="t">You get: {e.get}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 06 - Recent audits */}
        <section id="recent" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="06" title="Recent audits" />
              <h2 className="h2">
                A sample of <span className="g">recent work</span>
              </h2>
              <div className="cols2">
                <div className="card">
                  <span className="tg mono">DeFi protocol · Singapore</span>
                  <h3>Pre-mainnet audit before token launch</h3>
                  <p>
                    Pre-mainnet audit on the contracts in 4 weeks before token
                    launch. Multi-tool plus manual review of the full Solidity
                    codebase, surfacing critical and high findings. All
                    remediated, launched on time, with no incidents since.
                  </p>
                </div>
                <div className="card">
                  <span className="tg mono">Tokenization startup · USA</span>
                  <h3>Security-token audit before a Reg D filing</h3>
                  <p>
                    A Reg D security-token contract needed an audit before
                    filing. Six-week review including the regulatory framework
                    and Securitize integration. The audit passed and the team
                    put the report in their raise deck.
                  </p>
                </div>
              </div>
              <p className="secnote">
                References available under NDA. We link each engagement to a full
                case study once the client approves disclosure.
              </p>
              <Link href="/case-studies" className="tlink">
                Read the case studies →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* 07 - Why teams choose us */}
        <section id="why">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="07" title="Why teams choose us" />
              <h2 className="h2">
                Why teams <span className="g">choose us</span>
              </h2>
              <div className="why" style={{ marginTop: 46 }}>
                {WHY.map((w) => (
                  <div key={w.title}>
                    <h4>
                      <span className="x">→</span> {w.title}
                    </h4>
                    <p>
                      {w.nvNote ? (
                        <>
                          We design for security from week 1. Our pre-mainnet
                          checklist covers every item with a documented fix
                          path.
                        </>
                      ) : (
                        w.body
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 08 - FAQ */}
        <section id="faq">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="08" title="FAQ" />
              <h2 className="h2">Frequently asked questions</h2>
              <Faq items={FAQ_ITEMS} />
              <p className="secnote">
                More on the work in{" "}
                <a href="/blockchain-engineering" className="acc">
                  blockchain engineering
                </a>
                ,{" "}
                <a href="/defi-protocol-engineering" className="acc">
                  DeFi protocol engineering
                </a>
                ,{" "}
                <a href="/tokenization-and-rwa" className="acc">
                  tokenization and RWA
                </a>
                , and{" "}
                <a href="/crypto-wallet-development" className="acc">
                  crypto wallet development
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final" id="contact">
          <Backdrop motif="beam" />
          <div className="dots2" aria-hidden="true" />
          <div className="wrap">
            <Reveal>
              <h2>
                Your audit could start{" "}
                <span className="pp">next week</span>
              </h2>
              <p>
                Book a 30-minute call. We review your scope, recommend the right
                audit type, and send a written quote within 48 hours. No sales
                pitch. If we are not the right fit, we will tell you who is.
              </p>
              <div className="row">
                <a href="/contact" className="btn btn-pri">
                  Get a fixed-fee audit quote
                </a>
                {/* <a href="/contact" className="btn btn-ghost">
                  Download a sample audit report
                </a> */}
              </div>
              <p className="micro">
                NDA on request. Replies within 4 business hours, Monday to
                Friday.
              </p>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
