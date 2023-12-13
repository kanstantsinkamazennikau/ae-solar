"use client";

import { PolicyLinkProps } from "@/app/[locale]/components/common/Footer/types";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PolicyLink({ link }: PolicyLinkProps) {
  const locale = useParams()?.locale;

  return (
    <>
      <Link className="px-3" href={`/${locale}/${link.toLowerCase()}`}>
        {link}
      </Link>
      <div className="w-[1px] h-5 bg-dark-gray-700 inline-block"></div>
    </>
  );
}
