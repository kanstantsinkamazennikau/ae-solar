"use client";

import { Applications } from "@/app/[locale]/calculate/components/ChooseModel/types";
import CataloguePanelDetails from "@/app/[locale]/catalogue/components/Catalogue/CataloguePanelDetails";
import Button from "@/app/[locale]/components/common/Button";
import {
  ConstructorContext,
  Model,
} from "@/app/[locale]/context/constructorContext";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { useServerTranslation } from "@/app/[locale]/i18n/server";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { PRODUCT_CONCLUSION_TABLE_BODY } from "@/app/[locale]/products/[id]/constants";
import { CART_LOCALSTORAGE } from "@/app/[locale]/utils/constants";
import getLocale from "@/app/[locale]/utils/getLocale";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function CataloguePanelsList() {
  const { setModelsInBag, modelsInBag } = useContext(ConstructorContext);
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  const modelsListModelsKeys = Object.keys(
    PRODUCT_CONCLUSION_TABLE_BODY
  ) as Model[];

  const addModelToBag = (
    modelKey: Model,
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
          model: modelKey,
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

  return (
    <div className="grid grid-cols-2 gap-10">
      {modelsListModelsKeys.map((modelKey) =>
        PRODUCT_CONCLUSION_TABLE_BODY[modelKey].modules.map(
          ({
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
                    src={`/images/models/${modelKey}.svg`}
                    alt={modelKey}
                    priority
                    width={40}
                    height={40}
                    className="md:h-10 md:w-10 h-[28px] w-[28px]"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="[font-size:_clamp(14px,2vw,24px)] leading-[100%] font-bold md:-tracking-[0.24px] ">
                      {modelKey}
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
                        src={`/images/cart/${modelKey}.png`}
                        alt={modelKey}
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
                                modelKey,
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
        )
      )}
    </div>
  );
}

{
  /* <div className="flex justify-center items-center gap-5 lg:flex-row flex-col">
  <div className="flex items-center gap-3 lg:min-w-[200px] xl:min-w-[260px]">
    <Image
      src={`/images/models/${modelInBag.model}.svg`}
      alt={modelInBag.model}
      priority
      width={48}
      height={48}
      className="md:h-12 md:w-12 h-[28px] w-[28px]"
    />
    <div className="[font-size:_clamp(22px,2.5vw,36px)] leading-[120%] font-bold -tracking-[0.4px] ">
      {modelInBag.model}
    </div>
  </div>
  <div className="relative">
    <Image
      src={`/images/cart/${modelInBag.model}.png`}
      alt={modelInBag.model}
      priority
      quality={100}
      width={200}
      height={20}
    />
    <div className="fade-strip-bottom max-h-[100px] max-w-[200px]"></div>
  </div>
</div>; */
}
