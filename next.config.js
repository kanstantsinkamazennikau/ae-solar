/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/api/outstatic/images/:path*",
        destination: "/images/:path*", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
  experimental: {
    nftTracing: true,
  },
};

module.exports = nextConfig;
