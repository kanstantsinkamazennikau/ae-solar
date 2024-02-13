//@ts-nocheck

"use client";

import Image from "next/image";
import { useState } from "react";

export default function PanelsFlowerIcon({
  panel,
  container,
  position,
  icon,
  onClick,
  chosenPanel,
}) {
  const isChosenPanel = chosenPanel === panel;
  const [autoplay, setAutoPlay] = useState(false);

  const onMouseEnter = () => {
    setAutoPlay(true);
  };

  const onMouseLeave = () => {
    setAutoPlay(false);
  };

  return (
    <div className={`${container} ${position}`} onClick={() => onClick(panel)}>
      <div
        className={`
          relative
          rounded-full
          outline
          outline-[#B30006]
          bg-[#00000033]
          hover:outline-2
          hover:[box-shadow:0px_0px_160px_0px_#F60109,0px_0px_40px_0px_#F60109]
          ${
            chosenPanel === panel
              ? "[box-shadow:0px_0px_160px_0px_#F60109,0px_0px_40px_0px_#F60109] outline-2"
              : ""
          }
          outline-1
          overflow-hidden
          flex
          justify-center
          items-center
          min-[560px]:w-[64px]
          min-[560px]:h-[64px]
          w-[44px]
          h-[44px]
        `}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Image
          src={`/images/models/${icon}`}
          alt={icon}
          priority
          width={32}
          height={32}
          className="
            min-[560px]:w-[32px]
            min-[560px]:h-[32px]
            h-5
            w-5
            absolute
            z-40
          "
        />
        {(autoplay || isChosenPanel) && (
          <>
            <video
              width="213"
              height="120"
              loop
              autoPlay
              muted
              className="scale-[2] absolute hidden min-[920px]:block"
            >
              <source src="/images/products/shine.mp4" type="video/mp4" />
            </video>
            <Image
              src={`/images/products/mobileShine.png`}
              alt="mobileShine"
              priority
              width={200}
              height={200}
              className="
                min-[920px]:hidden
                block
              "
            />
          </>
        )}
      </div>
      <div
        className=" 
          min-[1024px]:text-2xl
          md:text-lg
          min-[560px]:text-sm
          text-xs
          -tracking-[0.24px]
          font-semibold
          min-[560px]:block
          hidden
        "
      >
        {panel}
      </div>
    </div>
  );
}
