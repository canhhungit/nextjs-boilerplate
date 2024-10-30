import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/todos/:slug',
        destination: 'https://jsonplaceholder.typicode.com/todos/:slug',
      },
    ];
  },
  productionBrowserSourceMaps: true,
  basePath: '',
  output: 'standalone',
  swcMinify: true,
  assetPrefix: '',
  publicRuntimeConfig: {
    SERVICE_PATH: '',
  },
  reactStrictMode: false,
  compiler: {
    removeConsole: false,
  },
  images: {
    path: '/_next/image',
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
      },
    ],
  },
};

// Bỏ qua `nextConfigFunction` và export trực tiếp cấu hình đã có rewrites
export default withNextIntl(nextConfig);
