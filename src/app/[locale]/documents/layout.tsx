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
};

// export async function generateMetadata({ params }: { params: any }) {
//   console.log(params);

//   return {
//     title: "...",
//   };
// }

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  console.log("params", params);

  const pathName = usePathname().split("/");
  const documentsCategory = pathName[pathName.length - 1];

  return (
    <DocumentsProvider category={documentsCategory} key={documentsCategory}>
      <div className="relative -mt-[64px] flex justify-center">
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
          className="h-[440px]"
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
            className="mb-[60px]"
          />
          <CategoriesWithControl>{children}</CategoriesWithControl>
        </BasicWidthContainer>
      </div>
    </DocumentsProvider>
  );
}
