import { ImageResponse } from "next/og";

/* Shared Open Graph / social-share image template.
   next/og (built into Next 16) renders JSX via Satori, which ONLY accepts
   inline styles and a flex/absolute subset of CSS. The inline styles below are
   required by that renderer; they are NOT site styling and do not touch the
   token system. Brand tokens are mirrored here as literals so the card matches:
   --ink #0c0c10, --accent #6c47ff, --accent-on-dark #a98bff. */

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const INK = "#0c0c10";
const ACCENT = "#6c47ff";
const ACCENT_LIGHT = "#a98bff";
const GRID = "rgba(255,255,255,0.06)";

export function ogImage({ label, title }: { label: string; title: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: INK,
          backgroundImage: `linear-gradient(${GRID} 1px, transparent 1px), linear-gradient(90deg, ${GRID} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* accent glow, top-right */}
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -200,
            width: 640,
            height: 640,
            borderRadius: 640,
            background: `radial-gradient(circle, rgba(108,71,255,0.45), transparent 68%)`,
            display: "flex",
          }}
        />
        {/* eyebrow label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: ACCENT_LIGHT,
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {label}
        </div>
        {/* title */}
        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: title.length > 48 ? 64 : 78,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 940,
          }}
        >
          {title}
        </div>
        {/* brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: 12,
              background: ACCENT,
              color: "#fff",
              fontSize: 26,
              fontWeight: 900,
            }}
          >
            L
          </div>
          <div style={{ display: "flex", color: "#fff", fontSize: 30, fontWeight: 800 }}>
            LBM Solutions
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
