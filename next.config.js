/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io", "encrypted-tbn0.gstatic.com"],
  },
};

module.exports = nextConfig;
