"use client";

// Themed reactbits-style WebGL backgrounds (Beams, Threads, Silk), built on the
// shared ShaderBg base. All re-themed to the LBM accent palette. GLSL ES 1.00
// fragment shaders (gl_FragColor), which OGL compiles in either WebGL context.

import ShaderBg from "@/components/bg/ShaderBg";

const ACCENT: [number, number, number] = [0.424, 0.278, 1.0]; // #6c47ff
const LAV: [number, number, number] = [0.663, 0.545, 1.0]; // #a98bff

/* Threads: flowing thin horizontal threads (connectivity / proofs). */
const THREADS_FRAG = `precision highp float;
uniform float uTime; uniform vec2 uResolution; uniform vec3 uColor;
void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float acc = 0.0;
  for (int i = 0; i < 6; i++) {
    float fi = float(i);
    float base = 0.18 + 0.12 * fi;
    float wave = base
      + 0.045 * sin(uv.x * 9.4 + uTime * 0.6 + fi * 1.7)
      + 0.018 * sin(uv.x * 22.0 - uTime * 0.8 + fi);
    float d = abs(uv.y - wave);
    acc += smoothstep(0.010, 0.0, d);
  }
  float a = clamp(acc, 0.0, 1.0) * 0.55;
  gl_FragColor = vec4(uColor * a, a);
}`;

/* Beams: soft diagonal light beams sweeping (speed / scaling). */
const BEAMS_FRAG = `precision highp float;
uniform float uTime; uniform vec2 uResolution; uniform vec3 uColor;
void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float ang = -0.5;
  vec2 p = vec2(uv.x * cos(ang) - uv.y * sin(ang), uv.x * sin(ang) + uv.y * cos(ang));
  float beams = 0.0;
  for (int i = 0; i < 6; i++) {
    float fi = float(i);
    float x = p.x * 7.0 + uTime * 0.35 + fi * 1.27;
    beams += smoothstep(0.55, 0.99, sin(x) * 0.5 + 0.5);
  }
  float a = clamp(beams / 6.0, 0.0, 1.0);
  a *= smoothstep(1.15, 0.15, uv.y) * 0.5;
  gl_FragColor = vec4(uColor * a, a);
}`;

/* Silk: soft flowing satin field (organic / control). */
const SILK_FRAG = `precision highp float;
uniform float uTime; uniform vec2 uResolution; uniform vec3 uColor;
void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  vec2 p = uv * 4.0;
  float v = 0.0;
  v += 0.5 * sin(p.x + uTime * 0.4 + sin(p.y * 1.3 + uTime * 0.3));
  v += 0.5 * sin(p.y * 1.7 - uTime * 0.25 + sin(p.x * 0.8 + uTime * 0.2));
  v = v * 0.25 + 0.5;
  float a = smoothstep(0.42, 0.92, v) * 0.5;
  gl_FragColor = vec4(uColor * a, a);
}`;

export function Threads() {
  return <ShaderBg frag={THREADS_FRAG} color={ACCENT} className="lpbg-threads" />;
}
export function Beams() {
  return <ShaderBg frag={BEAMS_FRAG} color={LAV} className="lpbg-beams" />;
}
export function Silk() {
  return <ShaderBg frag={SILK_FRAG} color={ACCENT} className="lpbg-silk" />;
}
