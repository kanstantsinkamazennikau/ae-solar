import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { BASE_URL } from "@/app/[locale]/layout";
import { getOpengraphMetadata } from "@/app/[locale]/utils/getOpengraphMetadata";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const metadata = await getOpengraphMetadata(locale);
  const title = `${metadata?.metadataTitleCatalogue}`;
  const description = `${metadata?.metadataDescriptionCatalogue}`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/catalogue`,
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
