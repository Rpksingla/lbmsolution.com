import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Stablecoin settlement and treasury rails by LBM Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "Stablecoin Payment Rails",
    title: "Stablecoin settlement and treasury rails",
  });
}
