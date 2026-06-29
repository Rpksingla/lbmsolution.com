import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";
import Backdrop from "@/components/Backdrop";
import Icon, { type IconName } from "@/components/Icon";

// Founder-supplied review-platform logos (hosted on media.worksbuddy.ai).
const TRUST_SOURCES = [
  { name: "Clutch", src: "https://media.worksbuddy.ai/1780981013049-0cfdf25713a2-clutch.png?w=406&h=115", href: "https://clutch.co/profile/lbm-solutions" },
  { name: "GoodFirms", src: "https://media.worksbuddy.ai/1780981013052-c0016af8579f-goodfirms.png?w=542&h=84", href: "https://www.goodfirms.co/company/lbm-solutions" },
  { name: "Trustpilot", src: "https://media.worksbuddy.ai/1780981013058-a2a7228d410a-trustpilot.png?w=960&h=236", href: "https://www.trustpilot.com/review/lbmsolution.com" },
];

const PRACTICES: {
  n: string;
  icon: IconName;
  title: string;
  body: string;
  cta: string;
  href: string;
}[] = [
    {
      n: "AU.01",
      icon: "audit",
      title: "Smart contract audits",
      body: "We audit Solidity and Rust contracts before they hold real money. Manual review plus Slither, Mythril, Echidna, and Foundry. You get a findings report with severity ratings, fixes, and a re-audit.",
      cta: "Get a smart contract audit",
      href: "/smart-contract-audits",
    },
    {
      n: "BC.02",
      icon: "blocks",
      title: "Blockchain engineering",
      body: "Production systems on Ethereum, Base, Arbitrum, Optimism, Solana, and Polygon. Tokenization and RWA (ERC-3643, ERC-20, ERC-721, ERC-1155, ERC-4626), DeFi protocols, exchanges, and stablecoin payment rails. Most builds ship in 6 to 12 weeks.",
      cta: "Scope a blockchain build",
      href: "/blockchain-engineering",
    },
    {
      n: "AI.03",
      icon: "ai",
      title: "AI agents and automation",
      body: "Multi-agent systems built with LangGraph, CrewAI, and LangChain, with observability so you can see what the agents are doing. Deployed for support, sales ops, and data extraction.",
      cta: "Scope an AI build",
      href: "/ai-agents-and-automation",
    },
  ];

const HOW: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "seniors",
    title: "Senior engineers only",
    body: "No junior teams learning on your budget. The people who scope your project are the people who build it.",
  },
  {
    icon: "auditFirst",
    title: "Audit-first",
    body: "Security is not a phase at the end. We review architecture before we write production code, and we audit before anything goes live.",
  },
  {
    icon: "uptime",
    title: "We stay through launch",
    body: "Most vendors disappear at handoff. We are there for deployment, the first incidents, and the months after, when production fires actually happen.",
  },
  {
    icon: "ownership",
    title: "You own everything",
    body: "Your code, your repos, your IP, from day one. NDA on request.",
  },
];

const INDUSTRIES: {
  n: string;
  icon: IconName;
  title: string;
  body: string;
  href: string;
}[] = [
    {
      n: "IN.01",
      icon: "fintech",
      title: "Fintech",
      body: "Payments, lending, neobanks, and crypto-native infrastructure.",
      href: "/industries/fintech",
    },
    {
      n: "IN.02",
      icon: "saas",
      title: "B2B SaaS",
      body: "AI features, agent systems, and platform engineering for scale-ups.",
      href: "/industries/b2b-saas",
    },
    {
      n: "IN.03",
      icon: "web3",
      title: "Web3 protocols",
      body: "DeFi, tokenization, exchanges, and the audits that keep them safe.",
      href: "/industries/web3-protocols",
    },
  ];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Who owns the code and IP?",
    a: "You do, from day one. Your repos, your contracts, your IP. We sign an NDA before discovery on request.",
  },
  {
    q: "Do you audit before launch?",
    a: "Yes. Audit-first is how we work. For contracts handling real funds, we run manual review plus Slither, Mythril, Echidna, and Foundry, deliver a severity-rated findings report, and re-audit after fixes.",
  },
  {
    q: "What happens after launch?",
    a: "We stay. Deployment support, monitoring, and a defined response window for production issues. We agree the SLA in the scope, not after something breaks.",
  },
  {
    q: "Who is liable if a contract has a bug?",
    a: "We carry responsibility for the work we audit and ship, within terms we set out in the engagement. We will walk you through exactly what we stand behind before you sign.",
  },
  /* FOUNDER INPUT NEEDED: exact discovery start window (days from the
     architecture review) for "How fast can you start?". */
  {
    q: "How fast can you start?",
    a: "Discovery usually starts within days of the architecture review. Build kicks off once the scope is signed.",
  },
  /* FOUNDER INPUT NEEDED: primary office location. The "Where are you
     based?" question was removed because we cannot answer it without the
     confirmed location. Restore it with: "[city, country]. We work with
     clients across the US, UAE, Singapore, the UK, and Canada." */
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

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="label">
      <span className="mono i">{index}</span>
      <span className="mono">{title}</span>
      <span className="rule" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero className="hero-flush" />

        {/* Reviewed-on logo bar — founder-supplied review-platform logos
            (Clutch, GoodFirms, Trustpilot), hosted on media.worksbuddy.ai.
            G2 is pending a logo asset from the founder. Same component as the
            case-studies page. */}
        <div className="logobar">
          <div className="in">
            {/* <span className="mono lb">Reviewed on</span> */}
            <div className="logos">
              {TRUST_SOURCES.map((s) => (
                <a
                  className={`logo logo-${s.name.toLowerCase()}`}
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.name} reviews for LBM Solutions`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.src} alt={`${s.name} reviews`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 01 — What we build */}
        <section id="services" className="bg-host">
          <Backdrop motif="blueprint" />
          <div className="wrap">
            <Reveal stagger>
              <SectionLabel index="01" title="What we build" />
              <h2 className="h2">
                What we build. <span className="g">Priced before you commit.</span>
              </h2>
              <p className="subh">
                Three focused practices. Each names the outcome, the stack, and a
                price anchor so you can self-qualify before a call.
              </p>
              <div className="practices ">
                {PRACTICES.map((p) => (
                  <div className="practice !p-4 md:!p-10 xl:!p-14" key={p.n}>
                    <div className="border border-[#5b3df52e] w-fit rounded-lg !p-2 !mb-2">
                      <Icon name={p.icon} className="text-[#6c47ff]" />
                    </div>
                    <span className="n">{p.n}</span>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                    <a href={p.href} className=" font-semibold tlink">
                      {p.cta} →
                    </a>
                  </div>
                ))}
              </div>
              <p className="secnote">
                Custom software, CRM engineering, and white-label products are
                also part of what we do. Ask us on the call.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FOUNDER INPUT NEEDED: proof stats section ("What eleven years of
            shipping looks like") is hidden until real figures exist. Needed:
            (1) exact smart contracts deployed to mainnet, (2) TVL secured by
            audited contracts, (3) exact projects delivered (replace the
            "200+" rounding), (4) exact client count. Also confirm the year
            count: "eleven years" vs "since 2014" vs the audits page's
            "since 2019" must reconcile sitewide. */}

        {/* FOUNDER INPUT NEEDED: "Selected results" case study section is
            hidden. To restore it we need one named (or anonymized-by-
            agreement) engagement with: client or descriptor, contract count,
            lines of code, findings by severity, time post-mainnet without
            exploits, and engagement length and fee. */}

        {/* 02 — How we work */}
        <section id="how-we-work" className="alt">
          <div className="wrap">
            <Reveal stagger>
              <SectionLabel index="02" title="How we work" />
              <h2 className="h2">
                How we work.{" "}
                <span className="g">The part most vendors get wrong.</span>
              </h2>
              <div className="why" style={{ marginTop: 46 }}>
                {HOW.map((h) => (
                  <div className="!py-4 !px-0 md:!p-10" key={h.title}>
                    <div className="bg-[#5b3df512] w-fit rounded-lg !p-2 !mb-4">
                      <Icon name={h.icon} className="text-[#6c47ff]" />
                    </div>

                    <h3 className="!font-bold">{h.title}</h3>
                    <p>{h.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* FOUNDER INPUT NEEDED: "Products we have shipped" section
            (FoodFleet, Vroom, RetailNest) is hidden. To restore it we need a
            real one-line description and outcome for each product. */}

        {/* 03 — Industries */}
        <section id="industries" className="bg-host">
          <Backdrop motif="glow" />
          <div className="wrap">
            <Reveal stagger>
              <SectionLabel index="03" title="Who we build for" />
              <h2 className="h2">
                Who we build for.{" "}
                <span className="g">Three buyers, one standard.</span>
              </h2>
              <div className="practices ">
                {INDUSTRIES.map((ind) => (
                  <a className="practice" href={ind.href} key={ind.n}>
                    <div className="border border-[#5b3df52e] w-fit rounded-lg !p-2 !mb-2">
                      <Icon name={ind.icon}  className="text-[#6c47ff]" />
                    </div>
                    <span className="n">{ind.n}</span>
                    <h3>{ind.title}</h3>
                    <p>{ind.body}</p>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* FOUNDER INPUT NEEDED: "What clients say" section is hidden. To
            restore it we need two or three real pull quotes with name, role,
            and company (Venture Gold and NSF Token were the candidates), and
            written permission to publish each. */}

        {/* 04 — FAQ */}
        <section id="faq">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="04" title="Questions buyers ask" />
              <h2 className="h2">Questions buyers ask</h2>
              <Faq items={FAQ_ITEMS} />
            </Reveal>
          </div>
        </section>

        {/* Final CTA (headline leads with the outcome, not the button text) */}
        <section className="final" id="contact">
          {/* <Backdrop motif="beam" /> */}

          <div className="wrap">
            <Reveal>
              <h2>
                Your roadmap could move <span className="pp">next week</span>
              </h2>
              <p>
                One 30-minute architecture review. We look at your project,
                suggest the right approach, and give you a price range. No sales
                pitch. If we are not the right fit, we will tell you who is.
              </p>
              <div className="row">
                <a href="/contact" className="btn btn-pri">
                  Book a 30-minute architecture review
                </a>
                <Link href="/case-studies" className="btn btn-ghost">
                  See our work
                </Link>
              </div>
              <p className="micro">No obligation. NDA on request.</p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
