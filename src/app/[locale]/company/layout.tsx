import ClientLayout from "@/app/[locale]/documents/components/ClientLayout";
import { url } from "inspector";
import { headers } from "next/headers";

const mapTitleWithDocumentsCategory = {
  faq: { title: "FAQ", description: "Have a Question? We Have Solutions" },
  publishers_info: {
    title: "Publishers Info",
    description: "Publisher's Information",
  },
  imprint: {
    title: "Imprint Info",
    description: "Imprint Information",
  },
  manufacturer: {
    title: ` Manufacturer`,
    description: `Quality Delivered Everytime`,
  },
  blog: {
    title: `Blog`,
    description: `Read Our Thoughts On the Blog`,
  },
  company: {
    title: `Company`,
    description: `lluminating Your Journey towards a Greener Tomorrow`,
  },
};

export async function generateMetadata() {
  const url = headers().get("x-url")!.split("/");

  const documentsCategory = url[
    url.length - 1
  ] as keyof typeof mapTitleWithDocumentsCategory;
  console.log(url);

  const title = `AE-Solar | ${mapTitleWithDocumentsCategory[documentsCategory].title}`;
  const description = `AE-Solar | ${mapTitleWithDocumentsCategory[documentsCategory].description}`;

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
