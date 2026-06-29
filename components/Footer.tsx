import Link from "next/link";
import Icon from "@/components/Icon";
import { COMPANY, PRIMARY_EMAIL, PRIMARY_PHONE } from "@/lib/company";
import { SOLUTIONS_COLUMNS } from "@/components/nav/menuData";

// The footer "Solutions" section mirrors the header mega menu's structure:
// one collapsible dropdown per column (Blockchain, AI), each listing that
// column's exact pages. Single source of truth: menuData → SOLUTIONS_COLUMNS.

const COLS: { title: string; links: [string, string][] }[] = [
  {
    title: "Industries",
    links: [
      ["Fintech", "/industries/fintech"],
      ["B2B SaaS", "/industries/b2b-saas"],
      ["Web3 protocols", "/industries/web3-protocols"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Blogs", "/blog"],
      ["Case studies", "/case-studies"],
      ["Contact", "/contact"],
      // ["Careers", "/careers"],
    ],
  },
];

// Trust badges. Real LBM assets + profile links carried over from lbmsolution.com.
// G2 and GoodFirms profiles exist too (g2.com/products/lbm-solutions/reviews,
// goodfirms.co/company/lbm-solutions) but ship only once the founder supplies a
// white-background badge asset; do not fabricate a brand mark.
const BADGES: { name: string; src: string; href: string }[] = [
  {
    name: "Clutch",
    src: "/badges/clutch.png",
    href: "https://clutch.co/profile/lbm-solutions",
  },
  {
    name: "Trustpilot",
    src: "/badges/trustpilot.png",
    href: "https://www.trustpilot.com/review/lbmsolution.com",
  },
];

// Real values from lib/company.ts (carried over from lbmsolution.com).
const EMAIL = PRIMARY_EMAIL;
const PHONE = PRIMARY_PHONE.display;
const LINKEDIN = COMPANY.socials.linkedin;
const ENTITY = COMPANY.legalName;

const LEGAL: [string, string][] = [
  ["Privacy Policy", "/privacy-policy"],
  ["Terms and Conditions", "/terms-and-conditions"],
  // No standalone cookie policy; cookies are covered in the Privacy Policy.
  // ["Cookie Policy", "/privacy-policy#cookies"],
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fg">
          {/* Brand + trust signals */}
          <div className="fc fc-brand">
            <div className="fbrand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Link href="/">
                <img className="brand-logo" src="/lbm-logo.png" alt="LBM Solutions" width={246} height={48} />
              </Link>
            </div>
            <p className="ftag">
              Custom AI and blockchain engineering for B2B SaaS scale-ups and
              fintech teams.
            </p>
            <div className="fbadges">
              {BADGES.map((b) => (
                <a
                  key={b.name}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${b.name} reviews for LBM Solutions`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.src} alt={`${b.name} reviews`} width={338} height={121} />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions — mirrors the header: a dropdown per column (Blockchain, AI) */}
          <nav className="fc" aria-label="Solutions">
            <h5>Solutions</h5>
            {SOLUTIONS_COLUMNS.map((col) => (
              <details className="fdrop" key={col.header.label}>
                <summary>{col.header.label}</summary>
                <div className="fdrop-body">
                  {col.items.map((it) => (
                    <Link href={it.href} key={it.href}>
                      {it.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
          </nav>

          {/* Link columns */}
          {COLS.map((col) => (
            <nav className="fc" key={col.title} aria-label={col.title}>
              <h5>{col.title}</h5>
              {col.links.map(([label, href]) => (
                <Link href={href} key={label}>
                  {label}
                </Link>
              ))}
            </nav>
          ))}

          {/* Get in touch */}
          <div className="fc fcontact">
            <h5>Get in touch</h5>
            <a href={`mailto:${EMAIL}`}>
              <Icon name="mail" className="fico" />
              {EMAIL}
            </a>
            <a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}>
              <Icon name="phone" className="fico" />
              {PHONE}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LBM Solutions on LinkedIn"
            >
              <Icon name="linkedin" className="fico" />
              LinkedIn
            </a>
            <Link href="/contact" className="fcta">
              Book an architecture review →
            </Link>
          </div>
        </div>

        <div className="fb mono">
          <div className="fbl">
            {/* <span>© 2026 LBM Solutions</span> */}
            {/* <span aria-hidden="true">·</span> */}
            <span>{ENTITY}</span>
          </div>
          <div className="fbr">
            <nav className="flegal" aria-label="Legal">
              {LEGAL.map(([label, href]) => (
                <Link href={href} key={label}>
                  {label}
                </Link>
              ))}
            </nav>
            <span className="fgeo">US · UK· UAE · Singapore</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
