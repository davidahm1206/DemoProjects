import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/DemoProjects',
  assetPrefix: '/DemoProjects/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
