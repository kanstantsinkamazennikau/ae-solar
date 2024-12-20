"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import DocumentsHeading from "@/app/[locale]/components/common/DocumentsHeading";
import DocumentsProvider from "@/app/[locale]/context/documentsContext";
import CategoriesWithControl from "@/app/[locale]/documents/components/CategoriesControl";
import Image from "next/image";
import { usePathname } from "next/navigation";

const mapBackgroundWithCategory = {
  documents: `/images/documents/documents.png`,
  faq: `/images/documents/faq.png`,
  publishers_info: `/images/documents/publishers_info.png`,
  imprint: `/images/documents/imprint.png`,
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname().split("/");
  const documentsCategory = pathName[pathName.length - 1];

  return (
    <DocumentsProvider category={documentsCategory} key={documentsCategory}>
      <div className="relative -mt-[80px] flex justify-center">
        <Image
          src={
            mapBackgroundWithCategory[
              documentsCategory as keyof typeof mapBackgroundWithCategory
            ]
          }
          alt="documents"
          width={1920}
          height={440}
          quality={100}
          priority
          className="lg:h-[440px] min-[920px]:h-[400px] md:h-[360px] h-[300px]"
        />
        <div className="flex w-full justify-center absolute bottom-0">
          <BasicWidthContainer>
            <DocumentsHeading />
          </BasicWidthContainer>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <BasicWidthContainer>
          <Image
            src={`/images/glowFull.png`}
            alt="glow"
            priority
            width={1320}
            height={60}
            className="min-[920px]:mb-[60px] mb-[40px]"
          />
          <CategoriesWithControl>{children}</CategoriesWithControl>
        </BasicWidthContainer>
      </div>
    </DocumentsProvider>
  );
}
