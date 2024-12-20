"use client";

import Button from "@/app/[locale]/components/common/Button";
import { useVideoIntersection } from "@/app/[locale]/hooks/useVideoIntersection";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { isMobile } from "@/app/[locale]/utils/isMobile";
import Image from "next/image";
import Link from "next/link";
import { useContext, useLayoutEffect, useState } from "react";
import { Trans } from "react-i18next";

const Video = ({ videoLink }: { videoLink: string }) => {
  const { videoRef } = useVideoIntersection();
  const [isMobileDevice, setIsMobileDevice] = useState(true);

  useLayoutEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);

  return (
    <>
      {!isMobileDevice ? (
        <video
          muted
          ref={videoRef}
          autoPlay
          className="
            w-full
            xl:h-[840px]
            lg:h-[700px]
            md:h-[500px]
            md:object-cover
            md:pb-0
            pb-10
          "
        >
          <source src={videoLink} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={"/videos/productRangeMobileStatic.jpg"}
          alt="productRangeMobile"
          // priority
          width={1320}
          height={60}
          className="
            w-full
            xl:h-[840px]
            lg:h-[700px]
            md:h-[500px]
            md:object-cover
            md:pb-0
            pb-10
          "
        />
      )}
    </>
  );
};

export default function FeaturedProducts() {
  const { translation } = useContext(i18nProviderContext);

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
      {/* DESKTOP */}
      <div
        className="
          md:block
          hidden
        "
      >
        <Video videoLink="/videos/productRange.mp4" />
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        <Video videoLink="/videos/productRangeMobile.mp4" />
      </div>

      <div className="flex flex-col items-center lg:gap-[68px] md:gap-[38px] gap-8 w-full md:absolute bottom-0 max-md:-mt-[70px]">
        <div className="text-center font-bold leading-[1.2] -tracking-[0.64] [font-size:_clamp(24px,4vw,64px)] z-10 capitalize">
          <Trans
            components={{
              red: <div className="text-base-red" />,
            }}
          >
            {translation.innovative}
          </Trans>
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
          <Button
            style="outline"
            externalStyle="!bg-black hover:!bg-[#3E0002]"
            size="thin"
          >
            <Link href="/catalogue">
              <span className="[font-size:_clamp(12px,1.5vw,20px)] -tracking-[0.24px] font-semibold">
                {translation.chooseModule}
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
