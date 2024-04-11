import "./globals.css";

import Cookies from "@/app/[locale]/components/common/CookiesBanner";
import Footer from "@/app/[locale]/components/common/Footer";
import Navigation from "@/app/[locale]/components/common/Navigation";
import ConstructorProvider from "@/app/[locale]/context/constructorContext";
import MainPageVideoContextProvider from "@/app/[locale]/context/mainPageVideoContext";
import MobileSideMenuProvider from "@/app/[locale]/context/mobileSideMenuContext";
import ModelProvider from "@/app/[locale]/context/modelContext";
import ProductsContextProvider from "@/app/[locale]/context/productsContext";
import StickyNavigationProvider from "@/app/[locale]/context/stickyNavigationContext";
import ToastContainerProvider from "@/app/[locale]/context/toastProvider";
import { useServerTranslation as serverTranslation } from "@/app/[locale]/i18n/server";
import { LocaleTypes, locales } from "@/app/[locale]/i18n/settings";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";
import localFont from "next/font/local";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

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

const getLayoutData = async () => {
  const locale = getLocale();
  const urlParamsObject = {
    locale,
  };
  const footerPath = `/footer`;
  const cookiesPath = `/cookie`;
  const commonPath = `/common`;
  const responseData = await Promise.all([
    fetchAPI(footerPath, urlParamsObject),
    fetchAPI(cookiesPath, urlParamsObject),
    fetchAPI(commonPath, urlParamsObject),
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
  const [navigationData, cookiesData] = await getLayoutData();

  const navigationAttributes = navigationData.data?.attributes;
  const cookiesAttributes = cookiesData.data?.attributes;

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
                        <Navigation headerAttributes={navigationAttributes} />
                        {children}
                        <Footer footerAttributes={navigationAttributes} />
                        <Cookies cookiesAttributes={cookiesAttributes} />
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
