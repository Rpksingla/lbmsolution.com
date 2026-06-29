import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/blog/PostCard";
import PostClient from "@/components/blog/PostClient";
import ShareRow from "@/components/blog/ShareRow";
import Toc from "@/components/blog/Toc";
import TrackLink from "@/components/blog/TrackLink";
import {
  cfImg,
  cfSrcSet,
  excerptOf,
  fmtDate,
  getCategories,
  getPost,
  getPosts,
  prepareArticle,
  readingTimeOf,
} from "@/lib/blog";
import { funnelFor } from "@/lib/blogFunnel";
import { cardRole } from "@/lib/authors";
import Icon, { type IconName } from "@/components/Icon";
import { deDash } from "@/lib/voice";
import { catSlug, toCards } from "@/lib/blogCards";

export const revalidate = 300;
const BASE = "https://www.lbmsolution.com";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found" };
  const title = deDash(post.seo?.meta_title ?? post.title.trim());
  const description = excerptOf(post);
  const og = cfImg(post.banner_image ?? post.thumbnail_image, "w=1200,format=auto");
  return {
    title: `${title} | LBM Solutions`,
    description,
    alternates: { canonical: `${BASE}/blog/${slug}` },
    openGraph: {
      title,
      description,
      url: `${BASE}/blog/${slug}`,
      type: "article",
      images: og ? [{ url: og }] : undefined,
    },
    twitter: { card: "summary_large_image", title, description, images: og ? [og] : undefined },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const [post, cats] = await Promise.all([getPost(slug), getCategories()]);
  if (!post) notFound();

  const category = { name: post.category?.name, slug: catSlug(post.category?.name, cats) };
  const funnel = funnelFor(category);
  const { toc, first, second } = prepareArticle(post.content, post.banner_image);
  const minutes = readingTimeOf(post.content);
  const url = `${BASE}/blog/${slug}`;
  const published = post.publish_date ?? post.created_at;
  const hero = post.banner_image;
  // Author social links straight from the CMS (only render the ones present).
  const sl = post.author?.social_links;
  const socials: { key: string; href: string; icon: IconName; label: string }[] = [];
  if (sl?.linkedin) socials.push({ key: "linkedin", href: sl.linkedin, icon: "linkedin", label: "LinkedIn" });
  if (sl?.twitter) socials.push({ key: "twitter", href: sl.twitter, icon: "x", label: "X (Twitter)" });
  if (sl?.instagram) socials.push({ key: "instagram", href: sl.instagram, icon: "instagram", label: "Instagram" });
  if (sl?.github) socials.push({ key: "github", href: sl.github, icon: "github", label: "GitHub" });

  // related: same category, excluding self
  const cat = cats.find((c) => c.slug === category.slug);
  const related = cat
    ? (await getPosts({ limit: 4, categoryId: cat.id })).rows.filter((r) => r.slug !== slug).slice(0, 3)
    : [];
  const relatedCards = await toCards(related, cats);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: deDash(post.title.trim()),
      description: excerptOf(post),
      image: hero ? [cfImg(hero, "w=1200,format=auto")] : undefined,
      datePublished: published,
      author: { "@type": "Person", name: post.author?.full_name ?? "LBM Solutions" },
      publisher: {
        "@type": "Organization",
        name: "LBM Solutions",
        url: BASE,
      },
      mainEntityOfPage: url,
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: category.name ?? "Category",
          item: `${BASE}/blog/category/${category.slug}`,
        },
        { "@type": "ListItem", position: 4, name: deDash(post.title.trim()), item: url },
      ],
    },
  ];

  return (
    <>
      <Header />
      <PostClient
        slug={slug}
        cluster={funnel.cluster}
        ctaHref="/contact"
        ctaLabel="Book a 30-min review"
      />
      <main className="post">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="wrap">

          <div className="post-grid">
            <article>
              <Link href={`/blog/category/${category.slug}`} className="cat mono">
                {category.name}
              </Link>
              <h1>{deDash(post.title.trim())}</h1>
              <div className="byline">
                <span className="av" aria-hidden="true">
                  {post.author?.profile_image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={post.author.profile_image} alt="" width={40} height={40} />
                  ) : (
                    (post.author?.full_name ?? "L").charAt(0)
                  )}
                </span>
                <span>
                  <b>
                    {post.author?.full_name ?? "LBM Solutions"}
                    <i className="role">, {cardRole(post.author?.full_name ?? "")}</i>
                  </b>
                  <span className="d">
                    {fmtDate(published)} · {minutes} min read
                  </span>
                </span>
              </div>

              {hero ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="hero-img"
                  src={cfImg(hero, "w=1400,format=auto") ?? hero}
                  srcSet={cfSrcSet(hero, [720, 1080, 1400])}
                  sizes="(max-width: 820px) 100vw, 720px"
                  alt={deDash(post.title.trim())}
                  width={1400}
                  height={788}
                  fetchPriority="high"
                  decoding="async"
                />
              ) : null}

              <div className="pillar-box">
                <span className="mono">From the guide</span>
                <TrackLink
                  href={funnel.pillar.href}
                  event="pillar_link_click"
                  params={{ post: slug, cluster: funnel.cluster, placement: "intro" }}
                >
                  {funnel.pillar.label} →
                </TrackLink>
              </div>

              <div id="article-body" className="prose">
                <div dangerouslySetInnerHTML={{ __html: first }} />
                <aside className="inline-cta">
                  <span className="mono lbl">Related service</span>
                  <p className="t">
                    <TrackLink
                      href={funnel.service.href}
                      event="service_link_click"
                      params={{ post: slug, cluster: funnel.cluster, placement: "mid_article" }}
                    >
                      {funnel.service.label} →
                    </TrackLink>
                  </p>
                  <p className="d">{funnel.service.desc}</p>
                  <TrackLink
                    href="/contact"
                    event="inline_cta_click"
                    params={{ post: slug, cluster: funnel.cluster, placement: "mid_article" }}
                    className="btn btn-pri"
                  >
                    Book a 30-min architecture review →
                  </TrackLink>
                </aside>
                {second ? <div dangerouslySetInnerHTML={{ __html: second }} /> : null}
                <p className="pillar-out">
                  Planning this work? Start with the{" "}
                  <TrackLink
                    href={funnel.pillar.href}
                    event="pillar_link_click"
                    params={{ post: slug, cluster: funnel.cluster, placement: "conclusion" }}
                  >
                    {funnel.pillar.label.toLowerCase()}
                  </TrackLink>
                  .
                </p>
              </div>

              <div className="author-bio">
                <span className="av lg" aria-hidden="true">
                  {post.author?.profile_image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={post.author.profile_image} alt="" width={64} height={64} />
                  ) : (
                    (post.author?.full_name ?? "L").charAt(0)
                  )}
                </span>
                <div>
                  <span className="ab-label mono">About author</span>
                  <b>{post.author?.full_name ?? "LBM Solutions"}</b>
                  {post.author?.short_bio ? <p>{post.author.short_bio}</p> : null}
                  {socials.length ? (
                    <div className="ab-socials">
                      {socials.map((s) => (
                        <a
                          key={s.key}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${post.author?.full_name ?? "Author"} on ${s.label}`}
                        >
                          <Icon name={s.icon} />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* <ShareRow url={url} title={deDash(post.title.trim())} slug={slug} /> */}
            </article>

            <aside className="rail">
              <Toc entries={toc} slug={slug} />
              <div className="rail-cta">
                <span className="mono">Talk to the engineers</span>
                <TrackLink
                  href="/contact"
                  event="inline_cta_click"
                  params={{ post: slug, cluster: funnel.cluster, placement: "rail" }}
                  className="btn btn-pri !text-start"
                >
                  Book a 30-min architecture review 
                </TrackLink>
              </div>
            </aside>
          </div>
        </div>

        {relatedCards.length ? (
          <section className="related wrap" aria-label="Related posts">
            <h2 className="h2">Keep reading</h2>
            <div className="bgrid">
              {relatedCards.map((p) => (
                <PostCard key={p.slug} post={p} trackEvent="related_post_click" />
              ))}
            </div>
          </section>
        ) : null}

        <section className="final">
          <div className="dots2" aria-hidden="true" />
          <div className="wrap">
            <h2>
              Build it with <span className="pp">engineers</span>.
            </h2>
            <p>{funnel.service.desc}</p>
            <div className="row">
              <TrackLink
                href={funnel.service.href}
                event="final_cta_click"
                params={{ post: slug, cluster: funnel.cluster }}
                className="btn btn-pri"
              >
                {funnel.service.label} →
              </TrackLink>
              <TrackLink
                href="/contact"
                event="final_cta_click"
                params={{ post: slug, cluster: funnel.cluster }}
                className="btn btn-ghost"
              >
                Talk to engineering
              </TrackLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
