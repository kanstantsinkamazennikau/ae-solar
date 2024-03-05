"use client";

import {
  ABOUT_DOWNLOAD_PRESENTATION,
  ABOUT_ILLUMINATING,
  ABOUT_MANUFACTURER,
  ABOUT_WATCH_VIDEO,
} from "@/app/[locale]/company/constants";
import Button from "@/app/[locale]/components/common/Button";
import LightBoxYoutubeVideo from "@/app/[locale]/components/common/LightBoxYoutubeVideo";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  const onVideoClose = () => {
    setShowVideo(false);
  };

  const onVideoOpen = () => {
    setShowVideo(true);
  };

  return (
    <>
      <LightBoxYoutubeVideo open={showVideo} onClose={onVideoClose} />
      <div
        className="
          w-full
          flex
          justify-end
          items-center
          relative
          -mt-[80px]
          flex-col
          overflow-hidden
          2xl:h-[800px]
          xl:h-[700px]
          lg:h-[650px]
          md:h-[600px]
          h-[660px]
          md:mb-0
          -mb-[40px]
        "
      >
        <div className="fade-strip-bottom md:!h-[200px] !h-[50px] !z-10" />
        <Image
          src="/images/about/headerBackground.png"
          alt="headerBackground"
          priority
          width={1920}
          height={800}
          className="absolute top-[0px] h-full min-[500px]:block hidden object-cover"
        />
        <Image
          src="/images/about/headerBackgroundMobile.png"
          alt="headerBackground"
          priority
          width={768}
          height={700}
          quality={100}
          className="absolute top-[0px] h-full block min-[500px]:hidden object-cover"
        />
        <div
          className="
            absolute
            inline-flex
            flex-col
            md:gap-[40px]
            gap-8
            xl:max-w-[1100px]
            lg:max-w-[900px]
            md:max-w-[600px]
            max-w-[400px]
            items-center
            -translate-y-1/2
            top-1/2
            z-10
            mt-[55px]
          "
        >
          <div className="flex flex-col gap-5 px-5">
            <div
              className="
                [font-size:_clamp(20px,2vw,36px)]
                font-medium
                leading-[100%]
                -tracking-[1.08px]
              text-base-red
                text-center
              "
            >
              {ABOUT_MANUFACTURER}
            </div>
            <div
              className="
              text-center
              [font-size:_clamp(40px,5.5vw,102px)]
              font-semibold
              leading-[100%]
              md:-tracking-[4.08px]
              -tracking-[1.58px]
            "
            >
              {ABOUT_ILLUMINATING}
            </div>
          </div>

          <div className="flex gap-5 md:flex-row flex-col">
            <a href="/documents/presentation.pdf" target="_blank">
              <Button
                size="normal"
                externalStyle="!py-[12px] md:w-[260px] w-[220px]"
              >
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src="/images/downloadFileWhite.svg"
                    alt="downloadFileWhite"
                    priority
                    width={24}
                    height={24}
                  />
                  <p className="max-w-[160px] [font-size:_clamp(16px,1vw,16px)] font-semibold -tracking-[0.16px] text-left capitalize leading-[120%]">
                    {ABOUT_DOWNLOAD_PRESENTATION.split(/\r?\n|\r|\n/g).map(
                      (string) => (
                        <div key={string}>{string}</div>
                      )
                    )}
                  </p>
                </div>
              </Button>
            </a>
            <Button
              size="normal"
              style="outline"
              externalStyle="md:!py-[8px] !py-[12px] md:w-[260px] w-[220px]"
              onClick={onVideoOpen}
            >
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/images/video.svg"
                  alt="downloadFileWhite"
                  priority
                  width={24}
                  height={24}
                />
                <div className="max-w-[160px] [font-size:_clamp(16px,1vw,16px)] font-semibold -tracking-[0.16px] text-left capitalize leading-[120%]">
                  {ABOUT_WATCH_VIDEO.split(/\r?\n|\r|\n/g).map((string) => (
                    <div key={string}>{string}</div>
                  ))}
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
