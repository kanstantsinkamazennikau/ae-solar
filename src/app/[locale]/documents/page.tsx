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
import { useCallback, useContext, useEffect } from "react";

export default function Documents() {
  const {
    selectedCategoryIndex,
    documentsAccordionActiveIndex,
    filterModels,
    setDocumentsFile,
    documentsFile,
    documentsLoading,
    searchInputValue,
    setDocumentsLoading,
    setDocumentsAccordionActiveIndex,
  } = useContext(DocumentsContext);

  const recursivelyFilterItems = useCallback(
    (
      files: (
        | DocumentsTypesPresentation
        | DocumentsTypesOther
        | DocumentsTypesWithSubCategories
      )[]
    ): (
      | DocumentsTypesPresentation
      | DocumentsTypesOther
      | DocumentsTypesWithSubCategories
    )[] => {
      return files.map((docFile) => {
        const { category, type } = docFile;
        if (type === "Text" || type === "Presentation") {
          const { data } = docFile;

          return {
            category,
            type,
            data: data
              .filter((doc) => {
                if (filterModels.length) {
                  return doc.tags?.some((tag) => filterModels.includes(tag));
                }
                return doc;
              })
              .filter((doc) => {
                if (searchInputValue.length) {
                  return doc.linkTitle
                    ?.toLowerCase()
                    .includes(searchInputValue.toLowerCase());
                }
                return doc;
              }),
          };
        }
        return {
          category,
          type: "SubCategories",
          subCategories: recursivelyFilterItems(docFile.subCategories),
        } as DocumentsTypesWithSubCategories;
      });
    },
    [filterModels, searchInputValue]
  );

  useEffect(() => {
    setDocumentsLoading(true);
    let filteredDocuments: (
      | DocumentsTypesPresentation
      | DocumentsTypesOther
      | DocumentsTypesWithSubCategories
    )[];
    if (!filterModels.length && !searchInputValue.length) {
      filteredDocuments = DOCUMENTS_FILES;
    } else {
      filteredDocuments = recursivelyFilterItems(DOCUMENTS_FILES)
        .filter((docFile) => {
          return docFile.type !== "SubCategories"
            ? docFile.data.length > 0
            : docFile;
        })
        .map((docFile) => {
          return docFile.type !== "SubCategories"
            ? docFile
            : {
                ...docFile,
                subCategories: docFile.subCategories.filter(
                  (subCategory) => subCategory.data.length > 0
                ),
              };
        }) as typeof DOCUMENTS_FILES;
      setDocumentsAccordionActiveIndex(0);
    }

    setTimeout(() => {
      setDocumentsFile(filteredDocuments);
      setDocumentsLoading(false);
    }, 500);
  }, [
    searchInputValue,
    filterModels,
    setDocumentsFile,
    setDocumentsLoading,
    setDocumentsAccordionActiveIndex,
    recursivelyFilterItems,
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
