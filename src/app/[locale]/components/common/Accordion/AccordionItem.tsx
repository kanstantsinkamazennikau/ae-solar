"use client";

import { AccordionItemProps } from "@/app/[locale]/components/common/Accordion/types";
import Image from "next/image";
import { useRef } from "react";

export default function AccordionItem({
  question,
  isOpen,
  onClick,
  children,
}: AccordionItemProps) {
  const contentHeight = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-solid border-white overflow-hidden last:border-none">
      <button
        className="w-full text-left py-6 flex items-center justify-between text-[40px] leading-[48px]"
        onClick={onClick}
      >
        <p>{question}</p>
        <Image
          className={`arrow ${isOpen ? "rotate-180" : ""}`}
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
          isOpen
            ? { height: contentHeight.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        {children}
      </div>
    </div>
  );
}
