"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  BROWSE_LINKS,
  CONTACT_CTA,
  INDUSTRIES_FEATURED,
  INDUSTRY_CARDS,
  SOLUTIONS_COLUMNS,
  SOLUTIONS_FEATURED,
  TOP_ITEMS,
  type FeaturedRail,
  type IconKey,
  type PanelId,
  type RankedItem,
} from "./menuData";

const OPEN_DELAY = 130; // hover-intent: delay before opening
const CLOSE_DELAY = 260; // hover-intent: delay before closing

/* ---------- content icons (16px, inherit currentColor) ---------- */

const ICONS: Record<IconKey, React.ReactNode> = {
  // shield-check — smart contract audits
  audit: (
    <>
      <path d="M8 1.5l5 2v4c0 3.2-2.1 5.5-5 6.5-2.9-1-5-3.3-5-6.5v-4l5-2z" />
      <path d="M5.8 8l1.4 1.5L10.2 6" />
    </>
  ),
  // coins — stablecoin payment rails
  payments: (
    <>
      <ellipse cx="6" cy="4.5" rx="3.5" ry="2" />
      <path d="M2.5 4.5v3c0 1.1 1.6 2 3.5 2s3.5-.9 3.5-2v-3" />
      <path d="M6.5 8.5c.6.3 1.4.5 2.3.5 1.9 0 3.5-.9 3.5-2v-3" />
    </>
  ),
  // cube — tokenization & RWA
  token: (
    <>
      <path d="M8 1.8l5.2 3v6.4L8 14.2l-5.2-3V4.8L8 1.8z" />
      <path d="M2.8 4.8L8 7.8l5.2-3" />
      <path d="M8 7.8v6.4" />
    </>
  ),
  // trending-up — DeFi protocol engineering
  defi: (
    <>
      <path d="M2 11l3.5-3.5L8 10l5-5.5" />
      <path d="M10 4.5h3v3" />
    </>
  ),
  // cpu/bot — AI agents & automation
  agent: (
    <>
      <rect x="4" y="4" width="8" height="8" rx="1.5" />
      <path d="M6.5 8h3M6.5 6.5h3" />
      <path d="M6 1.8v2M10 1.8v2M6 12.2v2M10 12.2v2M1.8 6h2M1.8 10h2M12.2 6h2M12.2 10h2" />
    </>
  ),
  // sparkles — generative AI development
  genai: (
    <>
      <path d="M8 2l1.1 3.4L12.5 6.5 9.1 7.6 8 11 6.9 7.6 3.5 6.5 6.9 5.4 8 2z" />
      <path d="M12 10.5l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5.5-1.5z" />
    </>
  ),
  // card — fintech
  fintech: (
    <>
      <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
      <path d="M2 6.5h12" />
      <path d="M4.5 9.5h3" />
    </>
  ),
  // stacked layers — b2b saas
  saas: (
    <>
      <path d="M8 2l6 3-6 3-6-3 6-3z" />
      <path d="M2 8.5l6 3 6-3" />
    </>
  ),
  // connected nodes — web3 protocols
  web3: (
    <>
      <circle cx="8" cy="3.2" r="1.4" />
      <circle cx="3.4" cy="12" r="1.4" />
      <circle cx="12.6" cy="12" r="1.4" />
      <path d="M7 4.4 4.2 10.7M9 4.4 11.8 10.7M4.8 12h6.4" />
    </>
  ),
};

function BadgeIcon({ icon }: { icon: IconKey }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[icon]}
    </svg>
  );
}

/* ---------- small render helpers ---------- */

function Item({ item }: { item: RankedItem }) {
  return (
    <Link href={item.href} className={`mn-it${item.secondary ? " sec" : ""}`}>
      {item.icon ? (
        <span className="bdg"><BadgeIcon icon={item.icon} /></span>
      ) : item.rank ? (
        <span className="bdg">{item.rank}</span>
      ) : null}
      <span>
        <span className="nm">{item.label}</span>
        {item.desc ? <span className="ds">{item.desc}</span> : null}
      </span>
    </Link>
  );
}

function Featured({ rail }: { rail: FeaturedRail }) {
  return (
    <div className="mn-feat">
      <span className="lb mono">{rail.label}</span>
      {rail.title ? (
        <Link href={rail.title.href} className="tt">
          {rail.title.label}
        </Link>
      ) : null}
      <p className="sb">{rail.sub}</p>
      <Link href={rail.cta.href} className="btn btn-pri">
        {rail.cta.label}
      </Link>
      {rail.proof ? <span className="pf">{rail.proof}</span> : null}
    </div>
  );
}

function PanelFooter() {
  return (
    <div className="mn-foot">
      <div className="fin">
        <div className="grp">
          {BROWSE_LINKS.map((l) => (
            <Link href={l.href} key={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="help">
          Need help choosing? Book a 15 minute call →
        </Link>
      </div>
    </div>
  );
}

/* ---------- main component ---------- */

export default function MegaMenu() {
  const [open, setOpen] = useState<PanelId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<PanelId | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Record<PanelId, HTMLButtonElement | null>>({
    solutions: null,
    industries: null,
  });
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = usePathname();

  const clearTimers = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  };

  const openNow = useCallback((id: PanelId) => {
    clearTimers();
    setOpen(id);
  }, []);

  const closeNow = useCallback(() => {
    clearTimers();
    setOpen(null);
  }, []);

  /* hover intent */
  const scheduleOpen = (id: PanelId) => {
    clearTimers();
    openTimer.current = setTimeout(() => setOpen(id), OPEN_DELAY);
  };
  const scheduleClose = () => {
    clearTimers();
    closeTimer.current = setTimeout(() => setOpen(null), CLOSE_DELAY);
  };

  /* close on route change (render-phase state adjustment, per React docs) */
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }

  /* close on outside click */
  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  /* Escape closes from anywhere while a panel is open (hover-opened included) */
  useEffect(() => {
    if (!open) return;
    const id = open;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        triggerRefs.current[id]?.focus();
        setOpen(null);
      }
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open]);

  /* Escape: close and return focus to trigger */
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      if (open) {
        triggerRefs.current[open]?.focus();
        closeNow();
      }
      if (mobileOpen) setMobileOpen(false);
    }
    /* arrow-key navigation across top-level items */
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      const tops = navRef.current?.querySelectorAll<HTMLElement>("[data-top]");
      if (!tops || tops.length === 0) return;
      const list = Array.from(tops);
      const idx = list.indexOf(document.activeElement as HTMLElement);
      if (idx === -1) return;
      e.preventDefault();
      const next =
        e.key === "ArrowRight"
          ? list[(idx + 1) % list.length]
          : list[(idx - 1 + list.length) % list.length];
      next.focus();
    }
  };

  /* dev helper: open a panel via #nav-solutions / #nav-industries (testing only) */
  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;
    const h = window.location.hash;
    const t = setTimeout(() => {
      if (h === "#nav-solutions") setOpen("solutions");
      if (h === "#nav-industries") setOpen("industries");
    }, 0);
    return () => clearTimeout(t);
  }, []);

  /* lock body scroll while the mobile sheet is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* keep an open panel open while the pointer is inside it */
  const onPanelEnter = () => clearTimers();

  return (
    <div className="mn-root" ref={navRef} onKeyDown={onKeyDown}>
      {/* ---------- desktop ---------- */}
      <nav aria-label="Primary">
        <ul className="mn">
          {TOP_ITEMS.map((item) =>
            item.kind === "panel" ? (
              <li
                key={item.label}
                onPointerEnter={() => scheduleOpen(item.id)}
                onPointerLeave={scheduleClose}
              >
                <button
                  type="button"
                  className="mn-trigger"
                  data-top
                  aria-haspopup="true"
                  aria-expanded={open === item.id}
                  aria-controls={`panel-${item.id}`}
                  ref={(el) => {
                    triggerRefs.current[item.id] = el;
                  }}
                  onClick={() => (open === item.id ? closeNow() : openNow(item.id))}
                  onFocus={() => openNow(item.id)}
                >
                  {item.label}
                  <span className="chev" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </span>
                </button>
              </li>
            ) : (
              <li key={item.label}>
                <Link href={item.href} className="mn-link" data-top>
                  {item.label}
                </Link>
              </li>
            ),
          )}
          <li>
            <Link href={CONTACT_CTA.href} className="!py-[8px] !px-8 rounded-md font-[500] btn-pri mn-cta " data-top>
              {CONTACT_CTA.label}
            </Link>
          </li>
        </ul>
      </nav>

      {/* dim the page behind an open panel */}
      <div className="mn-backdrop" data-open={open !== null} aria-hidden="true" />

      {/* Solutions panel — always in the DOM for SSR/crawlers */}
      <div
        id="panel-solutions"
        className="mn-panel"
        role="region"
        aria-label="Solutions menu"
        data-open={open === "solutions"}
        onPointerEnter={onPanelEnter} onPointerLeave={scheduleClose}
      >
        <div className="pin pin-sol">
          {SOLUTIONS_COLUMNS.map((col) => (
            <div key={col.header.label}>
              <Link href={col.header.href} className="mn-colh mono !font-bold !text-black">
                {col.header.label} <span aria-hidden="true">→</span>
              </Link>
              {col.items.map((it) => (
                <Item key={it.href + it.label} item={it} />
              ))}
              {col.subGroup ? (
                <>
                  <div className="mn-subh mono">{col.subGroup.label}</div>
                  {col.subGroup.items.map((it) => (
                    <Item key={it.href} item={it} />
                  ))}
                </>
              ) : null}
            </div>
          ))}
          <Featured rail={SOLUTIONS_FEATURED} />
        </div>
        <PanelFooter />
      </div>

      {/* Industries panel */}
      <div
        id="panel-industries"
        className="mn-panel"
        role="region"
        aria-label="Industries menu"
        data-open={open === "industries"}
        onPointerEnter={onPanelEnter} onPointerLeave={scheduleClose}
      >
        <div className="pin pin-ind">
          <div className="mn-ind-head">
            <span className="lb mono font-bold !text-black ">Who we build for</span>
            <span className="rt mono">
              <b>{INDUSTRY_CARDS.length} sectors</b> one delivery standard
            </span>
          </div>
          {INDUSTRY_CARDS.map((card) => (
            <div className="mn-ind" key={card.header.label}>
              <Link href={card.header.href} className="mn-ind-h">
                <span className="ic"><BadgeIcon icon={card.icon} /></span>
                <span className="tx">
                  <span className="nm">{card.header.label}</span>
                  <span className="tg">{card.tagline}</span>
                </span>
              </Link>
              <div className="svc">
                {card.services.map((s) => (
                  <Link className="font-bold !text-black " href={s.href} key={s.href + s.label}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Featured rail={INDUSTRIES_FEATURED} />
        </div>
        <PanelFooter />
      </div>

      {/* ---------- mobile ---------- */}
      <button
        type="button"
        className="hamb"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav"
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span className="bars" data-x={mobileOpen} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>

      <div id="mobile-nav" className="mnav" data-open={mobileOpen}>
        <nav aria-label="Primary mobile">
          {TOP_ITEMS.map((item) =>
            item.kind === "panel" ? (
              <div key={item.label}>
                <button
                  type="button"
                  className="row rowbtn"
                  aria-expanded={mobileExpanded === item.id}
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === item.id ? null : item.id)
                  }
                >
                  {item.label}
                  <span className="chev" aria-hidden="true">
                    {mobileExpanded === item.id ? "−" : "+"}
                  </span>
                </button>
                {mobileExpanded === item.id ? (
                  item.id === "solutions" ? (
                    <div className="sublist">
                      {SOLUTIONS_COLUMNS.map((col) => (
                        <div key={col.header.label}>
                          <Link href={col.header.href} className="subh mono">
                            {col.header.label}
                          </Link>
                          {col.items.map((it) => (
                            <Link href={it.href} key={it.href + it.label} className="subit">
                              {it.icon ? (
                                <span className="bdg"><BadgeIcon icon={it.icon} /></span>
                              ) : it.rank ? (
                                <span className="bdg">{it.rank}</span>
                              ) : null}
                              {it.label}
                            </Link>
                          ))}
                          {col.subGroup?.items.map((it) => (
                            <Link href={it.href} key={it.href} className="subit">
                              {it.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                      <div>
                        <span className="subh mono">Browse</span>
                        {BROWSE_LINKS.map((l) => (
                          <Link href={l.href} key={l.href} className="subit">
                            {l.label}
                          </Link>
                        ))}
                      </div>
                      <Featured rail={SOLUTIONS_FEATURED} />
                    </div>
                  ) : (
                    <div className="sublist">
                      {INDUSTRY_CARDS.map((card) => (
                        <div key={card.header.label}>
                          <Link href={card.header.href} className="subh mono">
                            {card.header.label}
                          </Link>
                          {card.services.map((s) => (
                            <Link href={s.href} key={s.href + s.label} className="subit">
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                      <Featured rail={INDUSTRIES_FEATURED} />
                    </div>
                  )
                ) : null}
              </div>
            ) : (
              <Link href={item.href} key={item.label} className="row">
                {item.label}
              </Link>
            ),
          )}
          <Link href={CONTACT_CTA.href} className="btn btn-pri cta">
            {CONTACT_CTA.label}
          </Link>
        </nav>
      </div>
    </div>
  );
}
