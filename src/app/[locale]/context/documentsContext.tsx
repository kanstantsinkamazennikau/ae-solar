"use client";

import { DOCUMENTS_FILES } from "@/app/[locale]/utils/constants";
import { usePathname } from "next/navigation";
import { createContext, useCallback, useState } from "react";

export interface DocumentsContext {
  setSelectedCategory: (category: string) => void;
  selectedCategory: string;
  setDocumentsAccordionActiveIndex: (index: number) => void;
  documentsAccordionActiveIndex: number;
  setSearchInputValue: (value: string) => void;
  searchInputValue: string;
  onCategoryClick: (category: string, index: number) => void;
}

export const DocumentsContext = createContext<DocumentsContext>(null!);

export default function DocumentsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const initialCategoryBasedOnRoute = () => {
    if (pathname === "/documents") {
      return DOCUMENTS_FILES[0].category as string;
    }
    return "";
  };

  const [selectedCategory, setSelectedCategory] = useState(
    initialCategoryBasedOnRoute()
  );
  const [documentsAccordionActiveIndex, setDocumentsAccordionActiveIndex] =
    useState(0);
  const [searchInputValue, setSearchInputValue] = useState("");

  const onCategoryClick = useCallback((category: string, index: number) => {
    setSelectedCategory(category);
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
      }}
    >
      {children}
    </DocumentsContext.Provider>
  );
}
