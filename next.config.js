/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  env: { EMAIL: process.env.EMAIL, PASSWORD: process.env.PASSWORD },
};

module.exports = nextConfig;
