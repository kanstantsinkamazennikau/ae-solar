"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import LinkWithArrow from "@/app/[locale]/components/common/LinkWithArrow";
import {
  TECH_INFO_CLOSE,
  TECH_INFO_READ_MORE,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Ben({
  title,
  description,
  image,
  isFullHeightRow,
  link,
  fullDescription,
}: BenProps) {
  const [isReadMoreVisible, setIsReadMoreVisible] = useState(false);
  const [isShowPopUp, setShowPopUp] = useState(false);

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
        <div className="fixed justify-center z-[40] flex w-full top-0 left-0 h-full items-center">
          <div
            className="bg-[#000000bf] backdrop-blur-md absolute w-full h-full"
            onClick={hidePopUp}
          />
          <BasicWidthContainer styles="">
            <div
              className="
                justify-center
                bg-[#131313]
                flex
                flex-col
                w-full
                mx-auto
                max-w-[1320px]
                h-[700px]
                rounded-xl
                border
                border-solid
                border-[#191919]
                relative
              "
            >
              <Image
                src={`/images/techInfo/popUpHeader.png`}
                alt={image}
                width={1320}
                height={300}
                priority
                className="min-h-[160px] rounded-xl"
              />
              <div className="absolute top-[30px] right-[30px]">
                <Button externalStyle="!py-2 !px-3" onClick={hidePopUp}>
                  <div className="flex justify-center items-center gap-1">
                    {TECH_INFO_CLOSE}
                    <Image
                      src={`/images/close.svg`}
                      alt="close"
                      priority
                      width={20}
                      height={20}
                    />
                  </div>
                </Button>
              </div>

              <div className="w-full md:p-8 p-4 overflow-y-scroll bensPopUp relative overflow-x-hidden">
                <Image
                  src={`/images/techInfo/fadeBackground.svg`}
                  alt={image}
                  width={408}
                  height={408}
                  priority
                  className={`-top-32 -right-1/4 w-full h-full absolute`}
                />
                <div className="leading-[110%] font-semibold [font-size:_clamp(24px,3vw,48px)] mt-5 mb-6">
                  {title}
                </div>

                {fullDescription?.split(/\r?\n|\r|\n/g).map((string) => (
                  <p
                    key={string}
                    className="mb-6 last:mb-0 [font-size:_clamp(14px,1.5vw,20px)] font-walsheim"
                  >
                    {string}
                  </p>
                ))}
              </div>
            </div>
          </BasicWidthContainer>
        </div>
      )}
      <div
        key={title}
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
        }`}
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
            : "-top-[50px] -right-[60px] stroke-white stroke-[4px] object-none"
        }`}
        />
        {isFullHeightRow && (
          <Image
            src={`/images/techInfo/manufacturer1.png`}
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
            className={`leading-[120%] font-medium [font-size:_clamp(14px,2.5vw,32px)] ${
              isFullHeightRow
                ? "[word-spacing:normal]"
                : "min-[500px]:[word-spacing:normal]"
            }`}
          >
            {title}
          </div>
          <div
            className={`
            text-base
            leading-[150%]
            font-medium
            font-walsheim
            text-dark-gray-900
            [font-size:_clamp(12px,1.5vw,16px)]
            ${isFullHeightRow ? "block" : "min-[500px]:block hidden"}

          `}
          >
            {/* {description} */}
            {description.split(" ").slice(0, 14).join(" ") + "..."}
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
              <Button style="textOnly" externalStyle="!p-0" onClick={showPopUp}>
                <div
                  className={`text-base-red [font-size:_clamp(14px,1vw,16px)]`}
                >
                  {TECH_INFO_READ_MORE}
                </div>
                <Image
                  src="/images/redArrowRight.svg"
                  alt="arrow"
                  width={8}
                  height={8}
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
