/** @type {import('next').NextConfig} */

module.exports=  nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
  devIndicators: {
    buildActivity: false,
  },
  turbo: {
    loaders: {
      '.md': [
        {
          loader: '@mdx-js/loader',
          options: {
            format: 'md',
          },
        },
      ],
      '.mdx': ['@mdx-js/loader'],
    },
  },
  images: {
    loader: 'custom',
    loaderFile: './src/lib/loader.ts',
    minimumCacheTTL: 6000,
    domains: ['localhost', 'avatars.githubusercontent.com'],
  },
};