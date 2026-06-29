import {
  excerptOf,
  fmtDate,
  type Category,
  type PostListItem,
} from "@/lib/blog";
import { funnelFor } from "@/lib/blogFunnel";
import { cardRole } from "@/lib/authors";
import { deDash } from "@/lib/voice";
import type { CardData } from "@/components/blog/PostCard";

/** Resolve a category's slug from the categories list (list rows only carry the name). */
export function catSlug(name: string | undefined, cats: Category[]): string {
  return cats.find((c) => c.name === name)?.slug ?? (name ?? "news").toLowerCase().replace(/\s+/g, "-");
}

/**
 * Build card view models from list rows ONLY (no per-post fetch).
 *
 * The list endpoint already returns `seo.meta_description`, so the excerpt is
 * accurate without pulling each full article. Reading time needs the article
 * body (not in the list payload), so it is left 0 here and the card omits the
 * "min read" label — this avoids ~12 extra CMS round-trips per list/pagination
 * page that made navigation slow. The article page still shows real reading time.
 */
export async function toCards(rows: PostListItem[], cats: Category[]): Promise<CardData[]> {
  return rows.map((r) => {
    const slug = catSlug(r.category?.name, cats);
    return {
      title: deDash(r.title.trim()),
      slug: r.slug,
      excerpt: excerptOf(r),
      author: r.author?.full_name ?? "LBM Solutions",
      authorRole: cardRole(r.author?.full_name ?? ""),
      date: fmtDate(r.publish_date ?? r.created_at),
      readingTime: 0,
      image: r.thumbnail_image,
      categoryName: r.category?.name ?? "News",
      categorySlug: slug,
      cluster: funnelFor({ name: r.category?.name, slug }).cluster,
    };
  });
}
