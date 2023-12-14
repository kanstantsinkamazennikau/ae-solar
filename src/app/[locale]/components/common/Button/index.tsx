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
        ${color === "secondary" ? "bg-white" : "bg-base-red"}
        ${color === "secondary" && "text-black"}
        ${size === "regular" && "text-lg"}
        ${size === "regular" && "px-8 py-6"}
        ${size === "small" && "px-6 py-3"}
        ${size === "extrasmall" && "text-sm leading-none"}
        ${size === "extrasmall" && "py-3 px-4"}
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
