import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Optimistic rollup development by LBM Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "Optimistic Rollup Development",
    title: "Launch your rollup without rewriting code",
  });
}
