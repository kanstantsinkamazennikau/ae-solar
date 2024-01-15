"use client";

import Button from "@/app/[locale]/components/common/Button";
import { FooterCategoryProps } from "@/app/[locale]/components/common/Footer/types";
import Input from "@/app/[locale]/components/common/Input";
import {
  FOOTER_SUBSCRIBE,
  FOOTER_SUBSCRIBE_NEWSLETTER,
  FOOTER_YOUR_EMAIL,
} from "@/app/[locale]/utils/constants";
import Link from "next/link";
import { useParams } from "next/navigation";

export function FooterCategory({ category, links }: FooterCategoryProps) {
  const locale = useParams()?.locale;

  return (
    <div className="flex flex-col min-[920px]:items-start items-start min-[500px]:items-center">
      <div className="text-dark-gray-900 mb-6 font-medium [font-size:_clamp(14px,2vw,24px)]">
        {category}
      </div>
      {links.map((link) => (
        <Link
          href={`/${locale}/${link.toLowerCase()}`}
          className="text-base mb-5 md:block hidden [font-size:_clamp(14px,1vw,16px)]"
          key={link}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
