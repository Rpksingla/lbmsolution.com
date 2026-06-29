import Link from "next/link";
import TrackLink from "./TrackLink";
import NewsletterForm from "./NewsletterForm";
import SearchBox from "./SearchBox";
import { PILLAR_BAND } from "@/lib/blogFunnel";
import type { Category } from "@/lib/blog";

export function BlogHeader() {
  return (
    <div className="bhead  ">
      <span className="kick mono mx-auto !justify-center !text-[#6c47ff]  tlink">
        <span className="br "></span> Engineering blog <span className="br"></span>
      </span>
      <h1 className="!leading-[1.2] !text-[30px] sm:!text-[40px] xl:!text-[70px] capitalize ">
        Insights for teams shipping <span className="acc">AI and <br />blockchain</span> systems
      </h1>
      <p className="subh">
        Practical guides for fintech and B2B SaaS founders, CTOs, and engineers. Written by the
        people who build and audit these systems.
      </p>
      <SearchBox />
    </div>
  );
}

/** On-wedge categories only (B2); other category URLs stay live but are not promoted. */
const ON_WEDGE = new Set([
  "news",
  "ai-development",
  "software-development",
  "crypto-development",
  "blockchain",
  "case-study",
]);

/** Editorial section divider: mono label + hairline rule (matches site .label pattern). */
export function SectionHead({ label, children }: { label: string; children?: React.ReactNode }) {
  return (
    <div className="bsec-head">
      <span className="mono lbl">{label}</span>
      <span className="rule" />
      {children}
    </div>
  );
}

export function CategoryChips({ cats, active }: { cats: Category[]; active?: string }) {
  const shown = cats.filter((c) => ON_WEDGE.has(c.slug) || c.slug === active);
  return (
    <nav className="chips" aria-label="Blog categories">
      <Link href="/blog" className={!active ? "on" : ""}>
        All
      </Link>
      {shown.map((c) => (
        <Link
          key={c.id}
          href={`/blog/category/${c.slug}`}
          className={active === c.slug ? "on" : ""}
          aria-current={active === c.slug ? "page" : undefined}
        >
          {c.name}
        </Link>
      ))}
    </nav>
  );
}

export function PillarBand() {
  return (
    <aside className="pillars" aria-label="Start with the guides">
      <span className="mono lbl">Start here</span>
      {PILLAR_BAND.map((p) => (
        <TrackLink key={p.href} href={p.href} event="pillar_link_click" params={{ placement: "index_band" }}>
          {p.label} →
        </TrackLink>
      ))}
    </aside>
  );
}

export function Pagination({
  current,
  totalPages,
  hrefFor,
}: {
  current: number;
  totalPages: number;
  hrefFor: (n: number) => string;
}) {
  if (totalPages <= 1) return null;
  const win = [...Array(totalPages).keys()]
    .map((i) => i + 1)
    .filter((n) => n === 1 || n === totalPages || Math.abs(n - current) <= 2);
  return (
    <nav className="pgn" aria-label="Pagination">
      {current > 1 ? <Link href={hrefFor(current - 1)}>← Newer</Link> : <span />}
      <div className="nums">
        {win.map((n, i) => (
          <span key={n}>
            {i > 0 && win[i - 1] !== n - 1 ? <span className="gap">…</span> : null}
            {n === current ? (
              <span className="on" aria-current="page">
                {n}
              </span>
            ) : (
              <Link href={hrefFor(n)}>{n}</Link>
            )}
          </span>
        ))}
      </div>
      {current < totalPages ? <Link href={hrefFor(current + 1)}>Older →</Link> : <span />}
    </nav>
  );
}

export function NewsletterBand({ source }: { source: string }) {
  return (
    <section className="nlband !p-10">
      <div>
        <h2>One useful email a month</h2>
        <p>New guides and engineering breakdowns. No sales sequences, unsubscribe any time.</p>
      </div>
      <NewsletterForm source={source} />
    </section>
  );
}
