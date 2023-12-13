"use client";

import { QuotesContext } from "@/app/[locale]/context/quotesContext";
import { Quote } from "@/app/[locale]/home/Reviews/Quote";
import QuotesControl from "@/app/[locale]/home/Reviews/QuotesControl";
import { REVIEWS_QUOTES_WITH_AUTHORS } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useState } from "react";

export default function Quotes() {
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
