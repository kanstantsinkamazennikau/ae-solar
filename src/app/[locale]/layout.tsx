import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/app/[locale]/components/common/Footer";
import localFont from "next/font/local";
import Navigation from "@/app/[locale]/components/common/Navigation";
import { LocaleTypes, locales } from "@/app/[locale]/i18n/settings";
import { notFound } from "next/navigation";
import ModelProvider from "@/app/[locale]/context/modelContext";
import StickyNavigationProvider from "@/app/[locale]/context/stickyNavigationContext";
import ConstructorProvider from "@/app/[locale]/context/constructorContext";
import ToastContainerProvider from "@/app/[locale]/context/toastProvider";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "@/app/[locale]/components/common/CookiesBanner";
import { headers } from "next/headers";
import ProductsContextProvider from "@/app/[locale]/context/productsContext";
import MainPageVideoContextProvider from "@/app/[locale]/context/mainPageVideoContext";
import { useServerTranslation as serverTranslation } from "@/app/[locale]/i18n/server";
import MobileSideMenuProvider from "@/app/[locale]/context/mobileSideMenuContext";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import { NavigationProps } from "@/app/[locale]/components/common/Navigation/types";
import {
  FooterCopyright,
  FooterNavigation,
} from "@/app/[locale]/components/common/Footer/types";

const walsheim = localFont({
  src: [
    {
      path: "./fonts/GTWalsheim/GTWalsheimPro-UltraLight.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/GTWalsheim/GTWalsheimPro-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/GTWalsheim/GTWalsheimPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/GTWalsheim/GTWalsheimPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GTWalsheim/GTWalsheimPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GTWalsheim/GTWalsheimPro-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GTWalsheim/GTWalsheimPro-Black.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GTWalsheim/GTWalsheimPro-UltraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-walsheim",
});

const criteria = localFont({
  src: [
    {
      path: "./fonts/Criteria CF/Criteria CF Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Criteria CF/Criteria CF Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Criteria CF/Criteria CF Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Criteria CF/Criteria CF Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Criteria CF/Criteria CF Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Criteria CF/Criteria CF Demibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Criteria CF/Criteria CF Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Criteria CF/Criteria CF Extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Criteria CF/Criteria CF Super.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-criteria",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const { t } = await serverTranslation(locale, "translation");

  return {
    title: "AE-Solar",
    description: t("MetadataDescriptionHome"),
    keywords: [],
    metadataBase: new URL(
      `${
        process.env.NODE_ENV === "development"
          ? `http://${process.env.VERCEL_URL}`
          : `https://${process.env.VERCEL_URL}`
      }`
    ),
    openGraph: {
      title: "AE-Solar",
      description: t("MetadataDescriptionHome"),
      type: "website",
    },
  };
}

const getHeaderLayoutData = async () => {
  const path = `/pages`;
  const headerUrlParamsObject = {
    filters: { slug: "header" },
    populate: {
      contentSections: {
        populate: "*",
      },
    },
  };

  const footerUrlParamsObject = {
    filters: { slug: "footer" },
    populate: {
      contentSections: {
        populate: "*",
      },
    },
  };
  const responseData = await Promise.all([
    fetchAPI(path, headerUrlParamsObject),
    fetchAPI(path, footerUrlParamsObject),
  ]);
  return responseData;
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: LocaleTypes };
}) {
  if (!locales.includes(locale as any)) notFound();
  const url = headers().get("x-url")!.split("/");
  const [headerData, footerData] = await getHeaderLayoutData();

  const {
    attributes: { contentSections: headerContentSections },
  } = headerData.data[0];

  const {
    attributes: { contentSections: footerContentSections },
  } = footerData.data[0];

  return (
    <html lang={locale}>
      <body className={`${criteria.variable} ${walsheim.variable} font-sans`}>
        {url.includes("outstatic") ? (
          children
        ) : (
          <>
            <ToastContainerProvider />
            <ModelProvider>
              <MobileSideMenuProvider>
                <ConstructorProvider>
                  <ProductsContextProvider>
                    <MainPageVideoContextProvider>
                      <StickyNavigationProvider>
                        <Navigation contentSections={headerContentSections} />
                        {children}

                        <Footer
                          contentSections={{
                            navigation: footerContentSections.filter(
                              (content: FooterNavigation) =>
                                content.__component === "layout.header"
                            ),
                            copyright: footerContentSections.filter(
                              (content: FooterCopyright) =>
                                content.__component === "layout.copyright"
                            ),
                          }}
                        />
                        <Cookies />
                      </StickyNavigationProvider>
                    </MainPageVideoContextProvider>
                  </ProductsContextProvider>
                </ConstructorProvider>
              </MobileSideMenuProvider>
            </ModelProvider>
          </>
        )}
      </body>
    </html>
  );
}
