"use client";

import { QuotesContext } from "@/app/[locale]/context/quotesContext";
import Dot from "@/app/[locale]/home/Reviews/Dot";
import Image from "next/image";
import { useContext } from "react";

export default function QuotesControl() {
  const { changeSlide, slidesCount } = useContext(QuotesContext);
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot number={i} key={i} />);
    }

    return dots;
  };

  return (
    <div className="flex justify-start items-center gap-5">
      <button onClick={() => changeSlide(-1)}>
        <Image
          src="/images/redArrowRight.svg"
          alt="quote"
          width={24}
          height={24}
          priority
          className="rotate-180"
        />
      </button>
      {renderDots()}
      <button onClick={() => changeSlide(1)}>
        <Image
          src="/images/redArrowRight.svg"
          alt="quote"
          width={24}
          height={24}
          priority
        />
      </button>
    </div>
  );
}
