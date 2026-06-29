import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Smart contract audits before your contracts hold real money";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "Smart Contract Audits",
    title: "Audits before your contracts hold real money",
  });
}
