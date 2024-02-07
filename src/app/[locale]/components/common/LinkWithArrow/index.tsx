"use client";

import { ButtonWithArrowProps } from "@/app/[locale]/components/common/LinkWithArrow/types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function LinkWithArrow({
  label,
  href,
  externalStyle,
}: ButtonWithArrowProps) {
  const locale = useParams()?.locale;

  return (
    <div className="flex justify-center items-center gap-2 cursor-pointer">
      <Link
        className={`text-base-red [font-size:_clamp(14px,1vw,16px)] ${externalStyle}`}
        href={`/${locale}/${href}`}
      >
        {label}
      </Link>
      <Image
        src="/images/redArrowRight.svg"
        alt="arrow"
        width={8}
        height={8}
        priority
      />
    </div>
  );
}
