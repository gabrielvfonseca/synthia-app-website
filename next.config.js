/** @type {import('next').NextConfig} */

module.exports=  nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  images: {
    minimumCacheTTL: 6000,
    domains: ['localhost'],
  },
};