import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";
import Backdrop from "@/components/Backdrop";

const NV = "NEEDS-VALIDATION: founder";

export const metadata: Metadata = {
  title: "DeFi Protocol Engineering: Lending, AMMs, Perps | LBM Solutions",
  description:
    "We engineer audited DeFi protocols, lending markets, AMMs, perps, and yield. Mechanism and oracle design, audited before mainnet. Built on Ethereum, Base, and Arbitrum.",
  alternates: {
    canonical: "https://www.lbmsolution.com/defi-protocol-engineering",
  },
  openGraph: {
    title: "DeFi Protocol Engineering: Lending, AMMs, Perps | LBM Solutions",
    description:
      "We engineer audited DeFi protocols, lending markets, AMMs, perps, and yield. Mechanism and oracle design, audited before mainnet. Built on Ethereum, Base, and Arbitrum.",
    url: "https://www.lbmsolution.com/defi-protocol-engineering",
    type: "website",
  },
};

type Primitive = { n: string; title: string; body: string; risk: string };

const PRIMITIVES: Primitive[] = [
  {
    n: "D.01",
    title: "AMMs and DEXs",
    body: "Constant-product, concentrated-liquidity (Uniswap v3/v4 style), and stable-swap (Curve style) pools.",
    risk: "The risk: LP economics and price-manipulation via thin pools.",
  },
  {
    n: "D.02",
    title: "Lending and borrowing",
    body: "Isolated and pooled markets, variable rates, collateral factors.",
    risk: "The risk: oracle manipulation and bad-debt cascades during liquidation.",
  },
  {
    n: "D.03",
    title: "Perpetuals and derivatives",
    body: "Orderbook or vAMM perps, funding rates, margin.",
    risk: "The risk: funding and liquidation logic under volatile, low-liquidity conditions.",
  },
  {
    n: "D.04",
    title: "Yield and vaults",
    body: "ERC-4626 vaults, auto-compounding, strategy routing.",
    risk: "The risk: strategy composability and dependency on external protocols.",
  },
  {
    n: "D.05",
    title: "RWA-DeFi crossover",
    body: "Permissioned pools and tokenized collateral.",
    risk: "The risk: bridging compliant assets into permissionless mechanics.",
  },
];

type MechanismPoint = { title: string; body: string };

const MECHANISM: MechanismPoint[] = [
  {
    title: "Oracle design",
    body: "Choosing and configuring price feeds (Chainlink, Pyth, TWAPs) so a flash-loaned swing cannot drain you.",
  },
  {
    title: "Liquidation mechanics",
    body: "Parameters and keeper incentives that clear bad debt fast, even in a market crash.",
  },
  {
    title: "Incentive and token design",
    body: "Emissions, fees, and rewards modeled so the protocol is solvent when the farming stops.",
  },
  {
    title: "Stress and scenario modeling",
    body: "We simulate the bad days, not just the happy path, before mainnet.",
  },
];

type StackRow = { label: string; body: string };

const STACK: StackRow[] = [
  {
    label: "Contracts",
    body: "Solidity and Rust, Foundry-based workflow, OpenZeppelin libraries, upgradeable patterns where governance requires them.",
  },
  {
    label: "Frontend",
    body: "wagmi, viem, and RainbowKit for wallet connection; a typed SDK so integrators move fast.",
  },
  {
    label: "Oracles",
    body: "Chainlink, Pyth, and custom TWAPs per the risk profile.",
  },
  {
    label: "Infra",
    body: "Subgraph indexing, keeper and bot infrastructure for liquidations and rebalancing, observability and alerting.",
  },
  {
    label: "Chains",
    body: "Ethereum, Base, Arbitrum, Optimism, Polygon, and Solana.",
  },
];

type Phase = { sn: string; title: string; t: string; body: string };

const PHASES: Phase[] = [
  {
    sn: "01",
    title: "Mechanism design",
    t: "Weeks 1 to 2",
    body: "Economic model, oracle and liquidation design, parameter selection, and a written spec.",
  },
  {
    sn: "02",
    title: "Build",
    t: "Weeks 3 to 8",
    body: "Contracts, SDK, indexing, and keeper infrastructure.",
  },
  {
    sn: "03",
    title: "Audit and stress test",
    t: "Weeks 6 to 10",
    body: "Full audit and scenario modeling on testnet.",
  },
  {
    sn: "04",
    title: "Launch and monitor",
    t: "Week 10+",
    body: "Guarded mainnet rollout with caps, then monitoring and incident response.",
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Can you design the tokenomics, or only build the contracts?",
    a: "Both. Many teams come to us for the mechanism and economic design first, then continue into the build. You can book the mechanism-design review on its own.",
  },
  {
    q: "Do you audit your own protocol builds?",
    a: "Yes, with the same five-layer process we use for external audits, plus pre-mainnet stress testing. Some clients also commission a second independent audit, which we encourage and support.",
  },
  {
    q: "Which oracle should we use?",
    a: "It depends on the asset and the manipulation risk. We choose between Chainlink, Pyth, and TWAP designs during mechanism design, and configure for your specific market.",
  },
  {
    q: "Can you fork Uniswap or Curve?",
    a: "We can start from battle-tested designs where it fits, then engineer the parts that are specific to your protocol. We do not ship a blind fork with your logo on it.",
  },
  {
    q: "Who owns the code?",
    a: "You do. NDA on request.",
  },
  {
    q: "How do you handle launch risk?",
    a: "Guarded rollout: deposit caps, gradual limit increases, and active monitoring, so an early issue is contained, not catastrophic.",
  },
];

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
  name: "DeFi protocol engineering",
  serviceType: "DeFi protocol engineering",
  description:
    "Engineering of audited DeFi protocols including lending markets, AMMs, perpetuals, and yield systems, with mechanism and oracle design audited before mainnet.",
  provider: {
    "@type": "Organization",
    name: "LBM Solutions",
    url: "https://www.lbmsolution.com",
  },
  areaServed: "Worldwide",
  url: "https://www.lbmsolution.com/defi-protocol-engineering",
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
      name: "DeFi protocol engineering",
      item: "https://www.lbmsolution.com/defi-protocol-engineering",
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

export default function DefiProtocolEngineering() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <header className="hero bg-host">
           <img src="https://media.worksbuddy.ai/1781681080902-925630787d83-Defi.png?w=1920&h=938" alt="" className="absolute top-0 right-0 w-full h-full object-cover" />
            <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-sm lg:hidden"></div>
          <Backdrop motif="flow" />
          <div className="wrap">
            <div
              className="kick mono hr"
              style={{ "--d": 0 } as React.CSSProperties}
            >
              <span>
                <span className="br"></span> DeFi protocol engineering{" "}
                <span className="br"></span>
              </span>
            </div>
            <h1 className="hr" style={{ "--d": 1 } as React.CSSProperties}>
              Ship a DeFi protocol that survives contact with{" "}
              <span className="pp">real money</span>
            </h1>
            <div className="herofle !mt-6">
              <p className="lede hr" style={{ "--d": 2 } as React.CSSProperties}>
                We engineer lending markets, AMMs, perpetuals, and yield systems
                for teams that cannot afford an exploit. Mechanism and oracle
                design done properly, audited before mainnet, built on Ethereum,
                Base, Arbitrum, and Solana.
              </p>
              <div
                className="ctacol hr !mt-6"
                style={{ "--d": 3 } as React.CSSProperties}
              >
                <a href="/contact" className="btn btn-pri float-cta">
                  Scope your protocol build
                </a>
                <p className="reassure">
                  We will pressure-test your protocol design, flag the economic
                  and oracle risks, and send a written scope and budget.
                </p>
                <a href="/contact" className="tlink">
                  Book a mechanism-design review →
                </a>
              </div>
            </div>
          </div>
        </header>

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
                    $500<span className="acc"></span>
                  </span>
                </p>
                <p className="d">
                  <strong>TVL secured</strong>
                </p>
              </div>
              <div className="trec-stat">
                <p className="v">
                  <span className="nv" title={NV}>
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
              <span className="nv" title={NV}>
                TRUSTED BY PROTOCOL TEAMS ACROSS THE US, UK, SINGAPORE, AND THE UAE
              </span>
            </p>
          </div>
        </section>

        {/* 01 - Primitives we build */}
        <section id="primitives" className="bg-host">
          <Backdrop motif="blueprint" />
          <div className="wrap">
            <Reveal>
              <SectionLabel index="01" title="What we build" />
              <h2 className="h2">
                What we build,{" "}
                <span className="g">and the risk each one carries</span>
              </h2>
              <p className="subh">
                A serious DeFi buyer knows the contracts are easy and the
                economics are where protocols die. Each primitive names what it
                does and the specific failure mode it carries.
              </p>
              <div className="practices">
                {PRIMITIVES.map((p) => (
                  <div className="practice" key={p.n}>
                    <span className="n">{p.n}</span>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                    <p className="secnote">{p.risk}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>



        {/* 02 - The part most teams underbuild */}
        <section id="economics" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="02" title="Where protocols die" />
              <h2 className="h2">
                The contracts are the easy part.{" "}
                <span className="g">
                  The economics are where protocols die.
                </span>
              </h2>
              <p className="subh">
                Most exploits are not a missing require statement. They are
                economic: an oracle that can be pushed, a liquidation that does
                not clear fast enough, an incentive that pays attackers more than
                it pays users. We design these explicitly, before a line of the
                protocol is final.
              </p>
              <div className="why" style={{ marginTop: 46 }}>
                {MECHANISM.map((m) => (
                  <div key={m.title}>
                    <h4>
                      <span className="x">→</span> {m.title}
                    </h4>
                    <p>{m.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 03 - Security is the spine */}
        <section id="security" className="bg-host">
          <Backdrop motif="glow" />
          <div className="wrap">
            <Reveal>
              <SectionLabel index="03" title="Security is the spine" />
              <h2 className="h2">
                Audited before mainnet, <span className="g">every time</span>
              </h2>
              <p className="subh">
                No DeFi protocol we build reaches mainnet unaudited. Security
                runs through the whole engagement. That means threat modeling at
                architecture, the full five-layer audit before launch, and
                onchain monitoring after. The audit covers Slither, Mythril,
                Echidna, Foundry, manual review, and Certora on critical paths.
              </p>
              <Link href="/smart-contract-audits" className="tlink">
                See the full audit process →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* 04 - Reference architecture and stack */}
        <section id="stack" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="04" title="Reference architecture" />
              <h2 className="h2">
                How we build.{" "}
                <span className="g">Real tools, named.</span>
              </h2>
              <div className="spec">
                {STACK.map((row, i) => (
                  <a href="/contact" key={row.label}>
                    <span className="sn">
                      S.{String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="st">{row.label}</span>
                      <span className="sd">{row.body}</span>
                    </span>
                    <span className="ar">↗</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 05 - Recent work */}
        <section id="work">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="05" title="Recent work" />
              <h2 className="h2">
                Recent work.{" "}
                <span className="g">Real protocols, real numbers.</span>
              </h2>
              <div className=" flex !w-full gap-10 !mt-10 xl:!mt-20 flex-wrap lg:flex-nowrap">
                <div className="card">
                  <span className="tg mono">

                    <span className="nv" title={NV}>
                      Protocol type and region pending validation
                    </span>
                  </span>
                  <h3>DeFi protocol shipped pre-audited</h3>
                  <p>
                    Built and shipped a protocol, audited pre-mainnet, with no
                    incidents since launch.
                  </p>
                </div>
                <div className="card">
                  <span className="tg mono">

                    <span className="nv" title={NV}>
                      Engagement pending validation
                    </span>
                  </span>
                  <h3>Problem, approach, outcome</h3>
                  <p>
                    <span className="nv" title={NV}>
                      One-line problem, approach, and outcome with a number,
                      pending founder validation.
                    </span>
                  </p>
                </div>
              </div>
              <p className="secnote">References available under NDA.</p>
              <Link href="/case-studies" className="tlink">
                Read the case studies →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* 06 - How the engagement runs */}
        <section id="engagement" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="06" title="How the engagement runs" />
              <h2 className="h2">
                From mechanism <span className="g">to mainnet</span>
              </h2>
              <div className="steps">
                {PHASES.map((p) => (
                  <div className="step" key={p.sn}>
                    <span className="sn">{p.sn}</span>
                    <h4>{p.title}</h4>
                    <p>{p.body}</p>
                    <span className="t">{p.t}</span>
                  </div>
                ))}
              </div>
              <p className="secnote">
                Timelines depend on primitive and complexity.
                Mechanism-design-only engagements are available as a smaller
                standalone scope.
              </p>
              <Link href="/contact" className="tlink">
                Book a scoping call →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* 07 - FAQ */}
        <section id="faq">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="07" title="Frequently asked questions" />
              <h2 className="h2">Frequently asked questions</h2>
              <Faq items={FAQ_ITEMS} />
              <p className="secnote">
                Building tokenized collateral, an exchange, or a wider
                blockchain system? Explore the related work below.
              </p>
              <div className="chips">
                <Link href="/blockchain-engineering">Blockchain engineering</Link>
                <Link href="/smart-contract-audits">Smart contract audits</Link>
                <Link href="/tokenization-and-rwa">Tokenization and RWA</Link>
                <Link href="/crypto-exchange-development">
                  Crypto exchange development
                </Link>
                <Link href="/case-studies">Case studies</Link>
                <Link href="/contact">Contact</Link>
              </div>
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
                Bring us the mechanism.{" "}
                <span className="pp">We will tell you where it breaks</span>
              </h2>
              <p>
                Book a call. We will pressure-test your protocol design, flag the
                economic and oracle risks, and send a written scope and budget.
                If your model has a hole, you want to hear it from us, not from an
                attacker.
              </p>
              <div className="row">
                <a href="/contact" className="btn btn-pri">
                  Scope your protocol build
                </a>
                {/* <a href="/contact" className="btn btn-ghost">
                  Book a mechanism-design review
                </a> */}
              </div>
              <p className="micro">
                Every protocol we build is audited before mainnet. NDA on
                request.
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
