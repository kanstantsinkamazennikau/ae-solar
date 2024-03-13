"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import {
  ABOUT_OUR_HISTORY,
  ABOUT_THROUGH,
  HISTORY_READ_FULL_STORY,
  TECH_INFO_READ_MORE,
} from "@/app/[locale]/utils/constants";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";
import parse from "html-react-parser";
import Button from "@/app/[locale]/components/common/Button";
import { ABOUT_HISTORY } from "@/app/[locale]/company/constants";
import Starfield from "@/app/[locale]/products/components/StarField";

// const frameIndex = { frame: 0 };

// const numFrames = history.length;

const scrollTriggerPositionFromResolution = (
  isDesktop: boolean,
  isMobile: boolean
) => {
  if (isDesktop) return "top-=80px";
  if (isMobile) return "top-=80px";
  return "center center";
};

export default function OurHistory() {
  const [scrollDirection, setScrollDirection] = useState(1);
  const [scrollFrame, setScrollFrame] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const container = useRef(null);
  // const renderText = useCallback(() => {
  //   setScrollFrame(frameIndex.frame);
  // }, []);

  const [isOpenItem, setIsOpenItem] = useState(false);

  const onClick = () => {
    setIsOpenItem(true);
  };

  // useEffect(() => {
  //   if (!container.current) return;
  //   gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  //   let mm = gsap.matchMedia();

  //   mm.add(
  //     {
  //       isWideScreen: "(min-width: 2560px)",
  //       isDesktop: "(min-width: 768px) and (max-width: 2559px)",
  //       isMobile: "(max-width: 767px)",
  //     },
  //     (context) => {
  //       //@ts-ignore
  //       let { isDesktop, isMobile } = context.conditions;
  //       gsap.context(() => {
  //         gsap
  //           .timeline({
  //             onUpdate: renderText,
  //             scrollTrigger: {
  //               onUpdate: (self) => {
  //                 setScrollDirection(self.direction);
  //               },
  //               trigger: "#history",
  //               start: scrollTriggerPositionFromResolution(isDesktop, isMobile),
  //               pin: true,
  //               end: "+=600%",
  //               scrub: 1,
  //             },
  //           })
  //           .to(
  //             frameIndex,
  //             {
  //               frame: numFrames - 1,
  //               snap: "frame",
  //               ease: "none",
  //               duration: 1,
  //             },
  //             0
  //           );
  //       });
  //     }
  //   );

  //   return () => {
  //     ScrollTrigger.refresh();
  //     mm.revert();
  //   };
  // }, [renderText]);

  // useEffect(() => {
  //   if (scrollDirection === 1) {
  //     if (scrollFrame > activeStepIndex) {
  //       setActiveStepIndex(activeStepIndex + 1);
  //     }
  //   } else {
  //     if (scrollFrame < activeStepIndex && activeStepIndex !== 0) {
  //       setActiveStepIndex(activeStepIndex - 1);
  //     }
  //   }
  // }, [activeStepIndex, scrollDirection, scrollFrame]);

  return (
    <div className="flex flex-col justify-center items-center relative">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.02}
        backgroundColor="black"
        style="absolute h-full"
      />
      <BasicWidthContainer>
        <div id="history">
          <TwoTierHeading
            tierOneHeading={ABOUT_OUR_HISTORY}
            tierTwoHeading={ABOUT_THROUGH}
            align="center"
            reverseColor
            marginBottomNone
            externalStyle="
              [font-size:_clamp(32px,6vw,96px)]
              [&>*:last-child]:[font-size:_clamp(30px,4vw,64px)]
              [&>*:last-child]:font-medium
            "
          />
          <Image
            src={`/images/glowFull.png`}
            alt="glow"
            priority
            width={1320}
            height={60}
          />
          <div
            ref={container}
            className="relative py-[60px] w-full overflow-hidden"
          >
            <div className="ourHistoryDivider w-[1px] h-[calc(100%+100px)] absolute -top-[7px] md:left-[32%] left-[20%]" />
            {ABOUT_HISTORY.map(({ year, event }, index) => {
              // const isActive = activeStepIndex === index;
              // const opacityValue = Math.abs(activeStepIndex - index) || 1;

              return (
                <div
                  key={year}
                  className={`
                      flex
                      mb-6
                      w-full
                      relative
                      text-white
                    `}
                  // style={{ opacity: 1 / opacityValue }}
                >
                  <div
                    className={`
                      w-[7px]
                      h-[7px]
                      border
                      border-solid
                      border-base-red
                      rounded-full
                      absolute
                      top-[10px]
                      md:left-[calc(32%-3px)]
                      left-[calc(20%-3px)]
                      bg-black
                  
                    `}
                  />
                  <div
                    className="
                      md:w-[32%]
                      w-[20%]
                      text-end
                      pr-4
                      [font-size:_clamp(14px,2vw,32px)]
                      leading-[120%]
                    "
                  >
                    {year}
                  </div>

                  <div
                    className={`
                      md:w-[68%]
                      w-[80%]
                      pl-4
                      max-w-[450px]
                      [font-size:_clamp(12px,2vw,16px)]
                      leading-[150%]
                    `}
                  >
                    {parse(event)}
                  </div>
                </div>
              );
            })
              .reverse()
              .slice(0, isOpenItem ? 100 : 4)}
            {!isOpenItem && (
              <Button
                style="textOnly"
                externalStyle="!p-0 mx-auto mt-10"
                onClick={onClick}
              >
                <div
                  className={`text-base-red [font-size:_clamp(14px,1vw,16px)]`}
                >
                  {HISTORY_READ_FULL_STORY}
                </div>
                <Image
                  src="/images/techInfo/expand.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                  priority
                />
              </Button>
            )}
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
