"use client";

import { ButtonProps } from "@/app/components/common/Button/types";
import Image from "next/image";

export default function Button({
  children,
  onClick,
  disabled,
  small,
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
        text-lg
        ${small ? "px-6" : "px-8"}
        ${small ? "py-3" : "py-6"}
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
