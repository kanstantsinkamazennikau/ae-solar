"use client";

import Button from "@/app/[locale]/components/common/Button";
import {
  HEADER_CHOOSE_YOUR_MODEL,
  TECH_INFO_EXPLORE,
  TECH_INFO_INNOVATIVE,
} from "@/app/[locale]/utils/constants";

export default function FeaturedProducts() {
  return (
    <div
      className="
        bg-[url('/images/featuredProducts.png')] 
        object-fill 
        w-full
        xl:h-[800px]
        lg:h-[600px]
        md:h-[400px]
        bg-no-repeat 
        bg-contain 
        bg-center 
        justify-end 
        flex 
        items-center
        flex-col
        px-5
        xl:mb-[280px]
        lg:mb-[180px]
        md:mb-[100px]
        mb-[80px]
        md:[background-position-y:-70px]
        lg:[background-position-y:0px]
        [background-position-y:-28px]
        h-[360px]
      "
    >
      <div className="flex flex-col items-center lg:gap-[68px] md:gap-[38px] gap-8">
        <div className="text-center font-bold leading-[1.2] -tracking-[0.64] [font-size:_clamp(24px,4vw,64px)]">
          <p>{TECH_INFO_INNOVATIVE}</p>
          <p className="text-dark-gray-900">{TECH_INFO_EXPLORE}</p>
        </div>
        <Button
          onClick={() => console.log(HEADER_CHOOSE_YOUR_MODEL)}
          style="outline"
        >
          <span className="[font-size:_clamp(12px,2vw,24px)] -tracking-[0.24px] font-semibold">
            {HEADER_CHOOSE_YOUR_MODEL}
          </span>
        </Button>
      </div>
    </div>
  );
}
