import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "www.fradybienestar.com" }],
      destination: "https://fradybienestar.com/:path*",
      permanent: true,
    }];
  },
};

export default nextConfig;
