"use client";

import Accordion from "@/app/[locale]/components/common/Accordion";
import Loader from "@/app/[locale]/components/common/Loader";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import DocumentsAccordionWithIntersection from "@/app/[locale]/documents/components/DocumentsAccordionWithIntersection";
import Presentation from "@/app/[locale]/documents/components/Presentation";
import Text from "@/app/[locale]/documents/components/Text";
import { DOCUMENTS_FILES } from "@/app/[locale]/utils/constants";
import { useContext, useEffect, useState } from "react";

export default function Documents() {
  const {
    selectedCategory,
    documentsAccordionActiveIndex,
    searchInputValue,
    setDocumentsFile,
    documentsFile,
  } = useContext(DocumentsContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const filteredDocuments = DOCUMENTS_FILES.map(
      ({ data, category, type }) => ({
        category,
        type,
        data: data.filter(({ linkTitle }) =>
          linkTitle.toLowerCase().includes(searchInputValue.toLowerCase())
        ),
      })
    ).filter(({ data }) => data.length > 0);
    setDocumentsFile(filteredDocuments as typeof DOCUMENTS_FILES);
    setTimeout(() => setLoading(false), 500);
  }, [searchInputValue, setDocumentsFile]);

  // useEffect(() => {
  //   setDocumentsFile(DOCUMENTS_FILES);
  //   setLoading(false);
  // }, [setDocumentsFile]);

  return loading ? (
    <Loader />
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
                category === selectedCategory
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
