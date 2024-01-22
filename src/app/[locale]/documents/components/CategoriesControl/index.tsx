"use client";

import Loader from "@/app/[locale]/components/common/Loader";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import Categories from "@/app/[locale]/documents/components/Categories";
import Filter from "@/app/[locale]/documents/components/Filter";
import SearchBar from "@/app/[locale]/documents/components/SearchBar";
import { DOCUMENTS_NO_RESULT } from "@/app/[locale]/utils/constants";
import { useContext } from "react";

export default function CategoriesWithControl({
  children,
}: {
  children: React.ReactNode;
}) {
  const { documentsFile, documentsLoading, searchInputValue, documentsType } =
    useContext(DocumentsContext);

  return (
    <div className="flex gap-[60px] relative">
      <div>
        <Categories />
      </div>

      <div className="w-full">
        {documentsType !== "documents" ? <SearchBar /> : <Filter />}
        {children}
        {!documentsLoading && !documentsFile.length && (
          <div
            className="
              [font-size:_clamp(16px,1.5vw,30px)]
              leading-[100%]
              font-medium
              capitalize
              mt-5
            "
          >
            {DOCUMENTS_NO_RESULT + searchInputValue}
          </div>
        )}
      </div>
    </div>
  );
}
