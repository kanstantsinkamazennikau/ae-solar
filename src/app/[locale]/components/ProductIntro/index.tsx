//@ts-nocheck
"use client";

import ProductSlogan from "@/app/[locale]/components/ProductIntro/ProductSlogan";
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
  PRODUCT_INTRO_PANELS_MAPPING,
  PRODUCT_INTRO_THE_NEXT_LEVEL_OF,
} from "@/app/[locale]/utils/constants";
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useContext, useEffect, useRef } from "react";

export default function ProductIntro() {
  const { model, setModel } = useContext(ModelContext);
  const { sticky, setSticky } = useContext(StickyNavigationContext);

  const modelInfo = PRODUCT_INTRO_PANELS[model].info;
  const ref = useRef<HTMLDivElement | null>(null);
  const locale = useParams()?.locale;
  const router = useRouter();
  const sliderRef = useRef<Splide>(null);
  const sliderId = PRODUCT_INTRO_PANELS_IMAGES.indexOf(model);

  // const options = {
  //   type: "loop",
  //   perPage: 1,
  //   perMove: 1,
  //   pagination: false,
  //   arrows: false,
  //   drag: false,
  //   dragAngleThreshold: 0,
  // };

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
    interval: 4000,
  };

  const handleClick = () => {
    router.push(`/${locale}/calculate`);
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
    <div className="flex flex-col items-center xl:mb-[180px] lg:mb-[140px] md:mb-[100px] mb-[80px] w-full z-30 relative">
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
            <div className="font-walsheim text-lg leading-[1.5] font-medium [font-size:_clamp(12px,1.5vw,18px)] xl:max-w-[328px] max-w-[300px] md:text-left text-center">
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
            onMove={(splide) => {
              setModel(PRODUCT_INTRO_PANELS_IMAGES[splide.index] as Model);
            }}
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
