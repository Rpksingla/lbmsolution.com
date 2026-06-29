import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "DeFi Protocol Engineering by LBM Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "DeFi Protocol Engineering",
    title: "DeFi protocols, audited before mainnet",
  });
}
