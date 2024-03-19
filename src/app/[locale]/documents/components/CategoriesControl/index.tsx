"use client";

import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import Categories from "@/app/[locale]/documents/components/Categories";
import Filter from "@/app/[locale]/documents/components/Filter";
import SearchBar from "@/app/[locale]/documents/components/SearchBar";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { DOCUMENTS_NO_RESULT } from "@/app/[locale]/utils/constants";
import { useParams } from "next/navigation";
import { useContext } from "react";

export default function CategoriesWithControl({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");
  const { documentsFile, documentsLoading, searchInputValue, documentsType } =
    useContext(DocumentsContext);
  const isImprint = "imprint" === documentsType;

  return (
    <div className="flex min-[920px]:gap-[60px] gap-[12px] gaprelative min-[920px]:flex-row flex-col relative min-h-[200px] pb-20">
      {!isImprint && (
        <div className="max-[920px]:sticky max-[920px]:top-[62px] max-[920px]:z-30 max-[920px]:bg-black">
          <Categories />
        </div>
      )}

      <div className="w-full">
        {documentsType === "documents" && <Filter />}
        {documentsType === "faq" && <SearchBar />}
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
            {t("No result for") + searchInputValue}
          </div>
        )}
      </div>
    </div>
  );
}
