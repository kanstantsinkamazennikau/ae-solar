import ProductNavigation from "@/app/[locale]/products/[id]/components/ProductNavigation";
import { PRODUCT_PANEL_TITLES } from "@/app/[locale]/products/[id]/constants";
import {
  LayoutProps,
  ProductPageProps,
} from "@/app/[locale]/products/[id]/types";
import { PRODUCT_INTRO_PANELS_IMAGES } from "@/app/[locale]/utils/constants";

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
  if (!PRODUCT_INTRO_PANELS_IMAGES.includes(id))
    return (
      <div className="text-center [font-size:_clamp(20px,2vw,32px)] mt-8">
        Product not found
      </div>
    );

  return (
    <div>
      <ProductNavigation id={id} />
      {children}
    </div>
  );
}
