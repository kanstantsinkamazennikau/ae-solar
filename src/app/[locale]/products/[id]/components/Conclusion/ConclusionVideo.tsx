"use client";

import Button from "@/app/[locale]/components/common/Button";
import { useVideoIntersection } from "@/app/[locale]/hooks/useVideoIntersection";
import { ConclusionProps } from "@/app/[locale]/products/[id]/components/Conclusion/types";
import {
  PRODUCT_CONCLUSION,
  PRODUCT_CONCLUSION_FOR_PANELS,
} from "@/app/[locale]/products/[id]/constants";
import { CONSTRUCTOR_CONFIGURE_YOUR_MODEL } from "@/app/[locale]/utils/constants";
import { isIOS } from "@/app/[locale]/utils/isIOS";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";

export default function ConclusionVideo({ id }: ConclusionProps) {
  const { videoRef } = useVideoIntersection();
  const [isIOSDevice, setIsIOSDevice] = useState(false);

  useLayoutEffect(() => {
    setIsIOSDevice(isIOS());
  }, []);

  return (
    <div className="relative flex justify-center items-center flex-col">
      <div className="relative">
        {isIOSDevice ? (
          <Image
            src={`/videos/packshot/Packshot${id}Static.jpg`}
            alt="glow"
            priority
            width={1920}
            height={1080}
            className="
              w-full
              xl:h-[740px]
              lg:h-[700px]
              md:h-[500px]
              min-[540px]:h-[400px]
              h-[350px]
              object-cover
              md:pb-0
              pb-10
            "
          />
        ) : (
          <video
            muted
            ref={videoRef}
            className="
            w-full
            xl:h-[740px]
            lg:h-[700px]
            md:h-[500px]
            min-[540px]:h-[400px]
            h-[350px]
            object-cover
            md:pb-0
            pb-10
          "
          >
            <source
              src={`/videos/packshot/Packshot${id}.mp4`}
              type="video/mp4"
            />
          </video>
        )}
        <div className="fade-strip-bottom !z-10" />
      </div>

      <div
        className="
          min-[920px]:pt-[70px]
          min-[920px]:pb-[0px]
          min-[920px]:px-[70px]
          md:pt-[40px]
          md:pb-[0px]
          md:px-[30px]
          min-[540px]:pt-[40px]
          min-[540px]:pb-[25px]
          min-[540px]:px-[25px]
          pt-[20px]
          pb-[10px]
          px-[10px]
          rounded-[20px]
          [background:linear-gradient(169deg,#f10109_0%,rgb(73_4_6/_73%)_27%,#000000_51%,rgb(2_2_2/28%)_80%,#000000_100%)]
          overflow-hidden
          max-w-[800px]
          min-[540px]:w-[70%]
          w-[90%]
          relative
          md:-mt-[25%]
          -mt-[200px]
          z-20
        "
      >
        <div
          className="
            w-full
            h-[130%]
            absolute
            left-0
            top-0
            [background:radial-gradient(#490002_0%,#49000229_70%,transparent_100%)]
            -translate-y-1/2
            z-10
          "
        />
        <div
          className="
            absolute 
            top-[1px]
            left-[1px]
            right-[1px]
            bottom-[1px]
            rounded-[20px]
            bg-black
          "
        />
        <div
          className="
            rounded-[20px]
            z-[4]
            absolute 
            top-0
            left-0
            right-0
            bottom-0
            [background:#00000070]
          "
        />
        <div className="relative z-10 flex flex-col min-[920px]:gap-4 gap-2">
          <div
            className="
              [font-size:_clamp(26px,3.5vw,64px)]
              leading-[120%]
              -tracking-[1.92px]
              font-extrabold
              text-center
            "
          >
            {PRODUCT_CONCLUSION}
          </div>
          <div className="flex flex-col min-[920px]:gap-8 gap-4 items-center">
            <div className="[font-size:_clamp(12px,1.5vw,20px)] leading-[150%] font-walsheim text-center z-10">
              {PRODUCT_CONCLUSION_FOR_PANELS[id]
                .split(/\r?\n|\r|\n/g)
                .map((string) => (
                  <p key={string} className="min-[920px]:mb-7 mb-3 last:mb-0">
                    {string}
                  </p>
                ))}
            </div>
            {/* <Link href={"/calculate"}>
              <Button externalStyle="!px-[26px] !py-[16px]">
                <div className="flex justify-center items-center px-2">
                  <Image
                    src={`/images/cart.svg`}
                    alt={"cart"}
                    priority
                    width={24}
                    height={24}
                    className="inline-block"
                  />
                  <span className="[font-size:_clamp(14px,2vw,20px)] -tracking-[0.2px] font-semibold">
                    {CONSTRUCTOR_CONFIGURE_YOUR_MODEL}
                  </span>
                </div>
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
