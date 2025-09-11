const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '',
  assetPrefix: '',
  trailingSlash: false,
  experimental: { typedRoutes: false }
};

export default nextConfig;
