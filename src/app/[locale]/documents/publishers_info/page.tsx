//@ts-nocheck

"use client";
import parse from "html-react-parser";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import DocumentsLoader from "@/app/[locale]/documents/components/DocumentsLoader";
import { DOCUMENTS_PUBLISHERS_INFO_FILES } from "@/app/[locale]/documents/publishers_info/constants";
import { useContext, useEffect } from "react";
import { title } from "process";

export default function PublishersInfo() {
  const {
    searchInputValue,
    setDocumentsFile,
    documentsFile,
    documentsLoading,
    setDocumentsLoading,
  } = useContext(DocumentsContext);

  useEffect(() => {
    setDocumentsLoading(true);

    setTimeout(() => {
      setDocumentsFile(DOCUMENTS_PUBLISHERS_INFO_FILES);
      setDocumentsLoading(false);
    }, 500);
  }, [searchInputValue, setDocumentsFile, setDocumentsLoading]);
  return documentsLoading ? (
    <DocumentsLoader />
  ) : (
    <div className="flex flex-col gap-14">
      {documentsFile.map(({ title, data }) => (
        <div key={title} className="flex gap-10 flex-col">
          <div className="[font-size:_clamp(24px,2.5vw,48px)]">{title}</div>
          {data.map(({ subtitle, paragraphs }) => (
            <div key={subtitle} className="flex gap-6 flex-col">
              <div className="[font-size:_clamp(12px,1.5vw,24px)] font-semibold">
                {subtitle}
              </div>
              {paragraphs.map((paragraph) => (
                <div
                  key={paragraph}
                  className="[font-size:_clamp(10px,1.5vw,20px)] font-normal"
                >
                  {parse(paragraph)}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
