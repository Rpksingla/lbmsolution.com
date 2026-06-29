import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Crypto wallet development by LBM Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "Crypto Wallet Development",
    title: "Secure wallet and custody infrastructure",
  });
}
