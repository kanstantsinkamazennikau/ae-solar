"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StatWithAnimationCounter({
  stat,
  details,
  initialValue = "0",
  sign,
  index,
}: StatWithAnimationCounterProps) {
  const [count, setCount] = useState(initialValue);
  const isChangeLayoutStructure = index === 2;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#statAnimationTrigger",
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
      const myObj = { val: initialValue };

      tl.to(myObj, {
        val: stat,
        duration: 3,
        ease: "power3.out",
        onUpdate: () => {
          setCount(Number(myObj.val).toFixed(0) + (sign ?? ""));
        },
      });
    });
    return () => ctx.kill();
  }, [initialValue, sign, stat]);

  return (
    <>
      <div
        className={`flex flex-row items-center justify-center bg-transparent text-center ${
          isChangeLayoutStructure
            ? "flex-grow flex-shrink basis-full md:basis-[20%] md:border-none border-y-[2px] border-[#ffffff33] py-6 mt-6 -mb-4 md:py-0 md:mt-0 md:-mb-0"
            : "flex-grow flex-shrink basis-1/3 md:basis-[20%]"
        }`}
      >
        <div>
          <p className="font-semibold leading-none [font-size:_clamp(26px,5vw,94px)] test ">
            {count}
          </p>
          <p className="[font-size:_clamp(10px,2vw,22px)] text-dark-gray-800 md:whitespace-nowrap whitespace-normal">
            {details}
          </p>
        </div>
      </div>
      <div className="w-0.5 bg-[#191919] lg:mx-8 xl:mx-10 mx-4" />
    </>
  );
}
