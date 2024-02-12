import ProductNavigation from "@/app/[locale]/products/[id]/components/ProductNavigation";
import { PRODUCT_PANEL_TITLES } from "@/app/[locale]/products/[id]/constants";
import {
  LayoutProps,
  ProductPageProps,
} from "@/app/[locale]/products/[id]/types";

export async function generateMetadata({ params: { id } }: ProductPageProps) {
  const title = `AE-Solar | ${id}`;
  const description = `AE-Solar | ${PRODUCT_PANEL_TITLES[id]}`;

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
  params: { id },
  children,
}: LayoutProps) {
  return (
    <div>
      <ProductNavigation id={id} />
      {children}
    </div>
  );
}
