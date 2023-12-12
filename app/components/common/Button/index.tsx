"use client";

import { ButtonProps } from "@/app/components/common/Button/types";

export default function Button({
  label,
  onClick,
  disabled,
  small,
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
      `}
    >
      {label}
    </button>
  );
}
