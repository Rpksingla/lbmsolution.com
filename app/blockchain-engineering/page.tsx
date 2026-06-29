import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blockchain Engineering for Fintech & Web3 | LBM Solutions",
  description:
    "A blockchain engineering firm, not a token shop. Senior engineers, audit-first, since 2014. Audits, tokenization, stablecoin rails, DeFi, wallets, and exchanges.",
  alternates: {
    canonical: "https://www.lbmsolution.com/blockchain-engineering",
  },
  openGraph: {
    title: "Blockchain Engineering for Fintech & Web3 | LBM Solutions",
    description:
      "A blockchain engineering firm, not a token shop. Senior engineers, audit-first, since 2014. Audits, tokenization, stablecoin rails, DeFi, wallets, and exchanges.",
    url: "https://www.lbmsolution.com/blockchain-engineering",
    type: "website",
  },
};

/* ---------- data ---------- */

const TRUST_CLIENTS = [
  "Chainml",
  "Concordium",
  "Tarality",
  "Coinccino",
  "OmoSwap",
  "Seedx",
];

const POSITIONING = [
  {
    title: "We are engineers first",
    body: "Senior people who have shipped to mainnet, not a sales team with a contractor bench.",
  },
  {
    title: "We are audit-first",
    body: "Security is designed in from week one and audited before anything goes live, not bolted on after.",
  },
  {
    title: "We are not a retail crypto shop",
    body: "We do not do meme tokens, pump projects, or make me the next Shiba Inu requests.",
  },
  {
    title: "We stay through launch",
    body: "We are there for deployment, the first incidents, and the months after, when production fires actually happen.",
  },
];

const ROUTER_LEAD = [
  {
    sn: "01",
    title: "Smart contract audits",
    body: "Senior auditors, multi-tool coverage, fixed-fee scope in writing.",
    href: "/smart-contract-audits",
  },
  {
    sn: "02",
    title: "Tokenization and RWA",
    body: "Compliant tokens for real estate, private credit, funds, and invoices, on ERC-3643 and ERC-1400.",
    href: "/tokenization-and-rwa",
  },
  {
    sn: "03",
    title: "Stablecoin payment rails",
    body: "B2B crypto checkout and payouts with same-day settlement.",
    href: "/stablecoin-payment-rails",
  },
  {
    sn: "04",
    title: "DeFi protocol engineering",
    body: "Lending, AMMs, perps, and yield, with mechanism design done properly and audited before mainnet.",
    href: "/defi-protocol-engineering",
  },
];

const ROUTER_SECONDARY = [
  {
    sn: "05",
    title: "Crypto wallet development",
    body: "Multi-chain, MPC, and account-abstraction wallets.",
    href: "/crypto-wallet-development",
  },
  {
    sn: "06",
    title: "Crypto exchange development",
    body: "CEX, DEX, and P2P for licensed operators.",
    href: "/crypto-exchange-development",
  },
];

const HOW = [
  {
    title: "Senior engineers only",
    body: "The people who scope your project build it. No juniors learning on your budget.",
  },
  {
    title: "Audit-first delivery",
    body: "We design for security from week one and audit before launch, using Slither, Mythril, Echidna, Foundry, and manual review.",
    tools: "Slither · Mythril · Echidna · Foundry",
  },
  {
    title: "You own everything",
    body: "Your code, your repos, your keys, your IP, from day one. NDA on request.",
  },
  {
    title: "Fixed-fee discovery first",
    body: "You get a written architecture and price before committing to the build, so there are no surprises.",
  },
];

const STACK = [
  {
    cat: "Chains",
    tags: "Ethereum, Base, Arbitrum, Optimism, Polygon, zkSync, Solana, Near, Aptos, Sui",
  },
  { cat: "Languages", tags: "Solidity, Rust, Move" },
  {
    cat: "Token standards",
    tags: "ERC-20, ERC-721, ERC-1155, ERC-3643 (T-REX), ERC-1400, ERC-4626, ERC-4337, BEP-20, SPL",
  },
  {
    cat: "Security and audit",
    tags: "Slither, Mythril, Echidna, Foundry, Certora",
  },
  {
    cat: "Integration and data",
    tags: "wagmi, viem, RainbowKit, WalletConnect, The Graph",
  },
  { cat: "Oracles", tags: "Chainlink, Pyth" },
  { cat: "Identity and compliance", tags: "ONCHAINID, Sumsub, Jumio" },
];

const INDUSTRIES = [
  {
    n: "IN.01",
    title: "Fintech",
    body: "Payments, lending, neobanks, and crypto-native infrastructure for Series A to C teams.",
    href: "/industries/fintech",
  },
  {
    n: "IN.02",
    title: "B2B SaaS",
    body: "Blockchain features and platform engineering for scale-ups.",
    href: "/industries/b2b-saas",
  },
  {
    n: "IN.03",
    title: "Web3 protocols",
    body: "DeFi, tokenization, exchanges, and the audits that keep them safe.",
    href: "/industries/web3-protocols",
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Are you a blockchain firm or a general agency?",
    a: "A blockchain engineering firm. Blockchain and AI engineering is what we do, for fintech and Web3 teams. We do not run retail crypto or speculative token projects.",
  },
  {
    q: "Why a firm instead of freelancers?",
    a: "Freelancers build fast, ship broken, and disappear at handoff. We staff senior engineers, audit before launch, and stay through the first months in production.",
  },
  {
    q: "Do you do AI work too?",
    a: "Yes. AI agents and automation are a separate practice. Ask on the architecture review.",
  },
  {
    q: "Who owns the code and IP?",
    a: "You do, from day one. We sign an NDA before discovery on request.",
  },
  {
    q: "How does an engagement start?",
    a: "A 30-minute architecture review, then a fixed-fee discovery scope with a written plan and price. The build only begins once you sign that scope.",
  },
  {
    q: "Where are you based?",
    a: "[NEEDS-VALIDATION: founder] We work with clients across the US, UAE, Singapore, the UK, and Canada.",
  },
];

/* ---------- JSON-LD ---------- */

const SITE = "https://www.lbmsolution.com";

const CHILD_SERVICES = [
  { name: "Smart contract audits", url: `${SITE}/smart-contract-audits` },
  { name: "Tokenization and RWA", url: `${SITE}/tokenization-and-rwa` },
  { name: "Stablecoin payment rails", url: `${SITE}/stablecoin-payment-rails` },
  { name: "DeFi protocol engineering", url: `${SITE}/defi-protocol-engineering` },
  { name: "Crypto wallet development", url: `${SITE}/crypto-wallet-development` },
  { name: "Crypto exchange development", url: `${SITE}/crypto-exchange-development` },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Blockchain Engineering",
  serviceType: "Blockchain engineering",
  description:
    "A blockchain engineering firm, not a token shop. Senior engineers, audit-first, since 2014. Audits, tokenization, stablecoin rails, DeFi, wallets, and exchanges for fintech and Web3 teams.",
  url: `${SITE}/blockchain-engineering`,
  provider: {
    "@type": "Organization",
    name: "LBM Solutions",
    url: SITE,
  },
  areaServed: ["US", "UAE", "Singapore", "UK", "Canada"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Blockchain engineering services",
    itemListElement: CHILD_SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: s.url,
      },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blockchain engineering",
      item: `${SITE}/blockchain-engineering`,
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

export default function BlockchainEngineering() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="hero">
          <img src="https://media.worksbuddy.ai/1781689031656-59c4798db12d-blockchain.png?w=1920&h=900" alt="" className="absolute top-0 right-0 w-full h-full object-cover" />
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-sm lg:hidden"></div>

          <div className="dots" aria-hidden="true" />
          <div className="wrap">
            <Reveal>
              <div className="kick">
                <span className="mono">Blockchain engineering</span>
              </div>
              <h1>
                Blockchain systems that hold up when{" "}
                <span className="pp">real money</span> is on the line
              </h1>
              <div className="herofle">
                <p className="lede !btn btn-primt-6">
                  We are a blockchain engineering firm, not a token shop. Senior
                  engineers, audit-first, building since 2014. We design, build,
                  and audit DeFi protocols, tokenization, stablecoin rails,
                  wallets, and exchanges for fintech and Web3 teams.
                </p>
                <div className="ctacol !mt-6">
                  <a href="/contact" className="btn btn-pri">
                    Book a 30-min architecture review
                  </a>
                  <p className="reassure">
                    Senior engineers. Audit-first. Building since 2014.
                  </p>
                  <a href="#what-we-build" className="tlink">
                    Not sure which service fits? Tell us what you are building →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Trust strip */}
        {/* <div className="trustbar">
          <div className="in">
            <span className="mono lb">
              Trusted by fintech and Web3 teams across 18+ countries
            </span>
            {TRUST_CLIENTS.map((c) => (
              <span className="src" key={c}>
                {c}
              </span>
            ))}
            <span className="rt">Reviewed on Clutch, GoodFirms, G2, and Trustpilot</span>
          </div>
        </div> */}

        {/* 01 - What we are, and what we are not */}
        <section id="positioning">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="01" title="What we are" />
              <h2 className="h2">
                What we are, <span className="g">and what we are not</span>
              </h2>
              <div className="prose">
                <p>
                  Plenty of shops will spin up a token over a weekend and
                  disappear after launch. That is not us. We are the team
                  founders bring in when the thing they are building holds real
                  money, faces a regulator, or cannot afford an exploit.
                </p>
                <p>What that means in practice:</p>
              </div>
              <div className="why" style={{ marginTop: 46 }}>
                {POSITIONING.map((p) => (
                  <div key={p.title}>
                    <h4>
                      <span className="x">→</span> {p.title}
                    </h4>
                    <p>{p.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 02 - What we build (capability router) */}
        <section id="what-we-build" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="02" title="What we build" />
              <h2 className="h2">
                What we build. <span className="g">Pick the work you need.</span>
              </h2>
              <p className="subh">
                Six capabilities, six pages. Start with the four lead practices
                or jump straight to a wallet or exchange build. Each links to its
                full page.
              </p>
              <div className="spec">
                {ROUTER_LEAD.map((r) => (
                  <Link href={r.href} key={r.sn}>
                    <span className="sn">{r.sn}</span>
                    <span>
                      <span className="st">{r.title}</span>
                      <span className="sd">{r.body}</span>
                    </span>
                    <span className="ar">→</span>
                  </Link>
                ))}
              </div>
              <p className="secnote">Also build:</p>
              <div className="spec">
                {ROUTER_SECONDARY.map((r) => (
                  <Link href={r.href} key={r.sn}>
                    <span className="sn">{r.sn}</span>
                    <span>
                      <span className="st">{r.title}</span>
                      <span className="sd">{r.body}</span>
                    </span>
                    <span className="ar">→</span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 03 - How we work */}
        <section id="how-we-work">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="03" title="How we work" />
              <h2 className="h2">
                How we work.{" "}
                <span className="g">The same model across every service.</span>
              </h2>
              <div className="why" style={{ marginTop: 46 }}>
                {HOW.map((h) => (
                  <div key={h.title}>
                    <h4>
                      <span className="x">→</span> {h.title}
                    </h4>
                    <p>{h.body}</p>
                    {h.tools ? (
                      <p className="mono gray" style={{ marginTop: 12 }}>
                        {h.tools}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 04 - The stack */}
        <section id="stack" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="04" title="What we build on" />
              <h2 className="h2">
                What we build on.{" "}
                <span className="g">Only the tech we have shipped.</span>
              </h2>
              <div className="tablewrap">
                <table className="pricetable">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Stack</th>
                    </tr>
                  </thead>
                  <tbody>
                    {STACK.map((row) => (
                      <tr key={row.cat}>
                        <td>{row.cat}</td>
                        <td>
                          <span className="mono gray">{row.tags}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 05 - Who we build for */}
        <section id="industries">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="05" title="Who we build for" />
              <h2 className="h2">
                Who we build for.{" "}
                <span className="g">Three buyers, one standard.</span>
              </h2>
              <div className="practices">
                {INDUSTRIES.map((ind) => (
                  <Link className="practice" href={ind.href} key={ind.n}>
                    <span className="n">{ind.n}</span>
                    <h3>{ind.title}</h3>
                    <p>{ind.body}</p>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 06 - Selected work */}
        <section id="work" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="06" title="Selected work" />
              <h2 className="h2">
                Selected work. <span className="g">Range across services.</span>
              </h2>
              <div className="cols2">
                <div className="card">
                  <span className="tg mono">Wallet · USA</span>
                  <h3>DeFi wallet from idea to launch</h3>
                  <p>
                    A multi-chain DeFi wallet taken from idea to launch in 10
                    weeks.
                  </p>
                </div>
                <div className="card">
                  <span className="tg mono">Audit · Singapore</span>
                  <h3>Pre-mainnet audit on a DeFi protocol</h3>
                  <p>
                    Pre-mainnet audit on a DeFi protocol. Critical findings
                    caught and fixed before launch, zero incidents since.
                  </p>
                </div>
                <div className="card">
                  <span className="tg mono">Tokenization · USA</span>
                  <h3>Reg D security-token build</h3>
                  <p>
                    A Reg D security-token build. The team put our audit report
                    in their raise deck and closed their round.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 07 - FAQ */}
        <section id="faq" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="07" title="FAQ" />
              <h2 className="h2">Frequently asked questions</h2>
              <Faq items={FAQ_ITEMS} />
            </Reveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final" id="contact">
          <div className="dots2" aria-hidden="true" />
          <div className="wrap">
            <Reveal>
              <h2>
                Tell us what you are building. We will tell you how to{" "}
                <span className="pp">build it right</span>
              </h2>
              <p>
                Book a 30-minute architecture review. We will review your
                project, point you to the right approach, and send a written
                scope and price range. No sales pitch. If we are not the right
                fit, we will tell you who is.
              </p>
              <div className="row">
                <a href="/contact" className="btn btn-pri">
                  Book a 30-min architecture review
                </a>
                <a href="#what-we-build" className="btn btn-ghost">
                  Not sure which service fits?
                </a>
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
