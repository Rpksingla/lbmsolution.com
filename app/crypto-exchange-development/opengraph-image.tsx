import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Crypto exchange development for licensed operators";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "Crypto Exchange Development",
    title: "Compliant exchanges regulators and traders trust",
  });
}
