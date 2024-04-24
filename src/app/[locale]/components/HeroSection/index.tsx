"use client";

import { MainPageVideoContext } from "@/app/[locale]/context/mainPageVideoContext";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useContext } from "react";
import { Trans } from "react-i18next";
import { useClientTranslation } from "@/app/[locale]/i18n/client";

const HeroSectionVideo = dynamic(() => import("./HeroSectionVideo"), {
  ssr: false,
});

export default function HeroSection() {
  const { isStartAnimation, isLongVideoLoadingTime } =
    useContext(MainPageVideoContext);
  useClientTranslation("", "");

  const { translation } = useContext(i18nProviderContext);

  return (
    <div className="w-full flex justify-center items-center relative -top-[64px] md:h-screen h-[70vh] overflow-x-hidden overflow-hidden">
      <HeroSectionVideo />
      <div
        className={`
          absolute
          inline-flex
          flex-col
          md:gap-[30px]
          gap-4
          font-medium
          max-w-[670px]
          px-5
          items-center
          z-10
          transition-all
          ${!isLongVideoLoadingTime && "delay-[4.5s]"}
          duration-[1.5s]
          ease-out
          ease-[cubic-bezier(0.87, 0, 0.13, 1)]
          ${
            !isStartAnimation
              ? "opacity-0 top-[50%]"
              : "opacity-100 md:-translate-y-[40%] top-[40%]"
          }
        `}
      >
        <h1
          className="capitalize text-center -tracking-[2.88px] leading-none [font-size:_clamp(48px,5vw,88px)] 
            mainPageTextShadow
          "
        >
          <Trans
            components={{
              red: (
                <p className="text-center text-base-red -tracking-[1.2px] leading-none [font-size:_clamp(20px,4vw,40px)] mainPageTextShadow" />
              ),
            }}
          >
            {translation.heroSection}
          </Trans>
        </h1>
      </div>

      <div
        className={`
          flex
          items-center
          flex-col
          gap-4
          absolute
          left-2/4
          -translate-x-2/4
          text-center
          z-30
          font-semibold
          [font-size:_clamp(14px,1.5vw,20px)] 
          transition-all
          ${!isLongVideoLoadingTime && "delay-[6.5s]"}
          duration-[1s]
          ${
            !isStartAnimation
              ? "opacity-0   -bottom-0"
              : "opacity-100 md:bottom-[60px] bottom-[20px]"
          }
        `}
      >
        <span>{translation.scroll}</span>
        <Image
          src="/images/arrowFuture.svg"
          alt="arrow"
          width={23}
          height={24}
          className="animate-bounce"
        />
      </div>
    </div>
  );
}
