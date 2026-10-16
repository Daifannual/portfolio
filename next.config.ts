import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://wbexphmfxluogaiuptpp.supabase.co/rest/v1/', 
      },
    ],
  },
};

export default nextConfig;
