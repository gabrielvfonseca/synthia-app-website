/** @type {import('next').NextConfig} */
const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 6000,
    domains: ['localhost'],
  },
  experimental: {
    appDir: true,
  },
  webpack: config => {
    const configCopy = { ...config }
    configCopy.resolve.alias = {
      ...config.resolve.alias,
      '@css': path.resolve(__dirname, './src/css/'),
      '@components': path.resolve(__dirname, './src/components'),
      '@icons': path.resolve(__dirname, './src/icons'),
      '@utilities': path.resolve(__dirname, './src/utilities'),
      '@types': path.resolve(__dirname, './src/types'),
      '@ui': path.resolve(__dirname, './src/ui'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@fonts': path.resolve(__dirname, './src/fonts'),
    }
    return configCopy
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
    const headers = []

    if (!process.env.NEXT_PUBLIC_IS_LIVE) {
      headers.push({
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
        source: '/:path*',
      })
    }
    return headers
  },
})

module.exports = nextConfig