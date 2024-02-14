"use client";

import { AWARDS_AND_STATS_AWARDS_IMAGES } from "@/app/[locale]/utils/constants";
import Image from "next/image";
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import { useEffect, useRef, useState } from "react";

export default function Awards() {
  const options = {
    type: "loop",
    drag: true,
    gap: "40px",
    arrows: false,
    pagination: false,
    width: 950,
    perPage: 6,
    autoScroll: {
      pauseOnHover: true,
      pauseOnFocus: true,
      rewind: false,
      speed: 0.25,
    },
  };

  return (
    <div className="flex gap-2.5 flex-col self-stretch items-center relative">
      <div className="flex md:gap-5 relative gap-4 overflow-y-visible overflow-x-clip">
        <div
          className="
            w-full
            h-full
            absolute
            [background:linear-gradient(90deg,#000000e8_0%,#000000e6_5%,#000000e6_10%,#00000000_50%,#000000e6_90%,#000000e6_95%,#000000e8_100%)]
            
            z-10
            pointer-events-none
          "
        />
        {/* bg-[linear-gradient(90deg,_rgb(0_0_0_/_20%)_0%,_rgb(0_0_0_/_40%)_20%,_rgb(0_0_0_/_0%)_40%,_rgb(0_0_0_/_0%)_60%,_rgb(0_0_0_/_40%)_80%,_rgb(0_0_0_/_20%)_100%)] */}
        <Splide
          aria-label="awards"
          options={options}
          extensions={{ AutoScroll }}
        >
          {AWARDS_AND_STATS_AWARDS_IMAGES.map((image) => (
            <SplideSlide key={image}>
              <Image
                src={`/images/awards/${image}`}
                alt={image}
                width={120}
                height={120}
                priority
                className="object-contain md:h-[120px] md:w-[120px] h-20 w-20"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
