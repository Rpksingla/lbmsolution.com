"use client";

// Minimal full-screen fragment-shader background base (OGL/WebGL), used by the
// themed reactbits-style backgrounds (Beams, Threads, Silk). Decorative only;
// the caller (LpBackground) gates mounting on reduced-motion + wide viewport.
// Structural CSS lives in app/globals.css (.lpbg / .lpbg-*).

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, type OGLRenderingContext } from "ogl";

const VERT = `attribute vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }`;

export default function ShaderBg({
  frag,
  color,
  className = "",
}: {
  frag: string;
  color: [number, number, number];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ct = ref.current;
    if (!ct) return;
    const renderer = new Renderer({ alpha: true, dpr: Math.min(window.devicePixelRatio, 2) });
    const gl: OGLRenderingContext = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    ct.appendChild(gl.canvas);

    const u = {
      uTime: { value: 0 },
      uResolution: { value: [1, 1] as number[] },
      uColor: { value: color as number[] },
    };
    const program = new Program(gl, { vertex: VERT, fragment: frag, uniforms: u });
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

    const resize = () => {
      renderer.setSize(ct.offsetWidth, ct.offsetHeight);
      u.uResolution.value = [gl.canvas.width, gl.canvas.height];
    };
    window.addEventListener("resize", resize);
    resize();

    let raf = 0;
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      u.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      if (gl.canvas.parentNode === ct) ct.removeChild(gl.canvas);
      const lose = gl.getExtension("WEBGL_lose_context");
      if (lose) lose.loseContext();
    };
  }, [frag, color]);

  return <div ref={ref} className={`lpbg ${className}`.trim()} aria-hidden="true" />;
}
