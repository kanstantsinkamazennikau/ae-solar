/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  assetPrefix: isProd ? "https://ae-solar.vercel.app" : undefined,
};

module.exports = nextConfig;
