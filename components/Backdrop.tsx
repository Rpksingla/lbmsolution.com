/* Abstract-technical backdrop layer (founder-approved 2026-06-06).
   Coded backgrounds only, styled entirely by token classes in globals.css.
   Place as the FIRST child of a `.bg-host` (position: relative) element;
   page content sits above it automatically via `.wrap { z-index: 1 }`.

   Shared motifs:
     hero      light blueprint grid + corner glow + accent nodes (light heroes)
     dots      refined dot-matrix (light sections)
     blueprint faint accent grid (light sections / cards)
     glow      single corner accent bloom (light sections / cards)
     beam      diagonal accent light beams (dark .final CTA moment)

   Per-page SIGNATURE hero motifs (one per landing page, echoing its subject):
     depth     order-book depth bars      (crypto exchange)
     ring      concentric secure rings    (crypto wallet)
     flow      liquidity flow nodes/lines (defi protocol)
     scan      inspection grid + checks   (smart contract audits)
     rails     settlement rails + dots    (stablecoin payment rails)
     lattice   token lattice + diamonds   (tokenization / rwa) */

export type BackdropMotif =
  | "hero" | "dots" | "blueprint" | "glow" | "beam"
  | "depth" | "ring" | "flow" | "scan" | "rails" | "lattice";

/* helper: render `n` bare spans with a given class */
function spans(cls: string, n: number) {
  return Array.from({ length: n }, (_, i) => <span className={cls} key={i} />);
}

export default function Backdrop({ motif }: { motif: BackdropMotif }) {
  return (
    <div className={` hidden xl:block bd bd-${motif}`} aria-hidden="true">
      {motif === "hero" && (
        <>
          {spans("nd", 3)}
          {spans("ln", 2)}
        </>
      )}
      {motif === "depth" && spans("bar", 7)}
      {motif === "ring" && <span className="core" />}
      {motif === "flow" && (
        <>
          {spans("nd", 4)}
          {spans("ln", 3)}
        </>
      )}
      {motif === "scan" && (
        <>
          <span className="scanline" />
          {spans("ck", 3)}
        </>
      )}
      {motif === "rails" && (
        <>
          {spans("rail", 3)}
          {spans("dot", 3)}
        </>
      )}
      {motif === "lattice" && spans("tok", 2)}
    </div>
  );
}
