import ClientLayout from "@/app/[locale]/documents/components/ClientLayout";
import { headers } from "next/headers";

const mapTitleWithDocumentsCategory = {
  documents: { title: "Documents", desription: "Documents You Need to Know" },
  faq: { title: "FAQ", desription: "Have a Question? We Have Solutions" },
  publishers_info: {
    title: "Publishers Info",
    desription: "Publisher's Information",
  },
  imprint: {
    title: "Imprint Info",
    desription: "Imprint Information",
  },
};

export async function generateMetadata() {
  const url = headers().get("x-url")!.split("/");
  const documentsCategory = url[
    url.length - 1
  ] as keyof typeof mapTitleWithDocumentsCategory;

  const title = `AE-Solar | ${mapTitleWithDocumentsCategory[documentsCategory].title}`;
  const description = `AE-Solar | ${mapTitleWithDocumentsCategory[documentsCategory].desription}`;

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

export default function DocumentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
