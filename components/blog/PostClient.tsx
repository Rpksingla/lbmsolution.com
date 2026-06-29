"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/track";

/** Reading progress bar scoped to the article, post_view + scroll_depth events,
 *  code block copy buttons + lazy syntax highlighting, sticky mobile CTA. */
export default function PostClient({
  slug,
  cluster,
  ctaHref,
  ctaLabel,
}: {
  slug: string;
  cluster: string;
  ctaHref: string;
  ctaLabel: string;
}) {
  const bar = useRef<HTMLDivElement>(null);
  const [showBar, setShowBar] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    track("post_view", { post: slug, cluster });
    const fired = new Set<number>();
    const onScroll = () => {
      const el = document.getElementById("article-body");
      const h = document.documentElement;
      if (el && bar.current) {
        const total = el.offsetTop + el.offsetHeight - h.clientHeight;
        const pct = Math.min(100, Math.max(0, (h.scrollTop / total) * 100));
        bar.current.style.width = `${pct}%`;
        for (const t of [25, 50, 75, 100]) {
          if (pct >= t && !fired.has(t)) {
            fired.add(t);
            track("scroll_depth", { post: slug, cluster, depth: t });
          }
        }
      }
      setShowBar(h.scrollTop > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug, cluster]);

  /* code blocks: copy button + highlighting (lazy, only if code exists) */
  useEffect(() => {
    const blocks = document.querySelectorAll<HTMLElement>("#article-body pre");
    if (!blocks.length) return;
    import("highlight.js/lib/common").then(({ default: hljs }) => {
      blocks.forEach((pre) => {
        const code = pre.querySelector("code");
        if (code) hljs.highlightElement(code);
        if (!pre.querySelector(".copy")) {
          const b = document.createElement("button");
          b.className = "copy mono";
          b.type = "button";
          b.textContent = "Copy";
          b.setAttribute("aria-label", "Copy code");
          b.onclick = () => {
            navigator.clipboard.writeText(code?.innerText ?? pre.innerText);
            b.textContent = "Copied";
            setTimeout(() => (b.textContent = "Copy"), 1500);
          };
          pre.appendChild(b);
        }
      });
    });
  }, [slug]);

  return (
    <>
      <div className="read-prog" aria-hidden="true">
        <div ref={bar} />
      </div>
      {showBar && !dismissed ? (
        <div className="mob-cta" role="complementary" aria-label="Related service">
          <a
            href={ctaHref}
            className="btn btn-pri"
            onClick={() => track("inline_cta_click", { post: slug, cluster, target: ctaHref, placement: "mobile_bar" })}
          >
            {ctaLabel}
          </a>
          <button type="button" aria-label="Dismiss" onClick={() => setDismissed(true)}>
            ✕
          </button>
        </div>
      ) : null}
    </>
  );
}
