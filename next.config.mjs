import createNextIntlPlugin from 'next-intl/plugin';
import withPWA from '@ducanh2912/next-pwa';

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

// Cấu hình PWA
const pwaConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === 'development', // Tắt PWA trong môi trường dev
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
    // runtimeCaching: [
    //   {
    //     urlPattern: /\/_next\/static\/.*/i,
    //     handler: 'CacheFirst',
    //     options: {
    //       cacheName: 'next-static-js',
    //       expiration: {
    //         maxEntries: 50,
    //         maxAgeSeconds: 1 * 24 * 60 * 60, // Cache trong 1 ngày
    //       },
    //       cacheableResponse: {
    //         statuses: [0, 200],
    //       },
    //     },
    //   },
    // ],
  },
};

// Kết hợp next-pwa và next-intl
export default withNextIntl(withPWA(pwaConfig)(nextConfig));
