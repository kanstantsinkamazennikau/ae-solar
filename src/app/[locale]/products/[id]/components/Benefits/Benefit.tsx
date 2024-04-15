"use client";

import { useIntersection } from "@/app/[locale]/hooks/useIntersection";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { BenefitProps } from "@/app/[locale]/products/[id]/components/Benefits/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Benefit({
  benefitTitle,
  benefitDescription,
  benefitPicture,
}: BenefitProps) {
  const [stopIntersecting, setStopIntersecting] = useState(false);
  const { ref, intersecting } = useIntersection(0.35);
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <div
      ref={ref}
      className={`
        first:border-none
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
          items-center
          lg:gap-10
          gap-4
          xl:w-[778px]
          lg:w-[578px]
          md:w-[480px]
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
            xl:max-w-[638px]
            lg:max-w-[338px]
            md:max-w-[370px]
            max-w-full
            [font-size:_clamp(24px,2.5vw,48px)]
            font-extrabold
            leading-[120%]
            -tracking-[1.44px]
            capitalize
            w-full
          "
        >
          {t(benefitTitle)}
        </div>
      </div>

      <div className="flex flex-col items-start lg:gap-6 md:gap-3 gap-2">
        <p
          className="
            [font-size:_clamp(12px,1.5vw,20px)]
            font-normal
            leading-[150%]
            font-walsheim
            md:max-w-[427px]
            w-full
          "
        >
          {t(benefitDescription)}
        </p>
      </div>
    </div>
  );
}
