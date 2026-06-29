"use client";

import { useEffect, useState } from "react";
import Cubes from "@/components/Cubes";

/* Decorative hero backdrop. Renders the interactive Cubes grid only on
   pointer-capable, wide, motion-allowing viewports. On mobile and when the
   user prefers reduced motion it renders nothing, so the static
   <Backdrop motif="hero" /> shows through underneath. */
export default function HeroCubes() {
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
    <Cubes
      gridSize={8}
      maxAngle={55}
      radius={4.5}
      idleSpeed={0.012}
      // Light & subtle: near-white faces, faint purple edges, accent ripple.
      // faceColor/rippleColor are concrete hex (GSAP animates these and cannot
      // interpolate CSS var()); they mirror --bg-2 and --accent in globals.css.
      faceColor="#f4f4f6"
      borderStyle="1px solid rgba(108,71,255,0.20)"
      rippleColor="#6c47ff"
      rippleSpeed={1.6}
      autoAnimate
      rippleOnClick
    />
  );
}
