/**
 * Single source of truth for the primary navigation.
 * Edit labels/links here; MegaMenu.tsx and the JSON-LD render from this.
 */

export type NavLink = { label: string; href: string };

/** Content icon keys for ranked items; rendered in the badge by MegaMenu. */
export type IconKey =
  | "audit"
  | "payments"
  | "token"
  | "defi"
  | "agent"
  | "genai"
  | "fintech"
  | "saas"
  | "web3";

export type RankedItem = {
  label: string;
  href: string;
  /** demand rank 1-6; kept for ordering reference */
  rank?: number;
  /** content icon shown in the badge (replaces the rank number) */
  icon?: IconKey;
  /** short descriptor under the label */
  desc?: string;
  /** visually lighter, no badge, no descriptor */
  secondary?: boolean;
};

export type SolutionsColumn = {
  header: NavLink;
  items: RankedItem[];
  /** optional labelled sub-group rendered after items */
  subGroup?: { label: string; items: RankedItem[] };
};

export type FeaturedRail = {
  label: string;
  title?: NavLink;
  sub: string;
  cta: NavLink;
  proof?: string;
};

export type IndustryCard = {
  header: NavLink;
  icon: IconKey;
  tagline: string;
  services: NavLink[];
};

export type TopItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "panel"; label: string; id: PanelId };

export type PanelId = "solutions" | "industries";

/* ---------------- top level ---------------- */

export const TOP_ITEMS: TopItem[] = [
  { kind: "panel", label: "Solutions", id: "solutions" },
  { kind: "panel", label: "Industries", id: "industries" },
  { kind: "link", label: "Case studies", href: "/case-studies" },
  { kind: "link", label: "Blogs", href: "/blog" },
  { kind: "link", label: "About", href: "/about" },
];

export const CONTACT_CTA: NavLink = { label: "Contact", href: "/contact" };

/* ---------------- solutions panel ---------------- */

export const SOLUTIONS_COLUMNS: SolutionsColumn[] = [
  {
    header: { label: "Blockchain", href: "/blockchain-engineering" },
    items: [
      { rank: 1, icon: "audit", label: "Smart contract audits", href: "/smart-contract-audits", desc: "Senior auditors, fixed fee" },
      { rank: 3, icon: "payments", label: "Stablecoin payment rails", href: "/stablecoin-payment-rails", desc: "B2B crypto checkout" },
      { rank: 4, icon: "token", label: "Tokenization & RWA", href: "/tokenization-and-rwa", desc: "Real-world asset tokens" },
      { rank: 6, icon: "defi", label: "DeFi protocol engineering", href: "/defi-protocol-engineering", desc: "Lending, AMMs, perps" },
      { label: "Crypto wallet development", href: "/crypto-wallet-development", secondary: true },
      { label: "Crypto exchange development", href: "/crypto-exchange-development", secondary: true },
    ],
  },
  {
    header: { label: "AI", href: "/ai-agents-and-automation" },
    items: [
      { rank: 2, icon: "agent", label: "AI agents & automation", href: "/ai-agents-and-automation", desc: "Workflow & ops agents" },
      { rank: 5, icon: "genai", label: "Generative AI development", href: "/generative-ai-development", desc: "LLM apps & RAG" },
    ],
  },
];

/** Quiet utility links rendered in the panel footer strip. */
export const BROWSE_LINKS: NavLink[] = [
  { label: "Blockchain", href: "/blockchain-engineering" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Blogs", href: "/blog" },
];

export const SOLUTIONS_FEATURED: FeaturedRail = {
  label: "Most requested",
  title: { label: "Smart contract audits", href: "/smart-contract-audits" },
  sub: "Fixed-fee quote in 48 hrs, written scope before you commit.",
  cta: { label: "Book a scoping call", href: "/contact" },
  /* FOUNDER INPUT NEEDED: verified contracts-audited count and TVL-secured
     figure for this proof line (previously "200+ contracts, $400M+ TVL
     secured.", both unvalidated). Until then it states verifiable claims
     from the audits page. */
  proof: "Senior auditors. Fixed-fee scope in writing.",
};

/* ---------------- industries panel ---------------- */

export const INDUSTRY_CARDS: IndustryCard[] = [
  {
    header: { label: "Fintech", href: "/industries/fintech" },
    icon: "fintech",
    tagline: "Payments · Lending · Neobanks",
    services: [
      { label: "Stablecoin payment rails", href: "/stablecoin-payment-rails" },
      { label: "Smart contract audits", href: "/smart-contract-audits" },
      { label: "Tokenization & RWA", href: "/tokenization-and-rwa" },
    ],
  },
  {
    header: { label: "B2B SaaS", href: "/industries/b2b-saas" },
    icon: "saas",
    tagline: "AI features · Integrations",
    services: [
      { label: "AI agents & automation", href: "/ai-agents-and-automation" },
      { label: "Generative AI", href: "/generative-ai-development" },
    ],
  },
  {
    header: { label: "Web3 protocols", href: "/industries/web3-protocols" },
    icon: "web3",
    tagline: "Tokens · DeFi · Infrastructure",
    services: [
      { label: "Smart contract audits", href: "/smart-contract-audits" },
      { label: "DeFi engineering", href: "/defi-protocol-engineering" },
      { label: "Tokenization & RWA", href: "/tokenization-and-rwa" },
    ],
  },
];

export const INDUSTRIES_FEATURED: FeaturedRail = {
  label: "Not sure where you fit?",
  sub: "Tell us your stack and stage. We will scope the right engagement.",
  cta: { label: "Talk to engineering", href: "/contact" },
};

/* ---------------- JSON-LD (SiteNavigationElement) ---------------- */

const BASE = "https://www.lbmsolution.com";

/** Main nav destinations for schema.org SiteNavigationElement (audit EF-9). */
export function navJsonLd() {
  const links: NavLink[] = [
    ...SOLUTIONS_COLUMNS.flatMap((c) => [c.header, ...c.items, ...(c.subGroup?.items ?? [])]),
    ...BROWSE_LINKS,
    ...INDUSTRY_CARDS.map((c) => c.header),
    { label: "Case studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    CONTACT_CTA,
  ];
  // dedupe by href
  const seen = new Set<string>();
  const unique = links.filter((l) => !seen.has(l.href) && seen.add(l.href));
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: unique.map((l, i) => ({
      "@type": "SiteNavigationElement",
      position: i + 1,
      name: l.label,
      url: `${BASE}${l.href}`,
    })),
  };
}
