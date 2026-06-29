import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";
import Backdrop from "@/components/Backdrop";

// DO NOT SHIP: all [REAL: ...] tokens must be replaced with founder-verified
// figures before launch. Do not estimate. If a figure cannot be sourced,
// delete the row or claim rather than guess.

export const metadata: Metadata = {
  title: "Stablecoin Payment Rails for B2B | LBM Solutions",
  description:
    "Accept and send USDC, USDT, and PYUSD with same-day settlement and sub-1% fees. We build stablecoin checkout, payouts, and treasury rails for B2B platforms.",
  alternates: {
    canonical: "https://www.lbmsolution.com/stablecoin-payment-rails",
  },
  openGraph: {
    title: "Stablecoin Payment Rails for B2B | LBM Solutions",
    description:
      "Accept and send USDC, USDT, and PYUSD with same-day settlement and sub-1% fees. We build stablecoin checkout, payouts, and treasury rails for B2B platforms.",
    url: "https://www.lbmsolution.com/stablecoin-payment-rails",
    type: "website",
  },
};

type CompareRow = { label: string; card: string; wire: string; stable: string };

const COMPARE: CompareRow[] = [
  {
    label: "Cost per transaction",
    card: "[REAL: card cost per transaction]",
    wire: "[REAL: wire/ACH cost per transaction]",
    stable: "[REAL: stablecoin cost per transaction]",
  },
  {
    label: "Settlement time",
    card: "[REAL: card settlement time]",
    wire: "[REAL: wire/ACH settlement time]",
    stable: "[REAL: stablecoin settlement time]",
  },
  {
    label: "Cross-border",
    card: "Expensive, FX layered",
    wire: "Slow, intermediary banks",
    stable: "Same flow domestic or international",
  },
  {
    label: "Chargebacks",
    card: "Yes",
    wire: "Limited",
    stable: "None (final settlement)",
  },
  {
    label: "Programmability",
    card: "Limited",
    wire: "None",
    stable: "Native (escrow, splits, conditional release)",
  },
];

const AUDIENCE = [
  {
    n: "WF.01",
    title: "Marketplaces and platforms",
    body: "Take stablecoin payments at checkout, split funds to sellers automatically, hold in escrow until delivery.",
  },
  {
    n: "WF.02",
    title: "Cross-border payouts",
    body: "Pay contractors, suppliers, and partners in 10+ countries without correspondent-bank delays.",
  },
  {
    n: "WF.03",
    title: "Treasury and settlement",
    body: "Move funds between entities and chains, hold yield-bearing stablecoins, reconcile to your ledger.",
  },
  {
    n: "WF.04",
    title: "On and off-ramps",
    body: "Let users convert fiat to stablecoins and back through a licensed partner, embedded in your product.",
  },
];

const FLOW = [
  {
    sn: "1",
    title: "Customer pays",
    body: "They send USDC, USDT, or PYUSD from any wallet, or fiat through the embedded on-ramp. Your checkout shows a fixed price and a quote that does not move under them.",
  },
  {
    sn: "2",
    title: "We confirm and lock",
    body: "The transaction is verified on-chain, the amount is locked against your invoice, and price slippage is handled before confirmation.",
  },
  {
    sn: "3",
    title: "Funds route",
    body: "The payment splits to your accounts, sellers, or escrow per your rules. Conditional release and refunds are programmable.",
  },
  {
    sn: "4",
    title: "You reconcile",
    body: "Every payment maps to an invoice and posts to your ledger or ERP through the API and webhooks. No manual matching.",
  },
];

const BUILD = [
  {
    n: "BD.01",
    title: "Checkout and invoicing",
    body: "Hosted checkout, embeddable widget, or a Stripe-style API. QR and link-based invoices for B2B.",
  },
  {
    n: "BD.02",
    title: "Payouts engine",
    body: "Single and batch payouts, scheduled disbursements, multi-chain, with cost-optimized routing.",
  },
  {
    n: "BD.03",
    title: "Treasury layer",
    body: "Multi-entity balances, internal transfers, sweep rules, and yield-bearing stablecoin support.",
  },
  {
    n: "BD.04",
    title: "On and off-ramp integration",
    body: "Fiat in and out through licensed partners, KYC handled at the ramp.",
  },
  {
    n: "BD.05",
    title: "Reconciliation and reporting",
    body: "Webhooks, ledger sync, exports for finance, and an admin dashboard.",
  },
];

const COMPLIANCE = [
  {
    title: "KYC and KYB",
    body: "Through partners like Sumsub or Jumio, scaled to your risk tier.",
  },
  {
    title: "Travel Rule",
    body: "Support for transfers above threshold, via standard providers.",
  },
  {
    title: "Sanctions and wallet screening",
    body: "On inbound and outbound flows.",
  },
  {
    title: "Regulatory framing",
    body: "We build to fit your registration, whether that is US MSB, EU MiCA, or operating under a licensed ramp and custody partner. We are engineers, not your lawyers, and we will tell you plainly where you need licensed counsel.",
  },
];

const TIMELINE = [
  {
    sn: "1",
    title: "Discovery and design",
    body: "We map your flows, volumes, chains, and compliance needs and lock scope.",
    t: "Week 1",
  },
  {
    sn: "2",
    title: "Core integration",
    body: "Checkout or payouts, API, webhooks, and ledger sync in your environment.",
    t: "Weeks 2 to 5",
  },
  {
    sn: "3",
    title: "Compliance and testing",
    body: "KYC/KYB, screening, and end-to-end testing on testnet, then a controlled mainnet pilot.",
    t: "Weeks 4 to 6",
  },
  {
    sn: "4",
    title: "Launch and handover",
    body: "Production, monitoring, and documented runbooks.",
    t: "Week 6+",
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Do our customers need crypto wallets?",
    a: "Not necessarily. With the embedded on-ramp, a customer can pay by card or bank and you still settle in stablecoins. For crypto-native counterparties, they pay directly from a wallet.",
  },
  {
    q: "How do we handle accounting and reconciliation?",
    a: "Every payment is tied to an invoice and posted through the API and webhooks to your ledger or ERP. We build the reconciliation layer, not just the rail.",
  },
  {
    q: "Is this compliant in our market?",
    a: "It depends on your jurisdiction and registration. We build to fit your framework (MSB, MiCA, licensed ramp and custody) and will be direct about where you need licensed counsel.",
  },
  {
    q: "What about volatility?",
    a: "Stablecoins hold a fiat peg, and prices are locked at checkout before confirmation, so the amount does not move under your customer.",
  },
  {
    q: "Who owns the integration?",
    a: "You do. Your code, your infrastructure, your keys. NDA on request.",
  },
  {
    q: "Can you integrate with our existing stack?",
    a: "Yes. We integrate with Shopify, WooCommerce, custom storefronts, and internal finance systems through the API.",
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
  name: "Stablecoin payment rails for B2B",
  serviceType: "Stablecoin payment, payout, and treasury integration",
  description:
    "We build crypto checkout, payouts, and treasury rails for B2B platforms. Accept and send USDC, USDT, and PYUSD across Base, Arbitrum, Polygon, and Solana, with reconciliation and compliance built in.",
  provider: {
    "@type": "Organization",
    name: "LBM Solutions",
    url: "https://www.lbmsolution.com",
  },
  areaServed: "Worldwide",
  url: "https://www.lbmsolution.com/stablecoin-payment-rails",
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
      name: "Stablecoin payment rails",
      item: "https://www.lbmsolution.com/stablecoin-payment-rails",
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

export default function StablecoinPaymentRails() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <header className="hero bg-host">
           <img src="https://media.worksbuddy.ai/1781611796320-34c4cc2a557a-stable-coin.png?w=1920&h=900" alt="" className="absolute top-0 right-0 w-full h-full object-cover" />
             <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-sm lg:hidden"></div>
          <div className="wrap">
            <div className="hero-2col">
              <div className="hero-main">
                <h1>
                  Get paid in <span className="pp">stablecoins</span>, settle the
                  same <span className="ol">day</span>
                </h1>
                <div className="herostack">
                  <p className="lede">
                    We build crypto checkout, payouts, and treasury rails for B2B
                    platforms. Accept USDC, USDT, and PYUSD across Base, Arbitrum,
                    Polygon, and Solana, with reconciliation and compliance built
                    in, not bolted on.
                  </p>
                  <div className="ctacol">
                    <a href="/contact" className="btn btn-pri">
                      Get a payments integration plan
                    </a>
                    <p className="reassure">
                      30-minute call. We map your flows and send a written
                      integration plan. No obligation.
                    </p>
                    {/* Proof signals: founder-verified volume + one more.
                        DO NOT SHIP until [REAL: ...] is replaced. */}
                    <div className="herotrust">
                      <p className="htsig">
                        <span className="dot" aria-hidden="true" />
                        <span>
                          <b>$100M</b> in stablecoin payments processed for B2B
                          platforms
                        </span>
                      </p>
                      <p className="htsig">
                        <span className="dot" aria-hidden="true" />
                        <span>
                          Live across <b>All chains</b>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero illustration: stablecoin payment flow */}
              {/* <div className="hero-flow-img">
                <img
                  src="/Transferable.png"
                  alt="Stablecoin payment flow: customer pays in USDC, USDT, or PYUSD, settles the same day across Base, Arbitrum, Polygon, or Solana, and reconciles to your ledger"
                  width={800}
                  height={404}
                  loading="lazy"
                />
              </div> */}
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
                  <span className="nv">
                    $500M
                  </span>
                </p>
                <p className="d">
                  <strong>Payment</strong>
                </p>
              </div>
              <div className="trec-stat">
                <p className="v">
                  <span className="nv" >
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
              <span className="nv" >
                Trusted by fintech teams across the <strong> US, UK, UAE,</strong> and Singapore
              </span>
            </p>
          </div>
        </section>

        {/* 01 - The comparison */}
        <section id="comparison" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="01" title="Why stablecoins" />
              <h2 className="h2">
                Why teams move B2B payments to{" "}
                <span className="g">stablecoins</span>
              </h2>
              <div className="tablewrap">
                <table className="pricetable">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Card rails</th>
                      <th>Bank wire / ACH</th>
                      <th>Stablecoin rails</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE.map((row) => (
                      <tr key={row.label}>
                        <td>{row.label}</td>
                        <td>{row.card}</td>
                        <td>{row.wire}</td>
                        <td>{row.stable}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="secnote">
                For cross-border B2B volume, the saving is rarely the headline.
                The bigger win is settlement that clears in minutes and money
                that is programmable.
              </p>
            </Reveal>
          </div>
        </section>



        {/* 02 - Who this is for */}
        <section id="who" className="bg-host">
          <Backdrop motif="blueprint" />
          <div className="wrap">
            <Reveal>
              <SectionLabel index="02" title="Who this is for" />
              <h2 className="h2">
                Built for <span className="g">these flows</span>
              </h2>
              <div className="practices">
                {AUDIENCE.map((a) => (
                  <div className="practice" key={a.n}>
                    <span className="n">{a.n}</span>
                    <h3>{a.title}</h3>
                    <p>{a.body}</p>
                  </div>
                ))}
              </div>
              {/* DO NOT SHIP: point href at the specific stablecoin case study
                  and replace the [REAL: ...] tokens once that study is live. */}
              <Link href="/case-studies" className="tlink">
                See how we built [REAL: flow] for [REAL: client or vertical] →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* 03 - How a payment flows */}
        <section id="flow" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="03" title="How a payment flows" />
              <h2 className="h2">
                What actually happens{" "}
                <span className="g">when a customer pays</span>
              </h2>
              <div className="steps">
                {FLOW.map((s) => (
                  <div className="step" key={s.sn}>
                    <span className="sn">{s.sn}</span>
                    <h4>{s.title}</h4>
                    <p>{s.body}</p>
                  </div>
                ))}
              </div>

            </Reveal>
          </div>
        </section>

        {/* 04 - What we build */}
        <section id="what-we-build" className="bg-host">
          <Backdrop motif="glow" />
          <div className="wrap">
            <Reveal>
              <SectionLabel index="04" title="What we build" />
              <h2 className="h2">
                What we build.{" "}
                <span className="g">Every layer of the rail.</span>
              </h2>
              <div className="why" style={{ marginTop: 46 }}>
                {BUILD.map((b) => (
                  <div key={b.n}>
                    <h4>
                      <span className="x">→</span> {b.title}
                    </h4>
                    <p>{b.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 05 - Assets and chains */}
        <section id="assets" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="05" title="Assets and chains" />
              <h2 className="h2">
                Assets and chains <span className="g">we support</span>
              </h2>
              <div className="why" style={{ marginTop: 46 }}>
                <div>
                  <h4>
                    <span className="x">→</span> Stablecoins
                  </h4>
                  <p>USDC, USDT, PYUSD, and others on request.</p>
                </div>
                <div>
                  <h4>
                    <span className="x">→</span> Chains
                  </h4>
                  <p>
                    Base, Arbitrum, Optimism, Polygon, Solana, Ethereum mainnet.
                  </p>
                </div>
                <div>
                  <h4>
                    <span className="x">→</span> Routing
                  </h4>
                  <p>
                    We default to low-fee chains for payouts and let you set
                    per-flow rules.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 06 - Compliance */}
        <section id="compliance">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="06" title="Compliance" />
              <h2 className="h2">
                Compliance is part of the build,{" "}
                <span className="g">not an afterthought</span>
              </h2>
              <div className="why" style={{ marginTop: 46 }}>
                {COMPLIANCE.map((c) => (
                  <div key={c.title}>
                    <h4>
                      <span className="x">→</span> {c.title}
                    </h4>
                    <p>{c.body}</p>
                  </div>
                ))}
              </div>
              {/* Top objections surfaced inline; full answers stay in the FAQ. */}
              <div className="objstrip">
                <p>
                  <b>Volatility:</b> stablecoins hold a fiat peg and the price
                  is locked at checkout, so the amount never moves under your
                  customer.
                </p>
                <p>
                  <b>Compliant in your market:</b> we build to your
                  registration, whether MSB, MiCA, or a licensed ramp and
                  custody partner, and we are direct about where you need
                  licensed counsel.
                </p>
                <p>
                  <b>Customer wallets:</b> your customers do not need one,
                  because the embedded on-ramp lets them pay by card or bank
                  while you settle in stablecoins.
                </p>
              </div>
              <p className="secnote">
                Need the full audit and security picture before you ship? See
                our{" "}
                <Link href="/smart-contract-audits">smart contract audits</Link>{" "}
                and{" "}
                <Link href="/tokenization-and-rwa">tokenization and RWA</Link>{" "}
                work.
              </p>

            </Reveal>
          </div>
        </section>

        {/* 07 - Integration and timeline */}
        <section id="timeline" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="07" title="Integration and timeline" />
              <h2 className="h2">
                Live in weeks, <span className="g">not quarters</span>
              </h2>
              <div className="steps">
                {TIMELINE.map((s) => (
                  <div className="step" key={s.sn}>
                    <span className="sn">{s.sn}</span>
                    <h4>{s.title}</h4>
                    <p>{s.body}</p>
                    <span className="t">{s.t}</span>
                  </div>
                ))}
              </div>
              <p className="secnote">
                Most B2B payment integrations ship in{" "}
                [REAL: typical delivery window], depending on flows and
                compliance scope.{" "}
                <Link href="/contact">Book a scoping call</Link> and we will
                map a timeline to your stack.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 08 - FAQ */}
        <section id="faq">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="08" title="Frequently asked questions" />
              <h2 className="h2">Frequently asked questions</h2>
              <Faq items={FAQ_ITEMS} />
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
                Tell us how money moves{" "}
                <span className="pp">through <br /> your business</span>
              </h2>
              <p>
                Book a 30-minute call. We will map your payment and payout
                flows, show where stablecoin rails cut cost or settlement time,
                and send a written integration plan. No pressure, no jargon.
              </p>
              <div className="row">
                <a href="/contact" className="btn btn-pri">
                  Get a payments integration plan
                </a>
                {/* <a href="/blockchain-engineering" className="btn btn-ghost">
                  See the integration docs
                </a> */}
              </div>
              <p className="micro">
                NDA on request. We will tell you honestly if a card or bank rail
                is the better fit for a given flow.
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
