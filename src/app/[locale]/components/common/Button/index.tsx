"use client";

import { ButtonProps } from "@/app/[locale]/components/common/Button/types";
import Image from "next/image";

const buttonStyle = (style: string | undefined) => {
  switch (style) {
    case "transparent":
      return "border-[3px] border-solid border-[#606060] bg-transparent";
    case "outline":
      return "border-[3px] border-solid border-base-red bg-transparent";
    case "secondary":
      return "bg-white text-black";
    case "textOnly":
      return "bg-transparent";
    default:
      return "";
  }
};

const buttonSize = (size: string) => {
  switch (size) {
    case "regular":
      return "px-8 py-6 text-lg";
    case "small":
      return "xl:px-6 xl:py-3 lg:px-4 lg:py-3 px-2 py-3";
    case "extrasmall":
      return "py-3 px-4";
    case "normal":
      return "py-5 px-8";
    case "thin":
      return "py-[15px] px-8";
    default:
      return "";
  }
};

export default function Button({
  children,
  onClick,
  disabled,
  size = "regular",
  style,
  showArrow,
  externalStyle,
  showRedArrow,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        hover:opacity-90
        transition
        bg-base-red
        ${buttonSize(size)}
        ${buttonStyle(style)}
        flex
        justify-center
        items-center
        gap-[6px]
        ${externalStyle}
      `}
    >
      {children}
      {showArrow && (
        <Image
          className="-rotate-90"
          alt="arrow"
          src="/images/arrow.svg"
          width={12}
          height={12}
        />
      )}
      {showRedArrow && (
        <Image
          alt="arrow"
          src="/images/redArrowRight.svg"
          width={8}
          height={8}
        />
      )}
    </button>
  );
}
