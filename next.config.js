/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const corsHeaders = [
  { key: 'Access-Control-Allow-Credentials', value: 'true' },
  { key: 'Access-Control-Allow-Origin', value: '*' },
  { key: 'Access-Control-Allow-Methods', value: '*' },
  {
    key: 'Access-Control-Allow-Headers',
    value:
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  },
];

const nextConfig = withBundleAnalyzer({
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
  redirects() {
    return [
      {
        source: '/docs',
        destination: '/',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [{ source: '/(.*)', headers: corsHeaders }];
  },
});

module.exports = nextConfig