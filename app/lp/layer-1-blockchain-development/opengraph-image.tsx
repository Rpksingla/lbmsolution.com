import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Layer 1 blockchain development by LBM Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "Layer 1 Blockchain Development",
    title: "Launch your own Layer 1 blockchain",
  });
}
