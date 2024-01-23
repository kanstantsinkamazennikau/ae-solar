"use client";

import Accordion from "@/app/[locale]/components/common/Accordion";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import { AccordionWithIntersectionPropps } from "@/app/[locale]/documents/faq/types";
import { useContext, useEffect, useRef } from "react";

export default function AccordionWithIntersection({
  category,
  children,
  index,
}: AccordionWithIntersectionPropps) {
  const { setSelectedCategoryIndex } = useContext(DocumentsContext);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (accordionRef.current) {
        const itemOffset =
          accordionRef.current!.offsetTop +
          (window.outerWidth >= 920 ? 160 : 120);
        const scrollTop = window.scrollY;
        if (scrollTop >= itemOffset) {
          setSelectedCategoryIndex(index);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [category, index, setSelectedCategoryIndex]);

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
        {children}
      </Accordion>
    </div>
  );
}
