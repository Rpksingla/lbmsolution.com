"use client";

import { ReactLenis } from "lenis/react";

/* Site-wide momentum smooth scroll (Lenis, already a dependency).
   `root` runs Lenis on the document/window and handles its own RAF loop.
   Lenis's CSS (imported in layout) sets scroll-behavior: auto while active,
   so it doesn't fight the CSS smooth-scroll already in globals.css. */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // lerp: how fast scroll catches up to target (higher = snappier/tighter,
  // lower = more floaty). Default is 0.1; bumped for a tighter feel.
  return <ReactLenis root options={{ lerp: 0.08 }}>{children}</ReactLenis>;
}
