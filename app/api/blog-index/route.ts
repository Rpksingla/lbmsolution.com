import { excerptOf, getPosts } from "@/lib/blog";
import { deDash } from "@/lib/voice";

export const revalidate = 600;

/** Lightweight search index: every post's title, slug, excerpt, category. */
export async function GET() {
  const all: { t: string; s: string; e: string; c: string }[] = [];
  let page = 1;
  for (;;) {
    const { count, rows } = await getPosts({ page, limit: 100 });
    for (const r of rows) {
      all.push({
        t: deDash(r.title.trim()),
        s: r.slug,
        e: deDash(excerptOf(r)),
        c: r.category?.name ?? "News",
      });
    }
    if (all.length >= count || rows.length === 0) break;
    page += 1;
  }
  return Response.json(all, {
    headers: { "Cache-Control": "public, s-maxage=600, stale-while-revalidate=3600" },
  });
}
