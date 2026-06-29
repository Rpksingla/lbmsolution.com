/**
 * Category -> cluster -> funnel targets. The ONLY place blog CTAs are mapped
 * (per PRD: data-driven, never hardcoded per post). Keys are CMS category slugs.
 */

export type Funnel = {
  cluster: string;
  pillar: { label: string; href: string };
  service: { label: string; href: string; desc: string };
};

const FUNNELS: Record<string, Funnel> = {
  blockchain: {
    cluster: "token-launch",
    pillar: { label: "Token launch guide", href: "/learn/token-launch-guide" },
    service: {
      label: "Tokenization & RWA engineering",
      href: "/tokenization-and-rwa",
      desc: "Compliance-aware token systems, built and audited by senior engineers.",
    },
  },
  "crypto-development": {
    cluster: "token-launch",
    pillar: { label: "Token launch guide", href: "/learn/token-launch-guide" },
    service: {
      label: "Smart contract audits",
      href: "/smart-contract-audits",
      desc: "Manual review plus Slither, Mythril, and Echidna. Fixed-fee quote in 48 hours.",
    },
  },
  "metaverse-development": {
    cluster: "token-launch",
    pillar: { label: "Token launch guide", href: "/learn/token-launch-guide" },
    service: {
      label: "Blockchain engineering",
      href: "/blockchain-engineering",
      desc: "Token systems and on-chain settlement on Ethereum, Base, Arbitrum, and Solana.",
    },
  },
  "ai-development": {
    cluster: "ai-engineering",
    pillar: { label: "Blockchain cost guide", href: "/learn/blockchain-cost-guide" },
    service: {
      label: "AI agents & automation",
      href: "/ai-agents-and-automation",
      desc: "Production agent systems with evaluation and observability from day one.",
    },
  },
  "software-development": {
    cluster: "crm-buyers",
    pillar: { label: "CRM buyer's guide", href: "/learn/crm-buyers-guide" },
    service: {
      label: "Custom software development",
      href: "/contact",
      desc: "Product engineering for fintech and SaaS, inside your stack and your repo.",
    },
  },
  "website-development": {
    cluster: "crm-buyers",
    pillar: { label: "CRM buyer's guide", href: "/learn/crm-buyers-guide" },
    service: {
      label: "Custom software development",
      href: "/contact",
      desc: "Product engineering for fintech and SaaS, inside your stack and your repo.",
    },
  },
  "mobile-app-development": {
    cluster: "crm-buyers",
    pillar: { label: "CRM buyer's guide", href: "/learn/crm-buyers-guide" },
    service: {
      label: "Custom software development",
      href: "/contact",
      desc: "Product engineering for fintech and SaaS, inside your stack and your repo.",
    },
  },
  "digital-marketing": {
    cluster: "cost-guide",
    pillar: { label: "Blockchain cost guide", href: "/learn/blockchain-cost-guide" },
    service: {
      label: "See engagement pricing",
      href: "/pricing",
      desc: "Published ranges by service so you can self-qualify before a call.",
    },
  },
  news: {
    cluster: "cost-guide",
    pillar: { label: "Blockchain cost guide", href: "/learn/blockchain-cost-guide" },
    service: {
      label: "Talk to engineering",
      href: "/contact",
      desc: "Tell us your stack and stage. We will scope the right engagement.",
    },
  },
};

const DEFAULT_FUNNEL: Funnel = FUNNELS.news;

/** Resolve by category slug, falling back to a name-derived slug, then default. */
export function funnelFor(category: { name?: string; slug?: string } | null): Funnel {
  const slug = category?.slug ?? category?.name?.toLowerCase().replace(/\s+/g, "-") ?? "";
  return FUNNELS[slug] ?? DEFAULT_FUNNEL;
}

/** Pillar promo band entries for the blog index (PRD funnel table). */
export const PILLAR_BAND = [
  { label: "Token launch guide", href: "/learn/token-launch-guide", to: "/tokenization-and-rwa" },
  { label: "CRM buyer's guide", href: "/learn/crm-buyers-guide", to: "/contact" },
  { label: "Blockchain cost guide", href: "/learn/blockchain-cost-guide", to: "/pricing" },
];
