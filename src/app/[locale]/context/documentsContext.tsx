"use client";

import {
  DocumentsTypePublisher,
  DocumentsTypesOther,
  DocumentsTypesPresentation,
  FAQ,
} from "@/app/[locale]/documents/components/types";
import { DOCUMENTS_PUBLISHERS_INFO_FILES } from "@/app/[locale]/documents/publishers_info/constants";
import {
  DOCUMENTS_FAQ_FILES,
  DOCUMENTS_FILES,
} from "@/app/[locale]/utils/constants";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useState,
} from "react";

export interface DocumentsContext {
  setSelectedCategoryIndex: Dispatch<SetStateAction<number>>;
  selectedCategoryIndex: number;
  setDocumentsAccordionActiveIndex: Dispatch<SetStateAction<number>>;
  documentsAccordionActiveIndex: number;
  setSearchInputValue: Dispatch<SetStateAction<string>>;
  searchInputValue: string;
  onCategoryClick: (index: number) => void;
  documentsFile:
    | (DocumentsTypesPresentation | DocumentsTypesOther)[]
    | FAQ[]
    | DocumentsTypePublisher[]
    | never[];
  setDocumentsFile: (
    doc:
      | (DocumentsTypesPresentation | DocumentsTypesOther)[]
      | FAQ[]
      | DocumentsTypePublisher[]
      | never[]
  ) => void;
  documentsType: string;
  setDocumentsType: Dispatch<SetStateAction<string>>;
  documentsLoading: boolean;
  setDocumentsLoading: Dispatch<SetStateAction<boolean>>;
  filterModels: string[];
  setFilterModels: Dispatch<SetStateAction<string[]>>;
}

export const DocumentsContext = createContext<DocumentsContext>(null!);

const mapConstantWithCategory = {
  documents: DOCUMENTS_FILES,
  faq: DOCUMENTS_FAQ_FILES,
  publishers_info: DOCUMENTS_PUBLISHERS_INFO_FILES,
};

export default function DocumentsProvider({
  children,
  category,
}: {
  category: string;
  children: React.ReactNode;
}) {
  const [documentsType, setDocumentsType] = useState(category);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [documentsAccordionActiveIndex, setDocumentsAccordionActiveIndex] =
    useState(0);
  const [filterModels, setFilterModels] = useState<string[]>([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [documentsFile, setDocumentsFile] = useState<
    | (DocumentsTypesPresentation | DocumentsTypesOther)[]
    | FAQ[]
    | DocumentsTypePublisher[]
    | never[]
  >([]);
  const [documentsLoading, setDocumentsLoading] = useState(true);

  const onCategoryClick = useCallback((index: number) => {
    setDocumentsAccordionActiveIndex(index);
    setTimeout(() => {
      document
        .getElementById(index.toString())!
        .scrollIntoView({ behavior: "smooth" });
    }, 350);
  }, []);

  return (
    <DocumentsContext.Provider
      value={{
        selectedCategoryIndex,
        setSelectedCategoryIndex,
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
        filterModels,
        setFilterModels,
      }}
    >
      {children}
    </DocumentsContext.Provider>
  );
}
