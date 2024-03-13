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
import parse from "html-react-parser";

const frameIndex = { frame: 0 };
const history = [
  {
    year: 2003,
    event:
      "AE Solar was founded in Königsbrunn, Germany as a family-owned PV systems installation company.",
  },
  {
    year: 2009,
    event:
      "50MW/year manual assembly mono/poly PV modules manufacturing was established",
  },
  {
    year: 2012,
    event: "Double glass and Bi-Facial PV modules manufacturing started",
  },
  {
    year: 2013,
    event:
      "150 MW/year semi-automated PV modules manufacturing line was installed",
  },
  {
    year: 2014,
    event: "Automated PV modules stringer soldering was implemented",
  },
  {
    year: 2016,
    event:
      "250 MW/year automated PV modules manufacturing line was installed;<br/> Shading Resistant Hot-spot free PV modules invented",
  },
  {
    year: 2017,
    event:
      "SNEC 2017 PV Power Expo Top 10 Highlights award;<br/> Shading Resistant Hot-spot free PV modules serial manufacturing started;<br/> 525 MW/year robotized full automated PV modules manufacturing line was installed",
  },
  {
    year: 2018,
    event: "PV magazine 2018 Top innovation award",
  },
  {
    year: 2019,
    event:
      "Inter Solar 2019 Photovoltaics award finalist;<br/> 1.5 GW/year PV modules manufacturing total capacity reached with 500 MW/year second fully automated and the biggest in Europe under one roof manufacturing established;<br/> AE Solar became member of United Nations Global Compact",
  },
  {
    year: 2020,
    event:
      "AE Solar presence and distributorship network reached more than 100+ countries",
  },
  {
    year: 2021,
    event:
      "Top pv brand award in Vietnam;<br/> Solar Future Awards 2021 Company of the Year;<br/> AE Solar has become the winner of the UN Global Compact Partnership for Sustainability Award 2021 - in Planet Category",
  },
  {
    year: 2022,
    event:
      "Top Renewable Energy;<br/> SMART TECHNOLOGY INNOVATION OF THE YEAR Solar Energy Innovation Excellence Awards",
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
    <div className="flex flex-col justify-center items-center">
      <BasicWidthContainer>
        <div id="history">
          <TwoTierHeading
            tierOneHeading={ABOUT_OUR_HISTORY}
            tierTwoHeading={ABOUT_IN_NUMBERS}
            align="left"
            reverseColor
            marginBottomNone
            externalStyle="[font-size:_clamp(32px,6vw,96px)!important] "
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
            {history
              .map(({ year, event }, index) => {
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
                      text-white
                    `}
                    // style={{ opacity: 1 / opacityValue }}
                  >
                    {/* <div
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
                  /> */}
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
              .reverse()}
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
