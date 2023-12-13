"use client";

import { ButtonWithArrowProps } from "@/app/[locale]/components/common/LinkWithArrow/types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function LinkWithArrow({ label, href }: ButtonWithArrowProps) {
  const locale = useParams()?.locale;

  return (
    <div className="flex justify-center items-center gap-2">
      <Link className="text-base-red" href={`/${locale}/${href}`}>
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
