import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
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
