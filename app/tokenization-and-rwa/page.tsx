import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";
import Backdrop from "@/components/Backdrop";

export const metadata: Metadata = {
  title: "Real-World Asset Tokenization & Security Tokens | LBM Solutions",
  description:
    "Compliant tokenization of real estate, private credit, funds, and invoices. ERC-3643 and ERC-1400, transfer-agent and KYC integrations, built to your framework.",
  alternates: {
    canonical: "https://www.lbmsolution.com/tokenization-and-rwa",
  },
  openGraph: {
    title: "Real-World Asset Tokenization & Security Tokens | LBM Solutions",
    description:
      "Compliant tokenization of real estate, private credit, funds, and invoices. ERC-3643 and ERC-1400, transfer-agent and KYC integrations, built to your framework.",
    url: "https://www.lbmsolution.com/tokenization-and-rwa",
    type: "website",
  },
};

const ASSETS: { n: string; title: string; body: string; t: string }[] = [
  {
    n: "AC.01",
    title: "Real estate",
    body: "Fractional ownership in single assets or funds, with rent distribution onchain.",
    t: "8 to 16 weeks",
  },
  {
    n: "AC.02",
    title: "Private credit and debt",
    body: "Tokenized loans and notes with coupon and repayment logic.",
    t: "8 to 14 weeks",
  },
  {
    n: "AC.03",
    title: "Funds and equities",
    body: "Tokenized fund units and private shares with transfer restrictions.",
    t: "10 to 16 weeks",
  },
  {
    n: "AC.04",
    title: "Invoices and receivables",
    body: "Short-duration, tradable receivables for working-capital finance.",
    t: "6 to 12 weeks",
  },
  {
    n: "AC.05",
    title: "Commodities and treasuries",
    body: "Tokenized treasuries and commodity-backed instruments.",
    t: "10 to 16 weeks",
  },
  {
    n: "AC.06",
    title: "Loyalty and utility (non-security)",
    body: "Reward and access tokens on low-fee chains.",
    t: "3 to 6 weeks",
  },
];

const STALL: string[] = [
  "Who is legally allowed to hold and transfer it, and how the contract enforces that.",
  "How identity, accreditation, and jurisdiction get checked before any transfer clears.",
  "How the offchain legal structure (SPV, trust, fund) maps to the onchain token.",
  "What happens at a coupon, a redemption, a corporate action, or a default.",
];

const STACK: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "Permissioned token standards",
    body: "ERC-3643 (T-REX) and ERC-1400 enforce who can hold and transfer at the contract level, so a non-eligible wallet simply cannot receive the asset.",
  },
  {
    n: "02",
    title: "Onchain identity",
    body: "ONCHAINID or equivalent ties each wallet to a verified, jurisdiction-aware identity claim, checked on every transfer.",
  },
  {
    n: "03",
    title: "Transfer agent and registry",
    body: "Integration with a transfer agent and an authoritative ownership registry, so the cap table is always reconciled.",
  },
  {
    n: "04",
    title: "KYC, KYB, and accreditation",
    body: "Sumsub, Jumio, or your existing provider gate onboarding and ongoing eligibility.",
  },
  {
    n: "05",
    title: "Issuance and distribution platform",
    body: "Built on or integrated with established issuance platforms where it shortens your path, custom-built where it does not.",
  },
];

const LIFECYCLE: { sn: string; title: string; body: string }[] = [
  {
    sn: "1",
    title: "Structure",
    body: "Map the offchain legal entity to the onchain token, choose the standard, and define eligibility rules.",
  },
  {
    sn: "2",
    title: "Issue",
    body: "Mint to the registry, onboard investors through KYC, and enforce holding limits from day one.",
  },
  {
    sn: "3",
    title: "Distribute",
    body: "Primary sale to eligible investors, with the cap table reconciled onchain and offchain.",
  },
  {
    sn: "4",
    title: "Operate",
    body: "Coupons, dividends, rent, and corporate actions handled in code, with reporting for investors and regulators.",
  },
  {
    sn: "5",
    title: "Redeem or trade",
    body: "Compliant secondary transfers among eligible holders, redemptions, and end-of-life settlement.",
  },
];

const STANDARDS: { label: string; value: string }[] = [
  {
    label: "Standards",
    value:
      "ERC-3643 (T-REX), ERC-1400, ERC-20 for non-security wrappers, ERC-4626 for tokenized vaults.",
  },
  {
    label: "Identity and compliance",
    value: "ONCHAINID, Sumsub, Jumio.",
  },
  {
    label: "Issuance partners",
    value: "Established issuance platforms, named once verified.",
  },
  {
    label: "Chains",
    value:
      "Ethereum, Base, Polygon, Arbitrum, and permissioned chains where the framework requires it.",
  },
];

const REG_ROWS: { region: string; framework: string }[] = [
  { region: "United States", framework: "Reg D 506(c), Reg S, Reg A+" },
  {
    region: "European Union",
    framework: "MiCA, plus prospectus rules for securities",
  },
  { region: "UAE", framework: "VARA and ADGM frameworks" },
  { region: "Singapore", framework: "MAS securities and DPT rules" },
];

const ENGAGEMENT: { n: string; title: string; body: string }[] = [
  {
    n: "EN.01",
    title: "Structuring workshop, week 1",
    body: "We align with you and your counsel on asset, entity, standard, and eligibility. Output: a technical and compliance spec.",
  },
  {
    n: "EN.02",
    title: "Build, weeks 2 to 8",
    body: "Contracts, identity, transfer-agent integration, and the issuance flow, audited before launch.",
  },
  {
    n: "EN.03",
    title: "Onboarding and issuance, weeks 8 to 12",
    body: "Investor KYC, primary distribution, and cap-table reconciliation.",
  },
  {
    n: "EN.04",
    title: "Operate and support",
    body: "Corporate actions, reporting, and secondary-transfer support after launch.",
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Do you provide the legal structure?",
    a: "No. You and your securities counsel choose the legal structure and offering exemption. We build the technology to fit it and integrate the transfer agent, identity, and KYC layers.",
  },
  {
    q: "What token standard should we use?",
    a: "For securities, usually ERC-3643 or ERC-1400, because eligibility and transfer restrictions are enforced at the contract level. We recommend based on your investors and jurisdiction during structuring.",
  },
  {
    q: "How do secondary transfers work?",
    a: "Only between eligible, verified holders, enforced by the token itself. We can integrate compliant secondary venues where your framework allows.",
  },
  {
    q: "How are dividends, coupons, and rent handled?",
    a: "In code, distributed to holders of record and reconciled to the registry, with investor and regulatory reporting.",
  },
  {
    q: "Who owns the contracts and data?",
    a: "You do. NDA on request.",
  },
  {
    q: "Is the token audited before launch?",
    a: "Always. Audit is part of the build, not an add-on. See our smart contract audit process.",
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
  name: "Tokenization and RWA",
  serviceType: "Real-world asset tokenization",
  description:
    "Compliant tokenization of real estate, private credit, funds, and invoices. ERC-3643 and ERC-1400 security tokens with transfer-agent, identity, and KYC integrations, built to fit the issuer's jurisdiction.",
  provider: {
    "@type": "Organization",
    name: "LBM Solutions",
    url: "https://www.lbmsolution.com",
  },
  url: "https://www.lbmsolution.com/tokenization-and-rwa",
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
      name: "Tokenization and RWA",
      item: "https://www.lbmsolution.com/tokenization-and-rwa",
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

export default function TokenizationAndRwa() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="hero bg-host !border-0">
            <img src="https://media.worksbuddy.ai/1781681148136-31fa6eed0064-Transferable.png?w=1920&h=938" alt="" className="absolute top-0 right-0 w-full h-full object-cover" />
             <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-sm lg:hidden"></div>
        
          {/* <Backdrop motif="lattice" /> */}
          <div className="wrap">
            <Reveal>
              <div className="kick">
                <span className="mono">Tokenization and RWA</span>
              </div>
              <h1>
                Turn real-world assets into{" "}
                <span className="pp">compliant</span>, transferable{" "}
                <span className="ol">tokens</span>
              </h1>
              <div className="herofle !mt-6">
                <p className="lede">
                  We build the contracts, the compliance layer, and the investor
                  flows to tokenize real estate, private credit, funds, and
                  invoices. Built on ERC-3643 and ERC-1400, integrated with
                  transfer agents and KYC providers, structured to your
                  jurisdiction.
                </p>
                <div className="float-cta !mt-8">
                  <a href="/contact" className="btn btn-pri">
                    Book a tokenization structuring call
                  </a>
                </div>
              </div>
              <p className="reassure">
                <a href="/contact" className="tlink">
                  Download the RWA readiness checklist →
                </a>
              </p>
            </Reveal>
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


        {/* 01 - Asset classes we tokenize */}
        <section id="asset-classes" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="01" title="Asset classes we tokenize" />
              <h2 className="h2">
                What we <span className="g">tokenize</span>
              </h2>
              <div className="practices">
                {ASSETS.map((a) => (
                  <div className="practice" key={a.n}>
                    <span className="n">{a.n}</span>
                    <h3>{a.title}</h3>
                    <p>{a.body}</p>
                    <p className="reassure mono">{a.t}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 02 - Why tokenization projects stall */}
        <section id="why-stall" className="bg-host">
          <Backdrop motif="blueprint" />
          <div className="wrap">
            <Reveal>
              <SectionLabel index="02" title="Why tokenization projects stall" />
              <h2 className="h2 !mb-5 lg:!mb-10">
                The hard part is{" "}
                <span className="g">not minting the token</span>
              </h2>
              <div className="prose">
                <p>
                  Minting a token is a day of work. The reasons RWA projects
                  stall are never the token:
                </p>
                <ul>
                  {STALL.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
              <p className="secnote">
                Get these right and the token is straightforward. Get them wrong
                and you have a security floating around with no controls, which
                is a problem you do not want to discover after issuance.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 03 - The compliance-first stack */}
        <section id="compliance-stack" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="03" title="The compliance-first stack" />
              <h2 className="h2">
                Compliance built into the token,{" "}
                <span className="g">not stapled on after</span>
              </h2>
              <div className="spec">
                {STACK.map((c) => (
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
              <p className="secnote">
                We name only the partners we actually integrate with. This buyer
                will check.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 04 - The lifecycle of a tokenized asset */}
        <section id="lifecycle" className="bg-host">
          <Backdrop motif="glow" />
          <div className="wrap">
            <Reveal>
              <SectionLabel
                index="04"
                title="The lifecycle of a tokenized asset"
              />
              <h2 className="h2">
                From issuance <span className="g">to redemption</span>
              </h2>
              <div className="steps">
                {LIFECYCLE.map((s) => (
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

        {/* 05 - Standards and partners */}
        <section id="standards" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="05" title="Standards and partners" />
              <h2 className="h2">
                What we <span className="g">build on</span>
              </h2>
              <div className="tablewrap">
                <table className="pricetable">
                  <thead>
                    <tr>
                      <th>Layer</th>
                      <th>What we use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {STANDARDS.map((row) => (
                      <tr key={row.label}>
                        <td>{row.label}</td>
                        <td>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="secnote">
                We remove any partner we cannot back up. Named issuance partners
                are confirmed during structuring.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 06 - Regulatory frameworks */}
        <section id="regulatory">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="06" title="Regulatory frameworks" />
              <h2 className="h2">
                The frameworks we{" "}
                <span className="g">build to fit</span>
              </h2>
              <div className="tablewrap">
                <table className="pricetable">
                  <thead>
                    <tr>
                      <th>Jurisdiction</th>
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
                We build the technology to fit the framework your counsel
                selects. We are engineers, not securities lawyers, and we work
                alongside yours.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 07 - How the engagement runs */}
        <section id="how-we-work" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="07" title="How the engagement runs" />
              <h2 className="h2">
                How we <span className="g">work</span>
              </h2>
              <div className="spec">
                {ENGAGEMENT.map((e) => (
                  <a href="/contact" key={e.n}>
                    <span className="sn">{e.n}</span>
                    <span>
                      <span className="st">{e.title}</span>
                      <span className="sd">{e.body}</span>
                    </span>
                    <span className="ar">↗</span>
                  </a>
                ))}
              </div>
              <p className="secnote">
                Most RWA engagements run 8 to 16 weeks, scaling with asset
                complexity and compliance scope. Every contract is audited
                before issuance; see our{" "}
                <a href="/smart-contract-audits" className="tlink">
                  smart contract audits →
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        {/* 08 - Recent work */}
        <section id="recent-work">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="08" title="Recent work" />
              <h2 className="h2">Recent work</h2>
              <div className="cols2">
                <div className="card">
                  <span className="tg mono">DeFi Staking Protocol · EVM Mainnet</span>
                  <h3>Live on mainnet. Zero incidents since launch. Full reference available under NDA.</h3>
                  <p>
                    Full contract suite for staking and rewards distribution:
                    architecture, implementation, independent review, and mainnet
                    deployment with vesting and timelock controls.
                  </p>
                </div>
                <div className="card">
                  <span className="tg mono">Token Launch · Exchange-Listed Project</span>
                  <h3>Listed on schedule. Reference and audit report available under NDA.</h3>
                  <p>
                    Token contracts, distribution, and vesting engineered to audit
                    standard, with a clean report delivered for exchange and
                    investor due diligence ahead of listing.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 09 - FAQ */}
        <section id="faq" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="09" title="Frequently asked questions" />
              <h2 className="h2">Frequently asked questions</h2>
              <Faq items={FAQ_ITEMS} />
              <p className="secnote">
                Building a DeFi layer or payment rails alongside the token? See{" "}
                <a href="/defi-protocol-engineering" className="tlink">
                  DeFi protocol engineering →
                </a>{" "}
                and{" "}
                <a href="/stablecoin-payment-rails" className="tlink">
                  stablecoin payment rails →
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
                Bring us the asset.{" "}
                <span className="pp">We will map the path to a compliant token</span>
              </h2>
              <p>
                Book a 30-minute structuring call. We will walk your asset,
                jurisdiction, and investors, outline the standard and compliance
                stack, and send a written plan. Bring your counsel; we work well
                with them.
              </p>
              <div className="row">
                <a href="/contact" className="btn btn-pri">
                  Book a tokenization structuring call
                </a>
                {/* <a href="/contact" className="btn btn-ghost">
                  Download the RWA readiness checklist
                </a> */}
              </div>
              <p className="micro">
                We build the technology and integrate compliance. Your legal
                structure stays with your counsel, where it belongs.
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
