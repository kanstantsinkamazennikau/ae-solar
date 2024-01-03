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
      className="bg-[url('/images/featuredProducts.png')] 
      object-fill 
      w-full
      h-[800px] 
      bg-no-repeat 
      bg-contain 
      bg-center 
      justify-end 
      flex 
      items-center
      flex-col
      px-5
      mb-[280px]
      gap-[68px]
      "
    >
      <div className="text-center font-bold text-[64px] leading-[1.2] -tracking-[0.64]">
        <p>{TECH_INFO_INNOVATIVE}</p>
        <p className="text-dark-gray-900">{TECH_INFO_EXPLORE}</p>
      </div>
      <Button
        onClick={() => console.log(HEADER_CHOOSE_YOUR_MODEL)}
        style="outline"
      >
        <span className="text-2xl -tracking-[0.24px] font-semibold">
          {HEADER_CHOOSE_YOUR_MODEL}
        </span>
      </Button>
    </div>
  );
}
