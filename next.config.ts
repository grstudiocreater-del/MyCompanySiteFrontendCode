import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
