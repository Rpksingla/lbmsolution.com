import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Blockchain identity and DID by LBM Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "Blockchain Identity and DID",
    title: "Verify users without holding their data",
  });
}
