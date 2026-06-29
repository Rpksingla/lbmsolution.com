"use client";

import { useState } from "react";
import { track } from "@/lib/track";

export default function ShareRow({ url, title, slug }: { url: string; title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const enc = encodeURIComponent;

  function fire(net: string) {
    track("share_click", { post: slug, network: net });
  }

  return (
    <div className="share">
      <span className="mono">Share</span>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(url);
          setCopied(true);
          fire("copy");
          setTimeout(() => setCopied(false), 1500);
        }}
      >
        {copied ? "Copied" : "Copy link"}
      </button>
      <a
        href={`https://x.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => fire("x")}
      >
        X
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => fire("linkedin")}
      >
        LinkedIn
      </a>
    </div>
  );
}
