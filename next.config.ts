import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://147.45.157.15:8000/api/v1/shop/:path*', // ваш API URL
      },
      {
        source: '/storage/:path*',
        destination: 'http://147.45.157.15:8000/v1/shop/storage/:path*', // путь к изображениям
      },
      {
        source: '/storage/:path*',
        destination: 'http://147.45.157.15:8000/storage/:path*', // путь к изображениям
      },
    ];
  },
};

export default nextConfig;
