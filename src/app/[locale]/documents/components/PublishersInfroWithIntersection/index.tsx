"use client";

import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import { PublishersInfroWithIntersectionProps } from "@/app/[locale]/documents/components/PublishersInfroWithIntersection/types";
import parse from "html-react-parser";
import { useContext, useEffect, useRef } from "react";

export default function PublishersInfroWithIntersection({
  title,
  data,
  index,
}: PublishersInfroWithIntersectionProps) {
  const { setSelectedCategoryIndex } = useContext(DocumentsContext);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (infoRef.current) {
        const itemOffset = infoRef.current!.offsetTop;
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
  }, [index, setSelectedCategoryIndex]);

  return (
    <div
      className="flex gap-10 flex-col scroll-mt-[100px]"
      id={index.toString()}
      ref={infoRef}
    >
      <div className="[font-size:_clamp(24px,2.5vw,48px)]">{title}</div>
      {data.map(({ subtitle, paragraphs }) => (
        <div key={subtitle} className="flex gap-6 flex-col">
          {subtitle && (
            <div className="[font-size:_clamp(12px,1.5vw,24px)] font-semibold">
              {subtitle}
            </div>
          )}
          {paragraphs.map((paragraph) => (
            <div
              key={paragraph}
              className="[font-size:_clamp(10px,1.5vw,20px)] font-normal font-walsheim"
            >
              {parse(paragraph)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
