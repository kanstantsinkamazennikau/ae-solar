"use client";

import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import {
  DocumentsTypesOther,
  DocumentsTypesPresentation,
} from "@/app/[locale]/documents/components/types";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { romanize } from "@/app/[locale]/utils/romanize";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Fragment, useContext, useEffect, useRef, useState } from "react";

export default function Categories() {
  const {
    selectedCategoryIndex,
    onCategoryClick,
    documentsFile,
    documentsType,
    setSelectedCategoryIndex,
  } = useContext(DocumentsContext);

  const contentHeight = useRef<HTMLDivElement>(null);
  const [isOpenItem, setIsOpenItem] = useState(false);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  const onClick = () => {
    setIsOpenItem(!isOpenItem);
  };

  useEffect(() => {
    setHeight(contentHeight.current?.scrollHeight);
  }, []);

  return (
    <div
      className="
        flex
        flex-col
        min-[920px]:sticky
        min-[920px]:top-[84px]
        top-[68px]
        w-full
        min-[920px]:min-w-[300px]
        min-[920px]:max-w-[300px]
        max-[920px]:mt-4
      "
    >
      {!!documentsFile?.length && (
        <>
          <Image
            src={`/images/documents/folderTop.svg`}
            alt="folderTop"
            width={300}
            height={80}
            priority
            className="w-full min-w-[300px] max-w-[300px] min-[920px]:block hidden"
          />
          <div className="absolute top-4 w-full px-7 min-[920px]:block hidden">
            <p className="font-semibold text-[#505050] [font-size:_clamp(12px,1.5vw,16px)] leading-[120%] mb-4">
              {t("Categories")}
            </p>
            <hr className="bg-option-border h-[1px] border-none w-full" />
          </div>
          {/* DESKTOP */}
          <div
            className="
              pt-0
              px-7
              pb-7
              border-t-0
              border
              border-solid
            border-[#131313]
            bg-[#0D0D0D]
              relative
              -top-[10px]
              rounded-tl-none
              rounded-tr-none
              rounded-xl
              font-semibold
              [font-size:_clamp(12px,1.5vw,16px)]
              leading-[120%]
              min-w-[300px]
              max-w-[300px]
              min-[920px]:block hidden
            "
          >
            {
              //@ts-ignore
              documentsFile?.map(({ category, subCategories }, index) => {
                const isSelectedcategory = selectedCategoryIndex === index;
                return (
                  <Fragment key={index}>
                    <Link
                      href={`#${index}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onCategoryClick(index);
                        documentsType === "documents" &&
                          setSelectedCategoryIndex(index);
                      }}
                    >
                      <div
                        className={`
                        ${
                          isSelectedcategory
                            ? "text-white"
                            : "text-dark-gray-900"
                        } 
                        mt-4
                        flex
                        gap-4
                        justify-between
                        items-center
                      `}
                      >
                        <div className="max-w-[215px]">
                          {documentsType !== "publishers_info" ? (
                            t(category)
                          ) : (
                            <div className="flex gap-1">
                              <div className="min-w-[20px]">
                                {romanize(index + 1)}.
                              </div>
                              <div>{t(category)}</div>
                            </div>
                          )}
                        </div>
                        {isSelectedcategory && (
                          <Image
                            src={`/images/selector.svg`}
                            alt="folderTop"
                            width={16}
                            height={16}
                          />
                        )}
                      </div>
                    </Link>
                    {subCategories && (
                      <div
                        className={`
                        pl-4
                        border-solid
                        border-l-2
                        border-[#191919]
                        pt-2
                        flex
                        flex-col
                        gap-3
                        mt-2
                        ${
                          isSelectedcategory
                            ? "text-white"
                            : "text-dark-gray-900"
                        } 
                      `}
                      >
                        {(
                          subCategories as (
                            | DocumentsTypesPresentation
                            | DocumentsTypesOther
                          )[]
                        ).map(({ category }) => (
                          <Link
                            href={`#${category}`}
                            key={category}
                            onClick={(e) => {
                              e.preventDefault();
                              onCategoryClick(index, category);
                              documentsType === "documents" &&
                                setSelectedCategoryIndex(index);
                            }}
                          >
                            {t(category)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </Fragment>
                );
              })
            }
          </div>

          {/* MOBILE */}
          <div
            className="
              p-4
              border
              border-solid
            border-[#131313]
            bg-[#0D0D0D]
              relative
              -top-[10px]
              rounded-xl
              font-semibold
              [font-size:_clamp(12px,1.5vw,16px)]
              leading-[120%]
              w-full
              min-[920px]:hidden block
              items-center
              cursor-pointer
            "
            onClick={onClick}
          >
            <div
              className="
                flex
                gap-4
                justify-between
                items-center
              "
            >
              {t(documentsFile[selectedCategoryIndex]?.category)}
              <Image
                src={`/images/selectorWhite.svg`}
                alt="selectorWhite"
                width={16}
                height={16}
              />
            </div>
            <div
              ref={contentHeight}
              className={`transition-all duration-[400ms] ease-in-out overflow-hidden`}
              style={isOpenItem ? { height } : { height: 0 }}
            >
              {
                //@ts-ignore
                documentsFile.map(({ category, subCategories }, index) => {
                  const isSelectedcategory =
                    selectedCategoryIndex === index && !subCategories;
                  if (isSelectedcategory) return;
                  return (
                    <Fragment key={index}>
                      <Link
                        href={`#${index}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onCategoryClick(index);
                          setIsOpenItem(false);
                          setSelectedCategoryIndex(index);
                        }}
                      >
                        <div
                          className={`
                          ${
                            isSelectedcategory
                              ? "text-white"
                              : "text-dark-gray-900"
                          }  
                            mt-4
                            flex
                            gap-4
                            justify-between
                            items-center
                          `}
                        >
                          <div className="max-w-[215px]">
                            {documentsType !== "publishers_info" ? (
                              t(category)
                            ) : (
                              <div className="flex gap-1">
                                <div className="min-w-[20px]">
                                  {romanize(index + 1)}.
                                </div>
                                <div>{t(category)}</div>
                              </div>
                            )}
                          </div>
                          {isSelectedcategory && (
                            <Image
                              src={`/images/selector.svg`}
                              alt="selector"
                              width={16}
                              height={16}
                            />
                          )}
                        </div>
                      </Link>
                      {subCategories && (
                        <div
                          className={`
                            pl-4
                            border-solid
                            border-l-2
                            border-[#191919]
                            pt-2
                            flex
                            flex-col
                            gap-3
                            mt-2
                            ${
                              isSelectedcategory
                                ? "text-white"
                                : "text-dark-gray-900"
                            } 
                          `}
                        >
                          {(
                            subCategories as (
                              | DocumentsTypesPresentation
                              | DocumentsTypesOther
                            )[]
                          ).map(({ category }) => (
                            <Link
                              href={`#${category}`}
                              key={category}
                              onClick={(e) => {
                                e.preventDefault();
                                onCategoryClick(index, category);
                                documentsType === "documents" &&
                                  setSelectedCategoryIndex(index);
                              }}
                            >
                              {t(category)}
                            </Link>
                          ))}
                        </div>
                      )}
                    </Fragment>
                  );
                })
              }
            </div>
          </div>
        </>
      )}
    </div>
  );
}
