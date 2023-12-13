import { LocaleTypes } from "@/app/[locale]/i18n/settings";

const highlightNavigationLink = (
  locale: LocaleTypes,
  url: string,
  path: string
) => {
  if (locale === "en") {
    return path === url;
  } else {
    if (url === "/") return path === `/${locale}`;
    return path === `/${locale}${url}`;
  }
};

export default highlightNavigationLink;
