import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  reactStrictMode: true,
  images: {
    unoptimized: true, // disables Next.js Image Optimization
  },
};

export default nextConfig;
