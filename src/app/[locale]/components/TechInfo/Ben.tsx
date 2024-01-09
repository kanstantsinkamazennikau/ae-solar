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

  const onMouseAction = () => {
    setIsReadMoreVisible(!isReadMoreVisible);
  };

  return (
    <div
      key={title}
      className={`
      flex
      p-8
      items-start
      self-stretch
      relative
      overflow-hidden
      bg-dark-gray-950
      rounded-[10px]
      hover:shadow-bens
      hover:outline-[3px]
      hover:outline-base-red
      outline-transparent
      hover:outline
      transition-all
      duration-200
      ${
        isFullHeightRow
          ? "row-start-1 row-end-3 col-start-2 col-end-3"
          : "lg:h-[340px] md:h-[300px]"
      }`}
      onMouseLeave={onMouseAction}
      onMouseEnter={onMouseAction}
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
      <div
        className={`
          flex
          lg:gap-6
          gap-3
          flex-col
          self-end
          z-10
          relative
          transition-all
          duration-500
          items-start
          ${isReadMoreVisible ? "top-0" : "top-[60px]"}`}
      >
        <div className="leading-[120%] font-medium [font-size:_clamp(14px,2.5vw,32px)]">
          {title}
        </div>
        <div className="text-base leading-[150%] font-medium font-walsheim text-dark-gray-900 [font-size:_clamp(12px,1.5vw,16px)]">
          {description}
        </div>
        <div>
          <LinkWithArrow label={TECH_INFO_READ_MORE} href="" />
        </div>
      </div>
    </div>
  );
}
