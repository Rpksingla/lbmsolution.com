import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "LBM Solutions: production blockchain and AI systems";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "AI + Blockchain Engineering",
    title: "We build production blockchain and AI systems",
  });
}
