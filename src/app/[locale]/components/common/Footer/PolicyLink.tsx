"use client";

import { PolicyLinkProps } from "@/app/[locale]/components/common/Footer/types";
import Link from "next/link";

export default function PolicyLink({ text, link }: PolicyLinkProps) {
  return (
    <>
      <Link className="min-[550px]:px-3 px-0" href={link}>
        {text}
      </Link>
      <div className="w-[1px] h-5 bg-dark-gray-700 min-[550px]:inline-block hidden"></div>
    </>
  );
}
