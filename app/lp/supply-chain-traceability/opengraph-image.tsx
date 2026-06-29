import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Supply chain traceability by LBM Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "Supply Chain Traceability",
    title: "Prove where every product came from",
  });
}
