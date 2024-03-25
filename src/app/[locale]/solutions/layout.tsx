import { useServerTranslation as serverTranslation } from "@/app/[locale]/i18n/server";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const { t } = await serverTranslation(locale, "translation");

  const title = `AE-Solar | ${t("B2B Solutions")}`;
  const description = `AE-Solar | ${t("Discover AESOLAR")} - ${t(
    "Your Partner in a Sustainable Future"
  )}`;

  return {
    title,
    description,
    keywords: [],
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
