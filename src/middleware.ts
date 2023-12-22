import { defaultLocale, locales } from "@/app/[locale]/i18n/settings";
import { NextRequest, NextResponse } from "next/server";
import { I18nConfig, i18n } from "../i18n-config";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

function getLocale(request: NextRequest, i18nConfig: I18nConfig): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  return match(languages, locales, defaultLocale);
}

export default function middleware(request: NextRequest) {
  let response;
  let nextLocale;

  const pathname = request.nextUrl.pathname;

  const pathLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value || "en";
  if (pathLocale) {
    const isDefaultLocale = pathLocale === defaultLocale;
    if (isDefaultLocale) {
      let pathWithoutLocale = pathname.slice(`/${pathLocale}`.length) || "/";
      if (request.nextUrl.search) pathWithoutLocale += request.nextUrl.search;

      response = NextResponse.redirect(new URL(pathWithoutLocale, request.url));
    }

    nextLocale = pathLocale;
  } else {
    const isFirstVisit = !request.cookies.has("NEXT_LOCALE");

    const locale = isFirstVisit ? getLocale(request, i18n) : cookieLocale;

    let newPath = `${locale}${pathname}`;
    if (request.nextUrl.search) newPath += request.nextUrl.search;

    response =
      locale === defaultLocale
        ? NextResponse.rewrite(new URL(newPath, request.url))
        : NextResponse.redirect(new URL(newPath, request.url));
    nextLocale = locale;
  }

  if (!response) response = NextResponse.next();

  if (nextLocale) response.cookies.set("NEXT_LOCALE", nextLocale);
  response.headers.append("x-url", request.url);
  return response;
}

export const config = {
  // Do not run the middleware on the following paths
  matcher: ["/((?!_next).*)"],
  // matcher: ["/((?!.*\\.).*)", "/favicon.ico"],
};
