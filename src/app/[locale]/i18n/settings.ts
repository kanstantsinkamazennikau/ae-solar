import type { InitOptions } from "i18next";

export const defaultLocale = "en";

// TODO <ChangeLocale
export const locales = [
  defaultLocale,
  "de",
  // "fr",
  // "zn",
  "ru",
  "pl",
  // "tr",
  // "pt",
  // "es",
  // "it",
  // "ja",
  // "ar",
  // "bg",
];
// export const locales = [defaultLocale];
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
