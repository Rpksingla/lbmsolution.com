import Link from "next/link";
import TrackLink from "./TrackLink";
import { cfImg, cfSrcSet } from "@/lib/blog";

export type CardData = {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  authorRole: string | null;
  date: string;
  readingTime: number;
  image: string | null;
  categoryName: string;
  categorySlug: string;
  cluster: string;
};

export default function PostCard({
  post,
  large = false,
  compact = false,
  trackEvent,
}: {
  post: CardData;
  large?: boolean;
  compact?: boolean;
  trackEvent?: string;
}) {
  const href = `/blog/${post.slug}`;
  // Pick a width that matches the display size so small thumbnails don't pull
  // a large image: featured ~1000, compact side-thumbnail ~360, grid ~640.
  const w = large ? 1000 : compact ? 360 : 640;
  const h = large ? 562 : compact ? 203 : 360;
  const img = cfImg(post.image, `w=${w},format=auto`);
  const widths = large ? [640, 1000, 1400] : compact ? [200, 360, 540] : [400, 640, 900];
  const sizes = large
    ? "(max-width: 820px) 100vw, 60vw"
    : compact
      ? "(max-width: 480px) 100vw, 180px"
      : "(max-width: 820px) 100vw, 33vw";
  const Title = trackEvent ? (
    <TrackLink href={href} event={trackEvent} params={{ cluster: post.cluster }}>
      {post.title}
    </TrackLink>
  ) : (
    <Link href={href}>{post.title}</Link>
  );

  return (
    <article className={`bcard${large ? " lg" : ""}${compact ? " compact" : ""}`}>
      <Link href={href} className="img" tabIndex={-1} aria-hidden="true">
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={img}
            srcSet={cfSrcSet(post.image, widths)}
            sizes={sizes}
            alt=""
            loading="lazy"
            decoding="async"
            width={w}
            height={h}
          />
        ) : (
          <span className="ph" />
        )}
      </Link>
      <div className="body">
        <Link href={`/blog/category/${post.categorySlug}`} className="cat mono">
          {post.categoryName}
        </Link>
        <h3 className="t">{Title}</h3>
        <p className="x">{post.excerpt}</p>
        <p className="meta">
          <span className="who">
            {post.author}
            {post.authorRole ? <i>, {post.authorRole}</i> : null}
          </span>
          <span>
            {post.date}
            {post.readingTime ? ` · ${post.readingTime} min read` : ""}
          </span>
        </p>
      </div>
    </article>
  );
}
