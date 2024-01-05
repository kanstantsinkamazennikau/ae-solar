//@ts-nocheck

"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function getCurrentFrame(index: number) {
  return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    .toString()
    .padStart(4, "0")}.jpg`;
}

const SEQUENCE_ANIMATION_TEXT = [
  {
    title: "Front cover",
    description:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels.",
  },
  {
    title: "Front encapsulation",
    description:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels.",
  },
  {
    title: "Solar cells",
    description:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels.",
  },
  {
    title: "Rear encapsulation",
    description:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels.",
  },
  {
    title: "Back cover",
    description:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels.",
  },
  {
    title: "Frame",
    description:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels.",
  },
  {
    title: "Connector",
    description:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels.",
  },
];

export default function SequenceAnimation({
  numFrames = 147,
  width = 1158,
  height = 770,
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState([]);
  const [frameIndex] = useState({ frame: 0 });
  const [timeline, setTimeline] = useState(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  function preloadImages() {
    for (let i = 1; i <= numFrames; i++) {
      //@ts-ignore
      const img = new Image();
      const imgSrc = getCurrentFrame(i);
      img.src = imgSrc;
      //@ts-ignore
      setImages((prevImages) => [...prevImages, img]);
    }
  }

  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    canvas!.width = width;
    canvas!.height = height;
  }, [height, width]);

  const renderImage = useCallback(() => {
    const ctx = canvasRef.current!.getContext("2d");
    // console.log(frameIndex.frame);

    ctx!.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    ctx!.drawImage(images[frameIndex.frame], 0, 0);
  }, [frameIndex.frame, images]);

  useEffect(() => {
    preloadImages();
    renderCanvas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          onUpdate: renderImage,
          scrollTrigger: {
            trigger: "#canvas",
            start: "top-=140px",
            markers: true,
            pin: true,
            end: "+=150%",
            scrub: 0.5,
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
      //@ts-ignore
      setTimeline(tl);
    });
    return () => ctx.kill();
  }, [frameIndex, images.length, numFrames, renderImage]);

  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;
    //@ts-ignore
    images[0].onload = renderImage();
  }, [images, renderImage]);

  return (
    <div className="flex flex-col justify-center items-center">
      <BasicWidthContainer>
        <div className="flex items-center" id="canvas">
          <div className="flex gap-5 max-w-[33%] relative">
            <div className="sequenceAnimationDivider w-[1px]"></div>
            <div className="py-20">
              {SEQUENCE_ANIMATION_TEXT.map(({ title, description }, index) => {
                const isActive = activeStepIndex === index;
                return (
                  <div
                    key={title}
                    className={`
                      ${isActive ? "py-10" : ""}
                      first:pt-0
                      last:pb-0
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
                        className={`
                          ${isActive ? "text-white" : "text-dark-gray-900"}
                          font-walsheim
                          text-[32px]
                          leading-[120%]
                          font-medium
                          cursor-pointer
                        `}
                        onClick={() => {
                          // setActiveStepIndex(index);
                          const { start, end } = timeline!.scrollTrigger;
                          const timelineDistance = end - start;
                          const oneSectorScrollDistance = Math.floor(
                            timelineDistance /
                              (SEQUENCE_ANIMATION_TEXT.length - 1)
                          );

                          gsap.to(window, {
                            scrollTo: {
                              y: (
                                start +
                                oneSectorScrollDistance * index
                              ).toFixed(),
                              autoKill: false,
                            },
                            duration: 0.5,
                          });
                        }}
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
