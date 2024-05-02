"use client";

import { useVideoIntersection } from "@/app/[locale]/hooks/useVideoIntersection";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { IntroductionProps } from "@/app/[locale]/products/[id]/components/VideoIntroduction/types";
import { isMobile } from "@/app/[locale]/utils/isMobile";
import Image from "next/image";
import { useContext, useLayoutEffect, useState } from "react";

export default function Introduction({ id }: IntroductionProps) {
  const { translation } = useContext(i18nProviderContext);
  const modelStats = translation.stats as unknown as {
    [key: string]: string;
  };
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const { videoRef } = useVideoIntersection();

  useLayoutEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);

  if (!modelStats) return;

  const modelStatsKeys = Object.keys(modelStats);

  const moduleStats = modelStatsKeys
    ?.filter((key) => key !== "id")
    ?.map((key) => (
      <div key={key}>
        <div className="leading-[1.3] font-semibold [font-size:_clamp(24px,3vw,48px)]">
          {modelStats[key]}
        </div>
        <div className="text-lg leading-[1.7] font-medium font-walsheim text-dark-gray-900 [font-size:_clamp(12px,1.5vw,18px)]">
          {translation[key]}
        </div>
      </div>
    ));

  return (
    <div
      className="
        flex
        w-full
        justify-center
        min-[540px]:flex-row
        flex-col min-[540px]:scroll-mt-[150px]
        lg:scroll-mt-[50px]
        scroll-mt-[300px]
        max-w-[1360px]
      "
      id="introduction"
    >
      <div
        className={`
          relative
          flex
          flex-row-reverse
          w-full
          lg:h-[800px]
          md:h-[600px]
          min-[540px]:h-[500px]
          min-h-[400px]
          bg-bottom 
          bg-cover
          overflow-hidden
          max-w-[1920px]
          min-[600px]:mt-0
          max-[600px]:-mt-[100px]
          max-[540px]:-mt-[100px]
          max-[460px]:-mt-[120px]        
        `}
      >
        <div className="fade-strip-top !z-10" />
        <div className="fade-strip-left !z-20 !w-[100px] 2xl:block hidden" />
        <div className="fade-strip-bottom !z-20" />

        <div
          className="
            max-w-[1320px]
            flex
            flex-row-reverse
            relative
            w-full
            mx-auto
          "
        >
          <div
            className="
              absolute
              bottom-0
              left-0
              flex
              w-full
              items-baseline
              2xl:-left-[23%]
              justify-center
              z-10
              max-[540px]:-mt-20
            "
          >
            <div className="fade-strip-right !z-10 max-xl:hidden" />
            <div className="fade-strip-left !z-10 hidden xl:block 2xl:hidden" />
            <p
              className="
                min-[540px]:hidden
                [font-size:_clamp(24px,3vw,48px)]
                font-semibold
                md:-tracking-[1.92px]
                leading-[120%]
                absolute
                max-w-[320px]
                w-full
                left-1/2
                -translate-x-1/2
                text-center
           
              "
            >
              {translation.introductionTitle}
            </p>
            {isMobileDevice ? (
              <Image
                alt={id}
                src={`/videos/slider/${id}Static.png`}
                width={1320}
                height={800}
                className="
                  w-full
                  xl:h-[800px]
                  lg:h-[700px]
                  md:h-[590px]
                  min-[540px]:h-[490px]
                  h-[360px]
                  object-cover
                  md:pb-0
                  pb-10
                  mt-4
                "
              />
            ) : (
              <video
                muted
                ref={videoRef}
                className="
                w-full
                xl:h-[800px]
                lg:h-[700px]
                md:h-[590px]
                min-[540px]:h-[490px]
                h-[360px]
                object-cover
                md:pb-0
                pb-10
                mt-4
              "
              >
                <source src={`/videos/slider/${id}.mp4`} type="video/mp4" />
              </video>
            )}
          </div>

          {/* DESKTOP DESCRIPTION */}
          <div
            className="
              min-[540px]:flex
              hidden
              flex-col
              2xl:gap-8
              xl:gap-6
              lg:gap-5
              md:gap-5
              gap-3
              self-end
              xl:max-w-[700px]
              md:max-w-[600px]
              max-w-[500px]
              relative
              z-20
              px-5
              2xl:mx-0
              mx-auto
            "
          >
            <div
              className="
                flex
                flex-col
                2xl:items-start
                items-center
                2xl:gap-4
                lg:gap-2
                gap-3
              "
            >
              <p
                className="
                  [font-size:_clamp(36px,4vw,64px)]
                  md:font-extrabold
                  font-bold
                  md:-tracking-[1.92px]
                  leading-[120%]
                  2xl:text-left
                  text-center
                "
              >
                {translation.introductionTitle}
              </p>
              <p
                className="
                  [font-size:_clamp(13px,1.5vw,20px)]
                  font-walsheim
                  font-normal
                  leading-[150%]
                  -tracking-[1.92]
                  2xl:text-start
                  text-center
                "
              >
                {translation.introductionDescription}
              </p>
            </div>

            <div
              className="
                xl:p-10
                md:p-6
                p-4
                border
                border-solid
                backdrop-blur-[10px]
                bg-[#00000033]
                [border-image:linear-gradient(154deg,_#f60109_0%,_rgb(49_9_10_/_73%)_27%,_rgb(49_9_10_/_73%)_51%,_rgb(246_1_9_/_28%)_80%,_#f60109_100%)_1]
                flex
                gap-6
                justify-around
              "
            >
              {moduleStats}
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE DESCRIPTION */}
      <div
        className="
          min-[540px]:hidden
          flex
          flex-col
          2xl:gap-8
          xl:gap-6
          lg:gap-5
          md:gap-5
          gap-3
          self-end
          xl:max-w-[700px]
          md:max-w-[600px]
          max-w-[330px]
          relative
          z-20
          px-5
          2xl:mx-0
          mx-auto
          -mt-10
        "
      >
        <div
          className="
            flex
            flex-col
            2xl:items-start
            items-center
          "
        >
          <p
            className="
              [font-size:_clamp(13px,1.5vw,20px)]
              font-walsheim
              font-normal
              leading-[150%]
              -tracking-[1.92]
              2xl:text-start
              text-center
            "
          >
            {translation.introductionDescription}
          </p>
        </div>

        <div
          className="
            xl:p-10
            md:p-6
            p-4
            border
            border-solid
            backdrop-blur-[10px]
            bg-[#00000033]
            [border-image:linear-gradient(154deg,_#f60109_0%,_rgb(49_9_10_/_73%)_27%,_rgb(49_9_10_/_73%)_51%,_rgb(246_1_9_/_28%)_80%,_#f60109_100%)_1]
            flex
            flex-col
            gap-6
            justify-around
          "
        >
          {moduleStats}
        </div>
      </div>
    </div>
  );
}
