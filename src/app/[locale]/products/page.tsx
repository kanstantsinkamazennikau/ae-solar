"use client";

import GetInTouch from "@/app/[locale]/components/GetInTouch";
import { ProductsContext } from "@/app/[locale]/context/productsContext";
import LightingTheWay from "@/app/[locale]/products/components/LightingTheWay";
import PanelsList from "@/app/[locale]/products/components/PanelsList";
import Power from "@/app/[locale]/products/components/Power";
import SubNavigationProductPanels from "@/app/[locale]/products/components/SubNavigationProductPanels";
import { PRODUCT_JOIN } from "@/app/[locale]/products/constants";
import { GET_IN_TOUCH_ELEVATE_GROWTH } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext, useEffect } from "react";

export default function ProductsPage() {
  const { isStartAnimation, setIsStartAnimation } = useContext(ProductsContext);

  useEffect(() => {
    if (!isStartAnimation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isStartAnimation]);

  return (
    <>
      <LightingTheWay />
      {
        <div
          className={`relative transition-all delay-100 duration-[1s] bg-black ${
            isStartAnimation ? "-translate-y-0" : "translate-y-1/4"
          }`}
        >
          <Image
            src={`/images/glowFull.png`}
            alt="glow"
            priority
            width={1320}
            height={60}
            className="relative  top-0 -translate-x-1/2 left-1/2 rotate-180 h-[60px]"
          />
          <div className="overflow-hidden">
            <PanelsList />
            <Power />
            <div
              className="
                w-full
                2xl:-mb-60
                lg:-mb-2
                md:mb-12
                min-[560px]:-mb-16
                -mb-20
                2xl:mt-10
                lg:mt-10
                md:mt-40
                min-[560px]:mt-20
                mt-40
              "
            >
              <GetInTouch>
                {
                  <div className="flex flex-col xl:gap-[20px] lg:gap-[40px] md:gap-[40px] gap-[20px] self-stretch z-10">
                    <div className="[font-size:_clamp(14px,3vw,48px)] leading-none text-base-red md:-tracking-[1.92px] tracking-normal font-medium">
                      {GET_IN_TOUCH_ELEVATE_GROWTH}
                    </div>
                    <div
                      className="
                    [font-size:_clamp(20px,3.5vw,64px)]
                    -tracking-[-1.92px]
                    font-semibold
                    max-w-[1180px]
                    leading-[130%]
                  "
                    >
                      {PRODUCT_JOIN}
                    </div>
                  </div>
                }
              </GetInTouch>
            </div>
          </div>
        </div>
      }
    </>
  );
}
