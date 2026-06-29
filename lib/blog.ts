/**
 * Server-side blog data layer (CMS REST API). Server components only,
 * so the API key never reaches the browser (fixes the old NEXT_PUBLIC leak).
 * All fetches use ISR (revalidate) so pages are crawlable and fresh.
 */

import { deDash, deDashHtml } from "@/lib/voice";

const BASE = process.env.CMS_BASE_URL ?? "";
const KEY = process.env.CMS_API_KEY ?? "";
const API_BASE = BASE.replace(/\/v1\/posts$/, "");
const REVALIDATE = 300;
// Categories change very rarely; cache them far longer so post pages don't pay
// the ~0.8s categories fetch on every cold load.
const CATEGORIES_REVALIDATE = 3600;

export type Category = { id: string; name: string; slug: string };

export type PostListItem = {
  id: string;
  title: string;
  slug: string;
  category: { name: string };
  author: { full_name: string };
  publish_date: string;
  created_at: string;
  thumbnail_image: string | null;
  seo: { meta_title?: string; meta_description?: string } | null;
};

export type Post = PostListItem & {
  content: string;
  banner_image: string | null;
  schema_type: string | null;
  author: {
    full_name: string;
    profile_image: string | null;
    short_bio: string | null;
    email?: string;
    social_links?: {
      instagram?: string;
      linkedin?: string;
      twitter?: string;
      github?: string;
    } | null;
  };
};

async function cms<T>(path: string, revalidate: number = REVALIDATE): Promise<T> {
  // Server-side fetch needs an absolute URL. If the CMS is unconfigured
  // (no CMS_BASE_URL), `path` is relative — bail clearly instead of hanging.
  if (!/^https?:\/\//i.test(path)) {
    throw new Error(`CMS not configured (set CMS_BASE_URL); got relative URL "${path}"`);
  }
  const res = await fetch(`${path}`, {
    headers: { "x-api-key": KEY },
    next: { revalidate },
  });
  if (!res.ok) throw new Error(`CMS ${res.status} for ${path}`);
  return res.json();
}

export async function getCategories(): Promise<Category[]> {
  // Degrade gracefully: if the CMS is unconfigured (no CMS_BASE_URL) or
  // unreachable, return no categories instead of crashing the page.
  try {
    const d = await cms<{ data: Category[] }>(`${API_BASE}/v1/categories`, CATEGORIES_REVALIDATE);
    return d.data ?? [];
  } catch {
    return [];
  }
}

export async function getPosts(opts: {
  page?: number;
  limit?: number;
  categoryId?: string;
}): Promise<{ count: number; rows: PostListItem[] }> {
  const { page = 1, limit = 12, categoryId } = opts;
  let url = `${BASE}?limit=${limit}&page=${page}`;
  if (categoryId) url += `&category=${categoryId}`;
  // Degrade gracefully on an unconfigured/unreachable CMS (same as getPost).
  try {
    const d = await cms<{ model: { count: number; rows: PostListItem[] } }>(url);
    return d.model ?? { count: 0, rows: [] };
  } catch {
    return { count: 0, rows: [] };
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    // NOTE: the list endpoint wraps in {model}, the single endpoint in {data}.
    const d = await cms<{ model?: Post; data?: Post }>(`${BASE}/${encodeURIComponent(slug)}`);
    return d.model ?? d.data ?? null;
  } catch {
    return null;
  }
}

/* ---------------- derived fields (never invented) ---------------- */

export function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

/** Excerpt: CMS meta_description first, else first ~160 chars of body text. */
export function excerptOf(p: { seo?: PostListItem["seo"]; content?: string }): string {
  const meta = p.seo?.meta_description?.trim();
  if (meta) return deDash(meta);
  if (p.content) {
    const t = stripHtml(p.content);
    return deDash(t.length > 160 ? `${t.slice(0, 157).trimEnd()}...` : t);
  }
  return "";
}

/** Reading time computed from word count at 225 wpm. */
export function readingTimeOf(content: string): number {
  const words = stripHtml(content).split(" ").length;
  return Math.max(1, Math.round(words / 225));
}

export function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/* ---------------- Cloudflare Images variants (srcset) ---------------- */

/** CMS images live on imagedelivery.net with flexible variants enabled. */
export function cfImg(url: string | null, params: string): string | null {
  if (!url) return null;
  if (!url.includes("imagedelivery.net")) return url;
  return url.replace(/\/[^/]*$/, `/${params}`);
}

export function cfSrcSet(url: string | null, widths: number[]): string | undefined {
  if (!url || !url.includes("imagedelivery.net")) return undefined;
  return widths.map((w) => `${cfImg(url, `w=${w},format=auto`)} ${w}w`).join(", ");
}

/* ---------------- article HTML processing (server) ---------------- */

export type TocEntry = { id: string; text: string; level: 2 | 3 };

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 64);
}

/**
 * Prepares CMS article HTML for rendering:
 * - strips a leading <img> when it duplicates the banner (banner renders as the hero)
 * - adds ids to h2/h3 (for the TOC) and collects entries
 * - lazy-loads inline images
 * - splits the article ~45% through (top-level blocks) for the inline CTA card
 */
export function prepareArticle(content: string, bannerUrl: string | null) {
  let html = deDashHtml(content.trim());

  // The CMS pattern puts the featured image at the top of the body as well.
  // The template renders banner_image as the hero, so any leading <img> is a duplicate.
  if (bannerUrl) {
    const lead = html.match(/^(?:<p[^>]*>\s*)?<img[^>]*>(?:\s*<\/p>)?/);
    if (lead) html = html.slice(lead[0].length).trim();
  }

  const toc: TocEntry[] = [];
  const seen = new Set<string>();
  html = html.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi, (_m, lvl, attrs, inner) => {
    let id = slugify(inner) || `section-${toc.length + 1}`;
    while (seen.has(id)) id += "-x";
    seen.add(id);
    toc.push({ id, text: stripHtml(inner), level: Number(lvl) as 2 | 3 });
    return `<h${lvl}${attrs} id="${id}">${inner}</h${lvl}>`;
  });

  html = html.replace(/<img(?![^>]*loading=)/gi, '<img loading="lazy" decoding="async"');

  // Split ~45% through, but ONLY at depth-0 boundaries. Cutting inside an open
  // element (CMS wrapper divs) yields unbalanced chunks, the browser repairs the
  // DOM, and React reports a hydration mismatch.
  const VOID = new Set(["img", "br", "hr", "input", "source", "meta", "link", "area", "col", "embed", "track", "wbr"]);
  const tags = [...html.matchAll(/<\/?([a-zA-Z][a-zA-Z0-9-]*)(?:\s[^>]*?)?(\/?)>/g)];
  let depth = 0;
  const cuts: number[] = [];
  for (const t of tags) {
    const name = t[1].toLowerCase();
    const isClose = t[0].startsWith("</");
    const selfClosing = t[2] === "/" || VOID.has(name);
    if (isClose) {
      depth = Math.max(0, depth - 1);
      if (depth === 0) cuts.push((t.index ?? 0) + t[0].length);
    } else if (!selfClosing) {
      depth += 1;
    }
  }
  let first = html;
  let second = "";
  if (cuts.length > 4) {
    const cut = cuts[Math.floor(cuts.length * 0.45)];
    first = html.slice(0, cut);
    second = html.slice(cut);
  }

  return { toc, first, second };
}
