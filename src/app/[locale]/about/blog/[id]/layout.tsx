import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Image from "next/image";

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
  const title = `AE-Solar | `;
  const description = `AE-Solar | `;

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
  return (
    <>
      <div className="relative -mt-[80px] flex justify-center">
        <Image
          src="/images/about/blog/blogPostBackground.png"
          alt="documents"
          width={1920}
          height={440}
          quality={100}
          priority
          className="h-[440px]"
        />
        {/* <div className="flex w-full justify-center absolute bottom-0"> */}
        {/* <BasicWidthContainer>
      <DocumentsHeading />
    </BasicWidthContainer> */}
        {/* </div> */}
      </div>
      <div className="flex w-full justify-center">
        <BasicWidthContainer>{children}</BasicWidthContainer>
      </div>
    </>
  );
}
