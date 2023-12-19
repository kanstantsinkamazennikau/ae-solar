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
  PRODUCT_INTRO_PANELS_MAPPING,
  PRODUCT_INTRO_THE_NEXT_LEVEL_OF,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useCallback, useContext, useEffect, useRef } from "react";

export default function ProductIntro() {
  const { model } = useContext(ModelContext);
  const { sticky, setSticky } = useContext(StickyNavigationContext);
  const modelStats = PRODUCT_INTRO_PANELS[model].stats;
  const modelStatsKeys = Object.keys(modelStats);
  const modelInfo = PRODUCT_INTRO_PANELS[model].info;
  const ref = useRef<HTMLDivElement | null>(null);

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

  return (
    <div className="flex flex-col items-center mb-[280px] w-full">
      <div className="font-bold leading-[1.2] text-[64px] text-center">
        <div>{PRODUCT_INTRO_THE_NEXT_LEVEL_OF}</div>
        <div className="text-base-red">{PRODUCT_INTRO_HIGH_QUALITY_SP}</div>
      </div>
      <div className="w-full h-[640px] bg-[url('/images/productIntro/mask.svg')] bg-center bg-cover justify-end flex mb-11 flex-col">
        <BasicWidthContainer styles="flex gap-11 self-center">
          {/* STATS */}
          <div className="flex-1 gap-11 flex-col flex justify-center">
            {modelStatsKeys.map((key) => (
              <div key={key}>
                <div className="text-5xl leading-[1.3] font-semibold">
                  {modelStats[key as keyof typeof modelStats]}
                </div>
                <div className="text-lg leading-[1.7] font-bold font-walsheim text-dark-gray-900">
                  {PRODUCT_INTRO_PANELS_MAPPING[key as keyof typeof modelStats]}
                </div>
              </div>
            ))}
          </div>
          {/* IMG */}
          <div className="flex-grow-2 flex-shrink-1">
            <Image
              alt={model}
              src={`/images/productIntro/${model}.png`}
              width={638}
              height={683}
              className="object-contain object-bottom h-full"
            />
          </div>
          {/* INFO */}

          <div className="flex-1 flex flex-col gap-8 items-start justify-center">
            <div className="flex gap-3">
              <Image
                alt={model}
                src={`/images/models/${model}.svg`}
                width={48}
                height={48}
              />
              <span className="font-bold leading-[1.5] text-[64px] -tracking-[0.64]">
                {model}
              </span>
            </div>
            <div className="font-walsheim text-lg leading-[1.5] font-medium">
              {modelInfo.text}
            </div>
            <LinkWithArrow label={PRODUCT_INTRO_LEARN_MORE} href="" />
          </div>
        </BasicWidthContainer>
        <div ref={ref}></div>
        {!sticky && (
          <div className="absolute w-full z-30">
            <SubNavigation />
          </div>
        )}
      </div>
      <Button onClick={() => console.log("")}>
        {PRODUCT_INTRO_CALCULATE_YOUR_MODEL}
      </Button>
    </div>
  );
}
