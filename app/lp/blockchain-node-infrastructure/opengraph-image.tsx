import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Blockchain node infrastructure by LBM Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "Blockchain Node Infrastructure",
    title: "Node infrastructure that stays up",
  });
}
