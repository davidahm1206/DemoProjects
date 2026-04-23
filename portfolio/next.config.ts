import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/DemoProjects',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
