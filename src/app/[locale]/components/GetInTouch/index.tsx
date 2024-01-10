"use client";

import Button from "@/app/[locale]/components/common/Button";
import {
  GET_IN_TOUCH_BECOME_A,
  GET_IN_TOUCH_CLIENT_TYPE,
  GET_IN_TOUCH_ELEVATE_GROWTH,
  GET_IN_TOUCH_JOIN_US,
  GET_IN_TOUCH_OUR_VISION,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useState } from "react";

export default function GetInTouch() {
  const [clientType, setClientType] =
    useState<keyof typeof matchPartnerTypeWithArticle>("partner");

  const matchPartnerTypeWithArticle = {
    partner: "a partner",
    investor: "an investor",
    installer: "an installer",
  };

  return (
    <div
      className="
        flex
        justify-center
        items-center
        bg-gradient-297
        bg-[#111]
        w-full
        xl:h-screen
        lg:h-[600px]
        md:h-[500px]
        h-[400px]
        relative
        px-5
        xl:mb-[280px]
        lg:mb-[180px]
        md:mb-[100px]
        mb-[80px]
      "
    >
      <Image
        src="/images/getInTouchUnion.svg"
        alt="union"
        priority
        width={1920}
        height={1080}
        className="h-full w-full mix-blend-color-dodge absolute"
      />
      <div className="flex flex-col justify-center items-center xl:gap-[100px] lg:gap-[80px] md:gap-[60px] gap-10 max-w-[1320px] w-full">
        {/* CLIENT TYPE */}
        <div className="flex p-1 justify-center items-center md:gap-5 gap-1 get-in-touch-border [&>*:last-child>div:last-child]:hidden">
          {GET_IN_TOUCH_CLIENT_TYPE.map((type) => (
            <div
              key={type}
              className="flex justify-center items-center md:gap-5 gap-1"
            >
              <button
                className={`flex md:py-5 md:px-7 p-4 ${
                  clientType === type
                    ? "get-in-touch-client-border"
                    : "border-1 border border-transparent"
                }`}
                onClick={() =>
                  setClientType(
                    type as keyof typeof matchPartnerTypeWithArticle
                  )
                }
              >
                <span className="[font-size:_clamp(12px,2vw,24px)] leading-[0.9] capitalize">
                  {type}
                </span>
              </button>
              <div className="w-1 h-5 bg-base-red"></div>
            </div>
          ))}
        </div>

        {/* TITLE */}

        <div className="flex flex-col xl:gap-[60px] lg:gap-[60px] md:gap-[40px] gap-[20px] items-center text-center self-stretch">
          <div className="[font-size:_clamp(14px,5vw,64px)] leading-none text-base-red md:-tracking-[1.92px] tracking-normal font-medium">
            {GET_IN_TOUCH_ELEVATE_GROWTH}
          </div>
          <div className="[font-size:_clamp(26px,4vw,96px)] md:leading-none -tracking-[-2.88px] font-extrabold max-w-[900px] leading-[120%] overflow-hidden">
            <span>{GET_IN_TOUCH_JOIN_US}</span>
            <span
              className="relative animate-partnerTransition"
              key={clientType}
            >
              {matchPartnerTypeWithArticle[clientType]}
            </span>
            <span>{GET_IN_TOUCH_OUR_VISION}</span>
          </div>
        </div>

        {/* BUTTON */}
        <Button onClick={() => console.log("contact us")} showArrow>
          <span className="overflow-hidden">
            <span className="[font-size:_clamp(12px,1.5vw,16px)]">
              {GET_IN_TOUCH_BECOME_A}
            </span>
            <span className="[font-size:_clamp(12px,1.5vw,16px)]">
              {matchPartnerTypeWithArticle[clientType]}
            </span>
          </span>
        </Button>
      </div>
    </div>
  );
}
