"use client";

import AccordionItem from "@/app/components/common/Accordion/AccordionItem";
import { AccordionProps } from "@/app/components/common/Accordion/types";
import { useState } from "react";

export default function Accordion({ data }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-[985px] w-full">
      {data.map((item, index) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}
