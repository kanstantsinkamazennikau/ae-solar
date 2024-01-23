"use client";

import { AccordionItemProps } from "@/app/[locale]/components/common/Accordion/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AccordionItem({
  title,
  isOpen,
  onClick,
  children,
  multiple,
  index,
  activeIndex,
  onClickCallback,
  id,
  openCloseStyle,
  documentsAccordion,
}: AccordionItemProps) {
  const contentHeight = useRef<HTMLDivElement>(null);
  const [isOpenItem, setIsOpenItem] = useState(
    multiple && index === activeIndex
  );
  const [height, setHeight] = useState<number | undefined>(undefined);

  const onItemWithMultipleFlagClick = () => {
    setIsOpenItem(!isOpenItem);
  };

  useEffect(() => {
    setHeight(contentHeight.current?.scrollHeight);
  }, []);

  useEffect(() => {
    documentsAccordion &&
      multiple &&
      index === activeIndex &&
      setIsOpenItem(true);
  }, [activeIndex, index, multiple, documentsAccordion]);

  const onClickBasedOnAccordeonType = () => {
    onClickCallback && onClickCallback();
    multiple ? onItemWithMultipleFlagClick() : onClick!();
  };

  return (
    <div
      className="border-b border-solid border-[#131313] last:border-none scroll-mt-[140px]"
      id={id?.toString()}
    >
      <button
        className={`
          w-full
          text-left
          lg:py-6
          md:py-4
          py-3
          flex
          items-center
          justify-between
          [font-size:_clamp(16px,2.5vw,40px)]
          leading-[120%]
          ${
            openCloseStyle
              ? isOpen || isOpenItem
                ? "text-white"
                : "text-dark-gray-900"
              : "text-white"
          }
        `}
        onClick={onClickBasedOnAccordeonType}
      >
        {title}

        <Image
          className={`
            arrow
            ${isOpen || isOpenItem ? "rotate-180" : ""} 
            ${
              openCloseStyle && (isOpen || isOpenItem)
                ? ""
                : "invert-[70%] sepia-0 saturate-[1%] hue-rotate-[185deg] brightness-[89%] contrast-[86%]"
            }
          `}
          alt="arrow"
          src="/images/arrow.svg"
          width={16}
          height={16}
        />
      </button>

      <div
        ref={contentHeight}
        className={`transition-all duration-[400ms] ease-in-out overflow-hidden`}
        style={isOpen || isOpenItem ? { height } : { height: 0 }}
      >
        {children}
      </div>
    </div>
  );
}
