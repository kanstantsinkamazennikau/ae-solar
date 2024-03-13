"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { useIntersection } from "@/app/[locale]/hooks/useIntersection";
import { ProductsPanelProps } from "@/app/[locale]/products/[id]/components/ProductsPanel/types";
import { PRODUCTS_SEQUENCE_ANIMATION_TEXT_NEPTUNE } from "@/app/[locale]/products/[id]/constants";
import {
  SEQUENCE_ANIMATION_TEXT,
  TECH_INFO_A_CLOSE_LOOK_AT,
  TECH_INFO_THE_HIDDEN_LAYERS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LayersAnimation({ id }: ProductsPanelProps) {
  const [textArray, setTextArray] = useState(SEQUENCE_ANIMATION_TEXT);
  const [stopIntersecting, setStopIntersecting] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const { intersecting, ref } = useIntersection(0.2);

  useEffect(() => {
    if (id === "Neptune")
      setTextArray((prevState) => [
        ...prevState.slice(0, 5),
        PRODUCTS_SEQUENCE_ANIMATION_TEXT_NEPTUNE,
        ...prevState.slice(5),
      ]);

    return () => setTextArray(SEQUENCE_ANIMATION_TEXT);
  }, [id]);

  useEffect(() => {
    intersecting && setStartAnimation(true);
  }, [intersecting]);

  return (
    <div id="construction" className="scroll-mt-[140px] mb-20">
      <BasicWidthContainer>
        <TwoTierHeading
          tierOneHeading={TECH_INFO_THE_HIDDEN_LAYERS}
          tierTwoHeading={TECH_INFO_A_CLOSE_LOOK_AT}
          align="right"
          externalStyle="z-10"
          size="default"
        />
        <div className="flex justify-center items-center min-[600px]:flex-row flex-col-reverse">
          <div className="min-[600px]:flex flex-col gap-2 grid min-[480px]:grid-cols-2 grid-cols-1 max-[600px]:mt-10">
            {textArray
              .map(({ title, description }) => (
                <div
                  key={title}
                  className={`
                  first:pt-0
                  last:pb-0
                  transition-all
                  duration-500
                  xl:w-[430px]
                  min-[920px]:w-[330px]
                  min-[600px]:w-[230px]
                `}
                >
                  <div className="flex items-center">
                    <div
                      className={`
                      font-walsheim
                      [font-size:_clamp(18px,2vw,32px)]
                      leading-[120%]
                      font-medium
                    `}
                    >
                      {title}
                    </div>
                  </div>
                  <div
                    className={`
                    font-walsheim
                    [font-size:_clamp(12px,2vw,16px)]
                    leading-[150%]
                    font-medium
                    text-dark-gray-900
                  `}
                  >
                    {description}
                  </div>
                </div>
              ))
              .reverse()}
          </div>
          <div className="relative overflow-hidden">
            {new Array(textArray.length).fill(null).map((_, index) => {
              if (index === 0) {
                return (
                  <div ref={ref} key={index}>
                    <Image
                      src={`/images/sequence/${id}/${index}.png`}
                      alt={index.toString()}
                      width={1920}
                      height={1080}
                      priority
                      onTransitionEnd={() => setStopIntersecting(true)}
                      className={`
                        relative ${
                          !startAnimation && !stopIntersecting
                            ? "translate-y-full opacity-50"
                            : "translate-y-0 opacity-100"
                        }
                        transition-all
                        duration-[1s]
                        scale-[1.35]
                      `}
                    />
                  </div>
                );
              }
              return (
                <Image
                  key={index}
                  src={`/images/sequence/${id}/${index}.png`}
                  alt={index.toString()}
                  width={1920}
                  height={1080}
                  priority
                  className={`
                    absolute
                    ${
                      !startAnimation && !stopIntersecting
                        ? "-bottom-full opacity-50"
                        : "bottom-0 opacity-100"
                    }
                    transition-all
                    duration-[2s]
                    scale-[1.35]
                  `}
                  style={{ transitionDelay: `${index * 200}ms`, zIndex: index }}
                />
              );
            })}
            {/* <div ref={ref}>
              <Image
                src={`/images/sequence/${id}/frame.png`}
                alt="frame"
                width={920}
                height={640}
                priority
                className={`
                  relative ${
                    !startAnimation && !stopIntersecting
                      ? "translate-y-full opacity-50"
                      : "translate-y-0 opacity-100"
                  }
                  transition-all
                  duration-[2s]
                `}
              />
            </div>

            <Image
              src={`/images/sequence/${id}/backsheet.png`}
              alt="backsheet"
              width={920}
              height={640}
              priority
              className={`
                absolute
                ${
                  !startAnimation && !stopIntersecting
                    ? "-bottom-full opacity-50"
                    : "bottom-0 opacity-100"
                }
                transition-all
                duration-[2s]
                delay-300
              `}
            />
            <Image
              src={`/images/sequence/${id}/front.png`}
              alt="front"
              width={920}
              height={640}
              priority
              onTransitionEnd={() => setStopIntersecting(true)}
              className={`
                absolute
                ${
                  !startAnimation && !stopIntersecting
                    ? "-bottom-full opacity-50"
                    : "bottom-0 opacity-100"
                }
                transition-all
                duration-[2s]
                delay-700
              `}
            />
            <div className="fade-strip-bottom max-lg:!h-[200px] max-md:!h-[100px]" /> */}
            <div className="fade-strip-bottom !h-[150px]" />
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
