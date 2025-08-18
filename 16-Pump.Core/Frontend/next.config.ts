import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // ✅ Recommended (Next.js 13+)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pump.mypinata.cloud',
        port: '',
        pathname: '/**',
      },
    ],
  }

};

export default nextConfig;
