"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { QuotesContext } from "@/app/[locale]/context/quotesContext";
import { Quote } from "@/app/[locale]/components/Reviews/Quote";
import QuotesControl from "@/app/[locale]/components/Reviews/QuotesControl";
import {
  REVIEWS_QUOTES_WITH_AUTHORS,
  REVIEWS_RAVE_REVIEWS,
  REVIEWS_SEE_WHY_WE_SHINE,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useState } from "react";

export default function Reviews() {
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
    <div className="relative w-full max-w-[1920px]">
      <div className="absolute w-full h-[50%] flex bottom-[150px] left-0 -z-0">
        <div className="fade-strip-top !h-[50px] " />
        <Image
          src="/images/solarSystem2.svg"
          alt="solarSystem"
          width={1920}
          height={620}
          priority
          className="absolute h-full object-cover"
        />
        <div className="fade-strip-bottom !h-[50px]" />
      </div>
      <BasicWidthContainer styles="mx-auto relative z-10">
        <TwoTierHeading
          tierOneHeading={REVIEWS_RAVE_REVIEWS}
          tierTwoHeading={REVIEWS_SEE_WHY_WE_SHINE}
        />
        <div
          className="
            flex
            xl:py-20
            xl:pl-60
            lg:py-16
            lg:pl-48
            md:py-14
            md:pl-32
            py-10
            pl-20
            flex-col
            gap-10
            self-stretch
            relative
            xl:mb-[280px]
            lg:mb-[180px]
            md:mb-[100px]
            mb-[80px]
          "
        >
          <Image
            src="/images/quote.svg"
            alt="quote"
            width={420}
            height={300}
            priority
            className="
              absolute
              top-0
              left-0
              w-[127px]
              h-[90px]
              xl:w-[420px]
              xl:h-[300px]
              lg:w-[350px]
              lg:h-[250px]
              md:w-[250px]
              md:h-[178px]
              min-[500px]:w-[200px]
              min-[500px]:h-[142px]
            "
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
              <div className="overflow-hidden xl:gap-10 lg:gap-6 md:gap-2 gap-0 flex flex-col">
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
      </BasicWidthContainer>
    </div>
  );
}
