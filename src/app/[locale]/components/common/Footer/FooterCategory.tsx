"use client";

import { FooterCategoryProps } from "@/app/[locale]/components/common/Footer/types";
import Link from "next/link";
import { useParams } from "next/navigation";

export function FooterCategory({ category, links }: FooterCategoryProps) {
  const locale = useParams()?.locale;

  return (
    <div className="flex flex-col min-[920px]:items-start items-start min-[500px]:items-center z-10">
      <div className="text-dark-gray-900 mb-6 font-medium [font-size:_clamp(14px,2vw,24px)]">
        <span className="md:block hidden">{category.title}</span>
        <Link
          href={category.link}
          className="
          hover:text-base-red

            active::text-base-red
            md:hidden
            block
          "
        >
          {category.title}
        </Link>
      </div>
      {links.map(({ title, link }) => (
        <Link
          href={link}
          className="
            text-base
            mb-5
            md:block
            hidden
            [font-size:_clamp(14px,1vw,16px)]
            hover:text-base-red
            active::text-base-red
          "
          key={title}
        >
          {title}
        </Link>
      ))}
    </div>
  );
}
