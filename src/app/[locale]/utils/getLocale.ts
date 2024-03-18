import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { headers } from "next/headers";

const getLocale = () => {
  const headersList = headers();
  const locale = headersList.get("x-url")?.split("/")[1] as LocaleTypes;
  return locale;
};

export default getLocale;
