"use client";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";

import Image from "next/image";
import { useContext } from "react";

export default function Production() {
  const { translation } = useContext(i18nProviderContext);

  return (
    <div className="flex md:gap-[50px] lg:gap-[60px] xl:gap-[80px] gap-3 max-w-[1100px] self-center px-5">
      <div className="flex justify-end items-center gap-1 md:gap-4 flex-grow flex-shrink basis-0">
        <div className="[font-size:_clamp(14px,3vw,40px)] font-bold leading-none text-right self-center capitalize">
          {translation.germanEngineering}
        </div>
        <Image
          src="/images/german.svg"
          alt="german"
          width={76}
          height={76}
          priority
          className="md:w-[76px] w-10"
        />
      </div>
      <div className="w-0.5 bg-[#191919] h-auto" />
      <div className="[font-size:_clamp(12px,3vw,40px)] font-bold leading-none flex-grow flex-shrink basis-0 self-center">
        {translation.productionFacilities}
      </div>
    </div>
  );
}
