import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: ['@/sass'],
    prependData: `
      @use '@/sass/_variables' as *;
      @use '@/sass/_mixins' as *;
    `
  }
};

export default nextConfig;
