"use client";

import { GetInTuchProps } from "@/app/[locale]/components/GetInTouch/types";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import {
  GET_IN_TOUCH_BECOME_A,
  GET_IN_TOUCH_CLIENT_TYPE,
  GET_IN_TOUCH_ELEVATE_GROWTH,
  GET_IN_TOUCH_JOIN_US,
  GET_IN_TOUCH_OUR_VISION,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function GetInTouch({ children }: GetInTuchProps) {
  const [clientType, setClientType] =
    useState<keyof typeof matchPartnerTypeWithArticle>("partner");
  const locale = useParams()?.locale;
  const router = useRouter();

  //TODO fill form with partner type value for "intrested in" dropdown
  const handleClick = () => {
    router.push(`/${locale}/consult`);
  };

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
        w-full
        2xl:h-[1600px]
        lg:h-[1200px]
        bg-center
        bg-no-repeat
        bg-[url('/images/getInTouchCircles.svg')]
        -top-[80px]
        relative
        2xl:bg-auto
        -mb-[200px]
        h-[800px]
        lg:[background-size:1500px]
        md:[background-size:1120px]
        [background-size:1100px]
      "
    >
      <BasicWidthContainer
        styles={`mx-auto w-full ${children ? "max-w-[1440px]" : ""}`}
      >
        <div
          className={`
            flex
            flex-col
            justify-center
            items-center
            xl:gap-[80px]
            lg:gap-[60px]
            md:gap-[40px]
            gap-4
            w-full
            bg-[url('/images/getInTouchBackground.svg')]
            2xl:py-[100px]
            2xl:px-[100px]
            md:py-[80px]
            md:px-[50px]
            py-[40px]
            px-[30px]
            rounded-[40px]
            border-2
            border-solid
            border-[#ffffff0d]
            relative
            overflow-hidden
            bg-[#111]
            -top-[60px]
          `}
        >
          <Image
            src={`/images/getInTouchUnion.svg`}
            alt="getInTouchUnion"
            width={1440}
            height={1000}
            className="absolute h-full mix-blend-hard-light"
          />
          {/* CLIENT TYPE */}
          <div
            className={`flex p-1 justify-center ${
              !children ? "items-center" : "md:self-baseline items-center"
            } md:gap-5 gap-1 get-in-touch-border [&>*:last-child>div:last-child]:hidden relative`}
          >
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
                  <span className="[font-size:_clamp(10px,2vw,24px)] leading-[0.9] capitalize">
                    {type}
                  </span>
                </button>
                <div className="w-1 h-5 bg-base-red"></div>
              </div>
            ))}
          </div>

          {/* TITLE */}

          {!children ? (
            <div className="flex flex-col xl:gap-[40px] lg:gap-[40px] md:gap-[40px] gap-[20px] items-center text-center self-stretch z-10">
              <>
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
              </>
            </div>
          ) : (
            children
          )}

          {/* BUTTON */}
          <Button
            onClick={handleClick}
            showArrow
            externalStyle={`${
              !children ? "items-center" : "md:self-baseline items-center"
            }`}
          >
            <span className="overflow-hidden">
              <span className="[font-size:_clamp(12px,1.5vw,16px)]">
                {GET_IN_TOUCH_BECOME_A}
              </span>
              <span
                className={`
                  [font-size:_clamp(12px,1.5vw,16px)]
                  relative
                  ${children ? "animate-partnerTransition" : ""}`}
                key={clientType}
              >
                {matchPartnerTypeWithArticle[clientType]}
              </span>
            </span>
          </Button>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
