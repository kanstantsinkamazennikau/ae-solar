"use client";

import AccordionItem from "@/app/[locale]/components/common/Accordion/AccordionItem";
import Loader from "@/app/[locale]/components/common/Loader";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import AccordionWithIntersection from "@/app/[locale]/documents/components/AccordionWithIntersection";
import { DOCUMENTS_FAQ_FILES } from "@/app/[locale]/utils/constants";
import { useContext, useEffect, useState } from "react";

export default function FAQ() {
  const { searchInputValue, setDocumentsFile, documentsFile } =
    useContext(DocumentsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filteredDocuments = DOCUMENTS_FAQ_FILES.map(({ data, category }) => ({
      category,
      data: data.filter(({ question }) =>
        question.toLowerCase().includes(searchInputValue.toLowerCase())
      ),
    })).filter(({ data }) => data.length > 0);

    setDocumentsFile(filteredDocuments as typeof DOCUMENTS_FAQ_FILES);
  }, [searchInputValue, setDocumentsFile]);

  useEffect(() => {
    setDocumentsFile(DOCUMENTS_FAQ_FILES);
    setLoading(false);
  }, [setDocumentsFile]);

  return loading ? (
    <Loader />
  ) : (
    (documentsFile as typeof DOCUMENTS_FAQ_FILES).map(({ category, data }) => {
      return (
        <AccordionWithIntersection category={category} key={category}>
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
              <AccordionItem key={question} title={styledTitle} openCloseStyle>
                <p className="pb-6">{answer}</p>
              </AccordionItem>
            );
          })}
        </AccordionWithIntersection>
      );
    })
  );
}
