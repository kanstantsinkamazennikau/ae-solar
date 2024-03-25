/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/api/outstatic/images/:path*",
        destination: "/images/:path*", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
};

module.exports = nextConfig;
