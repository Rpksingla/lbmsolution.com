import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack doesn't walk up to a stray parent lockfile.
  turbopack: { root: import.meta.dirname },
  // Blog UX fix A1: no floating dev indicator (the "N" badge) even in dev captures.
  devIndicators: false,
  // Allow loading /_next dev resources over the LAN (other devices on the network).
  allowedDevOrigins: ["192.168.11.64"],
};

export default nextConfig;
