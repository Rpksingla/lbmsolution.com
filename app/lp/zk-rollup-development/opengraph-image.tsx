import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "ZK rollup development by LBM Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "ZK Rollup Development",
    title: "ZK rollups built around the proving system",
  });
}
