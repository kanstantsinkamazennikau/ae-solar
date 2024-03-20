"use client";

import { ProductsContext } from "@/app/[locale]/context/productsContext";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import {
  PRODUCTS_LIGHTING,
  PRODUCTS_WELCOME,
} from "@/app/[locale]/products/constants";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useContext } from "react";

const LightingTheWayVideo = dynamic(() => import("./LightingTheWayVideo"), {
  ssr: false,
});

export default function LightingTheWay() {
  const { isStartAnimation } = useContext(ProductsContext);
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <div className={`relative`}>
      <div
        className={`
          relative
          2xl:h-[600px]
          min-[920px]:h-[400px]
          h-[300px]
          bg-cover
          bg-center
          bg-no-repeat
          w-full
          max-w-[1920px]
          mx-auto
          z-0
        `}
      >
        <LightingTheWayVideo />
        <div
          className={`
            absolute
            inline-flex
            flex-col
            md:gap-[10px]
            gap-4
            font-medium
            min-[920px]:max-w-[1100px]
            max-w-[600px]
            w-full
            px-5
            items-center
            -translate-y-1/2
            top-[calc(50%+30px)]
            -translate-x-1/2
            left-1/2
            transition-all
            duration-[1.5s]
           
            ${isStartAnimation ? "opacity-100" : "opacity-0"}
          `}
        >
          <p className="uppercase textShadow text-center md:-tracking-[2.7px] -tracking-[0px] leading-none [font-size:_clamp(34px,4vw,69px)] max-w-[1000px] after:p-0">
            {t("Our portfolio")}
          </p>
          <p className="text-center text-base-red md:-tracking-[0.4px] -tracking-[0.5px] leading-none [font-size:_clamp(10px,1.5vw,15px)] uppercase">
            {t("Goes beyond")}
          </p>
        </div>
      </div>
    </div>
  );
}
