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
  onCategoryClick: (category: string, index: number) => void;
  documentsFile: any;
  setDocumentsFile: (doc: any) => void;
  documentsType: string;
  setDocumentsType: (type: string) => void;
}

export const DocumentsContext = createContext<DocumentsContext>(null!);

const mapConstantWithCategory = {
  documents: DOCUMENTS_FILES,
  faq: DOCUMENTS_FAQ_FILES,
};

export default function DocumentsProvider({
  children,
  category,
}: {
  category: string;
  children: React.ReactNode;
}) {
  const [documentsType, setDocumentsType] = useState(category);
  const [selectedCategory, setSelectedCategory] = useState(
    mapConstantWithCategory[
      documentsType as keyof typeof mapConstantWithCategory
    ][0].category
  );
  const [documentsAccordionActiveIndex, setDocumentsAccordionActiveIndex] =
    useState(0);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [documentsFile, setDocumentsFile] = useState();

  const onCategoryClick = useCallback((category: string, index: number) => {
    setDocumentsAccordionActiveIndex(index);
    setTimeout(() => {
      document.getElementById(category)!.scrollIntoView({ behavior: "smooth" });
    }, 350);
  }, []);

  useEffect(() => {
    setSelectedCategory(
      mapConstantWithCategory[
        category as keyof typeof mapConstantWithCategory
      ][0].category
    );
    setDocumentsAccordionActiveIndex(0);
    setSearchInputValue("");
    setDocumentsType(category);
  }, [category]);

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
        documentsFile,
        setDocumentsFile,
        documentsType,
        setDocumentsType,
      }}
    >
      {children}
    </DocumentsContext.Provider>
  );
}
