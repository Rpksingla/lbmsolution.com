"use client";

// Aurora background, adapted from reactbits.dev/backgrounds/aurora (OGL/WebGL)
// to TypeScript and re-themed to the LBM palette (accent purples on white).
// Structural CSS lives in app/globals.css (.lpbg / .lpbg-aurora), per the
// one-stylesheet repo convention. Decorative only; the caller gates it on
// reduced-motion + wide viewport (see LpBackground).

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, type OGLRenderingContext } from "ogl";

const VERT = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }`;

const FRAG = `#version 300 es
precision highp float;
uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;
out vec4 fragColor;

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  vec3 ramp = uv.x < 0.5
    ? mix(uColorStops[0], uColorStops[1], uv.x / 0.5)
    : mix(uColorStops[1], uColorStops[2], (uv.x - 0.5) / 0.5);
  float h = snoise(vec2(uv.x * 2.0 + uTime * 0.08, uTime * 0.22)) * 0.5 * uAmplitude;
  h = exp(h);
  h = (uv.y * 2.0 - h + 0.25);
  float intensity = 0.55 * h;
  float mid = 0.20;
  float alpha = smoothstep(mid - uBlend * 0.5, mid + uBlend * 0.5, intensity);
  fragColor = vec4(intensity * ramp * alpha, alpha);
}`;

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.replace("#", ""), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

export default function Aurora({
  colorStops = ["#f0ecff", "#6c47ff", "#5734e0"],
  amplitude = 1.0,
  blend = 0.5,
}: {
  colorStops?: [string, string, string];
  amplitude?: number;
  blend?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ct = ref.current;
    if (!ct) return;

    const renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: true });
    const gl: OGLRenderingContext = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    ct.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uBlend: { value: blend },
        uColorStops: { value: colorStops.map(hexToRgb) },
        uResolution: { value: [ct.offsetWidth, ct.offsetHeight] },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      renderer.setSize(ct.offsetWidth, ct.offsetHeight);
      program.uniforms.uResolution.value = [ct.offsetWidth, ct.offsetHeight];
    };
    window.addEventListener("resize", resize);
    resize();

    let raf = 0;
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      program.uniforms.uTime.value = t * 0.001;
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
  }, [amplitude, blend, colorStops]);

  return <div ref={ref} className="lpbg lpbg-aurora" aria-hidden="true" />;
}
