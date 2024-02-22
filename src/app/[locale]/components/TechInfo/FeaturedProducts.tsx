"use client";

import Button from "@/app/[locale]/components/common/Button";
import {
  HEADER_CONFIGURE_YOUR_MODEL,
  TECH_INFO_EXPLORE,
  TECH_INFO_INNOVATIVE,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function FeaturedProducts() {
  const ref = useRef(null);
  const [isPlayed, setIsPlayed] = useState(false);

  useEffect(() => {
    if (isPlayed) return;
    if (ref.current) {
      const intersectionObserver = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          if (entries[0].isIntersecting) {
            setIsPlayed(true);
            (entries[0].target as HTMLVideoElement).play();
          } else {
            (entries[0].target as HTMLVideoElement).currentTime = 0;
          }
        }
      );

      intersectionObserver.observe(ref.current);

      return () => {
        if (ref.current) {
          intersectionObserver.unobserve(ref.current);
        }
      };
    }
  }, [isPlayed]);

  return (
    <div
      className="
        relative
        xl:mb-[140px]
        lg:mb-[120px]
        md:mb-[100px]
        mb-[80px]
      "
    >
      <video
        muted
        onEnded={() => console.log("sdfsf")}
        ref={ref}
        className="
          w-full
          xl:h-[840px]
          lg:h-[700px]
          md:h-[500px]
          h-[400px]
          md:object-cover
          md:pb-0
          pb-10
        "
      >
        <source src="/videos/productRange.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col items-center lg:gap-[68px] md:gap-[38px] gap-8 w-full absolute bottom-0">
        <div className="text-center font-bold leading-[1.2] -tracking-[0.64] [font-size:_clamp(24px,4vw,64px)] z-10">
          <p>{TECH_INFO_INNOVATIVE}</p>
          <p className="text-dark-gray-900">{TECH_INFO_EXPLORE}</p>
        </div>
        <div className="relative w-full justify-center items-center flex">
          <Image
            src={`/images/glowFull.png`}
            alt="glow"
            priority
            width={1320}
            height={60}
            className="absolute -translate-y-[calc(50%-1px)]"
          />
          <Image
            src={`/images/glowFull.png`}
            alt="glow"
            priority
            width={1320}
            height={60}
            className="w-full absolute rotate-180 translate-y-[calc(50%-1px)]"
          />
          <Button style="outline" externalStyle="!bg-black" size="thin">
            <Link href="/calculate">
              <span className="[font-size:_clamp(12px,1.5vw,20px)] -tracking-[0.24px] font-semibold">
                {HEADER_CONFIGURE_YOUR_MODEL}
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
