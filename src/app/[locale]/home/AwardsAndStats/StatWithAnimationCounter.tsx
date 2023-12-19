"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StatWithAnimationCounter({
  stat,
  details,
  initialValue = "0",
  sign,
}: StatWithAnimationCounterProps) {
  const [count, setCount] = useState(initialValue);

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
    <div className="flex flex-row items-center bg-black text-center">
      <div className="min-w-[290px]">
        <p className="font-semibold leading-none xl:text-[104px] text-5xl test ">
          {count}
        </p>
        <p className="text-[32px] text-dark-gray-800">{details}</p>
      </div>
      <div className="w-1 bg-white opacity-20 h-full mx-20" />
    </div>
  );
}
