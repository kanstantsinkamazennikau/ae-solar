"use client";

import {
  ABOUT_OUR_DESIGN,
  ABOUT_OUR_DESIGN_HIGHLIGHT,
  ABOUT_OUR_GOES_BEYOND,
  ABOUT_OUR_PORTFOLIO,
} from "@/app/[locale]/company/constants";
import Button from "@/app/[locale]/components/common/Button";
import { useVideoIntersection } from "@/app/[locale]/hooks/useVideoIntersection";
import { CONSTRUCTOR_CONFIGURE_YOUR_MODEL } from "@/app/[locale]/utils/constants";
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";

export default function PortfolioBackground() {
  const { videoRef } = useVideoIntersection();

  return (
    <div className="xl:mb-[180px] lg:mb-[140px] md:mb-[100px] mb-[60px] flex justify-center items-start max-w-[1360px] mx-auto">
      <div className="relative flex items-center md:justify-end justify-center overflow-hidden">
        <div className="fade-strip-left max-lg:!w-[100px] md:block hidden" />
        <video
          ref={videoRef}
          width="1320"
          height="700"
          autoPlay
          muted
          className="relative md:-left-[240px] min-h-[430px] object-cover"
        >
          <source src={`/videos/products/HeaderFlower.mp4`} type="video/mp4" />
        </video>
        <div
          className="
            flex
            flex-col
            md:items-start
            items-center
            md:gap-10
            gap-8
            absolute
            px-5
          "
        >
          <div
            className="
              flex
              2xl:max-w-[650px]
              xl:max-w-[600px]
              lg:max-w-[550px]
              md:max-w-[450px]
              max-w-[400px]
              flex-col
              md:items-start
              md:gap-8
              gap-6
            "
          >
            <div className="flex flex-col gap-2">
              <p
                className="
                  leading-[120%]
                  font-medium
                  [font-size:_clamp(20px,3.5vw,36px)]
                  capitalize
                  max-md:text-center
                  md:-tracking-[1.08px]
                  text-base-red
                "
              >
                {ABOUT_OUR_PORTFOLIO}
              </p>
              <p
                className="
                  leading-[110%]
                  font-semibold
                  [font-size:_clamp(32px,3.5vw,64px)]
                  capitalize
                  max-md:text-center
                  md:-tracking-[1.92px]
                  -tracking-[1.08px]
                "
              >
                {ABOUT_OUR_GOES_BEYOND}
              </p>
            </div>

            <p
              className="
                  font-walsheim
                  leading-[150%]
                  [font-size:_clamp(16px,1.5vw,24px)]
                  max-md:text-center
                "
            >
              {styleMatchingText(
                ABOUT_OUR_DESIGN,
                ABOUT_OUR_DESIGN_HIGHLIGHT,
                "text-dark-gray-900 font-normal",
                "text-white font-bold"
              )}
            </p>
          </div>
          <Button
            size="normal"
            externalStyle="max-[768px]:!py-4 !py-[14px] !px-[26]"
          >
            <span className="[font-size:_clamp(20px,1.5vw,20px)] font-semibold -tracking-[0.2px]">
              {CONSTRUCTOR_CONFIGURE_YOUR_MODEL}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
