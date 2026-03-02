import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/auth/google',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080'}/auth/google`,
      },
    ];
  },
};

export default nextConfig;
