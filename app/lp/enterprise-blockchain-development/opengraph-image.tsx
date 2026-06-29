import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Enterprise blockchain development by LBM Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "Enterprise Blockchain Development",
    title: "Blockchain that passes compliance and the board",
  });
}
