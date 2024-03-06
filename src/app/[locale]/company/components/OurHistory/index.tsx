"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import {
  ABOUT_IN_NUMBERS,
  ABOUT_OUR_HISTORY,
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

const frameIndex = { frame: 0 };
const history = [
  {
    year: 2003,
    event:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels",
  },
  {
    year: 2009,
    event: "250 MW/year automated PV modules manufacturing line was installed",
  },
  {
    year: 2010,
    event:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels",
  },
  {
    year: 2011,
    event:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels",
  },
  {
    year: 2012,
    event: "Semiconductor photovoltaic cells convert",
  },
  {
    year: 2013,
    event:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels",
  },
  {
    year: 2023,
    event:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels",
  },
];
const numFrames = history.length;

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
  const renderText = useCallback(() => {
    setScrollFrame(frameIndex.frame);
  }, []);

  useEffect(() => {
    if (!container.current) return;
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    let mm = gsap.matchMedia();

    mm.add(
      {
        isWideScreen: "(min-width: 2560px)",
        isDesktop: "(min-width: 768px) and (max-width: 2559px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        //@ts-ignore
        let { isDesktop, isMobile } = context.conditions;
        gsap.context(() => {
          gsap
            .timeline({
              onUpdate: renderText,
              scrollTrigger: {
                onUpdate: (self) => {
                  setScrollDirection(self.direction);
                },
                trigger: "#history",
                start: scrollTriggerPositionFromResolution(isDesktop, isMobile),
                pin: true,
                end: "+=600%",
                scrub: 1,
              },
            })
            .to(
              frameIndex,
              {
                frame: numFrames - 1,
                snap: "frame",
                ease: "none",
                duration: 1,
              },
              0
            );
        });
      }
    );

    return () => {
      ScrollTrigger.refresh();
      mm.revert();
    };
  }, [renderText]);

  useEffect(() => {
    if (scrollDirection === 1) {
      if (scrollFrame > activeStepIndex) {
        setActiveStepIndex(activeStepIndex + 1);
      }
    } else {
      if (scrollFrame < activeStepIndex && activeStepIndex !== 0) {
        setActiveStepIndex(activeStepIndex - 1);
      }
    }
  }, [activeStepIndex, scrollDirection, scrollFrame]);

  return (
    <div className="flex flex-col justify-center items-center">
      <BasicWidthContainer>
        <div id="history">
          <TwoTierHeading
            tierOneHeading={ABOUT_OUR_HISTORY}
            tierTwoHeading={ABOUT_IN_NUMBERS}
            align="left"
            reverseColor
            marginBottomNone
            externalStyle="[font-size:_clamp(32px,6vw,96px)!important]"
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
            <div className="ourHistoryDivider w-[1px] h-full absolute -top-[3px] md:left-[32%] left-[20%]" />
            {history.map(({ year, event }, index) => {
              const isActive = activeStepIndex === index;
              const opacityValue = Math.abs(activeStepIndex - index) || 1;

              return (
                <div
                  key={year}
                  className={`
                    flex
                    mb-6
                    w-full
                    transition-[color]
                    duration-300
                    relative
                    ${isActive ? "text-white" : "text-dark-gray-900"}
                  `}
                  style={{ opacity: 1 / opacityValue }}
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
                      ${isActive ? "block" : "hidden"}
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
                      
                      ${
                        isActive
                          ? "[font-size:_clamp(20px,2vw,24px)] animate-ourHistoryFadeIn"
                          : "[font-size:_clamp(10px,2vw,16px)]"
                      }
                      leading-[150%]
                    `}
                  >
                    {event}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
