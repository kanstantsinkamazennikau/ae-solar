"use client";

import { ProductSloganProps } from "@/app/[locale]/components/ProductIntro/ProductSlogan/types";
import {
  PRODUCT_INTRO_DETAILED_INFO,
  PRODUCT_INTRO_PANELS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SloganWithIntersection = ({ model }: ProductSloganProps) => {
  const modelAdvantages = PRODUCT_INTRO_PANELS[model].advantages;
  const ref = useRef(null);
  const [intersecting, setIntersecting] = useState(false);
  const [stopIntersecting, setStopIntersecting] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIntersecting(true);
          } else {
            setIntersecting(false);
          }
        }
        // {
        //   threshold: 1,
        // }
      );

      intersectionObserver.observe(ref.current);

      return () => {
        if (ref.current) {
          intersectionObserver.unobserve(ref.current);
        }
      };
    }
  }, []);

  return (
    <div className="overflow-hidden" ref={ref}>
      {modelAdvantages.map(({ title, description }, index) => (
        <div
          key={title}
          className={`
            flex
            gap-2
            transition-all
            duration-100
            ${
              !intersecting && !stopIntersecting
                ? "translate-x-[calc(100%+50px)]"
                : "translate-x-0"
            }
          `}
          style={{ transitionDelay: `${index * 100}ms` }}
          onTransitionEnd={() => {
            if (index === modelAdvantages.length - 1) setStopIntersecting(true);
          }}
        >
          <div className="leading-[130%] font-semibold [font-size:_clamp(8px,1vw,10px)] text-base-red">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div>
            <div className="leading-[130%] font-semibold [font-size:_clamp(16px,1.5vw,20px)]">
              {title}
            </div>
            <div className="text-lg leading-[170%] font-medium font-walsheim text-dark-gray-900 [font-size:_clamp(12px,1.5vw,16px)]">
              {description}
            </div>
            {/* <div className="bg-white opacity-20 h-0.5 mt-3 md:hidden block" /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function ProductSlogan({ model }: ProductSloganProps) {
  const [showDetails, setShowDetails] = useState(false);
  // const ref = useRef(null);
  // const [intersecting, setIntersecting] = useState(false);
  // useEffect(() => {
  //   if (ref.current) {
  //     const intersectionObserver = new IntersectionObserver(
  //       (entries) => {
  //         if (entries[0].isIntersecting) {
  //           setIntersecting(true);
  //         } else {
  //           setIntersecting(false);
  //         }
  //       }
  //       // {
  //       //   threshold: 1,
  //       // }
  //     );

  //     intersectionObserver.observe(ref.current);

  //     return () => {
  //       if (ref.current) {
  //         intersectionObserver.unobserve(ref.current);
  //       }
  //     };
  //   }
  // }, []);

  const onClose = () => {
    setShowDetails(false);
  };

  const onOpen = () => {
    setShowDetails(true);
  };

  return (
    <>
      <div
        className={`
          ${
            showDetails
              ? "translate-x-0"
              : "max-[1200px]:translate-x-full md:translate-x-[calc(100%+20px)] min-[1200px]:translate-x-0"
          }
          transition-all
          duration-300
          flex-1
          min-[1200px]:flex
          gap-3
          md:gap-1
          xl:gap-3
          flex-col
          justify-center
          absolute
          md:px-5
          md:py-4
          w-fit
          h-fit
          px-5
          py-2
          bottom-0
          right-0
          md:right-5
          md:left-auto
          md:top-1/2
          md:-translate-y-1/2
          md:pr-5
          [&>*:last-child>div>div:last-child]:hidde
          border
          border-solid
          backdrop-blur-[10px]
          bg-[#00000033]
          [border-image:linear-gradient(154deg,_#f60109_0%,_rgb(49_9_10_/_73%)_27%,_rgb(49_9_10_/_73%)_51%,_rgb(246_1_9_/_28%)_80%,_#f60109_100%)_1]
          xl:w-[315px]
          lg:w-[305px]
          md:w-[300px]
          2xl::mt-0
          xl:-mt-6
          lg:-mt-11
          -mt-11
        `}
      >
        <div
          className={`
            ${showDetails ? "hidden" : "flex"}
            h-[calc(100%+1px)]
            min-[1200px]:hidden
            px-4
            flex-row
            items-center
            justify-center
            absolute
            -bottom-[2px]
            gap-3
            border
            border-solid
            backdrop-blur-[10px]
            bg-[#000000ea]
            [border-image:linear-gradient(154deg,_#f6010947_0%,_rgb(49_9_10_/_73%)_27%,_rgb(49_9_10_/_73%)_51%,_rgb(246_1_9_/_28%)_80%,_#f60109_100%)_1]
            box-content
            -translate-x-[calc(100%+20px)]
            flex
            [writing-mode:vertical-lr]
            -scale-100
            border-l-0
            cursor-pointer
          `}
          onClick={onOpen}
        >
          <p>{PRODUCT_INTRO_DETAILED_INFO}</p>
          <Image
            className="-rotate-90"
            alt="arrow"
            src="/images/arrow.svg"
            width={12}
            height={12}
          />
        </div>
        <Image
          src={`/images/close.svg`}
          alt="glow"
          priority
          width={32}
          height={32}
          className="absolute top-3 right-3 cursor-pointer min-[1200px]:hidden z-10"
          onClick={onClose}
        />
        <SloganWithIntersection model={model} key={model} />
      </div>
    </>
  );
}
