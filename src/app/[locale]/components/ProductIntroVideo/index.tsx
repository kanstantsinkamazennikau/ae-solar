//@ts-nocheck

"use client";

import ProductSlogan from "@/app/[locale]/components/ProductIntroVideo/ProductSlogan";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import LinkWithArrow from "@/app/[locale]/components/common/LinkWithArrow";
import SubNavigation from "@/app/[locale]/components/common/Navigation/SubNavigation";
import { Model, ModelContext } from "@/app/[locale]/context/modelContext";
import { StickyNavigationContext } from "@/app/[locale]/context/stickyNavigationContext";
import {
  PRODUCT_INTRO_CALCULATE_YOUR_MODEL,
  PRODUCT_INTRO_HIGH_QUALITY_SP,
  PRODUCT_INTRO_LEARN_MORE,
  PRODUCT_INTRO_PANELS,
  PRODUCT_INTRO_PANELS_IMAGES,
  PRODUCT_INTRO_THE_NEXT_LEVEL_OF,
} from "@/app/[locale]/utils/constants";
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Video } from "@splidejs/splide-extension-video";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useContext, useEffect, useRef } from "react";

export default function ProductIntroVideo() {
  const { model, setModel } = useContext(ModelContext);
  const { sticky, setSticky } = useContext(StickyNavigationContext);
  const modelInfo = PRODUCT_INTRO_PANELS[model].info;
  const ref = useRef<HTMLDivElement | null>(null);
  const locale = useParams()?.locale;
  const router = useRouter();
  const sliderRef = useRef<Splide>(null);
  const sliderId = PRODUCT_INTRO_PANELS_IMAGES.indexOf(model);

  const options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    pagination: false,
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    arrows: false,
    drag: false,
    interval: 3000,
  };

  const handleClick = () => {
    router.push(`/products`);
  };

  const handleScroll = useCallback(() => {
    const { scrollTop } = document.documentElement;
    if (!ref.current) return;
    scrollTop > window.scrollY + ref.current.getBoundingClientRect().top - 95
      ? setSticky(true)
      : setSticky(false);
  }, [setSticky]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.go(sliderId);
    }
  }, [sliderId]);

  return (
    <div
      className="
        flex
        flex-col
        items-center
        xl:mb-[180px]
        lg:mb-[140px]
        md:mb-[100px]
        mb-[80px]
        w-full
        z-30
        relative
        overflow-x-hidden
        overflow-y-[unset]
      "
    >
      <div
        className="
          w-full
          h-auto
          bg-bottom
          md:bg-contain
          bg-[length:600px]
          bg-no-repeat
          flex
          md:mb-11
          mb-0
          flex-col
          relative
        "
      >
        <div className="font-bold leading-[1.2] [font-size:_clamp(36px,4vw,64px)] text-center px-5 xl:-mb-20 md:-mb-10">
          <div>{PRODUCT_INTRO_THE_NEXT_LEVEL_OF}</div>
          <div className="text-base-red mb-6">
            {PRODUCT_INTRO_HIGH_QUALITY_SP}
          </div>
          <Image
            src={`/images/glowFull.png`}
            alt="glow"
            priority
            width={1320}
            height={60}
            className="rotate-180 mx-auto relative z-20 pointer-events-none"
          />
        </div>
        {/* MOBILE */}
        <div
          className="
            md:hidden
            flex
            flex-col
            gap-3
            md:gap-4
            xl:gap-8
            md:items-start
            md:justify-center
            items-center
            relative
            z-10
            mb-5
          "
        >
          <div className="flex gap-3 items-center">
            <Image
              alt={model}
              src={`/images/models/${model}.svg`}
              width={48}
              height={48}
              className="lg:w-[48px] lg:h-[48px] md:w-[36px] md:h-[36px] w-[24px] h-[24px] object-fill"
            />
            <span className="font-bold leading-none [font-size:_clamp(24px,4vw,64px)] -tracking-[0.64]">
              {model}
            </span>
          </div>
          <div
            className="
              min-h-[100px]
              font-walsheim
              text-lg
              leading-[1.5]
              font-medium
              [font-size:_clamp(12px,1.5vw,18px)]
              xl:max-w-[328px]
              max-w-[300px]
              md:text-left
              text-center
            "
          >
            {modelInfo.text}
          </div>
          <LinkWithArrow
            label={PRODUCT_INTRO_LEARN_MORE}
            href={`/products/${model}`}
          />
        </div>
        <div
          className="
            2xl:h-[800px]
            xl:h-[650px]
            md:h-[500px]
            h-[300px]
          "
        >
          <Splide
            hasTrack={false}
            aria-label="solar panels"
            options={options}
            className="h-auto w-full flex justify-center mx-auto flex-1 absolute bottom-0 z-10"
            ref={sliderRef}
            onMove={(splide) => {
              setModel(PRODUCT_INTRO_PANELS_IMAGES[splide.index] as Model);
            }}
            extensions={{ Video }}
          >
            {/* CONTROL */}
            {/* <div className="custom-wrapper"> */}
            <button
              className="
                splide__toggle
                absolute
                xl:top-10
                md:top-5
                -top-2
                z-20
                bg-black
                py-2
                px-3
                rounded-full
                border-2
                border-solid
                border-base-red
              "
            >
              <span className="splide__toggle__play flex items-center gap-[2px]">
                <Image
                  src={`/images/play.svg`}
                  alt="play"
                  priority
                  width={20}
                  height={20}
                  className="inline relative -top-[1px]"
                />
                Play Slider
              </span>
              <span className="splide__toggle__pause flex items-center gap-[2px]">
                <Image
                  src={`/images/pause.svg`}
                  alt="play"
                  priority
                  width={20}
                  height={20}
                  className="inline relative -top-[1px]"
                />
                Pause Slider
              </span>
            </button>
            {/* </button> */}
            {/* <div className="splide__progress">
                <div className="splide__progress__bar" />
              </div> */}
            <SplideTrack>
              {PRODUCT_INTRO_PANELS_IMAGES.map((video) => (
                <SplideSlide key={video} className="flex justify-center">
                  <video
                    width="1320"
                    height="800"
                    muted
                    autoPlay
                    key={model}
                    className="
                      w-[1920px]
                      2xl:h-[800px]
                      xl:h-[650px]
                      md:h-[500px]
                      h-[300px]
                      object-cover
                    "
                  >
                    <source
                      src={`/videos/slider/${video}.mp4`}
                      type="video/mp4"
                    />
                  </video>
                </SplideSlide>
              ))}
            </SplideTrack>
            {/* </div> */}
          </Splide>
        </div>

        <BasicWidthContainer
          styles="
            flex 
            justify-center 
            md:flex-row
            flex-col 
            relative 
            self-center 
            2xl:h-[700px]
            xl:h-[550px]
            md:h-[500px]
            !absolute
            bottom-0
          "
        >
          {/* INFO */}
          <div
            className="
              md:absolute
              md:left-0
              md:top-1/2
              flex-1
              md:-translate-y-1/2
              md:flex
              hidden
              flex-col
              gap-3
              md:gap-4
              xl:gap-8
              md:items-start
              md:justify-center
              items-center
              pl-5
              z-10
            "
          >
            <div className="flex gap-3 items-center">
              <Image
                alt={model}
                src={`/images/models/${model}.svg`}
                width={48}
                height={48}
                className="lg:w-[48px] lg:h-[48px] md:w-[36px] md:h-[36px] w-[24px] h-[24px] object-fill"
              />
              <span className="font-bold leading-none [font-size:_clamp(24px,4vw,64px)] -tracking-[0.64]">
                {model}
              </span>
            </div>
            <div
              className="
                font-walsheim
                text-lg
                leading-[1.5]
                font-medium
                [font-size:_clamp(12px,1.5vw,18px)]
                xl:max-w-[328px]
                max-w-[300px]
                md:text-left
                text-center
              "
            >
              {modelInfo.text}
            </div>
            <LinkWithArrow
              label={PRODUCT_INTRO_LEARN_MORE}
              href={`/products/${model}`}
            />
          </div>
          {/* IMG */}

          <ProductSlogan model={model} />
        </BasicWidthContainer>

        {!sticky && (
          <div className="absolute w-full z-30 bottom-0 left-0 md:block">
            <SubNavigation />
          </div>
        )}
      </div>
      <Image
        src={`/images/glowFull.png`}
        alt="glow"
        priority
        width={1320}
        height={60}
        className="md:hidden rotate-180"
      />
      {/* {!sticky && ( */}
      {/* MOBILE NAVIGATION */}
      <div className="w-full z-30 bottom-0 left-0 md:hidden">
        <SubNavigation isProductionIntroBlock />
      </div>
      {/* )} */}
      <div ref={ref}></div>
      <Button onClick={handleClick}>
        {PRODUCT_INTRO_CALCULATE_YOUR_MODEL}
      </Button>
    </div>
  );
}
