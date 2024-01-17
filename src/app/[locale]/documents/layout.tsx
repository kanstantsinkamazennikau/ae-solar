"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import DocumentsHeading from "@/app/[locale]/components/common/DocumentsHeading";
import DocumentsProvider from "@/app/[locale]/context/documentsContext";
import Categories from "@/app/[locale]/documents/components/Categories";
import SearchBar from "@/app/[locale]/documents/components/SearchBar";
import Image from "next/image";
import { usePathname } from "next/navigation";

const mapBackgroundWithCategory = {
  documents: `/images/documents/documents.png`,
  faq: `/images/documents/faq.png`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname().split("/");
  const documentsCategory = pathName[pathName.length - 1];

  return (
    <DocumentsProvider>
      <div className="relative -mt-[64px]">
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
          <div className="flex gap-[60px]">
            <div>
              <Categories />
            </div>

            <div className="w-full">
              <SearchBar />
              {children}
            </div>
          </div>
        </BasicWidthContainer>
      </div>
    </DocumentsProvider>
  );
}
