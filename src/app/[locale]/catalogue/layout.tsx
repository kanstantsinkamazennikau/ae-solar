import { useServerTranslation as serverTranslation } from "@/app/[locale]/i18n/server";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const { t } = await serverTranslation(locale, "translation");
  const title = `AE-Solar | ${t("Catalogue")}`;
  const description = `AE-Solar | ${t("Our portfolio")} ${t("Goes beyond")}`;

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

export default function CalculateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
