/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/crpc',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/crpc',
}

export default nextConfig; 
