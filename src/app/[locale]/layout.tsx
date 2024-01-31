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

export const metadata: Metadata = {
  title: "AE-Solar",
  description: "German TIER1 Manufacturer of High-Quality Solar Panels",
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
    description: "German TIER1 Manufacturer of High-Quality Solar Panels",
    type: "website",
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: LocaleTypes };
}) {
  if (!locales.includes(locale as any)) notFound();
  const url = headers().get("x-url")!.split("/");

  return (
    <html lang={locale}>
      <body className={`${criteria.variable} ${walsheim.variable} font-sans`}>
        {url.includes("outstatic") ? (
          children
        ) : (
          <>
            <ToastContainerProvider />
            <ModelProvider>
              <ConstructorProvider>
                <StickyNavigationProvider>
                  <Navigation />
                  {children}
                  <Footer />
                  <Cookies />
                </StickyNavigationProvider>
              </ConstructorProvider>
            </ModelProvider>
          </>
        )}
      </body>
    </html>
  );
}
