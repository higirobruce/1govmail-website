import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from any domain (for future CDN-hosted screenshots)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
