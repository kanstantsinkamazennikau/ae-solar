"use client";

import { AWARDS_AND_STATS_AWARDS_IMAGES } from "@/app/[locale]/utils/constants";
import Image from "next/image";
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useState } from "react";

export default function Awards() {
  const [hideCover, setHideCover] = useState(false);

  const options = {
    type: "loop",
    drag: true,
    gap: "10px",
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
      <div
        className="flex md:gap-5 relative gap-4 overflow-y-visible overflow-x-clip"
        onMouseEnter={() => setHideCover(true)}
        onMouseLeave={() => setHideCover(false)}
      >
        <div
          className={`
            ${hideCover ? "opacity-0" : "opacity-100"}
            [background:linear-gradient(90deg,#000000e8_0%,#000000e6_5%,#000000e6_10%,#00000000_50%,#000000e6_90%,#000000e6_95%,#000000e8_100%)]
            w-full
            h-full
            absolute
            z-10
            pointer-events-none
          `}
        />

        <Splide
          aria-label="awards"
          className="awards"
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
                className={`
                  object-contain
                  md:h-[120px]
                  md:w-[120px]
                  h-20
                  w-20
                  md:hover:scale-125 hover:scale-[1.5] hover:z-10
                  transition-all
                  duration-100
                `}
              />
            </SplideSlide>
          ))}
          {/* {AWARDS_AND_STATS_AWARDS_IMAGES.map((image) => (
            <Image
              src={`/images/awards/${image}`}
              alt={image}
              width={120}
              height={120}
              priority
              key={image}
              className="object-contain md:h-[120px] md:w-[120px] h-20 w-20 hover:scale-[2] z-10"
              // onMouseEnter={(e) => console.log(e.target.style)}
            />
          ))} */}
        </Splide>
      </div>
    </div>
  );
}
