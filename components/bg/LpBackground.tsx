"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/* Animated landing-page background switcher. Each page passes a `variant`;
   the matching background loads as its own lazy chunk (ssr:false) with its
   themed props. Mounting is gated on prefers-reduced-motion + a wide viewport
   (mirrors HeroCubes), so mobile and reduced-motion users get nothing here and
   the static <Backdrop motif="..."> behind it shows through instead.

   Curated set of 5 reactbits-style WebGL backgrounds (themed to the accent
   palette), rotated across the 11 landing pages so no two adjacent pages match:
   siderays (3 origins) · aurora · threads · beams · silk. */

const Aurora = dynamic(() => import("@/components/bg/Aurora"), { ssr: false });
const SideRays = dynamic(() => import("@/components/bg/SideRays"), { ssr: false });
const Threads = dynamic(() => import("@/components/bg/shaders").then((m) => m.Threads), { ssr: false });
const Beams = dynamic(() => import("@/components/bg/shaders").then((m) => m.Beams), { ssr: false });
const Silk = dynamic(() => import("@/components/bg/shaders").then((m) => m.Silk), { ssr: false });

export type LpBgVariant =
  | "siderays" | "siderays-tl" | "siderays-br"
  | "aurora" | "threads" | "beams" | "silk";

function renderVariant(variant: LpBgVariant) {
  switch (variant) {
    case "siderays":
      return <SideRays className="lpbg lpbg-rays" origin="top-right" opacity={0.85} />;
    case "siderays-tl":
      return <SideRays className="lpbg lpbg-rays lpbg-rays-tl" origin="top-left" rayColor1="#5734e0" rayColor2="#8b6bff" opacity={0.8} />;
    case "siderays-br":
      return <SideRays className="lpbg lpbg-rays lpbg-rays-br" origin="bottom-right" tilt={6} opacity={0.7} />;
    case "aurora":
      return <Aurora />;
    case "threads":
      return <Threads />;
    case "beams":
      return <Beams />;
    case "silk":
      return <Silk />;
  }
}

export default function LpBackground({ variant }: { variant: LpBgVariant }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 821px)");
    const update = () => setShow(!reduce.matches && wide.matches);
    update();
    reduce.addEventListener("change", update);
    wide.addEventListener("change", update);
    return () => {
      reduce.removeEventListener("change", update);
      wide.removeEventListener("change", update);
    };
  }, []);

  if (!show) return null;
  return (
    <div className="lpbg-host" aria-hidden="true">
      {renderVariant(variant)}
    </div>
  );
}
