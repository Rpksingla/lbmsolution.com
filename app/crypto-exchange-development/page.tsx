import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";
import Backdrop from "@/components/Backdrop";

export const metadata: Metadata = {
  title: "Crypto Exchange Development for Licensed Operators | LBM Solutions",
  description:
    "We build compliant CEX, DEX, and P2P exchanges for licensed VASPs and scaling operators. Matching engines, custody, liquidity, KYC/AML, built to VARA, MAS, and more.",
  alternates: {
    canonical: "https://www.lbmsolution.com/crypto-exchange-development",
  },
  openGraph: {
    title: "Crypto Exchange Development for Licensed Operators | LBM Solutions",
    description:
      "We build compliant CEX, DEX, and P2P exchanges for licensed VASPs and scaling operators. Matching engines, custody, liquidity, KYC/AML, built to VARA, MAS, and more.",
    url: "https://www.lbmsolution.com/crypto-exchange-development",
    type: "website",
  },
};

const WHO: { title: string; body: string }[] = [
  {
    title: "Licensed VASPs",
    body: "In MENA, LATAM, and Southeast Asia, building under a real regulatory framework.",
  },
  {
    title: "Existing exchanges",
    body: "Adding margin, derivatives, an OTC desk, or new markets.",
  },
  {
    title: "Wallets and super-apps",
    body: "Adding a swap or trading layer to an existing user base.",
  },
];

const ARCH_ROWS: { dim: string; cex: string; dex: string; p2p: string }[] = [
  {
    dim: "Core",
    cex: "Matching engine, custody",
    dex: "AMM or onchain orderbook",
    p2p: "Escrow and dispute resolution",
  },
  {
    dim: "Custody",
    cex: "You hold funds",
    dex: "Users hold funds",
    p2p: "Users hold, escrow on trade",
  },
  {
    dim: "Build time",
    cex: "4 to 6 months",
    dex: "2 to 3 months",
    p2p: "3 to 5 months",
  },
  {
    dim: "Best for",
    cex: "Licensed operators, high volume",
    dex: "Web3-native, permissionless",
    p2p: "Emerging markets, fiat on/off via users",
  },
];

const ARCH_DETAIL: { n: string; title: string; body: string }[] = [
  {
    n: "AR.01",
    title: "Centralized exchange",
    body: "A performant matching engine (Go or Rust), hot and cold custody architecture with defined ratios, deep liquidity through market-maker and aggregator integration, and a full KYC/AML stack. We design the custody split and the operational runbook, not just the UI.",
  },
  {
    n: "AR.02",
    title: "Decentralized exchange",
    body: "AMM (Uniswap v3/v4 style) or onchain orderbook, liquidity-pool and LP-token design, and contracts audited before mainnet, because DEXs are the number-one hack target. Security here is the build, not a step in it.",
  },
  {
    n: "AR.03",
    title: "Peer-to-peer exchange",
    body: "Escrow contract design, a clear dispute-resolution flow, reputation and risk scoring, and a compliance model that adapts to each jurisdiction, since P2P rules vary sharply by country.",
  },
];

const CORE: { n: string; title: string; body: string }[] = [
  {
    n: "TC.01",
    title: "Matching engine",
    body: "Low-latency, high-throughput, built in Go or Rust, with order types your traders expect.",
  },
  {
    n: "TC.02",
    title: "Custody",
    body: "Hot and cold wallet architecture, MPC signing, withdrawal controls, and a documented key-ceremony process.",
  },
  {
    n: "TC.03",
    title: "Liquidity",
    body: "Market-maker integration and liquidity-aggregator connections so the book is not empty on day one.",
  },
  {
    n: "TC.04",
    title: "Compliance stack",
    body: "KYC and KYB (Sumsub, Jumio), transaction monitoring, sanctions screening, and Travel Rule support.",
  },
  {
    n: "TC.05",
    title: "Risk and ops",
    body: "Admin console, audit logs, rate limiting, and incident runbooks.",
  },
];

const REG_ROWS: { region: string; framework: string }[] = [
  { region: "UAE", framework: "VARA, ADGM" },
  { region: "Singapore", framework: "MAS (Payment Services Act, DPT)" },
  { region: "Bahrain", framework: "CBB crypto-asset rules" },
  { region: "El Salvador", framework: "Digital Assets framework" },
  { region: "Other", framework: "We adapt to your licensed jurisdiction" },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Do we need a license before we start?",
    a: "For a CEX or fiat-handling exchange, you need a clear licensing path before launch. We can build during licensing, but we will not help you operate something you cannot legally run, and we will say so early.",
  },
  {
    q: "Can you provide liquidity?",
    a: "We integrate market makers and liquidity aggregators so your order book is not empty at launch. We connect the liquidity; we do not provide capital.",
  },
  {
    q: "How is custody handled?",
    a: "Hot and cold architecture with defined ratios, MPC signing, and withdrawal controls. We document the key ceremony and the operational runbook.",
  },
  {
    q: "CEX, DEX, or P2P, which is right for us?",
    a: "It depends on your license, your users, and your custody appetite. We work through it in the architecture review.",
  },
  {
    q: "Is the exchange audited?",
    a: "Yes. Contracts are audited before mainnet, and custody and withdrawal logic get a dedicated review.",
  },
  {
    q: "Who owns the platform?",
    a: "You do. NDA on request.",
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
  name: "Crypto exchange development",
  serviceType: "Crypto exchange development",
  description:
    "Compliant CEX, DEX, and P2P exchange development for licensed VASPs and scaling operators. Matching engines, custody, liquidity, and KYC/AML built to fit the operator's license.",
  provider: {
    "@type": "Organization",
    name: "LBM Solutions",
    url: "https://www.lbmsolution.com",
  },
  url: "https://www.lbmsolution.com/crypto-exchange-development",
  areaServed: "Worldwide",
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
      name: "Crypto exchange development",
      item: "https://www.lbmsolution.com/crypto-exchange-development",
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

export default function CryptoExchangeDevelopment() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="hero bg-host">
          <img src="https://media.worksbuddy.ai/1781681345605-60d19ab93028-Crypto-Exchange.png?w=1920&h=938" alt="" className="absolute top-0 right-0 w-full h-full object-cover" />
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-sm lg:hidden"></div>

          {/* <Backdrop motif="depth" /> */}
          <div className="wrap">
            <Reveal>
              <div className="kick">
                <span className="mono">Crypto exchange development</span>
              </div>
              <h1>
                Build a <span className="pp">compliant exchange</span> regulators and traders both <span className="ol">trust</span>
              </h1>
              <div className="herofle !mt-6">
                <p className="lede">
                  We build centralized, decentralized, and P2P exchanges for
                  licensed VASPs, scaling operators, and super-apps. Matching
                  engines, custody, liquidity, and KYC/AML, engineered to fit
                  your license.
                </p>
                <div className="float-cta !mt-6">
                  <a href="/contact" className="btn btn-pri">
                    Scope your exchange build
                  </a>
                </div>
              </div>
              <p className="reassure">
                <a href="/contact" className="tlink">
                  Book a compliance + architecture review →
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        {/* 01 - Who this is for */}
        <section id="who" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="01" title="Who this is for in 2026" />
              <h2 className="h2">
                Let&apos;s be honest about{" "}
                <span className="g">who should build an exchange now</span>
              </h2>
              <p className="subh">
                A brand-new retail exchange in the US or EU rarely makes sense in
                2026; licensing cost alone makes it a bad bet. The exchanges
                worth building now belong to three groups, and these are the
                teams we work with.
              </p>
              <div className="practices">
                {WHO.map((w) => (
                  <div className="practice" key={w.title}>
                    <h3>{w.title}</h3>
                    <p>{w.body}</p>
                  </div>
                ))}
              </div>
              <p className="secnote">
                If you are pre-license and pre-revenue, we will tell you so on
                the call. We would rather lose the project than build you
                something you cannot legally run.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 02 - Choose your architecture */}
        <section id="architecture" className="bg-host">
          <Backdrop motif="blueprint" />
          <div className="wrap">
            <Reveal>
              <SectionLabel index="02" title="Choose your architecture" />
              <h2 className="h2">
                CEX, DEX, <span className="g">or P2P?</span>
              </h2>
              <div className="tablewrap">
                <table className="pricetable">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Centralized (CEX)</th>
                      <th>Decentralized (DEX)</th>
                      <th>Peer-to-peer (P2P)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ARCH_ROWS.map((row) => (
                      <tr key={row.dim}>
                        <td>{row.dim}</td>
                        <td>{row.cex}</td>
                        <td>{row.dex}</td>
                        <td>{row.p2p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="practices">
                {ARCH_DETAIL.map((a) => (
                  <div className="practice" key={a.n}>
                    <span className="n">{a.n}</span>
                    <h3>{a.title}</h3>
                    <p>{a.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 03 - The technical core */}
        <section id="technical-core" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="03" title="The technical core" />
              <h2 className="h2">
                What separates a real exchange{" "}
                <span className="g">from a template</span>
              </h2>
              <div className="spec">
                {CORE.map((c) => (
                  <a href="/contact" key={c.n}>
                    <span className="sn">{c.n}</span>
                    <span>
                      <span className="st">{c.title}</span>
                      <span className="sd">{c.body}</span>
                    </span>
                    <span className="ar">↗</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 04 - Regulatory frameworks */}
        <section id="regulatory" className="bg-host">
          <Backdrop motif="glow" />
          <div className="wrap">
            <Reveal>
              <SectionLabel index="04" title="Regulatory frameworks" />
              <h2 className="h2">
                Built for your license, <span className="g">not against it</span>
              </h2>
              <div className="tablewrap">
                <table className="pricetable">
                  <thead>
                    <tr>
                      <th>Region</th>
                      <th>Framework we build to fit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {REG_ROWS.map((row) => (
                      <tr key={row.region}>
                        <td>{row.region}</td>
                        <td>{row.framework}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="secnote">
                We are engineers, not your compliance officer. We build the
                controls your license requires and work alongside your legal and
                compliance team.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 05 - Security */}
        <section id="security" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="05" title="Security" />
              <h2 className="h2">
                Audited before launch, <span className="g">monitored after</span>
              </h2>
              <p className="subh">
                Exchanges and DEXs are the most-attacked systems in crypto. Every
                contract we ship is audited before mainnet using our five-layer
                process, and custody and withdrawal logic gets a dedicated
                security review. After launch, we monitor onchain and operational
                activity and respond to incidents fast.
              </p>
              <a href="/smart-contract-audits" className="tlink">
                See our smart contract audit process →
              </a>
            </Reveal>
          </div>
        </section>

        {/* 06 - Recent work */}
        <section id="recent-work">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="06" title="Recent work" />
              <h2 className="h2">Recent work</h2>
              <div className="results">
                <div className="card">
                  <h3>References available under NDA</h3>
                  <p>
                    We share exchange type, region, and real outcomes from
                    launched white-label and operating exchanges under NDA on the
                    architecture review. We do not publish numbers we cannot
                    verify.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 07 - FAQ */}
        <section id="faq">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="08" title="Frequently asked questions" />
              <h2 className="h2">Frequently asked questions</h2>
              <Faq items={FAQ_ITEMS} />
              <p className="secnote">
                Building a wallet or DeFi layer alongside the exchange? See{" "}
                <a href="/crypto-wallet-development" className="tlink">
                  crypto wallet development →
                </a>{" "}
                and{" "}
                <a href="/defi-protocol-engineering" className="tlink">
                  DeFi protocol engineering →
                </a>
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
                Bring us your license and your market.{" "}
                <span className="pp">We will build to fit</span>
              </h2>
              <p>
                Book a compliance-and-architecture review. We will map the right
                exchange type, the custody and compliance stack for your
                jurisdiction, and a written scope and budget. Straight talk on
                feasibility included.
              </p>
              <div className="row">
                <a href="/contact" className="btn btn-pri">
                  Scope your exchange build
                </a>
                {/* <a href="/contact" className="btn btn-ghost">
                  Book a compliance + architecture review
                </a> */}
              </div>
              <p className="micro">
                We build to fit your license and work alongside your compliance
                team. NDA on request.
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
