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
        source: "/catalog/:path*",
        destination: "http://digital-theta-lemon.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
