"use client";

import { TextProps } from "@/app/[locale]/documents/documents/types";
import Image from "next/image";
import { useState } from "react";

export default function Text({ link, linkTitle }: TextProps) {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <a
      href={link}
      target="_blank"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        transition-all
        duration-300
        ease-in-out
      `}
    >
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="
        [font-size:_clamp(12px,1.5vw,16px)]
        leading-[100%]
        p-4
        font-bold
        capitalize
        -tracking-[0.32px]
        flex
        gap-4
        z-20
      "
      >
        <p className={`${isHover ? "text-[#B30006]" : "text-white"}`}>
          {linkTitle}
        </p>
        <Image
          src={`${
            isHover
              ? "/images/option/linkArrowDarkRed.svg"
              : "/images/option/linkArrow.svg"
          }`}
          alt={"linkArrow"}
          priority
          width={16}
          height={16}
        />
      </div>
    </a>
  );
}
