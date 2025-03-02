import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // 외부에서 이미지 가져올 때 경로 지정해줘야 함
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.vercel.com",
        port: "",
        pathname: "/image/upload/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
