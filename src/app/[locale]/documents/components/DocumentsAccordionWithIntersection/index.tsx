"use client";

import AccordionItem from "@/app/[locale]/components/common/Accordion/AccordionItem";
import { DocumentsContext } from "@/app/[locale]/context/DocumentsContext";
import { DocumentsAccordionWithIntersectionProps } from "@/app/[locale]/documents/components/DocumentsAccordionWithIntersection/types";
import { useContext, useEffect, useRef } from "react";

export default function DocumentsAccordionWithIntersection({
  title,
  category,
  index,
  children,
  dropdownIcon,
  ...props
}: DocumentsAccordionWithIntersectionProps) {
  const { onCategoryClick, setSelectedCategoryIndex, documentsType } =
    useContext(DocumentsContext);
  const isDocuments = documentsType === "documents";

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
        dropdownIcon={dropdownIcon}
        isDocuments={isDocuments}
        {...props}
      >
        {children}
      </AccordionItem>
    </div>
  );
}
