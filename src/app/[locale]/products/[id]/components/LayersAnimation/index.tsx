"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { useIntersection } from "@/app/[locale]/hooks/useIntersection";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import {
  Layers,
  ProductsPanelProps,
} from "@/app/[locale]/products/[id]/components/ProductsPanel/types";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Trans } from "react-i18next";

export default function LayersAnimation({ id }: ProductsPanelProps) {
  const [stopIntersecting, setStopIntersecting] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const { intersecting, ref } = useIntersection(0.2);
  const { translation } = useContext(i18nProviderContext);

  const layers = translation.sequence as unknown as Layers[];

  useEffect(() => {
    intersecting && setStartAnimation(true);
  }, [intersecting]);

  return (
    <div id="construction" className="scroll-mt-[140px] mb-20">
      <BasicWidthContainer>
        <TwoTierHeading
          tierOneHeading={
            <Trans
              components={{
                red: <p className="text-[#B30006]" />,
              }}
            >
              {translation.hiddenLayers}
            </Trans>
          }
          reverseColor
          align="right"
          externalStyle="z-10"
          size="default"
        />
        <div className="flex justify-center items-center min-[600px]:flex-row flex-col-reverse">
          <div className="min-[600px]:flex flex-col gap-2 grid min-[480px]:grid-cols-2 grid-cols-1 max-[600px]:mt-10">
            {layers
              ?.map(({ sequenceTitle, sequenceDescription }) => (
                <div
                  key={sequenceTitle}
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
                      {sequenceTitle}
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
                    {sequenceDescription}
                  </div>
                </div>
              ))
              .reverse()}
          </div>
          <div className="relative overflow-hidden">
            {new Array(layers?.length).fill(null).map((_, index) => {
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
            <div className="fade-strip-bottom !h-[150px]" />
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
