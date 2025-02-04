import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://147.45.157.15:8000/api/:path*', // ваш API URL
      },
    ];
  },
};

export default nextConfig;
