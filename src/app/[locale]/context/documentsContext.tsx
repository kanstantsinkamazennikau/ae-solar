"use client";

import { DOCUMENTS_FILES } from "@/app/[locale]/utils/constants";
import { usePathname } from "next/navigation";
import { createContext, useState } from "react";

export interface DocumentsContext {
  setSelectedCategory: (category: string) => void;
  selectedCategory: string;
  setDocumentsAccordionActiveIndex: (index: number) => void;
  documentsAccordionActiveIndex: number;
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

  return (
    <DocumentsContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        documentsAccordionActiveIndex,
        setDocumentsAccordionActiveIndex,
      }}
    >
      {children}
    </DocumentsContext.Provider>
  );
}
