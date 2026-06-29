import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { MetadataRoute } from "next";
import { getCategories, getPosts } from "@/lib/blog";

const BASE = "https://www.lbmsolution.com";

// Refresh the sitemap on the same cadence as the blog index so newly published
// posts appear without a rebuild (the sitemap is data-driven from the CMS).
export const revalidate = 600;

/** Every published blog post, paginated out of the CMS (see app/api/blog-index). */
async function blogEntries(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];
  let page = 1;
  for (;;) {
    const { count, rows } = await getPosts({ page, limit: 100 });
    for (const r of rows) {
      entries.push({
        url: `${BASE}/blog/${r.slug}`,
        lastModified: new Date(r.publish_date ?? r.created_at),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
    if (entries.length >= count || rows.length === 0) break;
    page += 1;
  }
  return entries;
}

// A page is live when its markdown twin exists in content/pages (see docs/WIREMAP.md).
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dir = join(process.cwd(), "content/pages");
  const staticPages: MetadataRoute.Sitemap = readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const url = readFileSync(join(dir, f), "utf8").match(/^url:\s*(\S+)/m)?.[1] ?? "/";
      return {
        url: `${BASE}${url === "/" ? "" : url}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: url === "/" ? 1 : 0.8,
      };
    });

  const cats = await getCategories();
  const blogSections: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...cats.map((c) => ({
      url: `${BASE}/blog/category/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];

  return [...staticPages, ...blogSections, ...(await blogEntries())];
}
