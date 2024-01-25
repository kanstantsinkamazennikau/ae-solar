"use client";

import { DocumentationLinkProps } from "@/app/[locale]/calculate/components/GeneratedModel/types";
import Image from "next/image";
import { useState } from "react";

export default function DocumentationLink({
  link,
  datasheet,
}: DocumentationLinkProps) {
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
        inline-flex
        justify-between
        w-full
        leading-[120%]
        font-normal
        [font-size:_clamp(14px,1.5vw,16px)]
        -tracking-[0.32px]
        ${isHover ? "text-base-red" : "text-white"}
      `}
    >
      {datasheet}
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
    </a>
  );
}
