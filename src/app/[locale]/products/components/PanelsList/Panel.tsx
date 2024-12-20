"use client";

import LinkWithArrow from "@/app/[locale]/components/common/LinkWithArrow";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { PanelProps } from "@/app/[locale]/products/components/PanelsList/types";
import {
  PRODUCT_DESCRIPTIONS,
  PRODUCT_SLOGAN,
} from "@/app/[locale]/products/constants";
import { isMobile } from "@/app/[locale]/utils/isMobile";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useContext, useLayoutEffect, useState } from "react";
const PanelVideo = dynamic(() => import("./PanelVideo"), {
  ssr: false,
});

export default function Panel({ panel }: PanelProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const { translation } = useContext(i18nProviderContext);

  useLayoutEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);

  const onLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div
      className="
        group
        min-[1400px]:max-w-[650px]
        lg:max-w-[450px]
        max-w-[650px]
        max-h-[340px]
        min-h-[330px]
        w-full
        h-full
        border
        border-solid
        transition-all
        duration-300
        hover:border-[#F60109]
        hover:shadow-product
        border-[#191919]
        rounded-xl
        overflow-hidden
        relative
        cursor-pointer
      "
    >
      <div
        className="
          absolute
          top-0
          left-0
          bottom-0
          right-0
          bg-[radial-gradient(50%_100%_at_50%_0%,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.00)_50%,#000_100%)]
          z-[12]
        "
      />
      {imageLoaded && !isMobileDevice && (
        <div
          className={`${
            videoLoaded
              ? "group-hover:z-[11] group-hover:block hidden z-0 absolute top-0 left-0 bottom-0 right-0"
              : "opacity-0 absolute z-10"
          }`}
        >
          <PanelVideo panel={panel} onLoaded={onLoaded} />
        </div>
      )}

      <Image
        src={`/images/products/${panel}Background.png`}
        width={650}
        priority
        height={340}
        alt={`${panel}Background`}
        className="rounded-xl max-md:min-h-[330px] max-md:object-cover"
        onLoad={() => {
          setImageLoaded(true);
        }}
      />
      <Image
        src={`/images/productIntro/${panel}Module.png`}
        width={300}
        priority
        height={300}
        alt={`${panel}Module`}
        className="rounded-xl absolute bottom-0 z-[11] -translate-x-1/2 left-1/2 md:h-[300px] h-[270px]"
      />
      <div
        className="
          flex
          gap-4
          flex-col
          items-center
          max-w-[490px]
          w-full
          bottom-0
          z-[13]
          mb-8
          -translate-x-1/2
          left-1/2
          overflow-hidden
          absolute
          p-3
        "
      >
        <div className="flex flex-col items-center gap-2 relative">
          <Image
            src={`/images/models/${panel}.svg`}
            alt={panel}
            priority
            width={56}
            height={56}
          />
          <p className="[font-size:_clamp(26px,2.5vw,40px)] font-bold -tracking-[1.2px] leading-[100%]">
            {panel}
          </p>
          <p
            className="
              [font-size:_clamp(16px,1.5vw,20px)]
              font-walsheim
              font-normal
              h-full
              transition-all
              duration-300
              group-hover:hidden
              text-center
            "
          >
            {translation[PRODUCT_SLOGAN[panel]]}
          </p>
          <div
            dynamic-description={translation[PRODUCT_DESCRIPTIONS[panel]]}
            className={`
              group-hover:after:content-[attr(dynamic-description)]
              [font-size:_clamp(12px,1.5vw,16px)]
              font-walsheim
              font-normal
              relative
              transition-all
              opacity-40
              group-hover:opacity-100
              duration-500
              text-center
            `}
          />
        </div>
        <LinkWithArrow
          label={translation.learnMore}
          href={`/products/${panel}`}
        />
      </div>
    </div>
  );
}
