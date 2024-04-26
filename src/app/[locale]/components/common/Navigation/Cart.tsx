"use client";

import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext } from "react";

export default function Cart() {
  const locale = useParams()?.locale;
  const { modelsInBag } = useContext(ConstructorContext);

  return (
    !!modelsInBag.length && (
      <Link
        href={`/${locale}/cart`}
        className="flex justify-center items-center"
      >
        <div className="flex relative w-6 h-6">
          <Image
            src="/images/bag.svg"
            alt="cart"
            width={24}
            height={24}
            priority
          />
          <div className="absolute flex h-3 w-3 rounded-full items-center justify-center bg-black -bottom-[1px] -right-0.5">
            <div className="animate-customPing absolute h-3 w-3 rounded-full bg-base-red opacity-75"></div>
            <div className="relative flex rounded-full h-2 w-2 bg-base-red"></div>
          </div>
        </div>
      </Link>
    )
  );
}
