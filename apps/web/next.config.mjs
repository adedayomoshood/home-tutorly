/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio.moshood.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
