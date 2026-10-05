import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 80, 85],
    formats: ['image/webp'],
  },
};

export default nextConfig;
