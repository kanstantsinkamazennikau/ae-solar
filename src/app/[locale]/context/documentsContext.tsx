"use client";

import {
  DocumentsTypesOther,
  DocumentsTypesPresentation,
  FAQ,
} from "@/app/[locale]/documents/components/types";
import {
  DOCUMENTS_FAQ_FILES,
  DOCUMENTS_FILES,
} from "@/app/[locale]/utils/constants";
import { createContext, useCallback, useState } from "react";

export interface DocumentsContext {
  setSelectedCategory: (category: string) => void;
  selectedCategory: string;
  setDocumentsAccordionActiveIndex: (index: number) => void;
  documentsAccordionActiveIndex: number;
  setSearchInputValue: (value: string) => void;
  searchInputValue: string;
  onCategoryClick: (category: string, index: number) => void;
  documentsFile:
    | (DocumentsTypesPresentation | DocumentsTypesOther)[]
    | FAQ[]
    | never[];
  setDocumentsFile: (
    doc: (DocumentsTypesPresentation | DocumentsTypesOther)[] | FAQ[] | never[]
  ) => void;
  documentsType: string;
  setDocumentsType: (type: string) => void;
  documentsLoading: boolean;
  setDocumentsLoading: (flag: boolean) => void;
  filtersModel: string;
  setFiltersModel: (model: string) => void;
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
  const [filtersModel, setFiltersModel] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [documentsFile, setDocumentsFile] = useState<
    (DocumentsTypesPresentation | DocumentsTypesOther)[] | FAQ[] | never[]
  >([]);
  const [documentsLoading, setDocumentsLoading] = useState(true);

  const onCategoryClick = useCallback((category: string, index: number) => {
    setDocumentsAccordionActiveIndex(index);
    setTimeout(() => {
      document.getElementById(category)!.scrollIntoView({ behavior: "smooth" });
    }, 350);
  }, []);

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
        documentsLoading,
        setDocumentsLoading,
        filtersModel,
        setFiltersModel,
      }}
    >
      {children}
    </DocumentsContext.Provider>
  );
}
