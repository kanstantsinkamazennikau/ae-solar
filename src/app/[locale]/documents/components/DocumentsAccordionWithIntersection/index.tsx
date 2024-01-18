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
  const { onCategoryClick, setSelectedCategory } = useContext(DocumentsContext);

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
    <div ref={accordionRef}>
      <AccordionItem
        title={title}
        key={category}
        onClickCallback={() => onCategoryClick(category, index)}
        id={category}
        {...props}
      >
        {children}
      </AccordionItem>
    </div>
  );
}
