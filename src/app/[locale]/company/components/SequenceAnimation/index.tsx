"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { SEQUENCE_ANIMATION_TEXT } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext, useState } from "react";
import { Trans } from "react-i18next";

const imagesArray = [
  "/images/sequence/home/1.png",
  "/images/sequence/home/2.png",
  "/images/sequence/home/3.png",
  "/images/sequence/home/4.png",
  "/images/sequence/home/5.png",
  "/images/sequence/home/6.png",
];
1;

export default function SequenceAnimation() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const { translation } = useContext(i18nProviderContext);

  return (
    <div
      className="
        overflow-hidden
        flex
        flex-col
        justify-center
        items-center
        lg:mb-[100px]
        md:mb-[60px]
        mb-[20px]
        px-5
      "
    >
      <BasicWidthContainer styles="max-md:!px-0">
        <div id="canvas">
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
            align="right"
            externalStyle="z-10"
            reverseColor
          />
          <div className="flex flex-col items-center ">
            <div className="flex items-center lg:-mt-[56px] w-full justify-between relative overflow-hidden">
              <div className="fade-strip-right !z-10 max-md:!w-24" />
              <div className="flex gap-5 max-w-1/3 xl:min-h-[490px] md:min-h-[440px] min-h-[390px] ml-[3px]">
                <div className="sequenceAnimationDivider !w-[1px] basis-[1px] shrink-0" />
                <div className="py-20 z-20">
                  {SEQUENCE_ANIMATION_TEXT.map(
                    ({ title, description }, index) => {
                      const isActive = activeStepIndex === index;
                      const opacityValue =
                        Math.abs(activeStepIndex - index) || 1;
                      return (
                        <div
                          key={title}
                          className={`
                          ${isActive ? "md:py-8 py-4" : ""}
                          first:pt-0
                          last:pb-0
                          transition-all
                          duration-500
                          cursor-pointer
                        `}
                          onClick={() => setActiveStepIndex(index)}
                        >
                          <div className="flex items-center">
                            <div
                              className={`
                              w-[7px]
                              h-[7px]
                              border
                              border-solid
                              border-base-red
                              rounded-full
                              absolute
                              left-0
                              bg-black
                              ${isActive ? "block" : "hidden"}
                            `}
                            />
                            <div
                              style={{ opacity: 1 / opacityValue }}
                              className={`
                              ${isActive ? "text-white" : "text-dark-gray-900"}
                              font-walsheim
                              [font-size:_clamp(18px,2vw,32px)]
                              leading-[120%]
                              font-medium
                            `}
                            >
                              {translation[title]}
                            </div>
                          </div>
                          <div
                            className={`
                            ${isActive ? "block" : "hidden"}
                            font-walsheim
                            [font-size:_clamp(12px,2vw,16px)]
                            leading-[150%]
                            font-medium
                            text-dark-gray-900
                          `}
                          >
                            {translation[description]}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="w-2/3 absolute -right-[20%] max-[920px]:-right-[55%] max-[640px]:scale-[2.25] max-[640px]:-right-[80%] max-[920px]:scale-[1.8] scale-110">
                {imagesArray.map((img, index) => (
                  <Image
                    key={img}
                    src={img}
                    alt={img}
                    // priority
                    width={880}
                    height={600}
                    quality={95}
                    style={{ zIndex: `${10 - index}` }}
                    className={`
                      object-cover
                      absolute
                      transition-all
                      duration-300
                      ${
                        activeStepIndex === index
                          ? "[transform:translateX(-22%)_translateY(-53%)]"
                          : "[transform:translateX(-10%)_translateY(-50%)]"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
