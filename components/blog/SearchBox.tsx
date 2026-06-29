"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Item = { t: string; s: string; e: string; c: string };

/** Blog search (B1): filters all posts by title, excerpt, and category. */
export default function SearchBox() {
  const [q, setQ] = useState("");
  const [items, setItems] = useState<Item[] | null>(null);
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState(-1);
  const box = useRef<HTMLDivElement>(null);

  async function load() {
    if (items) return;
    const r = await fetch("/api/blog-index");
    if (r.ok) setItems(await r.json());
  }

  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      if (box.current && !box.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  const needle = q.trim().toLowerCase();
  const hits =
    needle.length > 1 && items
      ? items
          .filter(
            (i) =>
              i.t.toLowerCase().includes(needle) ||
              i.e.toLowerCase().includes(needle) ||
              i.c.toLowerCase().includes(needle),
          )
          .slice(0, 8)
      : [];

  function onKey(e: React.KeyboardEvent) {
    if (e.key === "Escape") setOpen(false);
    if (!hits.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => (s + 1) % hits.length);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => (s - 1 + hits.length) % hits.length);
    }
    if (e.key === "Enter" && sel >= 0) {
      window.location.href = `/blog/${hits[sel].s}`;
    }
  }

  return (
    <div className="bsearch " ref={box} role="search">
      <label htmlFor="blog-q" className="mono">
        Search articles
      </label>
      <input
        id="blog-q"
        type="search"
        role="combobox"
        aria-autocomplete="list"
        placeholder="Search by topic, title, or category"
        value={q}
        autoComplete="off"
        aria-expanded={open && hits.length > 0}
        aria-controls="blog-q-results"
        onFocus={() => {
          load();
          setOpen(true);
        }}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
          setSel(-1);
        }}
        onKeyDown={onKey}
      />
      {open && needle.length > 1 ? (
        <ul id="blog-q-results" className="results">
          {hits.map((h, i) => (
            <li key={h.s} className={i === sel ? "on" : ""}>
              <Link href={`/blog/${h.s}`} onClick={() => setOpen(false)}>
                <b>{h.t}</b>
                <span>{h.c}</span>
              </Link>
            </li>
          ))}
          {!hits.length ? <li className="none">{items ? "No matches." : "Loading..."}</li> : null}
        </ul>
      ) : null}
    </div>
  );
}
