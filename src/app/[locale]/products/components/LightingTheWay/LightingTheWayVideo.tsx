"use client";

import Loader from "@/app/[locale]/components/common/Loader";
import { ProductsContext } from "@/app/[locale]/context/productsContext";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";

export default function LightingTheWayVideo() {
  const {
    isStartAnimation,
    setIsStartAnimation,
    isLongVideoLoadingTime,
    setIsLongVideoLoadingTime,
  } = useContext(ProductsContext);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      setIsStartAnimation(true);
    }, 1500);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLongVideoLoadingTime(true);
      setIsStartAnimation(true);
    }, 6000);

    if (isStartAnimation) {
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isStartAnimation, setIsLongVideoLoadingTime, setIsStartAnimation]);

  return (
    <>
      {!isPlaying && !isLongVideoLoadingTime && (
        <div
          className={`z-20 fixed -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 ${
            isStartAnimation &&
            ` 
              2xl:!-top-32
              xl:!-top-20
              lg:!-top-10
              min-[640px]:!top-10
              min-[540px]:!top-20
              min-[540px]:scale-100
              !top-28
              transition-all
              duration-[1.5s]
              !translate-y-0
            `
          }`}
        >
          <Loader externalStyle="!h-screen" />
        </div>
      )}
      {isLongVideoLoadingTime && (
        <Image
          src={`/images/products/productsFlower.png`}
          alt="productsFlower"
          priority
          width={1920}
          height={1080}
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
         `}
        />
      )}
      {!isLongVideoLoadingTime && (
        <video
          width="1920"
          height="1080"
          autoPlay
          onPlay={onPlay}
          muted
          className={`!w-screen object-cover fixed -translate-y-1/2 top-1/2 ${
            isStartAnimation &&
            ` 
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
            `
          }`}
        >
          <source src={`/videos/products/HeaderFlower.mp4`} type="video/mp4" />
        </video>
      )}
    </>
  );
}
