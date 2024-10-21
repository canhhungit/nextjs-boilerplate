import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from 'next/constants.js';

/** @type {import('next').NextConfig} */

const environment = process.env.NODE_ENV;

console.log('Loading nextConfig at:', environment, new Date().toISOString());

const nextConfig = {
  // basePath: '/play',
  output: 'standalone',
  swcMinify: true,
  // assetPrefix: '/play',
  // publicRuntimeConfig: {
  //   SERVICE_PATH: '/play',
  // },

  reactStrictMode: false,
  compiler: {
    // removeConsole:
    //   process.env.NODE_ENV === 'production' ? {exclude: ['error']} : false,
    removeConsole: false,
  },
  images: {
    path: '/play/_next/image',
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

export default nextConfigFunction;

// const withPWA = withPWAInit({
//   dest: 'public',
//   disable: process.env.NODE_ENV === 'development',
//   workboxOptions: {
//     disableDevLogs: false,
//   },
// })

// export default withPWA(nextConfig)
