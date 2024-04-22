"use client";

import { ProductsPanelProps } from "@/app/[locale]/products/[id]/components/ProductsPanel/types";
import Image from "next/image";
import { useContext, useLayoutEffect, useState } from "react";

import Loader from "@/app/[locale]/components/common/Loader";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { isIOS } from "@/app/[locale]/utils/isIOS";
import dynamic from "next/dynamic";
const VideoPlayer = dynamic(() => import("./Video"), {
  ssr: false,
});

export default function ProductsPanel({ id }: ProductsPanelProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [startTextTransition, setStartTextTransition] = useState(false);
  const [isIOSDevice, setIsIOSDevice] = useState(true);
  const [startFadeIn, setStartFadeIn] = useState(false);

  const { translation } = useContext(i18nProviderContext);

  useLayoutEffect(() => {
    setIsIOSDevice(isIOS());
  }, []);

  const onLoaded = () => {
    setVideoLoaded(true);
    setTimeout(() => {
      setStartTextTransition(true);
    }, 1200);
  };

  const onEnded = () => {
    setVideoEnded(true);
  };

  return (
    <div
      className="
        w-full
        flex
        justify-center
        items-center
        relative
        min-[540px]:-top-[64px]
        -top-[100px]
        max-md:min-h-[630px]
        min-h-[700px]
        max-h-[1000px]
      "
    >
      {!videoLoaded && !isIOSDevice && (
        <div className="absolute z-50 -mt-[136px]">
          <Loader />
        </div>
      )}
      <div
        className="
          max-md:min-h-[630px]
          min-h-[700px]
          2xl:h-[1000px]
          min-[1360px]:h-[900px]
          xl:h-[850px]
          lg:h-[700px]
          h-[630px]
        "
      >
        {!isIOSDevice ? (
          <VideoPlayer onLoaded={onLoaded} onEnded={onEnded} id={id} />
        ) : (
          <Image
            src={`/videos/products/${id}HeaderStatic.jpg`}
            alt={id}
            priority
            width={1920}
            height={780}
            onLoad={() => {
              setTimeout(() => {
                setStartTextTransition(true);
              }, 200);
              setStartFadeIn(true);
            }}
            className={`
              z-10
              relative
              md:scale-100
              min-[540px]:scale-[1.25]
              scale-[1.5]
              max-md:min-h-[630px]
              min-h-[700px]
              2xl:h-[1000px]
              min-[1360px]:h-[900px]
              xl:h-[850px]
              lg:h-[700px]
              h-[630px]
              object-contain
              ${startFadeIn ? "animate-[fadeIn_0.5s_ease-in-out]" : "opacity-0"}
            `}
          />
        )}
      </div>
      {/* PANEL DESCRIPTION */}
      <div
        className={`
          xl:pt-10
          xl:pb-[60px]
          xl:px-[60px]
          md:pt-[30px]
          md:pb-[45px]
          md:px-[45px]
          pt-[10px]
          pb-[20px]
          px-[10px]
          inline-flex
          flex-col
          items-center         
          absolute
          max-w-[770px]
          left-[50%]
          -translate-x-1/2
          z-10
          md:w-fit
          max-[460px]:w-full
          max-md:top-[160px]
          min-[920px]:bottom-[20%]
          bottom-[30%]
          transition-all
          duration-[1.5s]
          ease-out
          ease-[cubic-bezier(0.87, 0, 0.13, 1)]
          ${!startTextTransition ? "opacity-0 md:!bottom-[0%]" : "opacity-100"}
        `}
      >
        <div className="flex flex-col items-center md:gap-3 gap-1 md:w-min w-full">
          <Image
            src={`/images/models/${id}.svg`}
            alt={id}
            priority
            width={120}
            height={120}
            className="xl:w-[120px] xl:h-[120px] md:w-[80px] md:h-[80px] w-[48px] h-[48px]"
          />
          <h1
            className="
              [font-size:_clamp(60px,8.5vw,170px)]
              drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
              font-bold
              leading-[100%]
              -tracking-[5.1px]
            "
          >
            {id}
          </h1>
          <h1 className="font-walsheim [font-size:_clamp(18px,1.5vw,24px)] leading-[150%] font-medium text-center max-w-[650px]">
            {translation.heroSectionTitle}
          </h1>
        </div>
      </div>
      <div
        className={`
          flex
          items-center
          flex-col
          gap-4
          absolute
          lg:bottom-[10%]
          min-[920px]:bottom-[13%]
          md:bottom-[18%]
          min-[460px]:bottom-[14%]
          bottom-[21%]
          left-2/4
          -translate-x-2/4
          text-centerfade 
          font-semibold
          [font-size:_clamp(14px,1.5vw,20px)]
          delay-500
          duration-[0.5s]
          ease-out
          ${!videoEnded ? "opacity-0 !bottom-[0%]" : "opacity-100"}
          z-10
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
