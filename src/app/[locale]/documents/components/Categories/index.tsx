"use client";

import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import {
  DOCUMENTS_CATEGORIES,
  DOCUMENTS_FAQ_FILES,
  DOCUMENTS_FILES,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const mapConstantWithCategory = {
  documents: DOCUMENTS_FILES,
  faq: DOCUMENTS_FAQ_FILES,
};

export default function Categories() {
  const { selectedCategory, onCategoryClick } = useContext(DocumentsContext);
  const pathName = usePathname().split("/");
  const documentsCategory = pathName[pathName.length - 1];

  return (
    <div className="flex flex-col sticky min-[920px]:top-[80px] top-[64px]">
      <Image
        src={`/images/documents/folderTop.svg`}
        alt="folderTop"
        width={300}
        height={80}
        priority
        className="w-full min-w-[300px] max-w-[300px]"
      />
      <div className="absolute top-4 w-full px-7">
        <p className="font-semibold text-[#505050] [font-size:_clamp(12px,1.5vw,16px)] leading-[120%] mb-4">
          {DOCUMENTS_CATEGORIES}
        </p>
        <hr className="bg-option-border h-[1px] border-none w-full" />
      </div>

      <div
        className="
          pt-0
          px-7
          pb-7
          border-t-0
          border
          border-solid
        border-[#131313]
        bg-[#0D0D0D]
          relative
          -top-[10px]
          rounded-tl-none
          rounded-tr-none
          rounded-xl
          font-semibold
          [font-size:_clamp(12px,1.5vw,16px)]
          leading-[120%]
          min-w-[300px]
          max-w-[300px]
        "
      >
        {mapConstantWithCategory[
          documentsCategory as keyof typeof mapConstantWithCategory
        ].map(({ category }, index) => {
          const isSelectedcategory = selectedCategory === category;
          return (
            <Link
              key={category}
              href={`#${category}`}
              onClick={(e) => {
                e.preventDefault();
                onCategoryClick(category, index);
              }}
            >
              <div
                className={`
                  ${isSelectedcategory ? "text-white" : "text-dark-gray-900"} 
                  mt-4
                  flex
                  gap-4
                  justify-between
                  items-center
                `}
              >
                <p>{category}</p>
                {isSelectedcategory && (
                  <div className="min-w-[10px] min-h-[10px] rounded-full bg-base-red" />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}