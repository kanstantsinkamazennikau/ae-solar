"use client";

import Accordion from "@/app/[locale]/components/common/Accordion";
import AccordionItem from "@/app/[locale]/components/common/Accordion/AccordionItem";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import Presentation from "@/app/[locale]/documents/components/Presentation";
import Text from "@/app/[locale]/documents/components/Text";
import { DOCUMENTS_FILES } from "@/app/[locale]/utils/constants";
import { useContext } from "react";

export default function Documents() {
  const {
    selectedCategory,
    setSelectedCategory,
    documentsAccordionActiveIndex,
  } = useContext(DocumentsContext);

  return (
    <Accordion documentsAccordionActiveIndex={documentsAccordionActiveIndex}>
      {DOCUMENTS_FILES.map(({ category, data }) => {
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
        const onClickCallback = () => setSelectedCategory(category);

        if (category === "Presentation") {
          return (
            <AccordionItem
              title={styledTitle}
              key={category}
              onClickCallback={onClickCallback}
              id={category}
            >
              <div className="grid grid-cols-3 gap-[6px] pb-10">
                {data.map(({ link, linkTitle, title, image }) => (
                  <Presentation
                    {...{ link, title, linkTitle, image }}
                    key={title}
                  />
                ))}
              </div>
            </AccordionItem>
          );
        }
        return (
          <AccordionItem
            key={category}
            title={styledTitle}
            onClickCallback={onClickCallback}
            id={category}
          >
            <div className="pb-10">
              {data.map(({ linkTitle, link }) => (
                <Text {...{ linkTitle, link }} key={linkTitle} />
              ))}
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
