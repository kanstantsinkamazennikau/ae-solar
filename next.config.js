/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.STRAPI_URL_PROTOCOL,
        hostname: process.env.STRAPI_URL,
        port: process.env.STRAPI_URL_PORT,
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
    ],
  },
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/api/outstatic/images/:path*",
        destination: "/images/:path*",
        permanent: true,
      },
      {
        source: "/products/Dr-Hamed-Hanifi_AESOLAR_TERRA_.pdf",
        destination:
          "/documents/presentations/Dr-Hamed-Hanifi_AESOLAR_TERRA_.pdf",
        permanent: true,
      },
      {
        source:
          "/wp-content/uploads/2024/01/AE_SMD-108E_395W-410W_Ver24.1.1.pdf",
        destination:
          "/documents/solar_panels/ShadeStar/AE_SMD-108E_395W-410W_Ver24.1.1.pdf",
        permanent: true,
      },
      {
        source: "/products/Fraunhofer_HSF_Report_Presentation_2018.pdf",
        destination:
          "/documents/presentations/Fraunhofer_HSF_Report_Presentation_2018.pdf",
        permanent: true,
      },
      {
        source:
          "/wp-content/uploads/2024/01/AE_CMD-L132BD_505W-525W_Ver24.1.1.pdf",
        destination:
          "/documents/solar_panels/Terra/AE_CMD-L132BD_505W-525W_Ver24.1.1.pdf",
        permanent: true,
      },
      {
        source: "/products/Dr-Hamed-Hanifi_AESOLAR_TERRA_.pdf",
        destination:
          "/documents/presentations/Dr-Hamed-Hanifi_AESOLAR_TERRA_.pdf",
        permanent: true,
      },
      {
        source:
          "/wp-content/uploads/2024/01/AE_MD-L132BD_495W-505W_Ver24.1.1.pdf",
        destination:
          "/documents/solar_panels/Terra/AE_CMD-L132BD_505W-525W_Ver24.1.1.pdf",
        permanent: true,
      },
      {
        source: "/pl/pt-pt/aplicativo-ae-solar",
        destination:
          "/documents/NFC_chips/Chips_NFC_integrados_aos_painéis_solares_e_APP_AE_Solar.pdf",
        permanent: true,
      },
      {
        source: "/pl/downloads",
        destination: "/documents",
        permanent: true,
      },
      {
        source: "/pt-pt/aplicativo-ae-solar",
        destination:
          "/documents/NFC_chips/Chips_NFC_integrados_aos_painéis_solares_e_APP_AE_Solar.pdf",
        permanent: true,
      },
      {
        source: "/downloads",
        destination: "/documents",
        permanent: true,
      },
      {
        source:
          "/wp-content/uploads/2024/02/Apresentacao-AE-Solar-Brasil_202402.pdf",
        destination:
          "/documents/presentations/Apresentacao-AE-Solar-Brasil_202402.pdf",
        permanent: true,
      },
      //TODO remove after translation
      {
        source: "/tr",
        destination: "/",
        permanent: false,
      },
      {
        source: "/documents/presentation.pdf",
        destination:
          "/documents/presentations/Company_Profile_EN_2024_JAN_v1.pdf",
        permanent: false,
      },
      {
        source: "/documents/presentation.pdf",
        destination:
          "/documents/presentations/Company_Profile_EN_2024_JAN_v1.pdf",
        permanent: false,
      },
      {
        source: "/company/news/terms",
        destination: "/company/publishers_info",
        permanent: false,
      },
      {
        source: "/company/news/how-to-add-solar-panels-to-existing-system",
        destination: "/company/news",
        permanent: false,
      },
      {
        source: "/company/news/will-the-eu-really-be-carbon-neutral-by-2050",
        destination: "/company/news",
        permanent: false,
      },
    ];
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
