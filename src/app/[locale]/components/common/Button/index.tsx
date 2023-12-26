"use client";

import { ButtonProps } from "@/app/[locale]/components/common/Button/types";
import Image from "next/image";

export default function Button({
  children,
  onClick,
  disabled,
  size = "regular",
  color,
  showArrow,
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
        hover:opacity-80
        transition
        bg-base-red
        ${
          color === "transparent" &&
          "border-[3px] border-solid border-[#606060] bg-transparent"
        }
        ${
          color === "outline" &&
          "border-[3px] border-solid border-base-red bg-transparent"
        }
        ${color === "secondary" && "bg-white text-black"}
        ${size === "regular" && "px-8 py-6 text-lg"}
        ${size === "small" && "px-6 py-3"}
        ${size === "extrasmall" && "py-3 px-4 text-sm leading-none"}
        ${size === "normal" && "py-5 px-8 text-sm leading-none"}
        ${size === "thin" && "py-[15px] px-8"}
        flex
        justify-center
        items-center
        gap-[6px]
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
    </button>
  );
}
