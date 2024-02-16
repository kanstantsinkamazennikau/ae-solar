"use client";

import AccordionItem from "@/app/[locale]/components/common/Accordion/AccordionItem";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import { DocumentsAccordionWithIntersectionProps } from "@/app/[locale]/documents/components/DocumentsAccordionWithIntersection/types";
import { useContext, useEffect, useRef } from "react";

export default function DocumentsAccordionWithIntersection({
  title,
  category,
  index,
  children,
  ...props
}: DocumentsAccordionWithIntersectionProps) {
  const { onCategoryClick, setSelectedCategoryIndex } =
    useContext(DocumentsContext);

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
  }, [category, setSelectedCategoryIndex, index]);

  return (
    <div ref={accordionRef}>
      <AccordionItem
        title={title}
        key={category}
        onClickCallback={() => onCategoryClick(index)}
        id={index}
        openCloseStyle
        {...props}
      >
        {children}
      </AccordionItem>
    </div>
  );
}
