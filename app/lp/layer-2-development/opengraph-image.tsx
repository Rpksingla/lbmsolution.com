import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Layer 2 development by LBM Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "Layer 2 Development",
    title: "Scale your dApp with the right rollup",
  });
}
