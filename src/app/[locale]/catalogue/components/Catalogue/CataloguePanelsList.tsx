"use client";

import CataloguePanelDetails from "@/app/[locale]/catalogue/components/Catalogue/CataloguePanelDetails";
import EmptyResult from "@/app/[locale]/catalogue/components/Catalogue/EmptyResult";
import { Applications } from "@/app/[locale]/catalogue/components/Catalogue/types";
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
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { PanelsListPrettyfiedResponse } from "@/app/[locale]/products/[id]/types";
import { CART_LOCALSTORAGE } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

export default function CataloguePanelsList({
  panelsList,
}: {
  panelsList: PanelsListPrettyfiedResponse[] | null;
}) {
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );
  const { translation } = useContext(i18nProviderContext);
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
    setIsShowFilterMenu,
  } = useContext(ConstructorContext);

  const [keepFiltering, setKeepFiltering] = useState(true);
  const [modelsListToDisplayOnPage, setModelsListToDisplayOnPage] = useState<
    any[]
  >([]);
  const [allModels, setAllModels] = useState<any[]>([]);

  useEffect(() => {
    if (isFilterModels || isResetFilter) {
      setKeepFiltering(true);
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

      const sortedModulesByOrder = panelsList?.filter((item) => {
        if (isResetFilter) return true;
        return Object.keys(searchParamsObjectWithValues).every((key) => {
          if (["length", "width", "height"].includes(key)) {
            return (
              +item.moduleDimension[key as keyof typeof item.moduleDimension] >=
              +searchParamsObjectWithValues[key][0]
            );
          }

          if (key === "powerRange") {
            const [paramsLowerPowerValue, paramsUpperPowerValue] =
              searchParamsObjectWithValues[key].split("-");
            const [moduleLowerPowerValue, moduleUpperPowerValue] =
              item[key].split("-");

            return (
              +moduleLowerPowerValue >= +paramsLowerPowerValue &&
              +moduleUpperPowerValue <= +paramsUpperPowerValue
            );
          }

          if (key === "model") {
            return item[key]
              .toLocaleLowerCase()
              .includes(searchParamsObjectWithValues[key][0]);
          }

          return searchParamsObjectWithValues[key].includes(
            (item[key as keyof typeof item] as string).toLowerCase()
          );
        });
      });
      setAllModels(sortedModulesByOrder || []);
      setKeepFiltering(false);
    }
  }, [isFilterModels, isResetFilter, panelsList, searchParams]);

  useEffect(() => {
    if (keepFiltering) return;
    setIsFilterModels(true);
    allModels.sort((module1, module2) => {
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

    let modelsToDisplayOnPage;
    if (itemsPerPage === "all") {
      modelsToDisplayOnPage = allModels.slice();
    } else {
      modelsToDisplayOnPage = allModels.slice(
        (+page - 1) * +itemsPerPage,
        +page * +itemsPerPage
      );
    }

    if (+page > 1) {
      document
        .getElementById("panelsList")
        ?.scrollIntoView({ behavior: "smooth", inline: "start" });
    }

    setModelsListToDisplayOnPage(modelsToDisplayOnPage);
    setIsFilterModels(false);
    setIsResetFilter(false);
  }, [
    itemsPerPage,
    allModels,
    page,
    setIsFilterModels,
    setIsResetFilter,
    sortOrder,
    keepFiltering,
  ]);

  useEffect(() => {
    return () => {
      setIsFilterModels(true);
      setIsShowFilterMenu(false);
    };
  }, [setIsFilterModels, setIsShowFilterMenu]);

  const addModelToBag = (
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
    applications: Applications,
    powerRange: string,
    backCover: string,
    techName?: Model
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
    toast.success(translation.successfullyAdded);
  };

  const removeModel = (model: string) => {
    const remainingModels = modelsInBag.filter(({ id }) => id !== model);
    setModelsInBag(remainingModels);
    localStorage.setItem(CART_LOCALSTORAGE, JSON.stringify(remainingModels));
  };

  return isFilterModels || keepFiltering ? (
    <Loader />
  ) : !!modelsListToDisplayOnPage.length ? (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-[60px] mb-14">
        {modelsListToDisplayOnPage.map(
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
                <div className="flex justify-between items-center">
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

                  <Button
                    externalStyle={`
                          ${
                            isAlreadyInBag
                              ? "bg-[#3E0002] border-[#7B0004]"
                              : ""
                          }
                          transition-[opacity]
                          duration-200
                          !py-1
                          !px-2
                          z-10
                          md:hidden
                        `}
                    style="outline"
                    onClick={() =>
                      isAlreadyInBag
                        ? removeModel(model)
                        : addModelToBag(
                            model,
                            cellType,
                            moduleDesign,
                            moduleColor,
                            frameColor,
                            moduleDimension,
                            applications as Applications,
                            powerRange,
                            backCover,
                            techName as Model
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
                        {translation[!isAlreadyInBag ? "add" : "added"]}
                      </p>
                    </div>
                  </Button>
                </div>
                <hr className="bg-[#191919] h-[1px] border-none w-full mt-3 mb-3" />
                <div className="flex lg:gap-3 gap-2 lg:flex-row flex-col group/add">
                  <div className="flex justify-center lg:items-end items-center gap-5 lg:flex-row flex-col">
                    <div className="relative md:w-[160px] md:h-[216px] w-[230px] h-[146px] overflow-hidden">
                      <Image
                        src={`/images/cart/${techName}.png`}
                        alt={techName}
                        priority
                        quality={100}
                        width={160}
                        height={176}
                        className="md:w-[160px] md:h-[216px] w-[230px] h-[254px]"
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
                          max-md:hidden
                        `}
                        style="outline"
                        onClick={() =>
                          isAlreadyInBag
                            ? removeModel(model)
                            : addModelToBag(
                                model,
                                cellType,
                                moduleDesign,
                                moduleColor,
                                frameColor,
                                moduleDimension,
                                applications as Applications,
                                powerRange,
                                backCover,
                                techName as Model
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
                            {translation[!isAlreadyInBag ? "add" : "added"]}
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
      <div className="mb-10">
        <BlogPostPagination
          totalBlogPosts={allModels.length}
          itemsPerPage={+itemsPerPage}
        />
      </div>
    </div>
  ) : (
    <EmptyResult />
  );
}
