"use client";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import DocumentsLoader from "@/app/[locale]/documents/components/DocumentsLoader";
import PublishersInfroWithIntersection from "@/app/[locale]/documents/components/PublishersInfroWithIntersection";
import { DOCUMENTS_PUBLISHERS_INFO_FILES } from "@/app/[locale]/documents/publishers_info/constants";
import { useContext, useEffect } from "react";

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
    <div className="flex flex-col gap-14 max-w-[760px]">
      {(documentsFile as typeof DOCUMENTS_PUBLISHERS_INFO_FILES).map(
        ({ title, data }, index) => (
          <PublishersInfroWithIntersection
            key={title}
            title={title}
            data={data}
            index={index}
          />
        )
      )}
    </div>
  );
}
