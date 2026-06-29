import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Oracle integration by LBM Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "Oracle Integration",
    title: "Connect your contracts to real-world data",
  });
}
