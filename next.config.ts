import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.rht21.site" },
      { protocol: "https", hostname: "tscdigitalmedia.com" },
      { protocol: "https", hostname: "www.tscdigitalmedia.com" },
      { protocol: "https", hostname: "advinzo.com" },
      { protocol: "https", hostname: "www.advinzo.com" },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      resourceQuery: /raw/, // *.tsx?raw
      use: "raw-loader",
    });
    return config;
  },
};

export default nextConfig;
