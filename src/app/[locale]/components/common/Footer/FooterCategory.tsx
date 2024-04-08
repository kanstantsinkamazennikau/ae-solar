"use client";

import { FooterCategoryProps } from "@/app/[locale]/components/common/Footer/types";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function FooterCategory({ subMenu, text, url }: FooterCategoryProps) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");
  const contentHeight = useRef<HTMLDivElement>(null);
  const [isOpenItem, setIsOpenItem] = useState(false);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const onClick = () => {
    setIsOpenItem(!isOpenItem);
  };

  useEffect(() => {
    setHeight(contentHeight.current?.scrollHeight);
  }, []);

  return (
    <div className="flex flex-col min-[920px]:items-start items-start md:items-center z-10">
      {/* DESKTOP */}
      <div className="md:block hidden">
        <div className="text-dark-gray-900 mb-6 font-medium [font-size:_clamp(14px,2vw,24px)]">
          <span className="md:block hidden">{text}</span>
          <Link
            href={url}
            className="
          hover:text-base-red
            active::text-base-red
            md:hidden
            block
          "
          >
            {t(text)}
          </Link>
        </div>
        {subMenu.map(({ url, text }) => (
          <Link
            href={url}
            className="
            text-base
            mb-5
            md:block
            hidden
            [font-size:_clamp(14px,1vw,16px)]
            hover:text-base-red
            active::text-base-red
          "
            key={text}
          >
            {text}
          </Link>
        ))}
      </div>

      {/* MOBILE */}
      <div className="md:hidden block w-full">
        <div
          className="text-dark-gray-900 mb-6 font-medium [font-size:_clamp(14px,2vw,24px)] flex justify-between cursor-pointer"
          onClick={onClick}
        >
          <p
            className={`${
              isOpenItem ? "min-[500px]:text-white" : "text-dark-gray-900"
            }`}
          >
            {t(text)}
          </p>
          <Image
            className={`
              min-[500px]:hidden
              block
              ${
                isOpenItem
                  ? ""
                  : "invert-[70%] sepia-0 saturate-[1%] hue-rotate-[185deg] brightness-[89%] contrast-[86%]"
              }
            `}
            alt="arrow"
            src="/images/selectorWhite.svg"
            width={16}
            height={16}
          />
        </div>
        <div
          ref={contentHeight}
          style={isOpenItem ? { height } : { height: 0 }}
          className={`transition-all duration-[400ms] ease-in-out overflow-hidden flex flex-col`}
        >
          {subMenu.map(({ text, url }) => (
            <Link
              href={url}
              className="
                text-base
                mb-5
                [font-size:_clamp(14px,1vw,16px)]
                hover:text-base-red
                active::text-base-red
                min-[500px]:pl-0
                pl-4
              "
              key={text}
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
