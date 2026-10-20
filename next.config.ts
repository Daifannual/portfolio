import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*wbexphmfxluogaiuptpp.supabase.co', 
      },
    ],
  },
};

export default nextConfig;
