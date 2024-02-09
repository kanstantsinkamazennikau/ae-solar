"use client";

import LinkWithArrow from "@/app/[locale]/components/common/LinkWithArrow";
import PanelsFlowerIcon from "@/app/[locale]/products/components/PanelsFlowerIcon";
import {
  PRODUCT_DESCRIPTIONS,
  PRODUCT_PANELS_IMAGES,
  PRODUCT_SELECTOR_IMAGES,
} from "@/app/[locale]/products/constants";
import { PRODUCT_INTRO_LEARN_MORE } from "@/app/[locale]/utils/constants";
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PanelsFlower() {
  const sliderRef = useRef<Splide>(null);
  const [panel, setPanel] = useState("Aurora");
  const [autoplay, setAutoPlay] = useState(false);
  const sliderId = PRODUCT_PANELS_IMAGES.indexOf(panel);

  const onMouseEnter = () => {
    setAutoPlay(true);
  };

  const onMouseLeave = () => {
    setAutoPlay(false);
  };

  const onClick = (panel: string) => {
    setPanel(panel);
  };

  const options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    pagination: false,
    arrows: false,
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.go(sliderId);
    }
  }, [sliderId]);

  return (
    <div className="flex items-center flex-col">
      <div className="relative flex justify-center xl:h-[960px] md:h-[860px] min-[560px]:h-[650px] h-[500px] overflow-hidden w-full">
        <Image
          src={`/images/products/solarSystem.svg`}
          alt="selector"
          priority
          width={1520}
          height={426}
          className="absolute bottom-0 scale-125"
        />
        {/* SELECTOR */}
        <div className="relative w-full xl:bottom-[250px] md:bottom-[140px] min-[560px]:bottom-[100px] bottom-[60px]">
          <div
            className="
              absolute
              md:w-[660px]
              md:h-[660px]
              min-[560px]:w-[510px]
              min-[560px]:h-[566px]
              w-[360px]
              h-[380px]
              -bottom-5
              left-1/2
              -translate-x-1/2
              z-10
            "
          >
            {PRODUCT_SELECTOR_IMAGES.map((product) => (
              <PanelsFlowerIcon
                chosenPanel={panel}
                container={product.container}
                icon={product.icon}
                onClick={onClick}
                panel={product.panel}
                position={product.position}
                key={product.panel}
              />
            ))}
          </div>
          <div
            className="
              absolute
              bottom-0
              md:left-[calc(50%+24px)]
              min-[560px]:left-[calc(50%+18px)]
              left-[calc(50%+13px)]
              -translate-x-1/2
              md:w-[606px]
              md:h-[606px]
              min-[560px]:h-[450px]
              min-[560px]:w-[450px]
              h-[310px]
              w-[310px]
              overflow-hidden
              flex
              justify-center items-center
            "
          >
            <Image
              src={`/images/products/selector1.svg`}
              alt="selector"
              priority
              width={606}
              height={606}
              className="absolute"
            />
            <video
              width="600"
              height="600"
              loop
              autoPlay
              muted
              className="
                md:w-[475px]
                md:h-[548px]
                min-[560px]:h-[406px]
                min-[560px]:w-[353px]
                h-[279px]
                w-[242px]
                object-cover
                relative
                md:-left-[25px]
                min-[560px]:-left-[18px]
                -left-[13px]
                [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]
              "
            >
              <source src="/images/products/shine.mp4" type="video/mp4" />
            </video>
          </div>

          <Splide
            aria-label="solar panels"
            options={options}
            className="        
              !absolute
              md:bottom-[100px]
              min-[560px]:bottom-[75px]
              bottom-[55px]
              left-1/2
              -translate-x-1/2
              w-[220px]
              min-[560px]:w-auto
            "
            ref={sliderRef}
          >
            {PRODUCT_PANELS_IMAGES.map((image) => (
              <SplideSlide key={image} className="flex justify-center">
                <Image
                  src={`/images/productIntro/${image}.png`}
                  alt="Aurora"
                  priority
                  width={400}
                  height={480}
                  className="
                    [clip-path:polygon(0_0,_100%_0,100%_91%,80%_100%,20%_100%,0_91%)]
                    md:w-[400px]
                    md:h-[480px]
                    min-[560px]:w-[300px]
                    min-[560px]:h-[360px]
                    w-[280px]
                    h-[220px]
                  "
                />
              </SplideSlide>
            ))}
          </Splide>

          <div
            className="
              opacity-95
              bg-black
              absolute
              left-1/2
              -translate-x-1/2
              md:!-bottom-[34px]
              md:!h-[170px]
              md:!w-[380px]
              min-[560px]:!-bottom-[24px]
              min-[560px]:!h-[131px]
              min-[560px]:!w-[300px]
              !-bottom-[13px]
              !h-[83px]
              !w-[200px]
              [clip-path:polygon(100%_0,0_0,50%_65%)]
              fade-strip-bottom
              min-[560px]:blur-[50px]
              blur-[35px]
              !z-0
            "
          />

          {/* DESCRIPTION */}
          <div
            className="
              absolute
              min-[560px]:bottom-[50px]
              bottom-[25px]
              md:max-w-[440px]
              min-[560px]:max-w-[300px]
              max-w-[190px]
              w-full
              left-1/2
              -translate-x-1/2
              overflow-hidden
              z-10
            "
          >
            <div
              className="
                md:px-5
                md:py-4
                min-[560px]:px-3
                min-[560px]:py-2
                px-2
                py-2
                flex
                flex-col
                gap-2
                relative
                bottom-0
                border
                border-solid
                border-[#2D2D2D]
                backdrop-blur-[10px]
                w-full
              "
            >
              <div className="flex gap-3 items-end">
                <Image
                  src={`/images/models/${panel}.svg`}
                  alt="glow"
                  priority
                  width={32}
                  height={32}
                  className="
                    min-[560px]:w-[32px]
                    min-[560px]:h-[32px]
                    h-6
                    w-6
                  "
                />
                <span className="min-[560px]:[font-size:_clamp(24px,2vw,36px)] text-sm leading-[100%] -tracking-[0.36px] font-semibold">
                  {panel}
                </span>
              </div>
              <div className="flex flex-col min-[560px]:gap-5 gap-2 self-end max-w-[356px] w-full">
                <div className="[font-size:_clamp(10px,1vw,16px)] font-normal font-walsheim">
                  {
                    PRODUCT_DESCRIPTIONS[
                      panel as keyof typeof PRODUCT_DESCRIPTIONS
                    ]
                  }
                </div>
                <div className="flex">
                  <LinkWithArrow
                    label={PRODUCT_INTRO_LEARN_MORE}
                    href={`/product/${panel}`}
                    externalStyle="[font-size:_clamp(10px,1vw,16px)!important]"
                  />
                </div>
              </div>
              <Image
                src="/images/awards/dividerBig.svg"
                alt="dividerBig"
                width={200}
                height={200}
                className="absolute -bottom-[1px] -left-[1px] top-0 rotate-180"
              />
              <Image
                src="/images/awards/dividerBig.svg"
                alt="dividerBig"
                width={200}
                height={200}
                className="absolute -bottom-[1px] -right-[1px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
