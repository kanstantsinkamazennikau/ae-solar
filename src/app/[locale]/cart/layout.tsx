import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { useServerTranslation as serverTranslation } from "@/app/[locale]/i18n/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const { t } = await serverTranslation(locale, "translation");
  const title = `AE-Solar | ${t("Cart")}`;
  const description = `AE-Solar | ${t("Your modules")}`;

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

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
