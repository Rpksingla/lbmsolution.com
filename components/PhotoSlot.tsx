/* Reusable photo slot for the About page.
 *
 * Shows a labeled, dashed placeholder (kind + aspect-ratio hint) until a real
 * image is dropped in via `src`, then renders a lazy-loaded <img>. Every slot
 * REQUIRES real alt text (person name + role, or a location).
 *
 * PHOTO TREATMENT (keep this consistent): when you add real images, use ONE
 * treatment across ALL of them — same lighting, same color grade, same crop
 * style. Mixed treatments are what make a team/office gallery look stock. The
 * placeholders share one neutral look on purpose so the final swap is uniform.
 */

type Ratio = "4/5" | "1/1" | "16/9" | "3/2" | "4/3";

const RATIO_CLASS: Record<Ratio, string> = {
  "4/5": "ps-45",
  "1/1": "ps-11",
  "16/9": "ps-169",
  "3/2": "ps-32",
  "4/3": "ps-43",
};

export default function PhotoSlot({
  kind,
  ratio,
  src,
  alt,
  caption,
  className = "",
}: {
  kind: string;
  ratio: Ratio;
  src?: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`photoslot ${className}`.trim()}>
      <div className={`ps-frame  w-full ${RATIO_CLASS[ratio]}`}>
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} loading="lazy" />
        ) : (
          <div className="ps-ph" role="img" aria-label={alt}>
            <span className="ps-kind">{kind}</span>
            <span className="ps-dim mono">{ratio}</span>
          </div>
        )}
      </div>
      {caption && <figcaption className="ps-cap">{caption}</figcaption>}
    </figure>
  );
}
