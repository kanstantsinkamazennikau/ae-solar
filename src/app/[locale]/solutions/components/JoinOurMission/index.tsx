"use client";

import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import Starfield from "@/app/[locale]/products/components/StarField";
import Image from "next/image";
import { useContext } from "react";
import { Trans } from "react-i18next";

export default function JoinOurMission() {
  const { translation } = useContext(i18nProviderContext);

  return (
    <div
      className="
        relative
        md:h-[720px]
        w-full
        h-[420px]
        xl:mb-[140px]
        lg:mb-[120px]
        md:mb-[100px]
        mb-[80px]
      "
    >
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.02}
        backgroundColor="black"
        style="absolute h-full"
      />
      <div className="fade-strip-top md:!h-[125px] !h-[50px]" />
      <Image
        src={`/images/solutions/joinOurMission.svg`}
        alt="joinOurMission"
        width={1920}
        height={600}
        className="
          absolute
          top-0
          md:w-[1920px]
          md:h-[600px]
          w-[800px]
          h-[250px]
          object-cover
          left-1/2
          -translate-x-1/2
        "
      />
      <div className="w-full absolute bottom-0 flex justify-center px-5">
        <div className="flex w-[874px] flex-col items-center gap-10">
          <TwoTierHeading
            tierOneHeading={
              <Trans
                components={{
                  red: <p className="text-[#B30006]" />,
                }}
              >
                {translation.joinOurMission}
              </Trans>
            }
            size="small"
            externalStyle="
              md:!text-[96px]
              [&>*:last-child]:md:!text-[96px]
              !text-[40px]
              [&>*:last-child]:!text-[40px]
            "
            reverseColor
            marginBottomNone
            align="center"
          />
          <div className="text-center md:text-[20px] text-[16px] leading-[150%] font-walsheim font-medium md:max-w-[650px] max-w-[450px] gap-6 flex flex-col">
            <p> {translation.withEverySunrise}</p>
            <p> {translation.saveTheWorldTogether}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
