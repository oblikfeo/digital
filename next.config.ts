import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  }
};

export default nextConfig;
