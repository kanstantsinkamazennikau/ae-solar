"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import LinkWithArrow from "@/app/[locale]/components/common/LinkWithArrow";
import SubNavigation from "@/app/[locale]/components/common/Navigation/SubNavigation";
import { ModelContext } from "@/app/[locale]/context/modelContext";
import { StickyNavigationContext } from "@/app/[locale]/context/stickyNavigationContext";
import {
  PRODUCT_INTRO_CALCULATE_YOUR_MODEL,
  PRODUCT_INTRO_HIGH_QUALITY_SP,
  PRODUCT_INTRO_LEARN_MORE,
  PRODUCT_INTRO_PANELS,
  PRODUCT_INTRO_PANELS_IMAGES,
  PRODUCT_INTRO_PANELS_MAPPING,
  PRODUCT_INTRO_THE_NEXT_LEVEL_OF,
} from "@/app/[locale]/utils/constants";
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useContext, useEffect, useRef } from "react";

export default function ProductIntro() {
  const { model } = useContext(ModelContext);
  const { sticky, setSticky } = useContext(StickyNavigationContext);
  const modelStats = PRODUCT_INTRO_PANELS[model].stats;
  const modelStatsKeys = Object.keys(modelStats);
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
    arrows: false,
    drag: true,
    dragAngleThreshold: 0,
  };

  const handleClick = () => {
    router.push(`/${locale}/calculate`);
  };

  const handleScroll = useCallback(() => {
    const { scrollTop } = document.documentElement;
    if (!ref.current) return;
    scrollTop > ref.current.offsetTop - 95 ? setSticky(true) : setSticky(false);
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
    <div className="flex flex-col items-center xl:mb-[280px] lg:mb-[180px] md:mb-[100px] mb-[80px] w-full z-30 relative">
      <div
        className="
          w-full
          h-auto
          bg-[url('/images/productIntro/back.svg')]
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
        <div className="font-bold leading-[1.2] [font-size:_clamp(36px,4vw,64px)] text-center px-5">
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
            className="rotate-180 mx-auto"
          />
        </div>
        <BasicWidthContainer styles="flex lg:gap-11 gap-6 justify-center md:flex-row flex-col relative self-center">
          {/* INFO */}
          <div
            className="
              md:absolute
              md:left-0
              md:top-1/2
              flex-1
              md:-translate-y-1/2
              flex
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
            <div className="font-walsheim text-lg leading-[1.5] font-medium [font-size:_clamp(16px,2vw,18px)] max-w-[328px] md:text-left text-center">
              {modelInfo.text}
            </div>
            <LinkWithArrow label={PRODUCT_INTRO_LEARN_MORE} href="" />
          </div>
          {/* IMG */}
          <Splide
            aria-label="solar panels"
            options={options}
            className="md:h-[400px] lg:h-[520px] xl:h-[600px] 2xl:h-[730px] h-auto w-full flex justify-center flex-1"
            ref={sliderRef}
          >
            {PRODUCT_INTRO_PANELS_IMAGES.map((image) => (
              <SplideSlide key={image} className="flex justify-center">
                <Image
                  alt={model}
                  src={`/images/productIntro/${image}.png`}
                  width={563}
                  height={730}
                  quality={100}
                  priority={true}
                  className="2xl:object-cover object-contain object-bottom md:h-full h-[270px]"
                />
              </SplideSlide>
            ))}
          </Splide>
          <div
            className="
              flex-1
              gap-3
              md:gap-4
              xl:gap-11
              flex-col
              justify-center
              absolute
              md:px-0
              md:py-0
              px-5
              py-6
              bottom-0
              left-0
              md:right-0
              md:left-auto
              md:top-1/2
              md:-translate-y-1/2
              md:pr-5
              [&>*:last-child>div:last-child]:hidden
            "
          >
            {modelStatsKeys.map((key) => (
              <div key={key}>
                <div className="leading-[1.3] font-semibold [font-size:_clamp(24px,3vw,48px)]">
                  {modelStats[key as keyof typeof modelStats]}
                </div>
                <div className="text-lg leading-[1.7] font-bold font-walsheim text-dark-gray-900 [font-size:_clamp(12px,1.5vw,18px)]">
                  {PRODUCT_INTRO_PANELS_MAPPING[key as keyof typeof modelStats]}
                </div>
                <div className="bg-white opacity-20 h-0.5 mt-3 md:hidden block" />
              </div>
            ))}
          </div>
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
      {!sticky && (
        <div className="w-full z-30 bottom-0 left-0 md:hidden">
          <SubNavigation isProductionIntroBlock />
        </div>
      )}
      <div ref={ref}></div>
      <Button onClick={handleClick}>
        {PRODUCT_INTRO_CALCULATE_YOUR_MODEL}
      </Button>
    </div>
  );
}
