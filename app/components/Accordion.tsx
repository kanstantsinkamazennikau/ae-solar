"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

interface AccordionData {
  question: string;
  answer: string;
}

interface AccordionProps {
  data: AccordionData[];
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: AccordionItemProps) {
  const contentHeight = useRef<HTMLDivElement>(null);
  console.log(contentHeight.current?.scrollHeight);

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
        <p className="text-2xl leading-9  pb-6">{answer}</p>
      </div>
    </div>
  );
}

const Accordion = ({ data }: AccordionProps) => {
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
};

export default Accordion;
