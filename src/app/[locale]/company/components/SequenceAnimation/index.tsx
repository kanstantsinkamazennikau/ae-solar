"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SEQUENCE_ANIMATION_TEXT,
  TECH_INFO_A_CLOSE_LOOK_AT,
  TECH_INFO_THE_HIDDEN_LAYERS,
} from "@/app/[locale]/utils/constants";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";

const scrollTriggerPositionFromResolution = (
  isDesktop: boolean,
  isMobile: boolean
) => {
  if (isDesktop) return "top-=140px";
  if (isMobile) return "top-=80px";
  return "center center";
};

function getCurrentFrame(index: number) {
  return `/images/sequence/home/Layer-2-4-${index.toString()}.jpg`;
}

const frameIndex = { frame: 0 };
const numFrames = 120;

export default function SequenceAnimation({ width = 1158, height = 600 }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [scrollFrame, setScrollFrame] = useState(1);
  const [scrollDirection, setScrollDirection] = useState(1);
  const framesPerSection = Math.ceil(
    numFrames / SEQUENCE_ANIMATION_TEXT.length
  );

  const renderImage = useCallback(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current?.getContext("2d");
    setScrollFrame(frameIndex.frame);
    ctx!.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    ctx!.drawImage(images[frameIndex.frame], 0, 0);
  }, [images]);

  function preloadImages() {
    for (let i = 1; i <= numFrames - 1; i++) {
      const img = new Image();
      const imgSrc = getCurrentFrame(i);
      img.src = imgSrc;
      setImages((prevImages) => [...prevImages, img]);
    }
  }

  useEffect(() => {
    preloadImages();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;
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
              onUpdate: renderImage,
              scrollTrigger: {
                onUpdate: (self) => {
                  setScrollDirection(self.direction);
                },
                trigger: "#canvas",
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
  }, [images.length, renderImage]);

  useEffect(() => {
    // if (!canvasRef.current || images.length === 0) return;
    // renderImage();
    if (!canvasRef.current) return;
    const img = new Image();
    const imgSrc = `/images/sequence/home/Layer-2-4-1.jpg`;
    img.src = imgSrc;
    img.onload = () => {
      const ctx = canvasRef.current?.getContext("2d");
      ctx!.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
      ctx!.drawImage(img, 0, 0);
    };
  }, [images, renderImage]);

  useEffect(() => {
    if (scrollDirection === 1) {
      if (scrollFrame > framesPerSection + framesPerSection * activeStepIndex) {
        setActiveStepIndex(activeStepIndex + 1);
      }
    } else {
      if (
        scrollFrame < framesPerSection * activeStepIndex &&
        activeStepIndex !== 0
      ) {
        setActiveStepIndex(activeStepIndex - 1);
      }
    }
  }, [activeStepIndex, framesPerSection, scrollDirection, scrollFrame]);

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
        <div className="flex flex-col items-center" id="canvas">
          <TwoTierHeading
            tierOneHeading={TECH_INFO_THE_HIDDEN_LAYERS}
            tierTwoHeading={TECH_INFO_A_CLOSE_LOOK_AT}
            align="right"
            externalStyle="z-10"
          />
          <div className="flex items-center lg:-mt-[56px]">
            <div className="flex gap-5 max-w-[33%] relative">
              <div className="sequenceAnimationDivider !w-[1px] basis-[1px] shrink-0" />
              <div className="py-20">
                {SEQUENCE_ANIMATION_TEXT.map(
                  ({ title, description }, index) => {
                    const isActive = activeStepIndex === index;
                    const opacityValue = Math.abs(activeStepIndex - index) || 1;
                    return (
                      <div
                        key={title}
                        className={`
                          ${isActive ? "md:py-8 py-4" : ""}
                          first:pt-0
                          last:pb-0
                          transition-all
                          duration-500
                        `}
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
                              -left-[3px]
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
                            // onClick={() => {
                            //   setActiveStepIndex(index);
                            //   const { start, end } = timeline!.scrollTrigger;
                            //   const timelineDistance = end - start;
                            //   const oneSectorScrollDistance = Math.floor(
                            //     timelineDistance / SEQUENCE_ANIMATION_TEXT.length
                            //   );

                            //   gsap.to(window, {
                            //     scrollTo: {
                            //       y: (
                            //         start +
                            //         oneSectorScrollDistance * index
                            //       ).toFixed(),
                            //       autoKill: false,
                            //     },
                            //     duration: 0.5,
                            //   });
                            // }}
                          >
                            {title}
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
                          {description}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            <canvas
              className="object-contain max-w-[66%] relative max-[510px]:-right-1/3 max-[510px]:scale-150"
              ref={canvasRef}
              width={800}
              height={600}
            />
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
