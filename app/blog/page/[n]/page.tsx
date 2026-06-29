import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/blog/PostCard";
import {
  BlogHeader,
  CategoryChips,
  NewsletterBand,
  Pagination,
} from "@/components/blog/IndexSections";
import { getCategories, getPosts } from "@/lib/blog";
import { toCards } from "@/lib/blogCards";

export const revalidate = 300;
const PAGE_SIZE = 12;
const BASE = "https://www.lbmsolution.com";

export async function generateMetadata({ params }: { params: Promise<{ n: string }> }): Promise<Metadata> {
  const { n } = await params;
  return {
    title: `Engineering blog, page ${n} | LBM Solutions`,
    description: "Practical AI, blockchain, and software engineering guides.",
    alternates: { canonical: `${BASE}/blog/page/${n}` },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const page = Number(n);
  if (!Number.isInteger(page) || page < 1) notFound();
  if (page === 1) redirect("/blog");

  const [cats, { count, rows }] = await Promise.all([
    getCategories(),
    getPosts({ page, limit: PAGE_SIZE }),
  ]);
  if (!rows.length) notFound();
  const cards = await toCards(rows, cats);
  const totalPages = Math.ceil(count / PAGE_SIZE);

  return (
    <>
      <Header />
      <main className="blog">
        <div className="wrap">
          <BlogHeader />
          <CategoryChips cats={cats} />
          <section className="bgrid" aria-label={`Posts, page ${page}`}>
            {cards.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </section>
          <Pagination
            current={page}
            totalPages={totalPages}
            hrefFor={(x) => (x === 1 ? "/blog" : `/blog/page/${x}`)}
          />
          <NewsletterBand source={`blog_page_${page}`} />
        </div>
      </main>
      <Footer />
    </>
  );
}
