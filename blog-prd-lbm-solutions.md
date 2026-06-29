# Blog Experience PRD — LBM Solutions

**Product:** Blog index page + inner blog post page
**Owner:** Marketing lead + CTO
**Audience for this doc:** Engineering (build), design (visual QA), Claude Code (implementation)
**Goal in one line:** Turn 220+ disconnected blog posts into a fast, beautiful, trust-building reading experience that funnels founders to pillar guides and service pages.

---

## 1. Why this matters

The blog is LBM's single largest content asset (220+ posts) and currently its most wasted one. The index renders empty to crawlers, the category filters are dead links, there are no author signals, and posts don't link to the services they should sell. This PRD fixes the experience and wires every post into the conversion funnel.

**Primary users:** Series A–C fintech and B2B SaaS founders and their engineers — technical, time-poor, skeptical of agencies. They skim on mobile between meetings and read deeply on desktop when evaluating.

**Jobs to be done:**
- "I'm researching how to do X (launch a token, pick a CRM, estimate cost) — give me a clear, credible answer fast."
- "Is this agency actually competent, or is this generic SEO filler?"
- "If they're good, how do I talk to them without a hard sell?"

**Success = ** the reader (a) finishes the post, (b) trusts LBM more than when they arrived, and (c) takes one next step: read the matching pillar guide, view the relevant service page, subscribe, or book a call.

---

## 2. Problems being fixed (from the site audit)

1. Blog index renders empty for crawlers and no-JS users — must be server-rendered.
2. Category / topic filters point to `javascript:void(0)` — must become real, navigable, indexable category views.
3. No featured posts, no visual hierarchy on the index.
4. No author bylines or bios — weak E-E-A-T for Google.
5. No date or reading time on cards — weak trust signal.
6. Newsletter signup has no working form action.
7. 220 posts pass no authority anywhere — no internal linking from posts to pillars or services.
8. No category landing pages or taxonomy in the sitemap.

---

## 3. Scope

**In scope:** Blog index/listing page, category view, single post (inner) page, shared components (post card, author block, newsletter, CTA cards, related posts).

**Out of scope (separate work):** Writing or rewriting post content, building the three pillar guides, the CMS migration itself. This PRD assumes posts already exist in a data source (CMS, MDX, or API) and renders them — it does not invent posts.

---

## 4. Blog index page

**Route:** align to final IA (`/resources/blog` or `/blog`). Keep individual post slugs as they already exist in the CMS to preserve SEO. Add real category routes: `/blog/category/[slug]`.

### 4.1 Sections (top to bottom)

1. **Page header** — H1 ("Engineering notes, guides, and field reports" or similar — sentence case, no "Insights & Trends" filler), one-line subhead naming who it's for. Optional search input.
2. **Featured strip** — 1 large featured post (latest pillar-adjacent or editor's pick) + 2 secondary featured cards beside it on desktop; stacks on mobile.
3. **Category filter row** — horizontal chips: All, Blockchain, AI, CRM, Tokenization, Cost & pricing, plus any real categories from the data source. Each chip navigates to a server-rendered category view (real URL), not a client-only toggle. Active chip is visually marked.
4. **Pillar guide promo band** — a distinct band surfacing the three deep guides (token launch guide → funnels to tokenization, CRM buyers guide → CRM engineering, blockchain cost guide → pricing). This is a primary conversion surface: deep guides convert better than posts.
5. **Post grid** — responsive cards (see 4.2). 3 columns desktop, 2 tablet, 1 mobile. 12–18 posts per page.
6. **Pagination or load-more** — must be crawlable. Prefer real paginated URLs (`?page=2` or `/blog/page/2`) over JS-only infinite scroll, or implement infinite scroll with crawlable fallback links.
7. **Newsletter signup** — working form, double opt-in friendly, captures email + stores source. Single field + button. Honest microcopy ("Occasional engineering notes. No spam, unsubscribe anytime.").
8. **Footer** — sitewide footer.

### 4.2 Post card anatomy

Each card shows, in order: thumbnail image (16:9, lazy-loaded below the fold, WebP), category tag, post title (2-line clamp), one-line excerpt (2-line clamp), then a meta row with author name, published date, and reading time. Whole card is clickable; title is the semantic link. Hover state is subtle (slight lift or border emphasis, no heavy shadow).

### 4.3 Index conversion goals
- Move readers into a pillar guide (highest-intent path).
- Capture newsletter emails (top-of-funnel nurture).
- Make category browsing effortless so session depth rises.

---

## 5. Inner blog post page (the reading experience)

This is where "feels amazing to read" is won or lost. Target: a reading experience as clean as a well-set long-form publication, equally good on a phone and a 27-inch monitor.

### 5.1 Sections (top to bottom)

1. **Breadcrumb** — Home / Blog / Category / Post (with BreadcrumbList schema).
2. **Category tag + title (H1)** — large, tight leading, sentence case.
3. **Byline row** — author avatar + name (links to author page/bio), published date, "updated" date if applicable, reading time. These are the trust signals.
4. **Hero image** — optional, priority-loaded if present (it's the LCP element).
5. **Reading progress bar** — thin bar at top showing scroll progress. Respects reduced-motion.
6. **Table of contents** — auto-generated from H2/H3. Sticky in a side rail on desktop, collapsible accordion at the top on mobile. Highlights the active section.
7. **Article body** — the typographic core (see 5.2).
8. **Inline CTA card** — one mid-article contextual CTA card linking to the relevant service or pillar for this post's cluster (see 5.4). Styled as a distinct card, not a banner ad.
9. **Author bio block** — at the end: photo, name, role, 1–2 line bio, optional links. Boosts E-E-A-T.
10. **Share + copy-link row** — copy link, LinkedIn, X. No clutter.
11. **Related posts** — 3 posts from the same cluster/category.
12. **Final CTA band** — value-exchange CTA tied to the cluster ("Planning a token launch? Book a 30-min architecture review" → /tokenization-and-rwa). One clear action.
13. **Footer.**

### 5.2 Readability specification (mobile + desktop)

This is mandatory, not aesthetic preference:

- **Measure (line length):** body content column max-width ~680–720px so lines stay at ~65–75 characters. Never full-width body text on desktop.
- **Body font size:** 18–20px desktop, 17–18px mobile. Never below 16px for body.
- **Line height:** 1.7 for body.
- **Paragraph rhythm:** generous spacing between paragraphs (~1.2–1.6em). Short paragraphs (2–4 sentences).
- **Headings:** clear H2/H3 hierarchy with more space above than below; visually distinct from body weight.
- **Lists, blockquotes, pull quotes:** styled for scanability. Pull quotes for emphasis on long posts.
- **Code blocks:** monospace, syntax highlighting, horizontal scroll on overflow, copy button. This is a technical blog — code must look first-class.
- **Inline images:** sit within the measure, rounded corners, optional caption in muted small text, lazy-loaded.
- **Links:** clearly colored, underlined or on-hover underline; visited state acceptable.
- **Dark mode:** support if the site has it; ensure contrast in both modes.
- **Vertical rhythm:** consistent spacing scale; nothing cramped.

### 5.3 Mobile-specific
- TOC collapses to a tappable "On this page" accordion under the byline.
- Sticky bottom CTA bar appears after the reader passes the hero ("Talk to engineering" or cluster CTA), dismissible.
- Tap targets ≥44px. No horizontal scroll except inside code blocks.
- Images and embeds never overflow the viewport.

### 5.4 Conversion funnel (per cluster)

Every post is wired to its cluster's pillar and service. Map by category:

| Post cluster | Inline + final CTA links to (pillar) | Service page |
|---|---|---|
| Token / listing | /learn/token-launch-guide | /tokenization-and-rwa |
| CRM | /learn/crm-buyers-guide | /crm-engineering |
| Cost / pricing | /learn/blockchain-cost-guide | /pricing |
| Smart contracts / audits | /learn/token-launch-guide | /smart-contract-audits |
| AI | (no pillar yet) | /ai-agents-and-automation |
| DeFi | /learn/token-launch-guide | /defi-protocol-engineering |

Rules: one pillar link in the intro, one near the conclusion, one inline service CTA card mid-post, one final CTA band. Do not over-stuff links — relevance over volume. The CTA target is driven by the post's category in data, not hardcoded per post.

---

## 6. Cross-cutting requirements

### 6.1 Voice and copy (UI strings and any generated microcopy)
- Sentences ≤ 25 words; active voice 80%+.
- No em dashes anywhere. US English spelling.
- Banned words: "cutting-edge", "world-class", "veteran team", and the cliché "200+". No exclamation points except sparingly in headlines.
- Microcopy is plain and confident, never hypey.

### 6.2 Design tokens
- Use the site's existing design tokens (color, spacing, radius, type scale). Do not hardcode hex values if tokens exist.
- Flat, clean, generous whitespace. Subtle borders over heavy shadows.

### 6.3 Performance budgets
- LCP < 2.5s on 4G mobile; Lighthouse Performance > 85.
- Server-render (SSR) or static-generate (SSG) both the index and posts — crawlers and no-JS users must see full content. This directly fixes the empty-index bug.
- Images: WebP/AVIF, responsive `srcset`, lazy-load below the fold, priority-load the hero/LCP image. No layout shift (set width/height or aspect-ratio).
- No render-blocking JS above the fold.

### 6.4 Accessibility (WCAG AA)
- Exactly one H1 per page; correct H2 > H3 order, no skips.
- All images have descriptive alt text; decorative images marked.
- Full keyboard navigation; visible focus states; logical tab order.
- Color contrast AA in light and dark modes.
- Respect `prefers-reduced-motion` (progress bar, animations).
- TOC and accordions have correct ARIA.

### 6.5 SEO and schema
- Index: `CollectionPage` / `Blog` schema; unique title + meta; paginated URLs crawlable.
- Category views: real indexable URLs with unique titles.
- Post: `BlogPosting`/`Article` JSON-LD with headline, author, datePublished, dateModified, image, publisher; `BreadcrumbList`; sitewide `Organization`.
- Canonical tags self-referencing; OG + Twitter card tags with real per-post images (1200x630).
- Internal links from posts to pillars and services rendered in the DOM (not hover-only).

### 6.6 Analytics events
Track: `post_view`, `scroll_depth` (25/50/75/100), `toc_click`, `inline_cta_click` (with target), `final_cta_click` (with target), `pillar_link_click`, `service_link_click`, `newsletter_signup`, `related_post_click`, `share_click`. Capture UTM params and store post category + cluster for funnel analysis.

---

## 7. Acceptance criteria

- Index and posts fully server-rendered; crawlers see all posts and full article text. Empty-index bug gone.
- Category chips navigate to real, indexable category URLs that filter correctly.
- Post cards show image, category, title, excerpt, author, date, reading time.
- Pillar promo band present on index; newsletter form actually submits and stores.
- Inner post hits the readability spec: ~65–75 char measure, 18–20px body, 1.7 line height, generous spacing — verified on mobile and desktop.
- TOC, reading progress, author bio, related posts, inline + final CTAs all present and wired to the correct cluster targets via data.
- Lighthouse: Performance > 85, Accessibility > 95, SEO 100. LCP < 2.5s on 4G.
- Valid `BlogPosting` + `BreadcrumbList` schema (passes Rich Results test).
- Zero `javascript:void(0)` links; zero banned voice words in UI strings.
- No horizontal scroll on mobile except code blocks; no layout shift.

---

## 8. Claude Code build prompt

Paste the prompt from the chat message that accompanies this file. It instructs Claude Code to inspect the existing stack, render posts from the real data source (never invent content), and build both pages to this PRD.
