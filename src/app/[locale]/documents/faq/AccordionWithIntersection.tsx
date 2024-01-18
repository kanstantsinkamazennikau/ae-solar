"use client";

import Accordion from "@/app/[locale]/components/common/Accordion";
import AccordionItem from "@/app/[locale]/components/common/Accordion/AccordionItem";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import { AccrodionWithIntersection } from "@/app/[locale]/documents/faq/types";
import { useContext, useEffect, useRef } from "react";

export default function AccrodionWithIntersection({
  category,
  data,
}: AccrodionWithIntersection) {
  const { setSelectedCategory } = useContext(DocumentsContext);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (accordionRef.current) {
        const itemOffset =
          accordionRef.current!.offsetTop -
          (window.outerWidth >= 920 ? 164 : 120);
        const scrollTop = window.scrollY;
        if (scrollTop >= itemOffset) {
          setSelectedCategory(category);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [category, setSelectedCategory]);

  return (
    <div
      key={category}
      className="pb-[3px] scroll-mt-[140px]"
      id={category}
      ref={accordionRef}
    >
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
}
