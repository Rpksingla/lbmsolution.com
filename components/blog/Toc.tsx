"use client";

import { useEffect, useState } from "react";
import { track } from "@/lib/track";
import type { TocEntry } from "@/lib/blog";

/** Table of contents: sticky rail on desktop, "On this page" accordion on mobile. */
export default function Toc({ entries, slug }: { entries: TocEntry[]; slug: string }) {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const heads = entries
      .map((e) => document.getElementById(e.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (es) => {
        const v = es.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (v[0]) setActive(v[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px" },
    );
    heads.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [entries]);

  if (entries.length < 2) return null;

  const list = (
    <ol className="toc-list">
      {entries.map((e) => (
        <li key={e.id} className={`l${e.level}${active === e.id ? " on" : ""}`}>
          <a
            href={`#${e.id}`}
            aria-current={active === e.id ? "true" : undefined}
            onClick={() => {
              track("toc_click", { post: slug, section: e.id });
              setOpen(false);
            }}
          >
            {e.text}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <nav className="toc-rail" aria-label="Table of contents">
        <span className="mono lbl">On this page</span>
        {list}
      </nav>
      <div className="toc-mobile">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="toc-acc"
          onClick={() => setOpen((v) => !v)}
        >
          On this page <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <div id="toc-acc" hidden={!open}>
          {list}
        </div>
      </div>
    </>
  );
}
