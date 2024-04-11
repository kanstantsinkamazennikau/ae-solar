"use client";

import AccordionItem from "@/app/[locale]/components/common/Accordion/AccordionItem";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import AccordionWithIntersection from "@/app/[locale]/documents/components/AccordionWithIntersection";
import DocumentsLoader from "@/app/[locale]/documents/components/DocumentsLoader";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { DOCUMENTS_FAQ_FILES } from "@/app/[locale]/utils/constants";
import { useContext, useEffect } from "react";

export default function ClientFAQ() {
  const { translation } = useContext(i18nProviderContext);

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
        translation[question]
          ?.toLowerCase()
          .includes(searchInputValue.toLowerCase())
      ),
    })).filter(({ data }) => data.length > 0);

    setTimeout(() => {
      setDocumentsFile(filteredDocuments as typeof DOCUMENTS_FAQ_FILES);
      setDocumentsLoading(false);
    }, 500);
  }, [searchInputValue, setDocumentsFile, setDocumentsLoading, translation]);

  return documentsLoading ? (
    <DocumentsLoader />
  ) : (
    (documentsFile as typeof DOCUMENTS_FAQ_FILES).map(
      ({ category, data }, index) => {
        return (
          <AccordionWithIntersection
            category={translation[category]}
            key={category}
            index={index}
          >
            {data.map(({ question, answer }) => {
              const styledTitle = (
                <span
                  className={`
                    font-semibold
                    [font-size:_clamp(20px,1.5vw,24px)]
                    leading-[120%]
                  `}
                >
                  {translation[question]}
                </span>
              );
              return (
                <AccordionItem
                  key={question}
                  title={styledTitle}
                  openCloseStyle
                  dropdownIcon="/images/selectorWhite.svg"
                >
                  <p className="pb-4 pt-2 pl-4 font-walsheim [font-size:_clamp(16px,1.5vw,20px)]">
                    {translation[answer]}
                  </p>
                </AccordionItem>
              );
            })}
          </AccordionWithIntersection>
        );
      }
    )
  );
}
