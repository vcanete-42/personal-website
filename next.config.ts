import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["http://192.168.1.9:3000"], // your local network URL
};

export default nextConfig;
