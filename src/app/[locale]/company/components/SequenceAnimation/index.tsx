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
import { SEQUENCE_ANIMATION_TEXT } from "@/app/[locale]/utils/constants";

function getCurrentFrame(index: number) {
  return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    .toString()
    .padStart(4, "0")}.jpg`;
}

const frameIndex = { frame: 0 };
const numFrames = 147;

export default function SequenceAnimation({ width = 1158, height = 770 }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [scrollFrame, setScrollFrame] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1);
  const framesPerSection = Math.ceil(
    numFrames / SEQUENCE_ANIMATION_TEXT.length
  );

  const renderImage = useCallback(() => {
    const ctx = canvasRef.current!.getContext("2d");
    setScrollFrame(frameIndex.frame);
    ctx!.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    ctx!.drawImage(images[frameIndex.frame], 0, 0);
  }, [images]);

  function preloadImages() {
    for (let i = 1; i <= numFrames; i++) {
      const img = new Image();
      const imgSrc = getCurrentFrame(i);
      img.src = imgSrc;
      setImages((prevImages) => [...prevImages, img]);
    }
  }

  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    canvas!.width = width;
    canvas!.height = height;
  }, [height, width]);

  useEffect(() => {
    renderCanvas();
    preloadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (!canvasRef.current || images.length === 0) return;
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          onUpdate: renderImage,
          scrollTrigger: {
            onUpdate: (self) => {
              setScrollDirection(self.direction);
            },
            trigger: "#canvas",
            start: "top-=140px",
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
    return () => ctx.revert();
  }, [images.length, renderImage]);

  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;
    renderImage();
  }, [images, renderImage]);

  useEffect(() => {
    if (scrollDirection === 1) {
      if (scrollFrame > framesPerSection + framesPerSection * activeStepIndex) {
        setActiveStepIndex(activeStepIndex + 1);
      }
    } else {
      if (
        scrollFrame < framesPerSection + framesPerSection * activeStepIndex &&
        activeStepIndex !== 0
      ) {
        setActiveStepIndex(activeStepIndex - 1);
      }
    }
  }, [activeStepIndex, framesPerSection, scrollDirection, scrollFrame]);

  return (
    <div className="flex flex-col justify-center items-center">
      <BasicWidthContainer>
        <div className="flex items-center" id="canvas">
          <div className="flex gap-5 max-w-[33%] relative">
            <div className="sequenceAnimationDivider w-[1px]" />
            <div className="py-20">
              {SEQUENCE_ANIMATION_TEXT.map(({ title, description }, index) => {
                const isActive = activeStepIndex === index;
                const opacityValue = Math.abs(activeStepIndex - index) || 1;
                return (
                  <div
                    key={title}
                    className={`
                      ${isActive ? "py-10" : ""}
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
                          text-[32px]
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
                        text-base
                        leading-[150%]
                        font-medium
                        text-dark-gray-900
                      `}
                    >
                      {description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <canvas
            className="object-contain max-w-[66%] scale-90"
            ref={canvasRef}
          />
        </div>
      </BasicWidthContainer>
    </div>
  );
}
