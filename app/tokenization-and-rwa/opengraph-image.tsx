import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Tokenize real-world assets, compliantly";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "Tokenization and RWA",
    title: "Tokenize real-world assets, compliantly",
  });
}
