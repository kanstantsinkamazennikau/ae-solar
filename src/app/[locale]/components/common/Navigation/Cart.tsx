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
    modelsInBag && (
      <Link href={`/${locale}/cart`} className="flex">
        <Image
          src="/images/bag.svg"
          alt="cart"
          width={24}
          height={24}
          priority
        />
      </Link>
    )
  );
}
