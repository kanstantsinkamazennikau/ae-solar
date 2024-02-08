"use client";

import GetInTouch from "@/app/[locale]/components/GetInTouch";
import LightingTheWay from "@/app/[locale]/products/components/LightingTheWay";
import PanelsFlower from "@/app/[locale]/products/components/PanelsFlower";
import Power from "@/app/[locale]/products/components/Power";
import { PRODUCT_JOIN } from "@/app/[locale]/products/constants";
import { GET_IN_TOUCH_ELEVATE_GROWTH } from "@/app/[locale]/utils/constants";

export default function ProductsPage() {
  return (
    <div>
      <LightingTheWay />
      <PanelsFlower />
      <Power />
      <div className="w-full 2xl:-mb-60 lg:-mb-40 md:mt-[200px] mt-[160px]">
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
  );
}
