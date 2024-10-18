/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tutorly.moshood.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
