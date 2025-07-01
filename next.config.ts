/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'jumpshare.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    domains: [
      'i.ibb.co',
      'jumpshare.com',
      'res.cloudinary.com'
    ],
  },
};

module.exports = nextConfig;
