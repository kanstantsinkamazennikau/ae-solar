"use client";

import { QuotesContext } from "@/app/context/quotesContext";
import { DotProps } from "@/app/home/Reviews/types";
import { useContext } from "react";

export default function Dot({ number }: DotProps) {
  const { goToSlide, slideNumber } = useContext(QuotesContext);

  return (
    <button
      className={`w-2 h-2 rounded-lg ${
        slideNumber === number ? "bg-base-red" : "bg-black-900"
      }`}
      onClick={() => goToSlide(number)}
    />
  );
}
