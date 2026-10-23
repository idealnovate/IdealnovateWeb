import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow testing the dev server from phones/tablets on the local network
  allowedDevOrigins: ["172.20.10.2", "192.168.*.*", "10.*.*.*", "172.*.*.*"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "idealnovate.com",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
