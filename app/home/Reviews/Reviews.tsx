"use client";

import TwoTierHeading from "@/app/components/common/TwoTierHeading";
import { QuotesContext } from "@/app/context/quotesContext";
import { DotProps, QuoteProps } from "@/app/dto/mainPage/types";
import {
  REVIEWS_QUOTES_WITH_AUTHORS,
  REVIEWS_RAVE_REVIEWS,
  REVIEWS_SEE_WHY_WE_SHINE,
} from "@/app/utils/constants";
import Image from "next/image";
import { useContext, useState } from "react";

function Quotes() {
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;
    if (slide + direction < 0) {
      slideNumber = REVIEWS_QUOTES_WITH_AUTHORS.length - 1;
    } else {
      slideNumber = (slide + direction) % REVIEWS_QUOTES_WITH_AUTHORS.length;
    }
    setSlide(slideNumber);
  };

  const goToSlide = (number: number) => {
    setSlide(number % REVIEWS_QUOTES_WITH_AUTHORS.length);
  };

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: any) => {
    if (touchPosition === null) {
      return;
    }
    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;
    if (direction > 10) {
      changeSlide(1);
    }
    if (direction < -10) {
      changeSlide(-1);
    }
    setTouchPosition(null);
  };

  return (
    <div className="flex py-20 pl-60 flex-col gap-10 self-stretch relative">
      <Image
        src="/images/quote.svg"
        alt="quote"
        width={420}
        height={300}
        priority
        className="absolute top-0 left-0"
      />
      <div
        className="slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <QuotesContext.Provider
          value={{
            goToSlide,
            changeSlide,
            slidesCount: REVIEWS_QUOTES_WITH_AUTHORS.length,
            slideNumber: slide,
            REVIEWS_QUOTES_WITH_AUTHORS,
          }}
        >
          <div className="overflow-hidden gap-10 flex flex-col">
            <div
              className="flex w-full transition-transform duration-500 "
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {REVIEWS_QUOTES_WITH_AUTHORS.map((quote) => (
                <Quote key={quote.quote} {...quote} />
              ))}
            </div>
            <QuotesControl />
          </div>
        </QuotesContext.Provider>
      </div>
    </div>
  );
}

function Quote({ quote, author, organisation }: QuoteProps) {
  return (
    <div className="flex flex-col gap-20 self-stretch flex-grow flex-shrink-0 basis-full">
      <div
        className="text-5xl leading-tight max-h-[240px]"
        style={{ fontSize: "clamp(1.25rem, 2.5vw, 3rem)" }}
      >
        {quote}
      </div>
      <div className="flex flex-col gap-4 self-stretch">
        <span className="text-[40px] font-semibold leading-tight">
          {author}
        </span>
        <span className="text-2xl leading-normal text-dark-gray-800">
          {organisation}
        </span>
      </div>
    </div>
  );
}

function QuotesControl() {
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
      <Image
        src="/images/redArrowRight.svg"
        alt="quote"
        width={24}
        height={24}
        priority
        className="rotate-180"
        onClick={() => changeSlide(-1)}
      />
      {renderDots()}
      <Image
        src="/images/redArrowRight.svg"
        alt="quote"
        width={24}
        height={24}
        priority
        onClick={() => changeSlide(1)}
      />
    </div>
  );
}

function Dot({ number }: DotProps) {
  const { goToSlide, slideNumber } = useContext(QuotesContext);

  return (
    <div
      className={`w-2 h-2 rounded-lg ${
        slideNumber === number ? "bg-base-red" : "bg-black-900"
      }`}
      onClick={() => goToSlide(number)}
    />
  );
}

export default function Reviews() {
  return (
    <>
      <TwoTierHeading
        tierOneHeading={REVIEWS_RAVE_REVIEWS}
        tierTwoHeading={REVIEWS_SEE_WHY_WE_SHINE}
      />
      <Quotes />
    </>
  );
}
