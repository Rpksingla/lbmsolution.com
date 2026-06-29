import type { Metadata } from "next";
import LpShell from "@/components/lp/LpShell";
import TrackRecord from "@/components/lp/TrackRecord";
import LeadForm from "@/components/lp/LeadForm";
import Backdrop from "@/components/Backdrop";
import LpBackground from "@/components/bg/LpBackground";
import Faq, { type FaqItem } from "@/components/Faq";
import Reveal from "@/components/Reveal";

const NV = "NEEDS-VALIDATION: founder";
const CTA = "Get my infrastructure reliability assessment";

export const metadata: Metadata = {
  title: "Blockchain Node Infrastructure With Real Uptime SLAs | LBM Solutions",
  description:
    "Managed RPC, validators, and indexing with uptime SLAs in writing. Validators monitored 24/7, slashing prevention built in. Get an infrastructure reliability assessment.",
  alternates: { canonical: "https://www.lbmsolution.com/lp/blockchain-node-infrastructure" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Blockchain Node Infrastructure With Real Uptime SLAs | LBM Solutions",
    description:
      "Managed RPC, validators, and indexing with uptime SLAs in writing, 24/7 monitoring, and slashing prevention, so your app and your stakers never hit a dead endpoint.",
    url: "https://www.lbmsolution.com/lp/blockchain-node-infrastructure",
    type: "website",
  },
};

const SLA = [
  { n: "01", title: "RPC uptime SLA", body: "A specific uptime figure written into the contract, not a best-effort promise." },
  { n: "02", title: "Validators monitored 24/7", body: "Slashing prevention, not just hosting. We watch the conditions that get stake cut." },
  { n: "03", title: "Fast indexed queries", body: "A response-time target on indexed reads, agreed in the SLA." },
  { n: "04", title: "Incident alerts fast", body: "An alert window measured in minutes, with on-call escalation behind it." },
];

const RUN = [
  { n: "01", title: "Managed RPC endpoints", body: "Multi-chain, load-balanced, and redundant so a single node failure is invisible." },
  { n: "02", title: "Validator operations", body: "Staking, monitoring, and slashing prevention across your validator set." },
  { n: "03", title: "Indexing and subgraphs", body: "The Graph and custom indexers for fast, fresh data." },
  { n: "04", title: "Archive nodes", body: "Full historical state for analytics and audits." },
  { n: "05", title: "Dedicated nodes", body: "Private, isolated infrastructure for teams that need it." },
  { n: "06", title: "Monitoring and alerting", body: "24/7 coverage with real on-call escalation, not a status page." },
];

const CHAINS = [
  "Ethereum",
  "Polygon",
  "Cosmos",
  "Solana",
  "Avalanche",
  "Arbitrum",
  "Optimism",
  "Base",
  "BNB",
];

const PROCESS = [
  { sn: "1", t: "Week 1", title: "Reliability assessment", body: "Audit of your current setup plus a written risk report." },
  { sn: "2", t: "Weeks 1 to 2", title: "Architecture and SLA", body: "Infrastructure plan plus a signed SLA." },
  { sn: "3", t: "Weeks 2 to 4", title: "Migration and provisioning", body: "Nodes live and monitored." },
  { sn: "4", t: "Week 4", title: "Handover and runbooks", body: "Docs plus escalation paths." },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What uptime do you actually guarantee?",
    a: "We commit to a specific uptime figure in the SLA and stand behind it contractually. We do not publish a number we cannot defend, so the exact figure is set against your chains and architecture in the reliability assessment.",
  },
  {
    q: "Do you prevent validator slashing?",
    a: "Validators are monitored 24/7 with slashing prevention built in, not just hosting. We watch the conditions that lead to slashing and escalate before stake is at risk. We treat your stake like ours.",
  },
  {
    q: "Which chains do you support?",
    a: "Ethereum, Polygon, Cosmos, Solana, Avalanche, Arbitrum, Optimism, Base, and BNB, among others. We confirm exact coverage for your stack in the assessment.",
  },
  {
    q: "Can you migrate our existing nodes with no downtime?",
    a: "We plan migrations to keep your endpoints live throughout. We stand up redundant infrastructure first, cut over behind a load balancer, and only decommission the old setup once the new one is proven. The cutover plan is part of the architecture and SLA stage.",
  },
  {
    q: "What is your incident response time?",
    a: "Alerts fire within a defined window measured in minutes, with real on-call humans behind the escalation path. The exact response and resolution targets are written into your SLA.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Blockchain node infrastructure",
  serviceType: "Blockchain node infrastructure",
  description:
    "Managed RPC endpoints, validator operations, indexing, and archive nodes with uptime SLAs in writing, 24/7 monitoring, and slashing prevention.",
  provider: { "@type": "Organization", name: "LBM Solutions", url: "https://www.lbmsolution.com" },
  url: "https://www.lbmsolution.com/lp/blockchain-node-infrastructure",
  areaServed: "Worldwide",
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

function Nv({ children }: { children: React.ReactNode }) {
  return (
    <span className="nv" title={NV}>
      {children}
    </span>
  );
}

export default function BlockchainNodeInfrastructure() {
  return (
    <LpShell cta={CTA}>
      {/* HERO + lead form. MESSAGE MATCH: "blockchain node infrastructure". Reliability-led, calm, concrete. */}
      <section className="lp-hero bg-host">
        <Backdrop motif="hero" />
        <LpBackground variant="siderays-tl" />
        <div className="wrap">
          <div>
            <div className="kick mono">
              <span>
                <span className="acc"></span> Blockchain node infrastructure <span className="acc"></span>
              </span>
            </div>
            <h1>
              Blockchain node infrastructure that <span className="pp">stays up when it matters</span>
            </h1>
            <p className="sub">
              Managed RPC, validators, and indexing with real uptime SLAs, so your app, your stakers, and your users
              never hit a dead endpoint.
            </p>
            <p className="reassure">We review your current setup and flag the failure points. Free. No obligation. Talk to an infra engineer.</p>
          </div>

          <LeadForm
            source="blockchain-node-infrastructure"
            submitLabel={CTA}
            fields={[
              { name: "need", label: "What you need", options: ["RPC", "Validators", "Indexing", "All of the above"] },
              { name: "setup", label: "Current setup", options: ["Self-hosted", "Public provider", "None yet"] },
            ]}
            footnote="No reset, no sales pressure. An infra engineer replies within 1 business day."
            trust={
              <>
                <div className="logos">
                  <span className="src">
                    <Nv>Infrastructure and DevOps teams running production chains</Nv>
                  </span>
                </div>
                <blockquote>
                  <Nv>We run the nodes and the monitoring so your team ships product instead of babysitting infrastructure, with alerts before issues reach your users.</Nv>
                  <span className="who">
                    <Nv>LBM Solutions, infrastructure team</Nv>
                  </span>
                </blockquote>
              </>
            }
          />
        </div>
      </section>

      {/* Trust strip */}
      <TrackRecord
        label="Operations"
        stats={[
          { n: "30", suffix: "+", label: "Chains supported" },
          { n: "200", suffix: "+", label: "Validators monitored" },
          { n: "10", suffix: "+", label: "Years running node infra" },
          { n: "24/7", label: "Monitored & on-call" },
        ]}
      />

      {/* SLA strip: the signature section of this page */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="01" title="The SLA" />
            <h2 className="h2">
              What &ldquo;reliable&rdquo; <span className="g">actually means here.</span>
            </h2>
            <div className="practices">
              {SLA.map((s) => (
                <div className="practice" key={s.n}>
                  <span className="n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
            <p className="secnote">
              We publish only SLAs we can contractually stand behind, so the exact uptime, latency, and response numbers
              are set against your stack in the reliability assessment. <Nv>You see them in writing before any contract is signed.</Nv>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Problem-aware framing */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="02" title="The real problem" />
            <h2 className="h2">
              Most teams do not notice their node infra <span className="g">until it fails.</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              <div><h4><span className="x">→</span> A down RPC takes your app down</h4><p>And your users blame you, not your provider.</p></div>
              <div><h4><span className="x">→</span> A slashed validator costs stake</h4><p>You lose stake and you lose trust at the same time.</p></div>
              <div><h4><span className="x">→</span> A lagging indexer breaks UX</h4><p>Stale data and a product that looks broken to users.</p></div>
              <div><h4><span className="x">→</span> Self-hosting to save money</h4><p>Until it costs you a launch at the worst possible moment.</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we run */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="03" title="What we run" />
            <h2 className="h2">
              The full node stack, <span className="g">managed and monitored.</span>
            </h2>
            <div className="spec">
              {RUN.map((r) => (
                <a href="#lead-form" key={r.n}>
                  <span className="sn">{r.n}</span>
                  <span>
                    <span className="st">{r.title}</span>
                    <span className="sd">{r.body}</span>
                  </span>
                  <span className="ar">↗</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Chains we support */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="04" title="Chains we support" />
            <h2 className="h2">
              Multi-chain coverage, <span className="g">confirmed for your stack.</span>
            </h2>
            <div className="logos" style={{ marginTop: 32 }}>
              {CHAINS.map((c) => (
                <span className="src" key={c}>{c}</span>
              ))}
            </div>
            <p className="secnote">
              We confirm exact coverage for your chains in the assessment. <Nv>Both EVM and major non-EVM chains are in scope.</Nv>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="05" title="How we onboard" />
            <h2 className="h2">
              From audit to live, <span className="g">in about four weeks.</span>
            </h2>
            <div className="steps">
              {PROCESS.map((s) => (
                <div className="step" key={s.sn}>
                  <span className="sn">{s.sn}</span>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                  <span className="t">{s.t}</span>
                </div>
              ))}
            </div>
            <p className="secnote">Ongoing operations begin after handover: 24/7 monitoring plus monthly reports.</p>
          </Reveal>
        </div>
      </section>

      {/* Case studies */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel index="06" title="Recent work" />
            <h2 className="h2">Recent work</h2>
            <div className="results">
              <div className="card">
                <h3>References available under NDA</h3>
                <p>
                  We share chain, region, and real outcomes (uptime, latency, slashing record) from managed
                  infrastructure on the reliability assessment.{" "}
                  <Nv>Named and anonymized references are available under NDA.</Nv> We do not publish
                  numbers we cannot verify.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why us */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="07" title="Why us" />
            <h2 className="h2">
              SLAs in writing, <span className="g">not best effort.</span>
            </h2>
            <div className="why" style={{ marginTop: 46 }}>
              <div><h4><span className="x">→</span> SLAs in writing</h4><p>Uptime and response targets in the contract, not a marketing page.</p></div>
              <div><h4><span className="x">→</span> 24/7 on-call</h4><p>Real humans behind the escalation path, not a status page.</p></div>
              <div><h4><span className="x">→</span> Slashing prevention built in</h4><p>We treat your stake like ours.</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="alt">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="08" title="Questions ops teams ask" />
            <h2 className="h2">Questions ops teams ask</h2>
            <Faq items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final">
        <Backdrop motif="beam" />
        <div className="dots2" aria-hidden="true" />
        <div className="wrap">
          <Reveal>
            <h2>
              Find your infrastructure&apos;s failure points <span className="pp">before your users do.</span>
            </h2>
            <p>Free review with an infra engineer. A written risk report. No obligation.</p>
            <div className="row">
              <a href="#lead-form" className="btn btn-pri">
                {CTA}
              </a>
            </div>
            <p className="micro">We flag the failure points first. No sales pressure.</p>
          </Reveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </LpShell>
  );
}
