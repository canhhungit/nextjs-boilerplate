import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from 'next/constants.js';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const environment = process.env.NODE_ENV;
const prefixPath = '';

console.log('Loading nextConfig at:', environment, new Date().toISOString());

const nextConfig = {
  productionBrowserSourceMaps: true,
  basePath: prefixPath,
  output: 'standalone',
  swcMinify: true,
  assetPrefix: prefixPath,
  publicRuntimeConfig: {
    SERVICE_PATH: prefixPath,
  },

  reactStrictMode: false,
  compiler: {
    // removeConsole:
    //   process.env.NODE_ENV === 'production' ? {exclude: ['error']} : false,
    removeConsole: false,
  },
  images: {
    path: prefixPath + '/_next/image',
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
const nextConfigFunction = async (phase) => {
  // if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
  //   const withPWA = (await import('@ducanh2912/next-pwa')).default({
  //     dest: 'public',
  //     register: true,
  //     skipWaiting: true,
  //     // disable: process.env.NODE_ENV === 'development',
  //     workboxOptions: {
  //       disableDevLogs: true,
  //     },
  //   })
  //   return withPWA(nextConfig)
  // }
  return nextConfig;
};

export default withNextIntl(nextConfigFunction);

// const withPWA = withPWAInit({
//   dest: 'public',
//   disable: process.env.NODE_ENV === 'development',
//   workboxOptions: {
//     disableDevLogs: false,
//   },
// })

// export default withPWA(nextConfig)
