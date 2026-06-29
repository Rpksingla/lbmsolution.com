import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";

const NV = "NEEDS-VALIDATION: founder";

export const metadata: Metadata = {
  title: "Generative AI Development: RAG, Copilots & Custom Models | LBM Solutions",
  description:
    "We build generative AI grounded in your data: knowledge assistants, copilots, document extraction, and custom models. Model-agnostic, private by design, shipped in weeks.",
  alternates: {
    canonical: "https://www.lbmsolution.com/generative-ai-development",
  },
  openGraph: {
    title:
      "Generative AI Development: RAG, Copilots & Custom Models | LBM Solutions",
    description:
      "We build generative AI grounded in your data: knowledge assistants, copilots, document extraction, and custom models. Model-agnostic, private by design, shipped in weeks.",
    url: "https://www.lbmsolution.com/generative-ai-development",
    type: "website",
  },
};

/* ---------- data ---------- */

type ConsoleLine = {
  tm: string;
  body: React.ReactNode;
  hot?: boolean;
};

const CONSOLE_LINES: ConsoleLine[] = [
  { tm: "user", body: "What is our refund window for annual plans?" },
  {
    tm: "00:01",
    body: (
      <>
        retrieved 6 passages <span className="okk">✓</span>
      </>
    ),
  },
  {
    tm: "00:01",
    body: (
      <>
        reranked for relevance <span className="okk">✓</span>
      </>
    ),
  },
  {
    tm: "00:02",
    body: (
      <>
        answer drafted with citations <span className="okk">✓</span>
      </>
    ),
  },
  {
    tm: "src",
    body: (
      <>
        <span className="cchip">policy-v4.pdf</span>
        <span className="cchip">pricing.md</span>
        <span className="cchip">helpdesk-kb</span>
      </>
    ),
  },
];

const BUILD_TYPES = [
  {
    n: "01",
    title: "Knowledge assistants",
    body: "Answers grounded in your documents, wikis, and data, with citations, so users can trust the output.",
  },
  {
    n: "02",
    title: "Copilots in your product",
    body: "An assistant embedded in your app that helps users do the thing your product is for, faster.",
  },
  {
    n: "03",
    title: "Document and data extraction",
    body: "Turn contracts, invoices, forms, and reports into structured, validated data.",
  },
  {
    n: "04",
    title: "Content generation",
    body: "On-brand drafts, variations, and summaries at scale, with a human approving the output.",
  },
  {
    n: "05",
    title: "Custom and fine-tuned models",
    body: "When a base model is not enough, we fine-tune or build for your domain, data, and latency.",
  },
  {
    n: "06",
    title: "AI features in your product",
    body: "Search, classification, recommendations, and natural-language interfaces, added to what you already ship.",
  },
];

type ModelOption = {
  tag: string;
  title: string;
  rows: { k: string; v: string }[];
};

const MODEL_OPTIONS: ModelOption[] = [
  {
    tag: "Hosted frontier",
    title: "OpenAI, Anthropic, Google",
    rows: [
      { k: "Best for", v: "Fastest path, strongest reasoning" },
      { k: "Data location", v: "Provider API, with no-training terms" },
      { k: "Cost shape", v: "Per token" },
      { k: "Tradeoff", v: "Less control, ongoing per-call cost" },
    ],
  },
  {
    tag: "Open-weight",
    title: "Llama, Mistral",
    rows: [
      { k: "Best for", v: "Privacy, cost at scale, control" },
      { k: "Data location", v: "Your cloud or VPC" },
      { k: "Cost shape", v: "Infra-based, cheaper at high volume" },
      { k: "Tradeoff", v: "You run the infra" },
    ],
  },
  {
    tag: "Fine-tuned",
    title: "Custom",
    rows: [
      { k: "Best for", v: "Narrow domain, strict latency or format" },
      { k: "Data location", v: "Your cloud or VPC" },
      { k: "Cost shape", v: "Higher upfront, cheaper per call" },
      { k: "Tradeoff", v: "Build effort and upkeep" },
    ],
  },
];

const GROUNDING_CHOICE = [
  {
    k: "RAG",
    v: "Keeps answers current and cited without retraining. The default for most production systems.",
  },
  {
    k: "Fine-tuning",
    v: "Bakes in tone, format, or a narrow skill. We add it only when RAG alone cannot hit the bar.",
  },
  {
    k: "Most systems",
    v: "Use RAG, and add fine-tuning where needed. We recommend the combination during discovery, based on your data, privacy, latency, and budget.",
  },
];

type FlowNode = {
  fn: string;
  fd: string;
  hot?: boolean;
};

const RAG_FLOW: FlowNode[] = [
  { fn: "Your sources", fd: "docs, wikis, data" },
  { fn: "Chunk + embed", fd: "split and vectorize" },
  { fn: "Vector DB", fd: "stored for retrieval" },
  { fn: "Retrieve", fd: "most relevant passages" },
  { fn: "Rerank", fd: "by true relevance" },
  { fn: "Answer + citations", fd: "verifiable, not invented", hot: true },
];

type DataRow = {
  k: string;
  v: React.ReactNode;
};

const DATA_LEDGER: DataRow[] = [
  {
    k: "No silent training",
    v: "When we use a hosted model, we configure no-training and no-retention terms so your data is not used to train anyone's model.",
  },
  {
    k: "Private deployment",
    v: "When privacy demands it, we run open-weight models in your own cloud or VPC, so data never leaves your perimeter.",
  },
  {
    k: "PII handling",
    v: "Redaction and minimization before data reaches a model, with audit logging of what was sent.",
  },
  {
    k: "Access + tenancy",
    v: "Per-user and per-tenant access controls, so the assistant only ever sees what that user is allowed to see.",
  },
  {
    k: "Compliance",
    v: (
      <>
        We build to your framework, working with your security team. Applicable
        frameworks confirmed before publication:{" "}
        <span className="nv" title={NV}>
          [NEEDS-VALIDATION: founder]
        </span>
        .
      </>
    ),
  },
];

const STEPS = [
  {
    sn: "01",
    title: "Discovery",
    body: "We map your use case, data sources, model and grounding choice, and privacy needs. Output: a written spec and a recommended architecture.",
    week: "Week 1",
  },
  {
    sn: "02",
    title: "Prototype",
    body: "A working prototype on your real data, with evals so quality is measured, not guessed.",
    week: "Weeks 2 to 4",
  },
  {
    sn: "03",
    title: "Harden",
    body: "Grounding tuned, guardrails added, latency and cost optimized, integrated into your product.",
    week: "Weeks 4 to 8",
  },
  {
    sn: "04",
    title: "Ship and improve",
    body: "Monitoring, evals on every change, and refinement as your data and needs grow.",
    week: "Ongoing",
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "How do you stop the AI from hallucinating?",
    a: "We ground it in your data with retrieval and force it to cite sources. We also instruct it to refuse when it does not know, and measure accuracy with evals before it ships. Grounding plus evals is how you get answers users can trust.",
  },
  {
    q: "Which model should we use?",
    a: "It depends on your privacy needs, cost at your volume, and how specialized the task is. We compare hosted, open-weight, and fine-tuned options in discovery and recommend, rather than defaulting to one vendor.",
  },
  {
    q: "Do you train on our data?",
    a: "No. We configure no-training and no-retention terms with hosted providers, and for strict cases we run models in your own cloud so data never leaves.",
  },
  {
    q: "Can it run on our own infrastructure?",
    a: "Yes. We deploy open-weight models in your cloud or VPC when privacy or cost calls for it.",
  },
  {
    q: "RAG or fine-tuning?",
    a: "Usually RAG first, because it keeps answers current and cited without retraining. We add fine-tuning only when RAG alone cannot meet the bar.",
  },
  {
    q: "Who owns the model and code?",
    a: "You do. NDA on request.",
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
  name: "Generative AI Development",
  serviceType: "Generative AI development",
  description:
    "Generative AI grounded in your data: knowledge assistants, copilots, document extraction, and custom models. Model-agnostic, private by design.",
  url: "https://www.lbmsolution.com/generative-ai-development",
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
      name: "Generative AI development",
      item: "https://www.lbmsolution.com/generative-ai-development",
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

export default function GenerativeAiDevelopment() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="hero ai !border-0">
          <img src="https://media.worksbuddy.ai/1781681444740-39ce134c9688-generative_ai.png?w=1920&h=938" alt="" className="absolute top-0 right-0 w-full h-full object-cover" />
           <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-sm lg:hidden"></div>
          <div className="dots" aria-hidden="true" />
          <div className="wrap">
            <Reveal>
              <div className="heroai">
                <div className="htxt">
                  <div className="kick">
                    <span className="mono">Generative AI development</span>
                  </div>
                  <h1>
                    Generative AI grounded in your data, not{" "}
                    <span className="pp">making things up</span>
                  </h1>
                  <p className="lede !mt-6">
                    We build knowledge assistants, copilots, document
                    extraction, and custom models for fintech and SaaS teams.
                    Model-agnostic, grounded in your sources with retrieval, and
                    private by design. Shipped in weeks, not quarters.
                  </p>
                  <a href="/contact" className="btn btn-pri !mt-6 inline-block">
                    Book a generative AI discovery call
                  </a>
                  <p className="reassure">
                    NDA on request. Your data stays yours.
                  </p>
                  <a href="#model-decision" className="tlink">
                    Which model is right for you? →
                  </a>
                </div>

                {/* <div className="console" aria-hidden="true">
                  <div className="chead">
                    <span>Knowledge assistant</span>
                    <span className="live">● Grounded</span>
                  </div>
                  {CONSOLE_LINES.map((line, i) => (
                    <div
                      key={i}
                      className={line.hot ? "cline hot" : "cline"}
                    >
                      <span className="tm">{line.tm}</span>
                      <span>{line.body}</span>
                    </div>
                  ))}
                  <div className="cline hot">
                    <span className="tm">edge</span>
                    <span>out of scope, no source: &quot;I do not know.&quot;</span>
                  </div>
                </div> */}
              </div>
            </Reveal>
          </div>
        </section>


        {/* Track record — expanded stats */}
        <section className="trec " style={{ borderBottom: "0" }}>
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
                <p className="v">5 <span className="acc">Days</span> </p>
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

        {/* 01 - What we build */}
        <section id="what-we-build">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="01" title="What we build" />
              <h2 className="h2">
                What we build,{" "}
                <span className="g">grouped by what you are making</span>
              </h2>
              <p className="subh">
                This buyer self-identifies by what they are shipping. Each card
                is one concrete capability.
              </p>
              <div className="practices">
                {BUILD_TYPES.slice(0, 3).map((b) => (
                  <div className="practice" key={b.n}>
                    <span className="n">{b.n}</span>
                    <h3>{b.title}</h3>
                    <p>{b.body}</p>
                  </div>
                ))}
              </div>
              <div className="practices" style={{ marginTop: 20 }}>
                {BUILD_TYPES.slice(3).map((b) => (
                  <div className="practice" key={b.n}>
                    <span className="n">{b.n}</span>
                    <h3>{b.title}</h3>
                    <p>{b.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 02 - The decision (signature) */}
        <section id="model-decision" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="02" title="The decision" />
              <h2 className="h2">
                First, which model,{" "}
                <span className="g">and grounded how?</span>
              </h2>
              <p className="subh">
                Every generative project turns on two choices, and most vendors
                pick for you to suit themselves. We pick for you, based on your
                data, privacy, latency, and budget.
              </p>
              <div className="optcards">
                {MODEL_OPTIONS.map((opt) => (
                  <div className="opt" key={opt.tag}>
                    <div className="ohead">
                      <span className="on2">{opt.tag}</span>
                      <h3>{opt.title}</h3>
                    </div>
                    {opt.rows.map((row) => (
                      <div className="orow" key={row.k}>
                        <span className="ok2">{row.k}</span>
                        <p>{row.v}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="kvs">
                {GROUNDING_CHOICE.map((row) => (
                  <div className="kv" key={row.k}>
                    <span className="kt">{row.k}</span>
                    <p>{row.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 03 - How RAG grounds your AI */}
        <section id="rag">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="03" title="How RAG grounds your AI" />
              <h2 className="h2">
                How we stop it from{" "}
                <span className="g">making things up</span>
              </h2>
              <p className="subh">
                Retrieval-augmented generation is how a model answers from your
                data instead of its training memory. We chunk and embed your
                sources, then store them in a vector database (
                <span className="mono">Pinecone</span>,{" "}
                <span className="mono">Weaviate</span>,{" "}
                <span className="mono">Qdrant</span>, or{" "}
                <span className="mono">pgvector</span>). For each question we
                retrieve the most relevant passages, rerank them, and give the
                model only what is relevant. The result is answers your users
                can verify, not confident fiction.
              </p>
              <div className="flow">
                {RAG_FLOW.map((node, i) => (
                  <FlowItem
                    key={node.fn}
                    node={node}
                    last={i === RAG_FLOW.length - 1}
                  />
                ))}
              </div>
              <p className="fnote">
                <span className="ln" aria-hidden="true" />
                Instructed to cite, and to say I do not know rather than guess
              </p>
            </Reveal>
          </div>
        </section>

        {/* 04 - Where your data goes (signature) */}
        <section id="data" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="04" title="Where your data goes" />
              <h2 className="h2">
                Where your data goes,{" "}
                <span className="g">in plain terms</span>
              </h2>
              <p className="subh">
                The question every serious buyer has and most agency pages skip.
                Plain, confident, no fearmongering.
              </p>
              <div className="kvs">
                {DATA_LEDGER.map((row) => (
                  <div className="kv" key={row.k}>
                    <span className="kt">{row.k}</span>
                    <p>{row.v}</p>
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
                From discovery{" "}
                <span className="g">to shipped feature</span>
              </h2>
              <p className="subh">
                Most generative builds ship a useful prototype in 4 weeks and
                production in 6 to 12, depending on grounding complexity, model
                choice, and integration.
              </p>
              <div className="steps">
                {STEPS.map((s) => (
                  <div className="step" key={s.sn}>
                    <span className="sn">{s.sn}</span>
                    <h4>{s.title}</h4>
                    <p>{s.body}</p>
                    <span className="t">{s.week}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 06 - Recent work */}
        <section id="recent" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="06" title="Recent work" />
              <h2 className="h2">
                A sample of <span className="g">recent work</span>
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
              <p className="secnote">
                References available under NDA. Anonymized is fine; we do not
                publish figures we cannot source.{" "}
                <span className="nv" title={NV}>
                  [NEEDS-VALIDATION: founder]
                </span>
              </p>
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
                Tell us what you want it to do. We&apos;ll tell you how to{" "}
                <span className="pp">build it right</span>
              </h2>
              <p>
                Book a 30-minute discovery call. We will map your use case and
                data, recommend the model and grounding approach, address your
                privacy needs, and send a written architecture and plan.
                No vendor lock-in, no hype.
              </p>
              <div className="row">
                <a href="/contact" className="btn btn-pri">
                  Book a generative AI discovery call
                </a>
                <a href="/ai-agents-and-automation" className="btn btn-ghost">
                  Need to automate workflows instead? See AI agents and
                  automation
                </a>
              </div>
              <p className="micro">NDA on request. Your data stays yours.</p>
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

function FlowItem({ node, last }: { node: FlowNode; last: boolean }) {
  return (
    <>
      <div className={node.hot ? "fnode hot" : "fnode"}>
        <span className="fn">{node.fn}</span>
        <span className="fd">{node.fd}</span>
      </div>
      {!last && (
        <span className="farrow" aria-hidden="true">
          →
        </span>
      )}
    </>
  );
}
