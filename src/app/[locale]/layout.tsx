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
import { LocaleTypes, locales } from "@/app/[locale]/i18n/settings";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";
import { getOpengraphMetadata } from "@/app/[locale]/utils/getOpengraphMetadata";
import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";

export const revalidate = 3600;

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

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? `http://${process.env.VERCEL_URL}`
    : `https://${process.env.VERCEL_URL}`;

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const metadata = await getOpengraphMetadata(locale);

  return {
    title: metadata?.metadataTitleMainPage,
    description: metadata?.metadataDescriptionMainPage,
    metadataBase: new URL(
      `${
        process.env.NODE_ENV === "development"
          ? `http://${process.env.VERCEL_URL}`
          : BASE_URL
      }`
    ),
    alternates: {
      canonical: BASE_URL,
    },
    openGraph: {
      title: metadata?.metadataTitleMainPage,
      description: metadata?.metadataDescriptionMainPage,
      url: BASE_URL,
      type: "website",
    },
  };
}

const getLayoutData = async () => {
  const locale = getLocale();
  const urlParamsObject = {
    locale,
  };
  const footerPath = `/footers`;
  const cookiesPath = `/cookies`;
  const responseData = await Promise.all([
    fetchAPI(footerPath, urlParamsObject),
    fetchAPI(cookiesPath, urlParamsObject),
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
  const [navigationData, cookiesData] = await getLayoutData();

  const navigationAttributes = navigationData.data[0]?.attributes;
  const cookiesAttributes = cookiesData.data[0]?.attributes;

  return (
    <html lang={locale}>
      <body
        className={`${criteria.variable} ${walsheim.variable} ${
          locale === "ru" ? "font-walsheim" : "font-sans"
        }`}
      >
        <>
          <Toaster richColors />
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
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_TAG!} />
    </html>
  );
}
