"use client";

import { ProductsContext } from "@/app/[locale]/context/productsContext";
import { isMobile } from "@/app/[locale]/utils/isMobile";
import { useContext, useEffect, useRef } from "react";

export default function LightingTheWayVideo() {
  const {
    isStartAnimation,
    setIsStartAnimation,
    isLongVideoLoadingTime,
    setIsPlaying,
  } = useContext(ProductsContext);
  const ref = useRef(null);

  const isMobileDevice = isMobile();

  const onPlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      setIsStartAnimation(true);
    }, 1500);
  };

  useEffect(() => {
    ref.current && (ref.current as HTMLVideoElement).play();
  }, []);

  return (
    <>
      {!isLongVideoLoadingTime && !isMobileDevice && (
        <video
          width="1920"
          height="1080"
          onPlay={onPlay}
          muted
          ref={ref}
          className={`!w-screen object-cover fixed -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 ${
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
