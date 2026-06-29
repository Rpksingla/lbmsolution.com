import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Cross-chain bridge development by LBM Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "Cross-Chain Bridge Development",
    title: "Security-first cross-chain bridges",
  });
}
