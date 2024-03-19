"use client";

import AccordionItem from "@/app/[locale]/components/common/Accordion/AccordionItem";
import Loader from "@/app/[locale]/components/common/Loader";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import AccordionWithIntersection from "@/app/[locale]/documents/components/AccordionWithIntersection";
import DocumentsLoader from "@/app/[locale]/documents/components/DocumentsLoader";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { DOCUMENTS_FAQ_FILES } from "@/app/[locale]/utils/constants";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function FAQ() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

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
        t(question).toLowerCase().includes(searchInputValue.toLowerCase())
      ),
    })).filter(({ data }) => data.length > 0);

    setTimeout(() => {
      setDocumentsFile(filteredDocuments as typeof DOCUMENTS_FAQ_FILES);
      setDocumentsLoading(false);
    }, 500);
  }, [searchInputValue, setDocumentsFile, setDocumentsLoading, t]);

  return documentsLoading ? (
    <DocumentsLoader />
  ) : (
    (documentsFile as typeof DOCUMENTS_FAQ_FILES).map(
      ({ category, data }, index) => {
        return (
          <AccordionWithIntersection
            category={t(category)}
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
                  {t(question)}
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
                    {t(answer)}
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
