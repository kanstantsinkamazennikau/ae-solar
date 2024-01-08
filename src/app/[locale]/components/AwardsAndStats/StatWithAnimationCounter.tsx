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
        className={`flex flex-row items-center justify-center bg-black text-center ${
          isChangeLayoutStructure
            ? "flex-grow flex-shrink basis-full md:basis-[20%] md:border-none border-y-[2px] border-[#ffffff33] py-6 mt-6 -mb-4"
            : "flex-grow flex-shrink basis-1/3 md:basis-[20%]"
        }`}
      >
        <div>
          <p className="font-semibold leading-none [font-size:_clamp(36px,5vw,104px)] test ">
            {count}
          </p>
          <p className="[font-size:_clamp(14px,2vw,32px)] text-dark-gray-800">
            {details}
          </p>
        </div>
      </div>
      <div className="w-0.5 bg-white opacity-20 lg:mx-14 xl:mx-20 mx-8" />
    </>
  );
}
