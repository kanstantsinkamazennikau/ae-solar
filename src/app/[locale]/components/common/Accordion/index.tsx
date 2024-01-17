"use client";

import { AccordionProps } from "@/app/[locale]/components/common/Accordion/types";
import {
  Children,
  JSXElementConstructor,
  ReactElement,
  cloneElement,
  useEffect,
  useState,
} from "react";

export default function Accordion({
  children,
  multiple,
  documentsAccordionActiveIndex,
  collapseAll,
  documentsAccordion,
}: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    collapseAll ? null : 0
  );

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    if (documentsAccordionActiveIndex !== undefined && documentsAccordion) {
      setActiveIndex(documentsAccordionActiveIndex);
    }
  }, [documentsAccordionActiveIndex, documentsAccordion]);

  const renderChildren = () => {
    return Children.map(
      children,
      (
        child: ReactElement<any, string | JSXElementConstructor<any>>,
        index
      ) => {
        return cloneElement(
          child!,
          !multiple
            ? {
                isOpen: activeIndex === index,
                onClick: () => handleItemClick(index),
              }
            : {
                multiple,
                index,
                activeIndex,
                documentsAccordion,
              }
        );
      }
    );
  };

  return renderChildren();
}
