"use client";

import Loader from "@/app/[locale]/components/common/Loader";
import { MainPageVideoContext } from "@/app/[locale]/context/mainPageVideoContext";
import { isIOS } from "@/app/[locale]/utils/isIOS";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";

export default function HeroSectionVideo() {
  const {
    isStartAnimation,
    setIsStartAnimation,
    isLongVideoLoadingTime,
    setIsLongVideoLoadingTime,
  } = useContext(MainPageVideoContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [startFadeIn, setStartFadeIn] = useState(false);
  const ref = useRef(null);

  const isIOSDevice = isIOS();

  const onPlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      setIsStartAnimation(true);
    }, 300);
  };

  useEffect(() => {
    const timerId = setTimeout(
      () => {
        setIsLongVideoLoadingTime(true);
        setIsStartAnimation(true);
      },
      isIOSDevice ? 300 : 6000
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
    isIOSDevice,
  ]);

  useEffect(() => {
    ref.current && (ref.current as HTMLVideoElement).play();
  }, []);

  return (
    <>
      {!isPlaying && !isLongVideoLoadingTime && !isIOSDevice && (
        <div
          className={`z-20 absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 `}
        >
          <Loader externalStyle="!h-screen" />
        </div>
      )}
      {(isLongVideoLoadingTime || isIOSDevice) && (
        <Image
          src={`/images/products/productsFlower.png`}
          alt="solar panel"
          priority
          width={1920}
          height={1080}
          onLoad={() => setStartFadeIn(true)}
          className={`object-cover h-full w-full ${
            startFadeIn ? "animate-[fadeIn_0.7s_ease-in-out]" : "opacity-0"
          }`}
        />
      )}
      {!isLongVideoLoadingTime && !isIOSDevice && (
        <video
          width="1920"
          height="1080"
          onPlay={onPlay}
          muted
          ref={ref}
          className={`!w-screen object-cover absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 h-full`}
        >
          <source src={`/videos/headerOpening.mp4`} type="video/mp4" />
        </video>
      )}
    </>
  );
}
