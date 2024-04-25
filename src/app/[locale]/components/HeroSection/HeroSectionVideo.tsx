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
    setIsPlaying,
  } = useContext(MainPageVideoContext);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [startFadeIn, setStartFadeIn] = useState(false);
  const ref = useRef(null);

  const isIOSDevice = isIOS();

  const onPlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      setIsStartAnimation(true);
    }, 300);
  };

  useEffect(() => {
    ref.current && (ref.current as HTMLVideoElement).play();
  }, []);

  return (
    <>
      {!isLongVideoLoadingTime && !isIOSDevice && (
        <video
          onPlay={onPlay}
          muted
          ref={ref}
          poster="/videos/headerOpeningPoster.webp"
          className={`w-screen object-cover absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 h-full`}
        >
          <source src={`/videos/headerOpening.mp4`} type="video/mp4" />
        </video>
      )}
    </>
  );
}
