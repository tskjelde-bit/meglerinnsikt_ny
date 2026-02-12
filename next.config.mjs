/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/meglerinnsikt_ny' : '',
  assetPrefix: isProd ? '/meglerinnsikt_ny/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/meglerinnsikt_ny' : '',
  },
};

export default nextConfig;
