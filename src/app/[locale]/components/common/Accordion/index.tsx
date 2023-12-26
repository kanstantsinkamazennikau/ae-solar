"use client";

import { AccordionProps } from "@/app/[locale]/components/common/Accordion/types";
import {
  Children,
  JSXElementConstructor,
  ReactElement,
  cloneElement,
  useState,
} from "react";

export default function Accordion({ children, multiple }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

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
              }
        );
      }
    );
  };

  return renderChildren();
}
