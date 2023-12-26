"use client";

import { FooterCategoryProps } from "@/app/[locale]/components/common/Footer/types";
import Link from "next/link";
import { useParams } from "next/navigation";

export function FooterCategory({ category, links }: FooterCategoryProps) {
  const locale = useParams()?.locale;

  return (
    <div className="flex flex-col w-[180px]">
      <div className="text-dark-gray-900 text-2xl mb-6 font-medium">
        {category}
      </div>
      {links.map((link) => (
        <Link
          href={`/${locale}/${link.toLowerCase()}`}
          className="text-base mb-4"
          key={link}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
