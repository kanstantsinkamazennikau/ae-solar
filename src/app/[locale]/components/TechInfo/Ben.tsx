"use client";

import BensPopUp from "@/app/[locale]/components/TechInfo/BensPopUp";
import { BenProps } from "@/app/[locale]/components/TechInfo/types";
import Button from "@/app/[locale]/components/common/Button";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Ben({
  title,
  description,
  image,
  isFullHeightRow,
}: BenProps) {
  const [isReadMoreVisible, setIsReadMoreVisible] = useState(false);
  const [isShowPopUp, setShowPopUp] = useState(false);

  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  const showPopUp = () => {
    setShowPopUp(true);
  };

  const hidePopUp = () => {
    setShowPopUp(false);
  };
  useEffect(() => {
    if (isShowPopUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isShowPopUp]);

  return (
    <>
      {isShowPopUp && (
        <BensPopUp
          onClose={hidePopUp}
          title={t(title)}
          fullDescription={t(description)}
        />
      )}
      <div
        onClick={showPopUp}
        className={`
          flex
          lg:p-8
          min-[500px]:px-4
          min-[500px]:py-8
          py-6
          px-6
          items-start
          self-stretch
          relative
          overflow-hidden
          bg-[#131313]
          rounded-[10px]
          hover:shadow-bens
          hover:outline-[3px]
          hover:outline-base-red
          outline-transparent
          hover:outline
          transition-all
          duration-200
          border
          border-solid
          cursor-pointer
          border-[#191919]
          ${
            isFullHeightRow
              ? "md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-3 min-[500px]:min-h-full min-h-[328px]"
              : "h-full xl:min-h-[340px]"
          }
        `}
        onMouseLeave={() => setIsReadMoreVisible(false)}
        onMouseEnter={() => setIsReadMoreVisible(true)}
      >
        <Image
          src={`/images/techInfo/${image}`}
          alt={image}
          width={408}
          height={408}
          priority
          className={`absolute
        ${
          isFullHeightRow
            ? "top-0 right-0 w-full h-full"
            : "-top-[50px] -right-[60px] stroke-white stroke-[4px] object-contain"
        }`}
        />
        {isFullHeightRow && (
          <Image
            src={`/images/techInfo/manufacturerSmall.png`}
            alt={image}
            width={328}
            height={300}
            priority
            className={`absolute top-0 right-0 w-full h-full md:hidden object-cover`}
          />
        )}
        <div
          className={`
          flex
          lg:gap-6
          gap-3
          min-[500px]:flex-col
          flex-row
          justify-center
          self-end
          z-[31]
          relative
          transition-all
          duration-500
          ${
            isFullHeightRow
              ? `items-start flex-col ${
                  isReadMoreVisible ? "top-0" : "top-[51px]"
                }`
              : `min-[500px]:items-start items-center ${
                  isReadMoreVisible
                    ? "min-[500px]:top-0"
                    : "min-[500px]:top-[51px]"
                }`
          }
          `}
        >
          <div
            className={`leading-[120%] font-medium ${
              isFullHeightRow
                ? "[word-spacing:normal] [font-size:_clamp(26px,2.5vw,48px)]"
                : "min-[500px]:[word-spacing:normal] [font-size:_clamp(14px,2.5vw,32px)]"
            }`}
          >
            {t(title)}
          </div>
          <div
            className={`
            text-base
            leading-[150%]
            font-medium
            font-walsheim
            ${isFullHeightRow ? "text-white" : "text-dark-gray-900"}
            [font-size:_clamp(12px,1.5vw,16px)]
            ${isFullHeightRow ? "block" : "min-[500px]:block hidden"}

          `}
          >
            {/* {description} */}
            {t(description).split(" ").slice(0, 14).join(" ") + "..."}
          </div>

          <div
            className={`
            whitespace-nowrap
            transition-all
            duration-500
            ${
              isReadMoreVisible
                ? "translate-x-0"
                : "translate-x-[200%] -mr-10 min-[500px]:translate-x-0 min-[500px]:-mr-0"
            }
          `}
          >
            <div className="flex justify-center items-center gap-2 cursor-pointer">
              <Button style="textOnly" externalStyle="!p-0">
                <div
                  className={`text-base-red [font-size:_clamp(14px,1vw,16px)]`}
                >
                  {t("Read More")}
                </div>
                <Image
                  src="/images/techInfo/expand.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                  priority
                />
              </Button>
            </div>
          </div>
        </div>
        {isFullHeightRow && (
          <div className="fade-strip-bottom !h-[150px] left-0" />
        )}
      </div>
    </>
  );
}
