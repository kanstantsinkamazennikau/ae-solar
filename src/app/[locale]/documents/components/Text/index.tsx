"use client";

import { TextProps } from "@/app/[locale]/documents/components/types";
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
          leading-[130%]
          p-3
          font-bold
          capitalize
          -tracking-[0.32px]
          z-20
          items-center
          inline-flex
        "
      >
        <Image
          src="/images/option/documentGrey.svg"
          alt={"linkArrow"}
          priority
          width={16}
          height={16}
          className="mr-1"
        />
        <p className={`${isHover ? "text-[#B30006]" : "text-white"} mr-4`}>
          {linkTitle}
        </p>
        <Image
          src="/images/option/linkArrowDarkRed.svg"
          alt={"linkArrow"}
          priority
          width={16}
          height={16}
        />
      </div>
    </a>
  );
}
