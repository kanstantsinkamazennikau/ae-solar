"use client";

import { useIntersection } from "@/app/[locale]/hooks/useIntersection";
import { BenefitProps } from "@/app/[locale]/products/[id]/components/Benefits/types";
import Image from "next/image";
import { useState } from "react";

export default function Benefit({
  benefitTitle,
  benefitDescription,
  benefitPicture,
  index,
  benefitsLength,
}: BenefitProps) {
  const [stopIntersecting, setStopIntersecting] = useState(false);
  const { ref, intersecting } = useIntersection(0.35);
  const formatNumber = (number: number) => {
    return String(number).padStart(2, "0");
  };

  return (
    <div
      ref={ref}
      className={`
        flex
        xl:py-[80px]
        lg:py-[50px]
        md:py-[30px]
        py-[20px]
        justify-between
        md:items-center
        items-start
        md:self-stretch
        gap-4
        md:flex-row
        flex-col
        border-t
        border-solid
        border-[#191919]
        md:w-auto
        w-full
        self-center
        transition-all
        duration-[2s]
        ${!intersecting && !stopIntersecting ? "opacity-0" : "opacity-100"}
      `}
      onTransitionEnd={() => {
        setStopIntersecting(true);
      }}
    >
      <div
        className="
          flex
          md:items-center
          items-end
          lg:gap-20
          gap-4
          xl:w-[778px]
          lg:w-[578px]
          md:w-[340px]
          justify-between
          w-auto
        "
      >
        <Image
          src={`/images/products/${benefitPicture}`}
          alt={benefitPicture}
          priority
          width={140}
          height={140}
          className="lg:w-[140px] lg:h-[140px] md:w-[100px] md:h-[100px] w-[80px] h-[80px]"
        />
        <div
          className="
            xl:max-w-[538px]
            lg:max-w-[338px]
            md:max-w-[200px]
            max-w-full
            [font-size:_clamp(24px,2.5vw,48px)]
            font-extrabold
            leading-[120%]
            -tracking-[1.44px]
            capitalize
            w-full
          "
        >
          <div className="md:hidden leading-[100%] font-walsheim font-bold h-5 text-[#505050] flex">
            <div className="[font-size:_clamp(11px,1.5vw,20px)] flex items-start h-full">
              {formatNumber(index + 1)}
            </div>
            <div className="[font-size:_clamp(8px,1.2vw,14px)] flex items-end h-full">
              /{formatNumber(benefitsLength)}
            </div>
          </div>
          {benefitTitle}
        </div>
      </div>

      {/* <div className="flex justify-between items-center gap-3"> */}
      <div className="flex flex-col items-start lg:gap-6 md:gap-3 gap-2">
        {/* DESKTOP COUNTER */}
        {/* <div className="md:flex leading-[100%] font-walsheim font-bold h-5 text-[#505050] hidden">
          <div className="[font-size:_clamp(10px,1.5vw,20px)] flex items-end h-full">
            {formatNumber(index + 1)}
          </div>
          <div className="[font-size:_clamp(8px,1.2vw,14px)] flex items-start h-full">
            /{formatNumber(benefitsLength)}
          </div>
        </div> */}
        <p
          className="
            [font-size:_clamp(12px,1.5vw,20px)]
            font-normal
            leading-[150%]
            font-walsheim
            capitalize
            md:max-w-[427px]
            w-full
          "
        >
          {benefitDescription}
        </p>
      </div>
    </div>
  );
}
