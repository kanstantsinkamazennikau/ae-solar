"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";

function getCurrentFrame(index: number) {
  return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    .toString()
    .padStart(4, "0")}.jpg`;
}

export default function SequenceAnimation({
  scrollHeight = 5000,
  numFrames = 147,
  width = 1000,
  height = 600,
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState([]);
  const [frameIndex, setFrameIndex] = useState({ frame: 0 });
  const [timeline, setTimeline] = useState(null);

  // Step 1: Load images
  function preloadImages() {
    for (let i = 1; i <= numFrames; i++) {
      const img = new Image();
      const imgSrc = getCurrentFrame(i);
      img.src = imgSrc;
      //@ts-ignore
      setImages((prevImages) => [...prevImages, img]);
    }
  }

  // Step 3: Set up canvas
  const renderCanvas = () => {
    const canvas = canvasRef.current;
    canvas!.width = width;
    canvas!.height = height;
  };

  const renderImage = useCallback(() => {
    const ctx = canvasRef.current!.getContext("2d");
    console.log(frameIndex.frame);

    ctx!.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    ctx!.drawImage(images[frameIndex.frame], 0, 0);
  }, [frameIndex.frame, images]);

  // Step 4: Render images to canvas
  useEffect(() => {
    preloadImages();
    renderCanvas();
  }, []);

  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    console.log("adada");

    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          onUpdate: renderImage,
          scrollTrigger: {
            trigger: "#canvas",
            // start: "top bottom",
            // start: "top",
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
        {/* <button
          onClick={() => {
            //@ts-ignore
            const targetSt = timeline!.scrollTrigger;
            gsap.to(window, {
              scrollTo: {
                y: targetSt.start,
                autoKill: false,
              },
              duration: 1,
            });
            // gsap.set("#canvas", { scrollTo: 100 });
          }}
        >
          onClick
        </button> */}
        <div className="relative top-[130px]" id="canvas">
          <canvas
            className="object-contain relative top-[130px] w-full h-full"
            ref={canvasRef}
          />
        </div>
        <button
          onClick={() => {
            //@ts-ignore
            const targetSt = timeline!.scrollTrigger;
            console.log(targetSt.start);

            gsap.to(canvasRef.current, {
              scrollTo: {
                y: 1000,
                autoKill: false,
              },
              duration: 1,
            });
            // gsap.set("#canvas", { scrollTo: 100 });
          }}
        >
          onClick
        </button>
      </BasicWidthContainer>
    </div>
  );
}
