import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";
import Backdrop from "@/components/Backdrop";

const CANONICAL = "https://www.lbmsolution.com/crypto-wallet-development";

export const metadata: Metadata = {
  title: "Crypto Wallet Development for Fintech & Web3 | LBM Solutions",
  description:
    "We build secure, scalable crypto wallets: multi-chain, MPC, custodial and non-custodial, account abstraction. Trusted by fintech and Web3 teams across 18+ countries.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Crypto Wallet Development for Fintech & Web3 | LBM Solutions",
    description:
      "We build secure, scalable crypto wallets: multi-chain, MPC, custodial and non-custodial, account abstraction. Trusted by fintech and Web3 teams across 18+ countries.",
    url: CANONICAL,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const LOGOS = [
  "Chainml",
  "Concordium",
  "Tarality",
  "Coinccino",
  "OmoSwap",
  "Seedx",
];

const TRUTHS = [
  "You can't risk security. One key leak and it is over.",
  "You can't compromise on speed. A laggy wallet loses users in a day.",
  "You can't depend on freelancers. They build fast, ship broken, and vanish.",
  "You can't just hope it won't break. Hope is not an architecture.",
];

const KEY_MODELS: {
  model: string;
  control: string;
  best: string;
  tradeoff: string;
}[] = [
  {
    model: "Non-custodial",
    control: "The user",
    best: "Web3-native apps, self-sovereignty",
    tradeoff: "User loses keys, funds are gone; recovery design matters",
  },
  {
    model: "Custodial",
    control: "You (the operator)",
    best: "Fintech apps, exchanges, regulated flows",
    tradeoff: "You hold liability and need custody-grade security",
  },
  {
    model: "MPC",
    control: "Split across parties",
    best: "Best of both, no single point of failure",
    tradeoff: "More complex to build and integrate",
  },
  {
    model: "Account abstraction (ERC-4337)",
    control: "Programmable (smart accounts)",
    best: "Gasless UX, social recovery, session keys",
    tradeoff: "Newer standard, needs careful implementation",
  },
];

const SECURITY_LAYERS: { title: string; body: React.ReactNode }[] = [
  {
    title: "Key management",
    body: "MPC or smart-account architecture, hardware-backed where it fits, with a real recovery design (not just a seed phrase and a prayer).",
  },
  {
    title: "Contracts",
    body: (
      <>
        Wallet and account-abstraction contracts audited before launch (see our{" "}
        <a href="/smart-contract-audits" className="tlink">
          smart contract audits →
        </a>
        ).
      </>
    ),
  },
  {
    title: "Application",
    body: "Encrypted storage, secure enclaves on mobile, biometric and device binding.",
  },
  {
    title: "Infrastructure",
    body: "Hardened nodes, rate limiting, anomaly detection, and alerting.",
  },
];

const WALLET_TYPES: { n: string; title: string; body: string }[] = [
  {
    n: "W.01",
    title: "Multi-chain wallets",
    body: "One wallet across Ethereum, Base, Solana, Polygon, and more, with unified balances.",
  },
  {
    n: "W.02",
    title: "DeFi wallets",
    body: "Built-in swaps, staking, and dApp connection via WalletConnect.",
  },
  {
    n: "W.03",
    title: "White-label wallets",
    body: "Your brand, your UX, our engine. Launch fast without rebuilding the core.",
  },
  {
    n: "W.04",
    title: "Custodial and non-custodial wallets",
    body: "Either model, or a hybrid, built to your custody and compliance needs.",
  },
  {
    n: "W.05",
    title: "Browser-extension wallets",
    body: "dApp-connecting extension wallets with a typed provider.",
  },
  {
    n: "W.06",
    title: "Mobile and web wallets",
    body: "Native iOS and Android plus web, sharing one secure backend.",
  },
];

const STEPS: { sn: string; t: string; title: string; body: string }[] = [
  {
    sn: "1",
    t: "Week 1",
    title: "Discovery",
    body: "Users, chains, custody model, and compliance. Output: architecture and scope.",
  },
  {
    sn: "2",
    t: "Weeks 2 to 6",
    title: "Design and core build",
    body: "Key management, contracts, backend, and UI.",
  },
  {
    sn: "3",
    t: "Weeks 5 to 8",
    title: "Audit and harden",
    body: "Contract audit and security testing.",
  },
  {
    sn: "4",
    t: "Weeks 8 to 10",
    title: "Launch and support",
    body: "Production, monitoring, and a support window.",
  },
];

const RECENT: { tg: string; title: string; body: string }[] = [
  {
    tg: "USA · DeFi wallet",
    title: "From idea to launch in 10 weeks",
    body: "References available under NDA.",
  },
  {
    tg: "UK · multi-chain mobile wallet",
    title: "90% user satisfaction, zero security incidents",
    body: "References available under NDA.",
  },
  {
    tg: "Singapore · white-label wallet",
    title: "Launched fast, scaled to 25,000 users",
    body: "References available under NDA.",
  },
];

const WHY: { title: string; body: string }[] = [
  {
    title: "Senior blockchain engineers",
    body: "Shipping on Ethereum, Solana, and Hyperledger since 2014, not learning on your budget.",
  },
  {
    title: "End-to-end product thinking",
    body: "We care about retention and UX, not just whether the contract compiles.",
  },
  {
    title: "Security at every layer",
    body: "Audited contracts, hardened infrastructure, real recovery design.",
  },
  {
    title: "Straight communication",
    body: "Regular updates, clear timelines, and honest feedback when a feature is a bad idea.",
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Custodial or non-custodial, which should we choose?",
    a: "It depends on your users and regulatory position. Fintech and regulated flows often go custodial or MPC; Web3-native apps lean non-custodial or account abstraction. We decide together in the architecture review.",
  },
  {
    q: "How long does a wallet take?",
    a: "Most builds ship in 6 to 10 weeks. White-label is faster; custom key management and multi-chain support add time.",
  },
  {
    q: "Is the wallet audited?",
    a: "The contracts are, before launch, using our five-layer audit process.",
  },
  {
    q: "Which chains do you support?",
    a: "Ethereum, Base, Arbitrum, Optimism, Polygon, Solana, and others on request.",
  },
  {
    q: "Who owns the code?",
    a: "You do, from day one. NDA on request.",
  },
  {
    q: "Can you do account abstraction and gasless transactions?",
    a: "Yes. We build ERC-4337 smart accounts with session keys, social recovery, and sponsored gas.",
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
  name: "Crypto Wallet Development",
  serviceType: "Crypto wallet development",
  description:
    "Secure, scalable crypto wallet development: multi-chain, MPC, custodial and non-custodial, and account abstraction wallets for fintech and Web3 teams.",
  url: CANONICAL,
  provider: {
    "@type": "Organization",
    name: "LBM Solutions",
    url: "https://www.lbmsolution.com",
  },
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
      name: "Crypto wallet development",
      item: CANONICAL,
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

export default function CryptoWalletDevelopment() {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}

        {/* Hero */}
        <header className="hero bg-host">
            <img src="https://media.worksbuddy.ai/1781681284423-d7c191e543a4-Crypto-Wallet.png?w=1920&h=938" alt="" className="absolute top-0 right-0 w-full h-full object-cover" />
             <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-sm lg:hidden"></div>
          {/* <Backdrop motif="ring" /> */}
          <div className="wrap">
            <div className="kick mono">
              <span>
                <span className="br"></span> Crypto wallet development{" "}
                <span className="br"></span>
              </span>
            </div>
            <h1>
              Build a <span className="pp">secure, scalable</span> crypto wallet
              without <span className="ol">guesswork</span>
            </h1>
            <div className="herofle">
              <p className="lede !mt-8">
                The development partner founders pick when they want it built
                right the first time.{" "}
                <b>
                  Multi-chain, MPC and account abstraction, custodial or
                  non-custodial, shipped in 6 to 10 weeks.
                </b>
              </p>
              <div className="ctacol !mt-6">
                <a href="/contact" className="btn btn-pri">
                  Start your wallet build
                </a>
                <p className="reassure">
                  Still deciding on a key-management model or scope? We will
                  walk you through it on a short call.
                </p>
                <a href="/contact" className="tlink">
                  Book a 30-min architecture review →
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Logo strip */}
        {/* <section id="trusted" className="alt">
          <div className="wrap">
            <Reveal>
              <p className="mono i">
                Trusted by fintech and Web3 teams across 18+ countries
              </p>
              <div className="chips" style={{ marginTop: 22 }}>
                {LOGOS.map((logo) => (
                  <span className="src" key={logo}>
                    {logo}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section> */}

        {/* 01 - The frustrating truth */}
        <section id="truth" className="bg-host">
          <Backdrop motif="blueprint" />
          <div className="wrap">
            <Reveal>
              <SectionLabel index="01" title="The frustrating truth" />
              <h2 className="h2">
                The frustrating truth about{" "}
                <span className="g">building a crypto wallet</span>
              </h2>
              <p className="subh">
                When you are building a wallet, four things are true at once, and
                they pull against each other.
              </p>
              <div className="why" style={{ marginTop: 46 }}>
                {TRUTHS.map((t) => (
                  <div key={t}>
                    <h4>
                      <span className="x">→</span> {t}
                    </h4>
                  </div>
                ))}
              </div>
              <p className="secnote">
                You are excited, and you are also a little overwhelmed. Too many
                chains. Too many security layers. Too many people telling you
                different things. And somewhere in the middle, the project stops
                moving. It does not have to be this complicated.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 02 - The decision: who holds the keys */}
        <section id="keys" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="02" title="The decision" />
              <h2 className="h2">
                First, <span className="g">who holds the keys?</span>
              </h2>
              <p className="subh">
                Every wallet starts with one choice, and most vendors skip the
                conversation.
              </p>
              <div className="tablewrap">
                <table className="pricetable">
                  <thead>
                    <tr>
                      <th>Model</th>
                      <th>Who controls keys</th>
                      <th>Best for</th>
                      <th>Tradeoff</th>
                    </tr>
                  </thead>
                  <tbody>
                    {KEY_MODELS.map((row) => (
                      <tr key={row.model}>
                        <td>{row.model}</td>
                        <td>{row.control}</td>
                        <td>{row.best}</td>
                        <td>{row.tradeoff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="secnote">
                We help you pick during the architecture review, based on your
                users, your regulatory position, and your risk tolerance. Most
                modern wallets we build land on MPC or account abstraction, often
                together.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 03 - Security at every layer */}
        <section id="security" className="bg-host">
          <Backdrop motif="glow" />
          <div className="wrap">
            <Reveal>
              <SectionLabel index="03" title="Security" />
              <h2 className="h2">
                Security at every layer,{" "}
                <span className="g">not just the headline</span>
              </h2>
              <div className="why" style={{ marginTop: 46 }}>
                {SECURITY_LAYERS.map((layer) => (
                  <div key={layer.title}>
                    <h4>
                      <span className="x">→</span> {layer.title}
                    </h4>
                    <p>{layer.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 04 - What we build */}
        <section id="what-we-build" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="04" title="What we build" />
              <h2 className="h2">
                Wallet types <span className="g">we build</span>
              </h2>
              <div className="practices">
                {WALLET_TYPES.map((w) => (
                  <div className="practice" key={w.n}>
                    <span className="n">{w.n}</span>
                    <h3>{w.title}</h3>
                    <p>{w.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 05 - How we work */}
        <section id="how-we-work">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="05" title="How we work" />
              <h2 className="h2">
                From idea to launch{" "}
                <span className="g">in 6 to 10 weeks</span>
              </h2>
              <div className="steps">
                {STEPS.map((s) => (
                  <div className="step" key={s.sn}>
                    <span className="sn">{s.sn}</span>
                    <h4>{s.title}</h4>
                    <p>{s.body}</p>
                    <span className="t">{s.t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 06 - Recent work */}
        <section id="recent-work" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="06" title="Recent work" />
              <h2 className="h2">
                Recent wallets <span className="g">we have shipped</span>
              </h2>
              <div className="results">
                {RECENT.map((r) => (
                  <div className="card" key={r.tg} style={{ marginBottom: 20 }}>
                    <span className="tg mono">
                      {"// "}
                      {r.tg}
                    </span>
                    <h3>{r.title}</h3>
                    <p>{r.body}</p>
                  </div>
                ))}
              </div>
              <Link href="/case-studies" className="tlink">
                See more case studies →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* 07 - Why teams choose us */}
        <section id="why-us">
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
                    <p>{w.body}</p>
                  </div>
                ))}
              </div>
              <p className="secnote">
                We don&apos;t just build apps, we build confidence.
              </p>
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
                More on related work:{" "}
                <a href="/crypto-exchange-development" className="tlink">
                  Crypto exchange development →
                </a>{" "}
                <a href="/stablecoin-payment-rails" className="tlink">
                  Stablecoin payment rails →
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
                Your wallet could be live in{" "}
                <span className="pp">6 to 10 weeks</span>
              </h2>
              <p>
                Book a 30-minute architecture review. We will help you choose the
                key-management model, map the chains and features, and send a
                written scope and price. No pressure, and an honest answer on
                what your wallet actually needs.
              </p>
              <div className="row">
                <a href="/contact" className="btn btn-pri">
                  Start your wallet build
                </a>
                {/* <a href="/contact" className="btn btn-ghost">
                  Book a 30-min architecture review
                </a> */}
              </div>
              <p className="micro">What&apos;s stopping you?</p>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
