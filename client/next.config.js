/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['peticiones.online'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/ordering/**',
      },
    ],
  },
  reactStrictMode: false,
}

module.exports = nextConfig
