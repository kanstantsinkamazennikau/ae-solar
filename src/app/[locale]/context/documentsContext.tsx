"use client";

import {
  DOCUMENTS_FAQ_FILES,
  DOCUMENTS_FILES,
} from "@/app/[locale]/utils/constants";
import { usePathname } from "next/navigation";
import { createContext, useCallback, useEffect, useState } from "react";

export interface DocumentsContext {
  setSelectedCategory: (category: string) => void;
  selectedCategory: string;
  setDocumentsAccordionActiveIndex: (index: number) => void;
  documentsAccordionActiveIndex: number;
  setSearchInputValue: (value: string) => void;
  searchInputValue: string;
  onCategoryClick: (
    category: string,
    index: number,
    isIntersecionScroll?: boolean
  ) => void;
}

export const DocumentsContext = createContext<DocumentsContext>(null!);

const mapConstantWithCategory = {
  documents: DOCUMENTS_FILES,
  faq: DOCUMENTS_FAQ_FILES,
};

export default function DocumentsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname().split("/");
  const documentsCategory = pathName[pathName.length - 1];

  const [selectedCategory, setSelectedCategory] = useState(
    mapConstantWithCategory[
      documentsCategory as keyof typeof mapConstantWithCategory
    ][0].category
  );
  const [documentsAccordionActiveIndex, setDocumentsAccordionActiveIndex] =
    useState(0);
  const [searchInputValue, setSearchInputValue] = useState("");

  const onCategoryClick = useCallback(
    (category: string, index: number, isIntersecionScroll?: boolean) => {
      !isIntersecionScroll && setSelectedCategory(category);
      setDocumentsAccordionActiveIndex(index);
      setTimeout(() => {
        document
          .getElementById(category)!
          .scrollIntoView({ behavior: "smooth" });
      }, 350);
    },
    []
  );

  useEffect(() => {
    setSelectedCategory(
      mapConstantWithCategory[
        documentsCategory as keyof typeof mapConstantWithCategory
      ][0].category
    );
    setDocumentsAccordionActiveIndex(0);
  }, [documentsCategory]);

  return (
    <DocumentsContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        documentsAccordionActiveIndex,
        setDocumentsAccordionActiveIndex,
        searchInputValue,
        setSearchInputValue,
        onCategoryClick,
      }}
    >
      {children}
    </DocumentsContext.Provider>
  );
}
