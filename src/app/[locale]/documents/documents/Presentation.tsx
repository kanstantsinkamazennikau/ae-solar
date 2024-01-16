"use client";

import { PresentationProps } from "@/app/[locale]/documents/documents/types";
import Image from "next/image";
import { useState } from "react";

export default function Presentation({
  linkTitle,
  link,
  title,
  image,
}: PresentationProps) {
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
        flex
        items-start
        flex-col
        gap-1
        border-[2px]
        border-solid
        ${isHover ? "border-base-red" : "border-[#191919]"}
        rounded-xl
        bg-option-border
        min-h-[200px]
        overflow-hidden
        relative
      `}
    >
      <div
        className={`
          bg-[url('/images/documents/presentationBackground.png')]
          bg-[length:100%_100%]
          bg-no-repeat
          w-full
          h-full
          min-h-[148px]
          px-4
          py-4
        `}
      >
        {!isHover && (
          <div className="w-full h-full absolute presentationFade z-20 top-0 left-0 backdrop-grayscale"></div>
        )}
        <Image
          src="/logo.svg"
          alt="ae-solar logo"
          width={92}
          height={12}
          className="mb-5"
        />
        <div className="min-h-[84px] h-[calc(100%-50px)] relative flex items-center py-2">
          <div className="w-8 min-h-[84px] h-full bg-base-red absolute top-0" />
          <span className="uppercase font-extrabold [font-size:_clamp(16px,1.5vw,24px)] ml-3 leading-[100%] z-10">
            {title}
          </span>
          {image && (
            <Image
              src={`/images/documents/${image}`}
              alt="Aurora"
              width={110}
              height={10}
              className="absolute -right-2 -bottom-4"
            />
          )}
        </div>
      </div>
      <div
        className="
          [font-size:_clamp(12px,1.5vw,16px)]
          leading-[100%]
          p-4
          font-bold
          capitalize
          -tracking-[0.32px]
          flex
          justify-between
          w-full
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
