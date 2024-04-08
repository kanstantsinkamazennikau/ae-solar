"use client";

import { GetInTuchProps } from "@/app/[locale]/components/GetInTouch/types";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const matchPartnerTypeWithArticle = {
  partner: "a partner",
  investor: "an investor",
  installer: "an installer",
};

const partnersTypes = Object.keys(matchPartnerTypeWithArticle) as [
  keyof typeof matchPartnerTypeWithArticle
];

export default function GetInTouch({
  children,
  containerStyle,
  bgContainer,
  contentContainer,
}: GetInTuchProps) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  const [clientType, setClientType] =
    useState<keyof typeof matchPartnerTypeWithArticle>("partner");
  const router = useRouter();

  const handleClick = () => {
    router.push(`/contacts?type=${clientType}`);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentPartnerTypeIndex = partnersTypes.indexOf(clientType);
      if (currentPartnerTypeIndex === partnersTypes.length - 1) {
        setClientType(partnersTypes[0]);
      } else {
        setClientType(partnersTypes[currentPartnerTypeIndex + 1]);
      }
    }, 4000);

    return () => {
      clearTimeout(intervalId);
    };
  });

  return (
    <div
      className={`
        ${bgContainer}
        flex
        justify-center
        items-center
        w-full
        2xl:h-[1600px]
        lg:h-[1200px]
        min-[540px]:bg-center
        bg-top
        bg-no-repeat
        bg-[url('/images/getInTouchCircles.svg')]
        -top-[80px]
        relative
        2xl:bg-auto
        -mb-[200px]
        min-[540px]:h-[800px]
        h-[800px]
        lg:[background-size:1450px]
        md:[background-size:1120px]
        min-[540px]:[background-size:1100px]
        [background-size:780px]
      `}
    >
      <BasicWidthContainer
        styles={`mx-auto w-full max-[540px]:!px-0 ${containerStyle} ${
          children ? "max-w-[1440px]" : "p-0"
        }`}
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
            rounded-[40px]
            max-[540px]:rounded-none
            max-[540px]:border-x-0
            border-2
            border-solid
            border-[#3e0002]
            relative
            overflow-hidden
            bg-[#111]
            -top-[60px]
            ${contentContainer}
          `}
        >
          <div
            className="
              [background:radial-gradient(100%_100%_at_50%_100%,rgba(109,2,7,0.30)_0%,rgba(109,2,7,0.00)_100%),linear-gradient(297deg,#000_0%,rgba(0,0,0,0.00)_100%),#0d0d0d00]
              w-full
              h-full
              absolute
            "
          />

          {/* CLIENT TYPE */}
          <div
            className={`flex p-1 justify-center ${
              !children ? "items-center" : "md:self-baseline items-center"
            } md:gap-5 gap-1 get-in-touch-border [&>*:last-child>div:last-child]:hidden relative`}
          >
            {partnersTypes.map((type) => (
              <div
                key={type}
                className="flex justify-center items-center md:gap-5 gap-1"
              >
                <button
                  className={`flex py-[14px] md:px-7 px-5 ${
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
                    {t(type)}
                  </span>
                </button>
                <div className="w-1 h-5 bg-base-red" />
              </div>
            ))}
          </div>

          {/* TITLE */}

          {!children ? (
            <div className="flex flex-col xl:gap-[40px] lg:gap-[30px] md:gap-[20px] gap-[16px] items-center text-center self-stretch z-10">
              <>
                <div className="[font-size:_clamp(14px,5vw,64px)] leading-none text-base-red md:-tracking-[1.92px] tracking-normal font-medium">
                  {t("Fueling growth together")}
                </div>
                <div className="flex flex-col justify-center items-center [font-size:_clamp(26px,5vw,86px)] md:leading-none -tracking-[-2.88px] font-extrabold max-w-[1100px] leading-[120%]">
                  <div className="md:whitespace-nowrap overflow-y-hidden">
                    <span>{t("Become")}</span>
                    <br className="max-md:block hidden" />
                    <span
                      className="relative animate-partnerTransition transition-all"
                      key={clientType}
                    >
                      {t(clientType + "WithArticle")}
                    </span>
                  </div>
                  <p>{t("In our solar vision")}</p>
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
                {t("Become")}
              </span>
              <span
                className={`
                  [font-size:_clamp(12px,1.5vw,16px)]
                  relative
                  ${children ? "animate-partnerTransition" : ""}`}
                key={clientType}
              >
                {t(clientType + "WithArticle")}
              </span>
            </span>
          </Button>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
