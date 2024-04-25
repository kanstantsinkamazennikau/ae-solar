"use client";

import { MainPageVideoContext } from "@/app/[locale]/context/mainPageVideoContext";
import { isIOS } from "@/app/[locale]/utils/isIOS";
import { useContext, useEffect, useRef } from "react";

export default function HeroSectionVideo() {
  const { setIsStartAnimation, isLongVideoLoadingTime, setIsPlaying } =
    useContext(MainPageVideoContext);
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
