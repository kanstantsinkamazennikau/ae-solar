"use client";

import { AccordionItemProps } from "@/app/[locale]/components/common/Accordion/types";
import Image from "next/image";
import { useRef, useState } from "react";

export default function AccordionItem({
  title,
  isOpen,
  onClick,
  children,
  multiple,
  style = "default",
  index,
  activeIndex,
}: AccordionItemProps) {
  const contentHeight = useRef<HTMLDivElement>(null);
  const [isOpenItem, setIsOpenItem] = useState(
    multiple && index === activeIndex
  );

  const onItemWithMultipleFlagClick = () => {
    setIsOpenItem(!isOpenItem);
  };

  return (
    <div className="border-b border-solid border-[#242424] overflow-hidden last:border-none">
      <button
        className="w-full text-left py-6 flex items-center justify-between text-[40px] leading-[48px]"
        onClick={multiple ? onItemWithMultipleFlagClick : onClick}
      >
        <p
          className={`${
            style === "small" && "text-xl leading-[120%] font-semibold"
          }`}
        >
          {title}
        </p>
        <Image
          className={`arrow ${isOpen || isOpenItem ? "rotate-180" : ""}`}
          alt="arrow"
          src="/images/arrow.svg"
          width={16}
          height={16}
        />
      </button>

      <div
        ref={contentHeight}
        className="transition-all duration-500 ease-in-out"
        style={
          isOpen || isOpenItem
            ? { height: contentHeight.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        {children}
      </div>
    </div>
  );
}
