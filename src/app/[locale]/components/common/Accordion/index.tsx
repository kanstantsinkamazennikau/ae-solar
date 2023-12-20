"use client";

import { AccordionProps } from "@/app/[locale]/components/common/Accordion/types";
import {
  Children,
  JSXElementConstructor,
  ReactElement,
  cloneElement,
  useState,
} from "react";

export default function Accordion({ children }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderChildren = () => {
    return Children.map(
      children,
      (
        child: ReactElement<any, string | JSXElementConstructor<any>>,
        index
      ) => {
        return cloneElement(child!, {
          isOpen: activeIndex === index,
          onClick: () => handleItemClick(index),
        });
      }
    );
  };

  return renderChildren();
}
