"use client";

import Accordion from "@/app/[locale]/components/common/Accordion";
import AccordionItem from "@/app/[locale]/components/common/Accordion/AccordionItem";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import { DOCUMENTS_FAQ_FILES } from "@/app/[locale]/utils/constants";
import { useContext } from "react";

export default function FAQ() {
  const { selectedCategory, documentsAccordionActiveIndex, onCategoryClick } =
    useContext(DocumentsContext);

  return DOCUMENTS_FAQ_FILES.map(({ category, data }, index) => {
    return (
      <div key={category} className="pb-[3px] scroll-mt-[140px]" id={category}>
        <p
          className={`[font-size:_clamp(20px,2.5vw,48px)] font-semibold leading-[120%] mt-6 mb-8`}
        >
          {category}
        </p>
        <Accordion collapseAll multiple>
          {data.map(({ question, answer }) => {
            const styledTitle = (
              <span
                className={`
                  font-semibold
                  leading-[100%]
                  [font-size:_clamp(10px,1.5vw,24px)]
                `}
              >
                {category}
              </span>
            );
            return (
              <AccordionItem key={question} title={styledTitle} openCloseStyle>
                <p className="pb-6">{answer}</p>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    );
  });
}
