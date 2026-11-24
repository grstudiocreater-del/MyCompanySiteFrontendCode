import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
  async redirects() {
    return [
      {
        source: "/products/chargepulse",
        destination: "/products/lumora",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
