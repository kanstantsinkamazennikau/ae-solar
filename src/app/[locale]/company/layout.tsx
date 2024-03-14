import ClientLayout from "@/app/[locale]/documents/components/ClientLayout";
import { url } from "inspector";
import { headers } from "next/headers";

const mapTitleWithDocumentsCategory = {
  faq: { title: "FAQ", description: "Have a Question? We Have Solutions" },
  publishers_info: {
    title: "Herausgeberinformationen",
    description: "Publisher-Informationen",
  },
  imprint: {
    title: "Impressumsinformationen",
    description: "Impressumsinformationen",
  },
  manufacturer: {
    title: ` Hersteller`,
    description: `Qualität, die jedes Mal geliefert wird.`,
  },
  blog: {
    title: `Blog`,
    description: `Lesen Sie unsere Gedanken im Blog`,
  },
  company: {
    title: `Unternehmen`,
    description: `Illuminieren Sie Ihre Reise hin zu einer grüneren Zukunft.`,
  },
};

export async function generateMetadata() {
  const url = headers().get("x-url")!.split("/");

  const documentsCategory = url[
    url.length - 1
  ] as keyof typeof mapTitleWithDocumentsCategory;

  const title = `AE-Solar | ${mapTitleWithDocumentsCategory[documentsCategory]?.title}`;
  const description = `AE-Solar | ${mapTitleWithDocumentsCategory[documentsCategory]?.description}`;

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

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
