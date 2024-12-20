"use client";

import Button from "@/app/[locale]/components/common/Button";
import { useVideoIntersection } from "@/app/[locale]/hooks/useVideoIntersection";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { isMobile } from "@/app/[locale]/utils/isMobile";
import Image from "next/image";
import Link from "next/link";
import { useContext, useLayoutEffect, useState } from "react";
import { Trans } from "react-i18next";

export default function PortfolioBackground() {
  const { videoRef } = useVideoIntersection();
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const { translation } = useContext(i18nProviderContext);

  useLayoutEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);

  return (
    <div className="xl:mb-[180px] lg:mb-[140px] md:mb-[100px] mb-[60px] md:flex-row flex-col flex justify-center items-start max-w-[1360px] mx-auto">
      <div className="relative flex md:flex-row flex-col items-center md:justify-end justify-center overflow-hidden">
        <div className="fade-strip-left max-lg:!w-[100px] md:block hidden" />
        {isMobileDevice ? (
          <Image
            src={`/videos/products/PortfolioBackground.png`}
            alt="glow"
            priority
            width={1320}
            height={700}
            className="max-md:translate-x-[18%] min-h-[250px]"
          />
        ) : (
          <video
            ref={videoRef}
            width="1320"
            height="700"
            autoPlay
            muted
            className="relative md:-left-[240px] min-h-[300px] md:object-cover"
          >
            <source
              src={`/videos/products/HeaderFlower.mp4`}
              type="video/mp4"
            />
          </video>
        )}
        <div
          className="
            flex
            flex-col
            md:items-start
            items-center
            md:gap-10
            gap-8
            md:absolute
            px-5
            relative
            z-10
            max-md:-mt-[20%]
            max-[540px]:-mt-[30%]
            max-[440px]:-mt-[40%]
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
                {translation.ourPortfolio}
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
                {translation.goesBeyond}
              </p>
            </div>

            <p
              className="
                  font-walsheim
                  leading-[150%]
                  [font-size:_clamp(16px,1.5vw,24px)]
                  max-md:text-center
                  text-dark-gray-900
                  font-normal
                "
            >
              <Trans
                components={{
                  white: <span className="text-white font-bold" />,
                }}
              >
                {translation.weInnovative}
              </Trans>
            </p>
          </div>
          <Link href="/products">
            <Button externalStyle="max-[768px]:!py-4 !py-[14px] !px-[26]">
              <span className="[font-size:_clamp(20px,1.5vw,20px)] font-semibold -tracking-[0.2px] capitalize">
                {translation.allProducts}
              </span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative w-full justify-center items-center flex mt-20 mb-5 md:hidden">
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
      </div>
    </div>
  );
}
