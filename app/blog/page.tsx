import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/blog/PostCard";
import {
  BlogHeader,
  CategoryChips,
  NewsletterBand,
  Pagination,
  PillarBand,
  SectionHead,
} from "@/components/blog/IndexSections";
import Backdrop from "@/components/Backdrop";
import { getCategories, getPosts } from "@/lib/blog";
import { toCards } from "@/lib/blogCards";

export const revalidate = 300;
const PAGE_SIZE = 12;
const BASE = "https://www.lbmsolution.com";

export const metadata: Metadata = {
  title: "Engineering blog | LBM Solutions",
  description:
    "Practical AI, blockchain, and software engineering guides for fintech and B2B SaaS teams.",
  alternates: { canonical: `${BASE}/blog` },
};

export default async function BlogIndex() {
  const [cats, { count, rows }] = await Promise.all([
    getCategories(),
    getPosts({ page: 1, limit: PAGE_SIZE }),
  ]);
  const cards = await toCards(rows, cats);
  const featured = cards.slice(0, 3);
  const grid = cards.slice(3);
  const totalPages = Math.ceil(count / PAGE_SIZE);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BASE}/blog`,
    name: "LBM Solutions engineering blog",
    url: `${BASE}/blog`,
    blogPost: cards.map((c) => ({
      "@type": "BlogPosting",
      headline: c.title,
      url: `${BASE}/blog/${c.slug}`,
      datePublished: c.date,
      author: { "@type": "Person", name: c.author },
    })),
  };

  return (
    <>
      <Header />
      <main className="blog">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="bg-host bhead-host">
          <Backdrop motif="hero" />
          <div className="wrap">
            <BlogHeader />
          </div>
        </div>
        <div className="wrap">
          {featured.length ? (
            <section className="feat-wrap" aria-label="Featured posts">
              <SectionHead label="Featured" />
              <div className="feat">
                <PostCard post={featured[0]} large />
                <div className="side">
                  {featured.slice(1).map((p) => (
                    <PostCard key={p.slug} post={p} compact />
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          <section aria-label="Browse by topic">
            <SectionHead label="Browse by topic" />
            <CategoryChips cats={cats} />
            <PillarBand />
          </section>

          <section aria-label="Latest articles">
            <SectionHead label="Latest articles" />
            <div className="bgrid">
              {grid.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
            <Pagination
              current={1}
              totalPages={totalPages}
              hrefFor={(n) => (n === 1 ? "/blog" : `/blog/page/${n}`)}
            />
          </section>

          <NewsletterBand source="blog_index" />
        </div>
      </main>
      <Footer />
    </>
  );
}
