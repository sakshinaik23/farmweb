import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // keep this if deploying to Netlify
  },
};

export default nextConfig;