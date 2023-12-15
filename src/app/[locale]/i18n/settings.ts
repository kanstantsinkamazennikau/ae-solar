import type { InitOptions } from "i18next";

export const defaultLocale = "en";
export const locales = [defaultLocale, "de"];
export type LocaleTypes = (typeof locales)[number];
export const defaultNS = "common";

export function getOptions(lang = defaultLocale, ns = defaultNS): InitOptions {
  return {
    supportedLngs: locales,
    fallbackLng: defaultLocale,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
