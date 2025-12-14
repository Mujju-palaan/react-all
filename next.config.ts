import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alexharkness.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname:"avatars.githubusercontent.com"
      },
      {
        protocol: "https",
        hostname:"tailus.io"
      }
    ],
  },
};

export default nextConfig;
