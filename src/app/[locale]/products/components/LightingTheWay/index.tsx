"use client";

import Loader from "@/app/[locale]/components/common/Loader";
import { ProductsContext } from "@/app/[locale]/context/productsContext";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { isMobile } from "@/app/[locale]/utils/isMobile";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const LightingTheWayVideo = dynamic(() => import("./LightingTheWayVideo"), {
  ssr: false,
});

export default function LightingTheWay() {
  const {
    isStartAnimation,
    setIsStartAnimation,
    isLongVideoLoadingTime,
    setIsLongVideoLoadingTime,
    isPlaying,
  } = useContext(ProductsContext);
  const [startFadeIn, setStartFadeIn] = useState(false);
  const { translation } = useContext(i18nProviderContext);
  const [isMobileDevice, setIsMobileDevice] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    setIsMobileDevice(isMobile());

    const timerId = setTimeout(
      () => {
        setIsLongVideoLoadingTime(true);
        setIsStartAnimation(true);
      },
      isMobileDevice ? 300 : 5000
    );

    if (isStartAnimation) {
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [
    isStartAnimation,
    setIsLongVideoLoadingTime,
    setIsStartAnimation,
    isMobileDevice,
  ]);

  return (
    <div className={`relative`}>
      <div
        className={`
          relative
          2xl:h-[600px]
          min-[920px]:h-[400px]
          h-[300px]
          bg-cover
          bg-center
          bg-no-repeat
          w-full
          max-w-[1920px]
          mx-auto
          z-0
        `}
      >
        <div>
          {!isLongVideoLoadingTime && !isPlaying && (
            <>
              <Image
                src={`/videos/products/HeaderFlowerPoster.webp`}
                alt="HeaderFlowerPoster"
                priority
                width={1920}
                height={1080}
                className={`!w-screen object-cover fixed -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2`}
              />
              <div
                className={`!w-screen object-cover fixed -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2`}
              >
                <Loader externalStyle="!h-screen" />
              </div>
            </>
          )}
          {(isLongVideoLoadingTime || isMobileDevice) && (
            <Image
              src={`/images/products/productsFlower.png`}
              alt="productsFlower"
              priority
              width={1920}
              height={1080}
              onLoad={() => setStartFadeIn(true)}
              className={`!w-screen object-cover fixed
              2xl:!-top-32
              xl:!-top-20
              lg:!-top-10
              min-[640px]:!top-10
              min-[540px]:!top-20
              min-[540px]:scale-100
              scale-150
              !top-28
              transition-all
              duration-[1.5s]
              !translate-y-0
              ${startFadeIn ? "animate-[fadeIn_0.5s_ease-in-out]" : "opacity-0"}
           `}
            />
          )}
          {!isLongVideoLoadingTime && <LightingTheWayVideo />}
        </div>
        <div
          className={`
            absolute
            inline-flex
            flex-col
            md:gap-[10px]
            gap-4
            font-medium
            min-[920px]:max-w-[1100px]
            max-w-[600px]
            w-full
            px-5
            items-center
            -translate-y-1/2
            top-[calc(50%+30px)]
            -translate-x-1/2
            left-1/2
            transition-all
            duration-[1.5s]
           
            ${isStartAnimation ? "opacity-100" : "opacity-0"}
          `}
        >
          <h1 className="uppercase textShadow text-center md:-tracking-[2.7px] -tracking-[0px] leading-none [font-size:_clamp(34px,4vw,69px)] max-w-[1000px] after:p-0">
            {translation.ourPortfolio}
          </h1>
          <h1 className="text-center text-base-red md:-tracking-[0.4px] -tracking-[0.5px] leading-none [font-size:_clamp(10px,1.5vw,15px)] uppercase">
            {translation.goesBeyond}
          </h1>
        </div>
      </div>
    </div>
  );
}
