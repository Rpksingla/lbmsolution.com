import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PhotoSlot from "@/components/PhotoSlot";
import {
  caseStudies,
  getCaseStudy,
  relatedCaseStudies,
  SERVICE_LABELS,
  SERVICE_CTA,
} from "@/lib/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Case study not found | LBM Solutions" };
  const title = `${cs.client}: ${SERVICE_LABELS[cs.service]} | LBM Solutions`;
  return {
    title,
    description: `${cs.problem} ${cs.approach}`,
    alternates: { canonical: `https://www.lbmsolution.com/case-studies/${cs.slug}` },
    openGraph: { title, description: cs.headlineMetric, url: `https://www.lbmsolution.com/case-studies/${cs.slug}`, type: "article" },
  };
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="label">
      <span className="mono i">{index}</span>
      <span className="mono">{title}</span>
      <span className="rule" />
    </div>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const related = relatedCaseStudies(cs);
  const cta = SERVICE_CTA[cs.service];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${cs.client}: ${SERVICE_LABELS[cs.service]}`,
    about: SERVICE_LABELS[cs.service],
    articleSection: "Case study",
    publisher: { "@type": "Organization", name: "LBM Solutions", url: "https://www.lbmsolution.com" },
    url: `https://www.lbmsolution.com/case-studies/${cs.slug}`,
  };

  return (
    <>
      <Header />
      <main>
        {/* Header block: result stated immediately */}
        <section className="cs-head">
          <div className="wrap">
            <div className="cs-head-top">
              <div className="cs-head-main lg:!mt-20 lg:!mb-10">
                <div className="cs-tags">
                  <span className="cs-tag mono !w-fit">{SERVICE_LABELS[cs.service]}</span>
                  <span className="cs-region mono">{cs.industry} · {cs.region}</span>
                </div>
                <h1>{cs.client}</h1>
              </div>
              <div className="">
                <p className="cs-headline">{cs.headlineMetric}</p>
                <p className="lede cs-head-lede !mt-6">{cs.problem}</p>
              </div>
            </div>
            <PhotoSlot kind={cs.heroKind} ratio="16/9" src={cs.heroSrc} alt={`${cs.client}: ${cs.approach}`} className="cs-hero-img overflow-hidden" />
          </div>
        </section>

        {/* Narrative + sticky metrics */}
        <section>
          <div className="wrap">
            <div className="cs-layout">
              <aside className="cs-aside">
                <div className="cs-metrics" aria-label="Key results">
                  {cs.metrics.map((m) => (
                    <div className="cs-metric-cell" key={m.label}>
                      <div className="v">{m.value}</div>
                      <p>{m.label}</p>
                    </div>
                  ))}
                </div>
                <div className="cs-glance">
                  <h3 className="mono">Project at a glance</h3>
                  <dl>
                    <div><dt>Timeline</dt><dd>{cs.timeline}</dd></div>
                    <div><dt>Team</dt><dd>{cs.teamSize}</dd></div>
                    <div><dt>Service</dt><dd>{SERVICE_LABELS[cs.service]}</dd></div>
                    <div>
                      <dt>Tech stack</dt>
                      <dd>
                        <span className="cs-stack">
                          {cs.techStack.map((t) => (
                            <span className="cs-chip mono" key={t}>{t}</span>
                          ))}
                        </span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </aside>

              <div className="cs-body">
                <Reveal>
                  <SectionLabel index="01" title="The challenge" />
                  {cs.challenge.map((p, i) => (
                    <p className="cs-p" key={i}>{p}</p>
                  ))}
                </Reveal>

                <Reveal>
                  {cs.bodyImages[0] && (
                    <PhotoSlot kind={cs.bodyImages[0].kind} ratio={cs.bodyImages[0].ratio} src={cs.bodyImages[0].src} alt={`${cs.client}: ${cs.bodyImages[0].kind}`} className="cs-body-img" />
                  )}
                  <SectionLabel index="02" title="What we did" />
                  {cs.approachBody.map((p, i) => (
                    <p className="cs-p" key={i}>{p}</p>
                  ))}
                </Reveal>

                <Reveal>
                  {cs.bodyImages[1] && (
                    <PhotoSlot kind={cs.bodyImages[1].kind} ratio={cs.bodyImages[1].ratio} src={cs.bodyImages[1].src} alt={`${cs.client}: ${cs.bodyImages[1].kind}`} className="cs-body-img" />
                  )}
                  <SectionLabel index="03" title="The outcome" />
                  {cs.outcome.map((p, i) => (
                    <p className="cs-p" key={i}>{p}</p>
                  ))}
                  <blockquote className="cs-quote">
                    {cs.quote.text}
                    <span className="who">
                      {cs.quote.name}, {cs.quote.role}
                    </span>
                  </blockquote>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="alt">
            <div className="wrap">
              <Reveal>
                <SectionLabel index="04" title="Related work" />
                <div className="cs-related">
                  {related.map((r) => (
                    <Link href={`/case-studies/${r.slug}`} className="cs-rcard" key={r.slug}>
                      <PhotoSlot kind={r.heroKind} ratio="16/9" src={r.heroSrc} alt={`${r.client}: ${r.problem}`} className="cs-rcard-img" />
                      <span className="cs-tag mono w-fit font-bold !text-[11px] !mt-3">{SERVICE_LABELS[r.service]}</span>
                      <p className="cs-client">{r.client}</p>
                      <p className="cs-metric sm">{r.headlineMetric}</p>
                      <span className="cs-more mono font-bold !text-[13px] !tracking-none">Read it →</span>
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* ONE CTA, matched to the service */}
        <section className="final">
          <div className="dots2" aria-hidden="true" />
          <div className="wrap">
            <Reveal>
              <h2>
                Building something similar? <br className="hidden xl:block" /><span className="pp">Let&apos;s scope it.</span>
              </h2>
              <p>A 30-minute architecture review with an engineer who has shipped this before. No obligation.</p>
              <div className="row">
                <a href={cta.href} className="btn btn-pri">
                  {cta.label}
                </a>
              </div>
              <p className="micro">NDA on request.</p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
