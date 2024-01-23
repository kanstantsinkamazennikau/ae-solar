"use client";

import AccordionItem from "@/app/[locale]/components/common/Accordion/AccordionItem";
import Loader from "@/app/[locale]/components/common/Loader";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import AccordionWithIntersection from "@/app/[locale]/documents/components/AccordionWithIntersection";
import DocumentsLoader from "@/app/[locale]/documents/components/DocumentsLoader";
import { DOCUMENTS_FAQ_FILES } from "@/app/[locale]/utils/constants";
import { useContext, useEffect, useState } from "react";

export default function FAQ() {
  const {
    searchInputValue,
    setDocumentsFile,
    documentsFile,
    documentsLoading,
    setDocumentsLoading,
  } = useContext(DocumentsContext);

  useEffect(() => {
    setDocumentsLoading(true);
    const filteredDocuments = DOCUMENTS_FAQ_FILES.map(({ data, category }) => ({
      category,
      data: data.filter(({ question }) =>
        question.toLowerCase().includes(searchInputValue.toLowerCase())
      ),
    })).filter(({ data }) => data.length > 0);

    setTimeout(() => {
      setDocumentsFile(filteredDocuments as typeof DOCUMENTS_FAQ_FILES);
      setDocumentsLoading(false);
    }, 500);
  }, [searchInputValue, setDocumentsFile, setDocumentsLoading]);

  return documentsLoading ? (
    <DocumentsLoader />
  ) : (
    (documentsFile as typeof DOCUMENTS_FAQ_FILES).map(
      ({ category, data }, index) => {
        return (
          <AccordionWithIntersection
            category={category}
            key={category}
            index={index}
          >
            {data.map(({ question, answer }) => {
              const styledTitle = (
                <span
                  className={`
                  font-semibold
                  leading-[100%]
                  [font-size:_clamp(10px,1.5vw,24px)]
                `}
                >
                  {question}
                </span>
              );
              return (
                <AccordionItem
                  key={question}
                  title={styledTitle}
                  openCloseStyle
                >
                  <p className="pb-6">{answer}</p>
                </AccordionItem>
              );
            })}
          </AccordionWithIntersection>
        );
      }
    )
  );
}
