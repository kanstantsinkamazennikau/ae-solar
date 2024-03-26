"use client";

import { Applications } from "@/app/[locale]/calculate/components/ChooseModel/types";
import CataloguePanelDetails from "@/app/[locale]/catalogue/components/Catalogue/CataloguePanelDetails";
import {
  CATALOGUE_SHOW_VALUES,
  CATALOGUE_SORT_VALUES,
  PAGE,
  PER_PAGE,
  POWER_RANGE_FROM,
  POWER_RANGE_TO,
  SORT_ORDER,
} from "@/app/[locale]/catalogue/constants";
import BlogPostPagination from "@/app/[locale]/company/news/components/BlogPostsPagination";
import Button from "@/app/[locale]/components/common/Button";
import Loader from "@/app/[locale]/components/common/Loader";
import {
  ConstructorContext,
  Model,
} from "@/app/[locale]/context/constructorContext";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { PRODUCT_CONCLUSION_TABLE_BODY } from "@/app/[locale]/products/[id]/constants";
import { CART_LOCALSTORAGE } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

export default function CataloguePanelsList() {
  const modelsListModelsKeys = useMemo(
    () => Object.keys(PRODUCT_CONCLUSION_TABLE_BODY) as Model[],
    []
  );
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );
  const sortOrder = params.get(SORT_ORDER) || CATALOGUE_SORT_VALUES[0].value;
  const itemsPerPage = params.get(PER_PAGE) || CATALOGUE_SHOW_VALUES[0].value;
  const page = params.get(PAGE) || 1;

  const {
    setModelsInBag,
    modelsInBag,
    isFilterModels,
    setIsFilterModels,
    isResetFilter,
    setIsResetFilter,
  } = useContext(ConstructorContext);
  const [modelsList, setModelsList] = useState<any[]>([]);
  const [modelsListLength, setModelsListLength] = useState<any[]>([]);

  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  useEffect(() => {
    if (isFilterModels || isResetFilter) {
      const powerRange = `${searchParams.get(POWER_RANGE_FROM) || 0}-${
        searchParams.get(POWER_RANGE_TO) || 10000
      }`;

      const searchParamsObjectWithValues = Object.fromEntries([
        ...Array.from(searchParams.entries())
          .filter(
            ([searchParam]) =>
              ![
                PER_PAGE,
                SORT_ORDER,
                POWER_RANGE_FROM,
                POWER_RANGE_TO,
                PAGE,
              ].includes(searchParam)
          )
          .map(([key, val]) => [
            key,
            val.split("&").map((val) => val.toLowerCase()),
          ]),
        ["powerRange", powerRange],
      ]);

      const sortedModulesByOrder = modelsListModelsKeys
        .map((modelKey) => PRODUCT_CONCLUSION_TABLE_BODY[modelKey].modules)
        .flat(1)
        .filter((item) => {
          if (isResetFilter) return true;
          return Object.keys(searchParamsObjectWithValues).every((key) => {
            if (["length", "width", "height"].includes(key)) {
              return (
                +item.moduleDimension[
                  key as keyof typeof item.moduleDimension
                ] > +searchParamsObjectWithValues[key][0]
              );
            }

            if (key === "powerRange") {
              const [paramsLowerPowerValue, paramsUpperPowerValue] =
                searchParamsObjectWithValues[key].split("-");
              const [moduleLowerPowerValue, moduleUpperPowerValue] =
                item[key].split("-");

              return (
                +moduleLowerPowerValue > +paramsLowerPowerValue &&
                +moduleUpperPowerValue < +paramsUpperPowerValue
              );
            }

            if (key === "applications") {
              return item[key].some((application: string) =>
                searchParamsObjectWithValues[key].includes(
                  application.toLowerCase()
                )
              );
            }

            return searchParamsObjectWithValues[key].includes(
              (item[key as keyof typeof item] as string).toLowerCase()
            );
          });
        });
      // .sort((module1, module2) => {
      //   if (sortOrder === "powerDESC") {
      //     const module1HighestPower = module1.powerRange.split("-")[1];
      //     const module2HighestPower = module2.powerRange.split("-")[1];
      //     return +module2HighestPower - +module1HighestPower;
      //   } else {
      //     const module1HighestPower = module1.powerRange.split("-")[0];
      //     const module2HighestPower = module2.powerRange.split("-")[0];
      //     return +module1HighestPower - +module2HighestPower;
      //   }
      // });

      setModelsListLength(sortedModulesByOrder);

      // setIsFilterModels(false);
    }
  }, [isFilterModels, isResetFilter, modelsListModelsKeys, searchParams]);

  useEffect(() => {
    modelsListLength.sort((module1, module2) => {
      if (sortOrder === "powerDESC") {
        const module1HighestPower = module1.powerRange.split("-")[1];
        const module2HighestPower = module2.powerRange.split("-")[1];
        return +module2HighestPower - +module1HighestPower;
      } else {
        const module1HighestPower = module1.powerRange.split("-")[0];
        const module2HighestPower = module2.powerRange.split("-")[0];
        return +module1HighestPower - +module2HighestPower;
      }
    });

    const modelsToDisplayOnPage = modelsListLength.slice(
      (+page - 1) * +itemsPerPage,
      +page * +itemsPerPage
    );
    if (+page > 1) {
      document
        .getElementById("panelsList")
        ?.scrollIntoView({ behavior: "smooth", inline: "start" });
    }

    setModelsList(modelsToDisplayOnPage);
    setIsFilterModels(false);
    setIsResetFilter(false);
  }, [itemsPerPage, modelsListLength, page, setIsFilterModels, sortOrder]);

  // useEffect(() => {
  //   // const searchParamsObject = {}
  //   // for (const [key, value] of searchParams.entries()) {
  //   //   searchParamsObject[key]: [value.split("&")]
  //   // }
  //   const powerRange = `${searchParams.get(POWER_RANGE_FROM) || 0}-${
  //     searchParams.get(POWER_RANGE_TO) || 10000
  //   }`;

  //   const searchParamsObjectWithValues = Object.fromEntries([
  //     ...Array.from(searchParams.entries())
  //       .filter(
  //         ([searchParam]) =>
  //           ![PER_PAGE, SORT_ORDER, POWER_RANGE_FROM, POWER_RANGE_TO].includes(
  //             searchParam
  //           )
  //       )
  //       .map(([key, val]) => [
  //         key,
  //         val.split("&").map((val) => val.toLowerCase()),
  //       ]),
  //     ["powerRange", powerRange],
  //   ]);
  //   console.log("searchParamsObjectWithValues", searchParamsObjectWithValues);

  //   // console.log(
  //   //   Object.fromEntries(
  //   //     Array.from(searchParams.entries()).map(([key, val]) => [
  //   //       key,
  //   //       val.split("&"),
  //   //     ])
  //   //   )
  //   // );
  //   // console.log(modelsList);
  //   console.log(searchParamsObjectWithValues);
  //   console.log(
  //     // (
  //     //   modelsListModelsKeys
  //     //     .map((modelKey) => PRODUCT_CONCLUSION_TABLE_BODY[modelKey].modules)
  //     //     .flat(1) as any[]
  //     // )

  //     modelsList.filter((item) => {
  //       return Object.keys(searchParamsObjectWithValues).every((key) => {
  //         if (["length", "width", "height"].includes(key)) {
  //           return (
  //             +item.moduleDimension[key] > +searchParamsObjectWithValues[key][0]
  //           );
  //         }

  //         if (key === "powerRange") {
  //           const [paramsLowerPowerValue, paramsUpperPowerValue] =
  //             searchParamsObjectWithValues[key].split("-");
  //           const [moduleLowerPowerValue, moduleUpperPowerValue] =
  //             item[key].split("-");

  //           return (
  //             +moduleLowerPowerValue > +paramsLowerPowerValue &&
  //             +moduleUpperPowerValue < +paramsUpperPowerValue
  //           );
  //         }

  //         return searchParamsObjectWithValues[key].includes(
  //           item[key].toLowerCase()
  //         );
  //       });
  //     })
  //   );
  // }, [modelsList, searchParams]);

  const addModelToBag = (
    techName: Model,
    model: string,
    cellType: string,
    moduleDesign: string,
    moduleColor: string,
    frameColor: string,
    moduleDimension: {
      length: string;
      width: string;
      height: string;
    },
    applications: Applications[],
    powerRange: string,
    backCover: string
  ) => {
    const [from, to] = powerRange.split("-");
    setModelsInBag((prevState) => {
      const modelsInBag = [
        ...prevState,
        {
          id: model,
          model: techName,
          solarCellTechnology: cellType,
          moduleSpecification: moduleDesign,
          moduleColor,
          frameColor,
          moduleDimension,
          applications,
          powerRange: {
            from,
            to,
          },
          backCover,
        },
      ];
      localStorage.setItem(CART_LOCALSTORAGE, JSON.stringify(modelsInBag));
      return modelsInBag;
    });
    toast.success(t("Successfully added to bag"));
  };

  const removeModel = (model: string) => {
    const remainingModels = modelsInBag.filter(({ id }) => id !== model);
    setModelsInBag(remainingModels);
    localStorage.setItem(CART_LOCALSTORAGE, JSON.stringify(remainingModels));
  };

  return isFilterModels ? (
    <Loader />
  ) : (
    <div>
      <div className="grid grid-cols-2 gap-10">
        {modelsList.map(
          ({
            techName,
            model,
            cellType,
            frameColor,
            links,
            moduleColor,
            moduleDimension,
            powerRange,
            moduleDesign,
            backCover,
            applications,
          }) => {
            const isAlreadyInBag = modelsInBag.some(({ id }) => id === model);
            return (
              <div className="flex flex-col" key={model}>
                <div className="flex gap-3 items-center">
                  <Image
                    src={`/images/models/${techName}.svg`}
                    alt={techName}
                    priority
                    width={40}
                    height={40}
                    className="md:h-10 md:w-10 h-[28px] w-[28px]"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="[font-size:_clamp(14px,2vw,24px)] leading-[100%] font-bold md:-tracking-[0.24px] ">
                      {techName}
                    </div>
                    <div className="[font-size:_clamp(12px,1.5vw,16px)] leading-[100%] font-bold md:-tracking-[0.16px] text-[#707070]">
                      {model}
                    </div>
                  </div>
                </div>
                <hr className="bg-[#191919] h-[1px] border-none w-full mt-3 mb-3" />
                <div className="flex lg:gap-3 gap-2 md:flex-row flex-col group/add">
                  <div className="flex justify-center items-end gap-5 lg:flex-row flex-col">
                    <div className="relative w-[160px] h-[216px]">
                      <Image
                        src={`/images/cart/${techName}.png`}
                        alt={techName}
                        priority
                        quality={100}
                        width={160}
                        height={176}
                        className="w-[160px] h-[216px]"
                      />
                      <div className="fade-strip-bottom max-h-[100px] max-w-[200px] !z-10" />
                      <Button
                        externalStyle={`
                          ${
                            isAlreadyInBag
                              ? "opacity-100 bg-[#3E0002] border-[#7B0004]"
                              : "opacity-0"
                          }
                          transition-[opacity]
                          duration-200
                          group-hover/add:opacity-100
                          !py-2
                          !px-4
                          !absolute
                          bottom-0
                          z-10
                          left-1/2
                          -translate-x-1/2
                        `}
                        style="outline"
                        onClick={() =>
                          isAlreadyInBag
                            ? removeModel(model)
                            : addModelToBag(
                                techName as Model,
                                model,
                                cellType,
                                moduleDesign,
                                moduleColor,
                                frameColor,
                                moduleDimension,
                                applications as Applications[],
                                powerRange,
                                backCover
                              )
                        }
                      >
                        <div
                          className="
                          flex
                          gap-1
                          items-center
                          w-max
                        "
                        >
                          <Image
                            src={`/images/cart.svg`}
                            alt={"cart"}
                            priority
                            width={24}
                            height={24}
                            className={`
                              ${
                                isAlreadyInBag &&
                                "[filter:invert(67%)_sepia(89%)_saturate(7492%)_hue-rotate(392deg)_brightness(84%)_contrast(146%)]"
                              }
                            `}
                          />
                          <p
                            className={`
                            ${isAlreadyInBag && "text-[#B30006]"}
                            [font-size:_clamp(12px,1.5vw,14px)]
                            md:-tracking-[0.14px]
                            font-semibold
                          `}
                          >
                            {t(!isAlreadyInBag ? "Add" : "Added")}
                          </p>
                        </div>
                      </Button>
                    </div>
                  </div>
                  <CataloguePanelDetails
                    {...{
                      cellType,
                      frameColor,
                      links,
                      moduleColor,
                      moduleDimension,
                      powerRange,
                      moduleDesign,
                    }}
                  />
                </div>
              </div>
            );
          }
        )}
      </div>
      <BlogPostPagination
        totalBlogPosts={modelsListLength.length}
        itemsPerPage={+itemsPerPage}
      />
    </div>
  );
}
