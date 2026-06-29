import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/blog/PostCard";
import {
  CategoryChips,
  NewsletterBand,
  Pagination,
  PillarBand,
} from "@/components/blog/IndexSections";
import SearchBox from "@/components/blog/SearchBox";
import { getCategories, getPosts } from "@/lib/blog";
import { toCards } from "@/lib/blogCards";

export const revalidate = 300;
const PAGE_SIZE = 12;
const BASE = "https://www.lbmsolution.com";

type Props = { params: Promise<{ slug: string }>; searchParams: Promise<{ page?: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = (await getCategories()).find((c) => c.slug === slug);
  return {
    title: `${cat?.name ?? "Category"} articles | LBM Solutions blog`,
    description: `Engineering articles on ${cat?.name ?? slug} for fintech and B2B SaaS teams.`,
    alternates: { canonical: `${BASE}/blog/category/${slug}` },
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const [{ slug }, sp] = await Promise.all([params, searchParams]);
  const page = Math.max(1, Number(sp.page) || 1);
  const cats = await getCategories();
  const cat = cats.find((c) => c.slug === slug);
  if (!cat) notFound();

  const { count, rows } = await getPosts({ page, limit: PAGE_SIZE, categoryId: cat.id });
  const cards = await toCards(rows, cats);
  const totalPages = Math.ceil(count / PAGE_SIZE);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${cat.name} articles`,
    url: `${BASE}/blog/category/${slug}`,
    isPartOf: { "@type": "Blog", url: `${BASE}/blog` },
  };

  return (
    <>
      <Header />
      <main className="blog">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="wrap">
          <div className="bhead">
            <span className="kick mono">
              <span className="br">[</span> Category <span className="br">]</span>
            </span>
            <h1>{cat.name}</h1>
            <p className="subh">
              {count} article{count === 1 ? "" : "s"} for teams evaluating and building {cat.name.toLowerCase()} systems.
            </p>
            <SearchBox />
          </div>
          <CategoryChips cats={cats} active={slug} />
          <PillarBand />
          {cards.length ? (
            <section className="bgrid" aria-label={`${cat.name} posts`}>
              {cards.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </section>
          ) : (
            <p className="subh">No articles in this category yet.</p>
          )}
          <Pagination
            current={page}
            totalPages={totalPages}
            hrefFor={(x) => (x === 1 ? `/blog/category/${slug}` : `/blog/category/${slug}?page=${x}`)}
          />
          <NewsletterBand source={`category_${slug}`} />
        </div>
      </main>
      <Footer />
    </>
  );
}
