"use client";

import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { useContext } from "react";

export default function CatalogueHeroSection() {
  const { translation } = useContext(i18nProviderContext);

  return (
    <div className={`relative`}>
      <div
        className={`
          relative
          2xl:h-[600px]
          min-[920px]:h-[400px]
          h-[300px]
          bg-center
          bg-no-repeat
          w-full
          max-w-[1920px]
          mx-auto
          z-0
          overflow-hidden
          bg-cover
          bg-[url(/images/products/productsFlowerCatalogue.png)]
        `}
      >
        <div
          className={`
            absolute
            inline-flex
            flex-col
            md:gap-[10px]
            gap-4
            font-medium
            xl:max-w-[1000px]
            max-w-[600px]
            w-full
            px-5
            items-center
            -translate-y-1/2
            top-[calc(46%+30px)]
            -translate-x-1/2
            left-1/2
            transition-all
            duration-[1.5s]
            z-20
          `}
        >
          <p className="capitalize text-center md:-tracking-[1.08px] font-medium -tracking-[0px] leading-[100%] [font-size:_clamp(14px,2.5vw,36px)] after:p-0 text-base-red">
            {translation.ourPortfolio}
          </p>
          <p className="mainPageTextShadow text-center font-semibold md:-tracking-[4px] -tracking-[0px] leading-[100%] [font-size:_clamp(34px,6vw,96px)] capitalize">
            {translation.goesBeyond}
          </p>
        </div>
      </div>
    </div>
  );
}
