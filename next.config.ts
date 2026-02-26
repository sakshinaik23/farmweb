import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // enable static export
  images: {
    unoptimized: true, // required for Netlify static export if using Image component
  },
};

export default nextConfig;