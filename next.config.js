/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // genera /out estático
  images: { unoptimized: true}, // permite next/image sin servidor
  trailingSlash: true,          // evita 404 en hosting estático
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Headers y redirects no funcionan en export estático
  // Se manejan a nivel de servidor web (Apache/Nginx)
}

export default nextConfig
