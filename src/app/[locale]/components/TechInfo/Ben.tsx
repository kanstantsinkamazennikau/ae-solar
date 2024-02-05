"use client";

import LinkWithArrow from "@/app/[locale]/components/common/LinkWithArrow";
import { TECH_INFO_READ_MORE } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useState } from "react";

export default function Ben({
  title,
  description,
  image,
  isFullHeightRow,
}: BenProps) {
  const [isReadMoreVisible, setIsReadMoreVisible] = useState(false);

  return (
    <div
      key={title}
      className={`
        flex
        min-[500px]:px-8
        min-[500px]:py-8
        py-6
        px-6
        items-start
        self-stretch
        relative
        overflow-hidden
        bg-[#131313]
        rounded-[10px]
        hover:shadow-bens
        hover:outline-[3px]
        hover:outline-base-red
        outline-transparent
        hover:outline
        transition-all
        duration-200
        border
        border-solid
        border-[#191919]
        ${
          isFullHeightRow
            ? "md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-3 min-[500px]:min-h-full min-h-[328px]"
            : "h-full"
        }`}
      onMouseLeave={() => setIsReadMoreVisible(false)}
      onMouseEnter={() => setIsReadMoreVisible(true)}
    >
      <Image
        src={`/images/techInfo/${image}`}
        alt={image}
        width={408}
        height={408}
        priority
        className={`absolute
        ${
          isFullHeightRow
            ? "top-0 right-0 w-full h-full"
            : "-top-[50px] -right-[60px] stroke-white stroke-[4px] object-none"
        }`}
      />
      {isFullHeightRow && (
        <Image
          src={`/images/techInfo/manufacturerSmall.png`}
          alt={image}
          width={328}
          height={300}
          priority
          className={`absolute top-0 right-0 w-full h-full md:hidden`}
        />
      )}
      <div
        className={`
          flex
          lg:gap-6
          gap-3
          min-[500px]:flex-col
          flex-row
          justify-center
          self-end
          z-10
          relative
          transition-all
          duration-500
          ${
            isFullHeightRow
              ? `items-start flex-col ${
                  isReadMoreVisible ? "top-0" : "top-[51px]"
                }`
              : `min-[500px]:items-start items-center ${
                  isReadMoreVisible
                    ? "min-[500px]:top-0"
                    : "min-[500px]:top-[51px]"
                }`
          }
          `}
      >
        <div
          className={`leading-[120%] font-medium [font-size:_clamp(14px,2.5vw,32px)] ${
            isFullHeightRow
              ? "[word-spacing:normal]"
              : "min-[500px]:[word-spacing:normal]"
          }`}
        >
          {title}
        </div>
        <div
          className={`
            text-base
            leading-[150%]
            font-medium
            font-walsheim
            text-dark-gray-900
            [font-size:_clamp(12px,1.5vw,16px)]
            ${isFullHeightRow ? "block" : "min-[500px]:block hidden"}

          `}
        >
          {description}
        </div>
        <div
          className={`whitespace-nowrap transition-all
          duration-500 ${
            isReadMoreVisible
              ? "translate-x-0"
              : "translate-x-[200%] -mr-10 min-[500px]:translate-x-0 min-[500px]:-mr-0"
          }`}
        >
          <LinkWithArrow label={TECH_INFO_READ_MORE} href="" />
        </div>
      </div>
    </div>
  );
}
