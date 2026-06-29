"use client";

import { useEffect } from "react";

/**
 * Hides the sticky header (.top) when scrolling down and reveals it when
 * scrolling up, by toggling `nav-hidden` on <html> (CSS handles the transform).
 * Renders nothing. Stays visible near the top and whenever a menu is open.
 */
export default function NavScroll() {
  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const DELTA = 6; // ignore tiny jitters
    const TOP = 80; // always show near the very top

    const update = () => {
      const y = Math.max(0, window.scrollY);
      const root = document.documentElement;
      const menuOpen = document.querySelector(
        '.mn-panel[data-open="true"], .mnav[data-open="true"]',
      );
      if (y < TOP || menuOpen) {
        root.classList.remove("nav-hidden");
      } else if (y > last + DELTA) {
        root.classList.add("nav-hidden"); // scrolling down
      } else if (y < last - DELTA) {
        root.classList.remove("nav-hidden"); // scrolling up
      }
      last = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.documentElement.classList.remove("nav-hidden");
    };
  }, []);

  return null;
}
