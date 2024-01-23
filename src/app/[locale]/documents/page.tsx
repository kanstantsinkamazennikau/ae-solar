"use client";

import Accordion from "@/app/[locale]/components/common/Accordion";
import Loader from "@/app/[locale]/components/common/Loader";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import DocumentsAccordionWithIntersection from "@/app/[locale]/documents/components/DocumentsAccordionWithIntersection";
import DocumentsLoader from "@/app/[locale]/documents/components/DocumentsLoader";
import Presentation from "@/app/[locale]/documents/components/Presentation";
import Text from "@/app/[locale]/documents/components/Text";
import {
  DocumentsTypesOther,
  DocumentsTypesPresentation,
} from "@/app/[locale]/documents/components/types";
import { DOCUMENTS_FILES } from "@/app/[locale]/utils/constants";
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
  } = useContext(DocumentsContext);

  useEffect(() => {
    setDocumentsLoading(true);
    let filteredDocuments: (DocumentsTypesPresentation | DocumentsTypesOther)[];
    if (!filterModels.length) {
      filteredDocuments = DOCUMENTS_FILES;
    } else {
      filteredDocuments = DOCUMENTS_FILES.map(({ data, category, type }) => ({
        category,
        type,
        data: data.filter(({ tags }) =>
          tags?.some((tag) => filterModels.includes(tag))
        ),
      })).filter(({ data }) => data.length > 0) as typeof DOCUMENTS_FILES;
    }

    setTimeout(() => {
      setDocumentsFile(filteredDocuments);
      setDocumentsLoading(false);
    }, 500);
  }, [filterModels, setDocumentsFile, setDocumentsLoading]);

  return documentsLoading ? (
    <DocumentsLoader />
  ) : (
    <Accordion
      documentsAccordionActiveIndex={documentsAccordionActiveIndex}
      documentsAccordion
    >
      {(documentsFile as typeof DOCUMENTS_FILES).map(
        ({ category, type, data }, index) => {
          const styledTitle = (
            <span
              className={`${
                index === selectedCategoryIndex
                  ? "text-white"
                  : "text-dark-gray-900"
              } `}
            >
              {category}
            </span>
          );

          if (type === "Presentation") {
            return (
              <DocumentsAccordionWithIntersection
                title={styledTitle}
                key={category}
                category={category}
                index={index}
              >
                <div className="grid grid-cols-3 gap-[6px] pb-10">
                  {data.map(({ link, linkTitle, title, image }) => (
                    <Presentation
                      {...{ link, title, linkTitle, image }}
                      key={title}
                    />
                  ))}
                </div>
              </DocumentsAccordionWithIntersection>
            );
          }
          return (
            <DocumentsAccordionWithIntersection
              title={styledTitle}
              key={category}
              category={category}
              index={index}
            >
              <div className="pb-10">
                {data.map(({ linkTitle, link }) => (
                  <Text {...{ linkTitle, link }} key={linkTitle} />
                ))}
              </div>
            </DocumentsAccordionWithIntersection>
          );
        }
      )}
    </Accordion>
  );
}
