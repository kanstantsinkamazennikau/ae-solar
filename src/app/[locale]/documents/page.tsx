"use client";

import Accordion from "@/app/[locale]/components/common/Accordion";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import DocumentsAccordionWithIntersection from "@/app/[locale]/documents/components/DocumentsAccordionWithIntersection";
import DocumentsLoader from "@/app/[locale]/documents/components/DocumentsLoader";
import Presentation from "@/app/[locale]/documents/components/Presentation";
import SubCategories from "@/app/[locale]/documents/components/SubCategories";
import Text from "@/app/[locale]/documents/components/Text";
import {
  DocumentsTypesOther,
  DocumentsTypesPresentation,
  DocumentsTypesWithSubCategories,
} from "@/app/[locale]/documents/components/types";
import {
  DOCUMENTS_FILES,
  DOCUMENT_SUBCATEGORIES_SPLITTER,
} from "@/app/[locale]/utils/constants";
import { useContext, useEffect } from "react";

export default function Documents() {
  const {
    selectedCategoryIndex,
    documentsAccordionActiveIndex,
    filterModels,
    setDocumentsFile,
    documentsFile,
    documentsLoading,
    setDocumentsLoading,
    setDocumentsAccordionActiveIndex,
  } = useContext(DocumentsContext);

  useEffect(() => {
    setDocumentsLoading(true);
    let filteredDocuments: (
      | DocumentsTypesPresentation
      | DocumentsTypesOther
      | DocumentsTypesWithSubCategories
    )[];
    if (!filterModels.length) {
      filteredDocuments = DOCUMENTS_FILES;
    } else {
      filteredDocuments = DOCUMENTS_FILES.map((docFile) => {
        if (docFile.type !== "SubCategories") {
          const { category, type, data } = docFile;
          return {
            category,
            type,
            data: data.filter(({ tags }) =>
              tags?.some((tag) => filterModels.includes(tag))
            ),
          };
        } else {
          const { category, type, subCategories } = docFile;
          return {
            category,
            type,
            subcategories: subCategories.map((docFile) => {
              const { category, type, data } = docFile;
              return {
                category,
                type,
                data: data.filter(({ tags }) =>
                  tags?.some((tag) => filterModels.includes(tag))
                ),
              };
            }),
          };
        }
      }).filter((docFile) => {
        if (docFile.type !== "SubCategories") {
          return docFile.data.length > 0;
        } else {
          return (
            docFile.subcategories.filter((docFile) => docFile.data.length > 0)
              .length > 0
          );
        }
      }) as typeof DOCUMENTS_FILES;
      setDocumentsAccordionActiveIndex(0);
    }

    setTimeout(() => {
      setDocumentsFile(filteredDocuments);
      setDocumentsLoading(false);
    }, 500);
  }, [
    filterModels,
    setDocumentsFile,
    setDocumentsLoading,
    setDocumentsAccordionActiveIndex,
  ]);

  return documentsLoading ? (
    <DocumentsLoader />
  ) : (
    <Accordion
      documentsAccordionActiveIndex={documentsAccordionActiveIndex}
      documentsAccordion
      collapseAll={documentsAccordionActiveIndex === undefined}
    >
      {(documentsFile as typeof DOCUMENTS_FILES).map((docFile, index) => {
        const styledTitle = (
          <div
            className={`
              flex
              ${
                index === selectedCategoryIndex
                  ? "text-white"
                  : "text-dark-gray-900"
              } `}
          >
            {docFile.category.split(DOCUMENT_SUBCATEGORIES_SPLITTER)[0]}
            <p className="text-[#505050] font-semibold leading-[130%] [font-size:_clamp(12px,1.5vw,26px)] ml-2 mb-4">
              {docFile.type !== "SubCategories"
                ? docFile.data.length
                : docFile.subCategories.reduce(
                    (acc, currentValue) => currentValue.data.length + acc,
                    0
                  )}
            </p>
          </div>
        );

        if (docFile.type === "Presentation") {
          const { category, data } = docFile;
          return (
            <DocumentsAccordionWithIntersection
              title={styledTitle}
              key={category}
              category={category}
              index={index}
              dropdownIcon="/images/documents/dropDownIcon.svg"
            >
              <div className="grid lg:grid-cols-3 min-[920px]:grid-cols-2 max-[560px]:grid-cols-2 min-[560px]:grid-cols-3 gap-[6px] pb-10">
                {data.map(({ link, linkTitle, title, image }) => (
                  <Presentation
                    {...{ link, title, linkTitle, image }}
                    key={linkTitle}
                  />
                ))}
              </div>
            </DocumentsAccordionWithIntersection>
          );
        }
        if (docFile.type === "Text") {
          const { category, data } = docFile;
          return (
            <DocumentsAccordionWithIntersection
              title={styledTitle}
              key={category}
              category={category}
              index={index}
              dropdownIcon="/images/documents/dropdownIcon.svg"
            >
              <div className="pb-10">
                {data.map(({ linkTitle, link }) => (
                  <Text {...{ linkTitle, link }} key={linkTitle} />
                ))}
              </div>
            </DocumentsAccordionWithIntersection>
          );
        }
        return (
          <DocumentsAccordionWithIntersection
            title={styledTitle}
            key={docFile.category}
            category={docFile.category}
            index={index}
            dropdownIcon="/images/documents/dropdownIcon.svg"
          >
            <SubCategories key={index} documents={docFile} />
          </DocumentsAccordionWithIntersection>
        );
      })}
    </Accordion>
  );
}
