"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Fades content up as it enters the viewport, driven by GSAP ScrollTrigger.
 *
 * - Default: the whole block fades up as one unit (same look as before).
 * - `stagger`: the wrapper's direct children cascade in one after another,
 *   for grid / list sections. Layout is untouched — only opacity + translateY
 *   animate, and the from-state is set in CSS (`.rv` / `.rv-stagger`) so there
 *   is no flash before hydration.
 * - `prefers-reduced-motion`: motion is skipped and content shown immediately
 *   (CSS already forces it visible; GSAP keeps it visible as a belt-and-braces).
 */
export default function Reveal({
  children,
  className = "",
  stagger = false,
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets = stagger ? Array.from(el.children) : el;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: stagger ? 0.1 : 0,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(targets, { opacity: 1, y: 0 });
      });
    },
    { scope: ref, dependencies: [stagger] },
  );

  return (
    <div ref={ref} className={`${stagger ? "rv-stagger" : "rv"} ${className}`}>
      {children}
    </div>
  );
}
