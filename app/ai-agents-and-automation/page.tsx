import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";
import Link from "next/link";

const NV = "NEEDS-VALIDATION: founder";

export const metadata: Metadata = {
  title: "AI Agents & Workflow Automation | LBM Solutions",
  description:
    "We build production AI agents that survive real workloads, not demos. Multi-agent systems with observability, guardrails, and human-in-the-loop. Live in 6 to 12 weeks.",
  alternates: {
    canonical: "https://www.lbmsolution.com/ai-agents-and-automation",
  },
  openGraph: {
    title: "AI Agents & Workflow Automation | LBM Solutions",
    description:
      "We build production AI agents that survive real workloads, not demos. Multi-agent systems with observability, guardrails, and human-in-the-loop. Live in 6 to 12 weeks.",
    url: "https://www.lbmsolution.com/ai-agents-and-automation",
    type: "website",
  },
};

/* ---------- data ---------- */

type ConsoleLine = {
  tm: string;
  body: React.ReactNode;
  hot?: boolean;
};

const TRACE: ConsoleLine[] = [
  {
    tm: "00:00",
    body: (
      <>
        <span className="cchip">task</span> support ticket received, classify and
        resolve
      </>
    ),
  },
  {
    tm: "00:01",
    body: (
      <>
        plan: 4 steps <span className="okk">ok</span>
      </>
    ),
  },
  {
    tm: "00:02",
    body: (
      <>
        tool call crm.lookup <span className="okk">ok</span>
      </>
    ),
  },
  {
    tm: "00:03",
    body: (
      <>
        tool call docs.search <span className="okk">ok</span>
      </>
    ),
  },
  {
    tm: "00:04",
    body: (
      <>
        self-check confidence 0.94 <span className="okk">ok</span>
      </>
    ),
  },
  {
    tm: "00:05",
    body: (
      <>
        resolved, draft sent, run logged <span className="okk">ok</span>
      </>
    ),
  },
  {
    tm: "00:06",
    hot: true,
    body: <>next case confidence 0.41, escalate to human</>,
  },
];

const SIGNALS = [
  {
    title: "Customer support triage",
    body: "High volume, repetitive questions, clear knowledge base. Agents draft and resolve, humans handle the hard 20%.",
    sig: "Signal: high volume + clear knowledge base",
  },
  {
    title: "Sales and revenue ops",
    body: "CRM hygiene, lead research, follow-up drafting, meeting notes turned into actions.",
    sig: "Signal: repetitive steps + structured systems",
  },
  {
    title: "Document and data extraction",
    body: "Invoices, contracts, KYC packets, and forms turned into structured data.",
    sig: "Signal: high volume + consistent formats",
  },
  {
    title: "Internal research",
    body: "Pulling, comparing, and summarizing across many sources and tools.",
    sig: "Signal: many sources + senior time spent",
  },
  {
    title: "Back-office workflows",
    body: "Multi-step processes that hop between systems and currently need a person to babysit them.",
    sig: "Signal: multi-step + cross-system handoffs",
  },
];

const GAP_ITEMS = [
  {
    gt: "Observability",
    body: "Every agent run is traced, logged, and inspectable with Langfuse or LangSmith, so when something goes wrong you can see exactly where, not guess.",
  },
  {
    gt: "Evals",
    body: "We test agents against real cases before and after every change, so an improvement cannot quietly break what already worked.",
  },
  {
    gt: "Guardrails",
    body: "Input and output validation, PII redaction, and hard limits on what an agent is allowed to do or spend.",
  },
  {
    gt: "Human in the loop",
    body: "Confidence thresholds route the uncertain cases to a person instead of acting wrong with confidence.",
  },
  {
    gt: "Cost control",
    body: "Token and tool-call budgets, caching, and model routing, so the agent is cheaper than the work it replaces.",
  },
];

type FlowNode = { fn: string; fd: string; hot?: boolean };

const FLOW: FlowNode[] = [
  { fn: "Perceive", fd: "read the task" },
  { fn: "Plan", fd: "break into steps" },
  { fn: "Act", fd: "tools, MCP" },
  { fn: "Observe", fd: "check the result" },
  { fn: "Resolve or escalate", fd: "finish or hand off", hot: true },
];

const STEPS = [
  {
    sn: "01",
    title: "Assessment",
    body: "We map and cost your workflows and pick the highest-ROI candidates. Output: a written automation map.",
    t: "Week 0",
  },
  {
    sn: "02",
    title: "Pilot",
    body: "We build one agent or workflow end to end, with observability and evals from day one. Output: a working pilot on your real data.",
    t: "Weeks 1 to 4",
  },
  {
    sn: "03",
    title: "Harden and expand",
    body: "Guardrails, human-in-the-loop, and integration with your stack. We expand to the next workflows.",
    t: "Weeks 4 to 10",
  },
  {
    sn: "04",
    title: "Run and improve",
    body: "Monitoring, evals on every change, and tuning as your processes shift.",
    t: "Ongoing",
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Will agents replace our team?",
    a: "No. They take the repetitive 80% so your people do the judgment work. The human-in-the-loop design keeps a person on the cases that need one.",
  },
  {
    q: "How do you stop agents from doing something wrong?",
    a: "Guardrails, hard action and spend limits, confidence thresholds that escalate to a human, and evals that catch regressions before they ship.",
  },
  {
    q: "Which frameworks and models do you use?",
    a: "LangGraph and CrewAI for orchestration, Langfuse or LangSmith for observability, and we choose the model per task across OpenAI, Anthropic Claude, Google Gemini, or open-weight models. We are not locked to one vendor.",
  },
  {
    q: "Can agents use our existing tools?",
    a: "Yes. They connect to your systems through APIs, function calling, and MCP. The agent works inside your stack, not beside it.",
  },
  {
    q: "What about our data?",
    a: "We design for your privacy requirements, including self-hosted or VPC deployment and no-training agreements with model providers. See the data section on generative AI development at /generative-ai-development.",
  },
  {
    q: "Who owns what we build?",
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
  name: "AI Agents and Workflow Automation",
  serviceType: "AI agent and workflow automation engineering",
  description:
    "Production AI agents and multi-agent workflow automation with observability, evals, guardrails, and human-in-the-loop, built on LangGraph and CrewAI.",
  url: "https://www.lbmsolution.com/ai-agents-and-automation",
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
      name: "AI agents and automation",
      item: "https://www.lbmsolution.com/ai-agents-and-automation",
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

export default function AiAgentsAndAutomation() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero ai !border-0">
            <img src="https://media.worksbuddy.ai/1781612142542-282455a0816a-atuomation.png?w=1920&h=900" alt="" className="absolute top-0 right-0 w-full h-full object-cover" />
             <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-sm lg:hidden"></div>
          <div className="dots" aria-hidden="true" />
          <div className="wrap">
            <div className="heroai">
              <div className="htxt">
                <Reveal>
                  <div className="kick">
                    <span className="mono">AI agents and automation</span>
                  </div>
                  <h1>
                    Automate the work your team should never be doing{" "}
                    <span className="pp">by hand</span>
                  </h1>
                  <p className="lede !mt-7">
                    We build production AI agents that survive real workloads,
                    not slick demos that break on edge two. Multi-agent systems
                    with observability, guardrails, and a human in the loop,
                    built on <span className=""> LangGraph</span> and{" "}
                    <span className=""> CrewAI</span>, live in 6 to 12 weeks.
                  </p>
                  <a href="/contact" className="btn btn-pri !mt-6 inline-block" >
                    Book an automation assessment
                  </a>
                  <p className="reassure">
                    We map which of your workflows are worth automating and
                    <br className="hidden md:block" />  model the real hours and cost they take today.
                  </p>
                  <a href="#use-cases" className="tlink">
                    See what we automate ↓
                  </a>
                </Reveal>
              </div>
           
              {/* <div className="console" aria-hidden="true">
                <div className="chead">
                  <span>Agent run #4821</span>
                  <span className="live">● Live</span>
                </div>
                {TRACE.map((line, i) => (
                  <div
                    key={i}
                    className={line.hot ? "cline hot" : "cline"}
                  >
                    <span className="tm">{line.tm}</span>
                    <span>{line.body}</span>
                  </div>
                ))}
              </div> */}
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

        {/* 01 - The ROI offer, up front */}
        <section id="assessment">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="01" title="The offer, up front" />
              <div className="offer !gap-[42px]">
                <div className="otxt">
                  <h2 className="h2">
                    First, we find out if automation is even<span className="g"> worth it for you</span>
                  </h2>
                  <p className="!max-w-full !mt-6">
                    Before we build anything, we run an automation assessment.
                    We look at the workflows your team repeats every day, measure
                    the hours and cost they take now, and tell you which ones are
                    worth automating and which are not. You leave with a short
                    written map: the candidate workflows, the expected time
                    saved, and a rough payback period. If nothing clears the bar,
                    we tell you, and you have lost nothing but 30 minutes.
                  </p>
                  <div className="ocol">
                    <a href="/contact" className="btn btn-pri">
                      Book an automation assessment
                    </a>
                    <p className="reassure">
                      30 minutes. You keep the automation map either way.
                    </p>
                  </div>
                </div>
                <div className="omedia">
                  <img
                    src="https://media.worksbuddy.ai/1781246696570-019acde1ccfa-Frame_48098266.png?w=605&h=518"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 02 - Where agents earn their keep */}
        <section id="use-cases" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="02" title="Where automation pays" />
              <h2 className="h2">
                Where agents <span className="g">earn their keep</span>
              </h2>
              <p className="subh">
                Each workflow below comes with the signal that it is a good
                automation candidate. If a workflow matches the signal, it is
                worth a closer look.
              </p>
              <div className="sigrows">
                {SIGNALS.map((s) => (
                  <div className="sigrow" key={s.title}>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                    <span className="sig">{s.sig}</span>
                  </div>
                ))}
              </div>
              <p className="secnote">
                The pattern is always the same. High volume, rule-heavy, and
                currently eating senior people&apos;s time. If that describes a
                workflow, it is a candidate.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 03 - The gap (signature) */}
        <section id="gap">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="03" title="Demo vs production" />
              <h2 className="h2">
                Anyone can demo an agent.{" "}
                <span className="g">
                  Almost nobody ships one that survives.
                </span>
              </h2>
              <p className="subh">
                A demo works once on a happy path. A production agent runs
                thousands of times against messy reality. The difference is
                everything we build that you never see in a demo.
              </p>
              <div className="gapgrid">
                <div className="demo">
                  <span className="mono">The demo</span>
                  <span className="pct">20%</span>
                  <p>works once on the happy path</p>
                </div>
                <div className="prod">
                  {GAP_ITEMS.map((g) => (
                    <div className="gapitem" key={g.gt}>
                      <span className="gt">{g.gt}</span>
                      <p>{g.body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="secnote">
                The demo is the easy 20%. The other 80% is why most agent
                projects quietly die in a slide deck. We build the 80%.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 04 - Under the hood */}
        <section id="loop" className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="04" title="Under the hood" />
              <h2 className="h2">
                How an agent <span className="g">actually works</span>
              </h2>
              <p className="subh">
                A production agent loops: it perceives the task, plans steps,
                calls tools and APIs through{" "}
                <span className="mono">function calling</span> and{" "}
                <span className="mono">MCP</span>, checks its own work, and
                either finishes or escalates. Memory carries context across
                steps, orchestration coordinates multiple agents when one is not
                enough. We design that loop for your workflow, then wire it to
                your real systems.
              </p>
              <div className="flow">
                {FLOW.map((node, i) => (
                  <FlowNodeAndArrow
                    key={node.fn}
                    node={node}
                    last={i === FLOW.length - 1}
                  />
                ))}
              </div>
              <div className="fnote">
                <span className="ln" />
                observe loops back to plan · low confidence routes to a human
              </div>
            </Reveal>
          </div>
        </section>

        {/* 05 - How we work */}
        <section id="process">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="05" title="How we work" />
              <h2 className="h2">
                From assessment <span className="g">to live agents</span>
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
              <p className="secnote">
                Most teams have a useful pilot live in 4 weeks and a hardened
                system in 6 to 12, depending on workflow count and integration
                complexity.
              </p>
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
                References available under NDA. We link each engagement to a full
                case study once the client approves disclosure.
              </p>
              <Link href="/case-studies" className="tlink">
                Read the case studies →
              </Link>
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
              <p className="secnote">
                Building something generative instead? See{" "}
                <a href="/generative-ai-development" className="acc">
                  generative AI development
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final" id="contact">
          <div className="dots2" aria-hidden="true" />
          <div className="wrap">
            <Reveal>
              <h2>
                Find out what a week of repetitive work <br />is actually {""}
                <span className="pp">costing you</span>
              </h2>
              <p>
                Book a 30-minute automation assessment. We will map your
                repeatable workflows, model the hours and cost they take today,
                and tell you which ones are worth automating. No pitch. If
                automation will not pay for you, we will say so.
              </p>
              <div className="row">
                <a href="/contact" className="btn btn-pri">
                  Book an automation assessment
                </a>
                {/* <a href="/generative-ai-development" className="btn btn-ghost">
                  Building something generative instead?
                </a> */}
              </div>
              <p className="micro">
                NDA on request. You keep the automation map either way.
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

function FlowNodeAndArrow({
  node,
  last,
}: {
  node: FlowNode;
  last: boolean;
}) {
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
