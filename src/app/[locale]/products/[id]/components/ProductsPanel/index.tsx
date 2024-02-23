"use client";

import Video from "@/app/[locale]/products/[id]/components/ProductsPanel/Video";
import { ProductsPanelProps } from "@/app/[locale]/products/[id]/components/ProductsPanel/types";
import { PRODUCT_PANEL_TITLES } from "@/app/[locale]/products/[id]/constants";
import Image from "next/image";
import { useState } from "react";

import dynamic from "next/dynamic";
const VideoPlayer = dynamic(() => import("./Video"), {
  ssr: false,
});

export default function ProductsPanel({ id }: ProductsPanelProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);

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
      {/* <Image
        src={`/images/products/${id}ProductBackground.png`}
        alt={`${id}ProductBackground`}
        priority
        width={1920}
        height={780}
        quality={100}
        className="object-cover h-[780px] w-full relative -top-[64px] "
      /> */}
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
        <VideoPlayer />
      </div>

      {/* BACKGROUND IMAGE */}

      {/* <Image
          src="/images/products/moduleProducts.png"
          alt="moduleProducts"
          priority
          width={1582}
          height={701}
          quality={100}
          className="z-10 relative md:scale-100 scale-[1.75] max-[460px]:-translate-y-[50px]"
        />
        <Image
          src="/images/products/bottomLight.svg"
          alt="bottomLight"
          width={1582}
          height={480}
          className="
            absolute
            md:bottom-[calc(-39%+4px)]
            min-[460px]:bottom-[calc(-66%+4px)]
            bottom-[calc(-53%+4px)]
            min-[460px]:scale-100
            scale-150
          "
        /> */}
      {/* <div className="fade-strip-bottom !z-0 !h-[112px] !from-[#0000006e] !bottom-[0] rotate-180"></div> */}
      {/* PANEL DESCRIPTION */}
      <div
        className="
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
          min-[920px]:bottom-[20%]
          bottom-[30%]
          left-[50%]
          -translate-x-1/2
          z-10
          md:w-fit
          max-[460px]:w-full
          max-md:top-[160px]
        "
      >
        <Image
          src="/images/awards/dividerSmall.svg"
          alt="dividerSmall"
          width={30}
          height={30}
          className="absolute top-0 left-0 lg:block hidden"
        />
        <Image
          src="/images/awards/dividerSmall.svg"
          alt="dividerSmall"
          width={30}
          height={30}
          className="absolute bottom-0 right-0 rotate-180 lg:block hidden"
        />
        <div className="flex flex-col items-center md:gap-3 gap-1 md:w-min w-full">
          <Image
            src={`/images/models/${id}.svg`}
            alt={id}
            priority
            width={120}
            height={120}
            className="xl:w-[120px] xl:h-[120px] md:w-[80px] md:h-[80px] w-[48px] h-[48px]"
          />
          <div
            className="
              [font-size:_clamp(60px,8.5vw,170px)]
              drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
              font-bold
              leading-[100%]
              -tracking-[5.1px]
            "
          >
            {id}
          </div>
          <p className="font-walsheim [font-size:_clamp(18px,1.5vw,24px)] leading-[150%] font-medium text-center max-w-[650px]">
            {PRODUCT_PANEL_TITLES[id]}
          </p>
        </div>
      </div>
      <div
        className="
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

          z-10
        "
      >
        <span>{"Scroll to the future"}</span>
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
