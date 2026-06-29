import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Sidechain and appchain development by LBM Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "Sidechain and Appchain Development",
    title: "Give your dApp its own chain",
  });
}
