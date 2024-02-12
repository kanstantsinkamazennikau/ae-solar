"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import { ProductNavigationProps } from "@/app/[locale]/products/[id]/components/ProductNavigation/types";
import {
  PRODUCT_NAVIGATION,
  PRODUCT_OVERVIEW,
} from "@/app/[locale]/products/[id]/constants";
import { CONSTRUCTOR_ADD_TO_BAG } from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function ProductNavigation({ id }: ProductNavigationProps) {
  return (
    <div
      className="
        fixed
        min-[920px]:top-[79px]
        top-[63px]
        w-full
        h-[64px]
        backdrop-blur-[50px]
        flex
        justify-center
        items-center
        py-3
        bg-navigation-black
        border-b
        border-solid
        border-[#d0d8e91a]
        z-30
      "
    >
      <BasicWidthContainer>
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="flex w-[200px] gap-[6px] items-center">
              <Image
                src={`/images/models/${id}.svg`}
                alt={id}
                priority
                width={40}
                height={40}
              />
              <span className="[font-size:_clamp(12px,1.5vw,24px)] leading-[100%] font-bold">
                {id}
              </span>
            </div>
            <div className="flex gap-4 [font-size:_clamp(10px,1vw,14px)] font-normal leading-[100%]">
              <div className="text-dark-gray-900">{PRODUCT_OVERVIEW}</div>
              {PRODUCT_NAVIGATION.map(({ title, link, position }) => {
                const onClick = () => {
                  document.getElementById(link)!.scrollIntoView({
                    behavior: "smooth",
                    block: position as ScrollLogicalPosition,
                  });
                };
                return (
                  <div key={title} onClick={onClick} className="cursor-pointer">
                    {title}
                  </div>
                );
              })}
            </div>
          </div>
          <Button
            onClick={() => console.log("da")}
            size="extrasmall"
            style="outline"
          >
            <div className="flex justify-center items-center gap-[6px]">
              <Image
                src={`/images/cart.svg`}
                alt={"cart"}
                priority
                width={12}
                height={12}
                className="inline-block"
              />
              <span className="[font-size:_clamp(10px,1vw,14px)] -tracking-[0.14px] font-semibold leading-[100%]">
                {CONSTRUCTOR_ADD_TO_BAG}
              </span>
            </div>
          </Button>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
