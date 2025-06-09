/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['sdpneumatics.in'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.wp.com',
      },
    ],
  },
};

export default nextConfig;
