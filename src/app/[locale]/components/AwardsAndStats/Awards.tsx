"use client";

import { AWARDS_AND_STATS_AWARDS_IMAGES } from "@/app/[locale]/utils/constants";
import Image from "next/image";
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

export default function Awards() {
  const options = {
    type: "loop",
    drag: "free",
    gap: "10px",
    arrows: false,
    pagination: false,
    width: 700,
    perPage: 6,
    autoScroll: {
      pauseOnHover: true,
      pauseOnFocus: true,
      rewind: false,
      speed: 0.25,
    },
  };

  return (
    <div className="flex gap-2.5 flex-col self-stretch items-center">
      <div className="flex md:gap-5 relative gap-4">
        <Splide
          aria-label="My Favorite Images"
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
        <div className="fade-strip-left !w-20" />
        <div className="fade-strip-right !w-20" />
      </div>
    </div>
  );
}
