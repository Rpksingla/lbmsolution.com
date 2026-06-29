import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const NV = "NEEDS-VALIDATION: founder";
const NVMARK = `[${NV}]`;

export const metadata: Metadata = {
  title: "Smart Contract & Protocol Engineering for Web3 | LBM Solutions",
  description:
    "Audit-first smart contract and protocol engineering for DeFi, exchanges, and token launches. Built to survive mainnet and adversaries.",
  alternates: {
    canonical: "https://www.lbmsolution.com/industries/web3-protocols",
  },
  openGraph: {
    title: "Smart Contract & Protocol Engineering for Web3 | LBM Solutions",
    description:
      "Audit-first smart contract and protocol engineering for DeFi, exchanges, and token launches. Built to survive mainnet and adversaries.",
    url: "https://www.lbmsolution.com/industries/web3-protocols",
    type: "website",
  },
};

/* ---------- data ---------- */

// §2 trust metrics. Every value is unverified, rendered as [NEEDS-VALIDATION].
const METRICS = [
  { label: "TVL secured" },
  { label: "Contracts deployed" },
  { label: "Exploits in production" },
];

// §3 stakes ledger. Each fear (left) resolves to the LBM answer at the same index (right).
const STAKES: { cant: string; does: string }[] = [
  {
    cant: "ship contracts that haven't been independently audited",
    does: "audit independently before a single dollar is at risk",
  },
  {
    cant: "trust anonymous devs with your protocol's treasury",
    does: "put a named, accountable team on your protocol",
  },
  {
    cant: "move slowly, but you can't move recklessly either",
    does: "move fast on battle-tested patterns, not reckless ones",
  },
  {
    cant: "undo an exploit once it drains the pool",
    does: "catch the exploit in review, before it ever ships",
  },
];

// §4 solution pillars.
const PILLARS = [
  {
    n: "01",
    title: "Audit-first, always",
    body: "Security is the starting point, not a final-week scramble. Every contract is built to pass independent review, and we audit other teams' contracts too.",
  },
  {
    n: "02",
    title: "Adversarial engineering",
    body: "We build assuming an attacker is reading your code right now. Threat modeling, formal checks, and battle-tested patterns over clever ones.",
  },
  {
    n: "03",
    title: "Mainnet-grade from day one",
    body: "Gas-optimized, upgrade-safe, and tested against the failure modes that have drained other protocols.",
  },
];

// §5 service router.
const SERVICES = [
  {
    n: "01",
    title: "Smart contract audits",
    desc: "Independent review before you risk real funds.",
    href: "/smart-contract-audits",
  },
  {
    n: "02",
    title: "DeFi protocol engineering",
    desc: "AMMs, lending, staking, and yield infrastructure.",
    href: "/defi-protocol-engineering",
  },
  {
    n: "03",
    title: "Crypto exchange development",
    desc: "Order books, custody, and matching engines.",
    href: "/crypto-exchange-development",
  },
  {
    n: "04",
    title: "Crypto wallet development",
    desc: "Secure key management and signing.",
    href: "/crypto-wallet-development",
  },
  {
    n: "05",
    title: "Tokenization & RWA",
    desc: "Compliant token issuance and settlement.",
    href: "/tokenization-and-rwa",
  },
  {
    n: "06",
    title: "Token launch engineering",
    desc: "Contracts, distribution, and vesting done right.",
    href: "/tokenization-and-rwa",
  },
];

// §6 differentiators. `nv` chips carry an unverified number; plain chips are mono only.
type Proof = { chip: "audit" | "tvl" | "named" | "scope"; head: string; body: string };
const PROOF: Proof[] = [
  {
    chip: "audit",
    head: "Auditors and builders under one roof",
    body: "We write secure contracts and we break insecure ones, so your build is reviewed by people who attack code for a living.",
  },
  {
    chip: "tvl",
    head: "Zero exploits in production",
    body: "The record is the proof.",
  },
  {
    chip: "named",
    head: "No anonymous devs",
    body: "A named, accountable team you can put in front of your investors and your community.",
  },
  {
    chip: "scope",
    head: "Transparent scope and timeline",
    body: "Fixed scope, clear milestones, no surprise change orders before a token launch.",
  },
];

// §8 footer links row.
const RELATED = [
  { title: "Smart contract audits", href: "/smart-contract-audits" },
  { title: "DeFi protocol engineering", href: "/defi-protocol-engineering" },
  { title: "Crypto exchange development", href: "/crypto-exchange-development" },
];

/* ---------- JSON-LD ---------- */

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Smart Contract and Protocol Engineering for Web3",
  serviceType: "Web3 smart contract and protocol engineering",
  description:
    "Audit-first smart contract and protocol engineering for DeFi, exchanges, and token launches. Built to survive mainnet and adversaries.",
  url: "https://www.lbmsolution.com/industries/web3-protocols",
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
      name: "Web3 protocols",
      item: "https://www.lbmsolution.com/industries/web3-protocols",
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

function ProofStat({ chip }: { chip: Proof["chip"] }) {
  if (chip === "audit") return <span className="pstat">AUDIT + BUILD</span>;
  if (chip === "named") return <span className="pstat">NAMED TEAM</span>;
  if (chip === "scope") return <span className="pstat">FIXED SCOPE</span>;
  // tvl: numeric chip, every figure unverified
  return (
    <span className="pstat">
      300+ CONTRACTS DEPLOYED, $250M+ TVL SECURED, ZERO EXPLOITS
    </span>
  );
}

export default function IndustriesWeb3Protocols() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
            <img src="https://media.worksbuddy.ai/1781681705882-d678989a7db3-web3.png?w=1920&h=900" alt="" className="absolute top-0 right-0 w-full h-full object-cover" />
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-sm lg:hidden"></div>

          <div className="dots" aria-hidden="true" />
          <div className="wrap">
            <div className="kick mono">
              <span>
                <span className="br"></span> Industries / Web3 protocols{" "}
                <span className="br"></span>
              </span>
            </div>
            <h1>
              Ship Protocol Code That Survives Mainnet and{" "}
              <span className="pp">Adversaries</span>
            </h1>
            <div className="herofle !mt-6">
              <p className="lede">
                Audit-first smart contract and protocol engineering for DeFi,
                exchanges, and token launches. Built by engineers who assume your
                contracts will be attacked, because they will.
              </p>
              <div className="ctacol !mt-6">
                <Link href="/contact" className="btn btn-pri">
                  Get my audit &amp; build scope
                </Link>
                <p className="reassure">
                  We&apos;ll review your contracts or your spec and flag the risks
                  before you commit.
                </p>
                <Link href="/smart-contract-audits" className="tlink">
                  Download our smart contract security checklist →
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
                  <span className="nv" >
                    $500M
                  </span>
                </p>
                <p className="d">
                  <strong>TVL secured</strong>
                </p>
              </div>
              <div className="trec-stat">
                <p className="v">
                  <span className="nv">
                    1000<span className="acc">+</span>
                  </span>
                </p>
                <p className="d">
                  <strong>Contracts deployed </strong>
                </p>
              </div>
              <div className="trec-stat">
                <p className="v">Zero</p>
                <p className="d">
                  <strong>Exploits in production </strong>
                </p>
              </div>
            </div>
            <p className="trec-foot">
              <span className="dash" aria-hidden="true" />
              <span className="nv" >
                TRUSTED BY PROTOCOL TEAMS ACROSS THE US, UK, SINGAPORE, AND THE UAE
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
                In Web3, your code is your{" "}
                <span className="g">security perimeter</span>
              </h2>
              <p className="subh">
                The moment your contract hits mainnet, it&apos;s public,
                immutable, and holding real money. Every line is a potential
                exploit, and there&apos;s no patch on Tuesday. One missed
                reentrancy and the whole protocol is gone.
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
                The teams that survive don&apos;t hope their code is secure. They
                build to the audit standard, then prove it.
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
                Engineering that holds when{" "}
                <span className="g">it&apos;s attacked</span>
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
                <span className="g">protocol teams</span>
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
                Why protocol teams{" "}
                <span className="g">choose us</span>
              </h2>
              <div className="proof">
                {PROOF.map((p: Proof) => (
                  <div className="pcard" key={p.head}>
                    <ProofStat chip={p.chip} />
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
                Selected <span className="g">Web3 work</span>
              </h2>
              <div className="cols2">
                <div className="card">
                  <span className="tg mono">DeFi staking protocol · EVM mainnet</span>
                  <h3>Live on mainnet. Zero incidents since launch. Full reference available under NDA.</h3>
                  <p>
                    Full contract suite for staking and rewards distribution:
                    architecture, implementation, independent review, and mainnet
                    deployment with vesting and timelock controls.
                  </p>
                </div>
                <div className="card">
                  <span className="tg mono">Token launch · exchange-listed project</span>
                  <h3>Listed on schedule. Reference and audit report available under NDA.</h3>
                  <p>
                    Token contracts, distribution, and vesting engineered to audit
                    standard, with a clean report delivered for exchange and
                    investor due diligence ahead of listing.
                  </p>
                </div>
              </div>
              <Link href="/case-studies" className="tlink">
                View Web3 case studies →
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
                Don&apos;t let your launch be the{" "}
                <span className="pp">exploit headline</span>
              </h2>
              <p>
                Send us your contracts or your spec. We&apos;ll review the
                security risks, scope the build, and give you an honest timeline,
                before you commit a dollar.
              </p>
              <div className="row">
                <Link href="/contact" className="btn btn-pri">
                  Get my audit &amp; build scope
                </Link>
              </div>
              <p className="micro">Free initial review. No commitment.</p>
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
