"use client";

import { ModelSpecsKeys } from "@/app/[locale]/calculate/components/ChooseModel/types";
import Accordion from "@/app/[locale]/components/common/Accordion";
import AccordionItem from "@/app/[locale]/components/common/Accordion/AccordionItem";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import {
  CONSTRUCTOR_MODELS_ADVANTAGES,
  CONSTRUCTOR_MODELS_SPECS,
  FAQ_ACCORDION_DATA,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext } from "react";

export default function ModelSpecs() {
  const { constructorModel } = useContext(ConstructorContext);
  const modelSpecs = CONSTRUCTOR_MODELS_SPECS[constructorModel.model];
  const modelSpecsKeys = Object.keys(modelSpecs) as ModelSpecsKeys[];
  console.log(modelSpecsKeys);

  return (
    <BasicWidthContainer>
      <div className="flex gap-[60px]">
        <div className="max-w-[400px] p-10 flex flex-col gap-8 border border-solid border-[#191919] bg-[#0D0D0D] rounded-xl h-full">
          {CONSTRUCTOR_MODELS_ADVANTAGES.map(
            ({ icon, advantageCategory, advantageDescription }) => (
              <div key={advantageCategory} className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Image
                    src={`/images/option/${icon}`}
                    alt={icon}
                    priority
                    width={24}
                    height={24}
                    className="inline-block"
                  />
                  <span className="text-xl leading-[120%] font-semibold">
                    {advantageCategory}
                  </span>
                </div>
                <p className="text-sm font-medium leading-[150%] font-walsheim text-dark-gray-900">
                  {advantageDescription}
                </p>
              </div>
            )
          )}
          <Image
            src={`/images/option/frauhofer.svg`}
            alt={"frauhofer"}
            priority
            width={288}
            height={65}
            className="inline-block"
          />
        </div>

        <div className="flex flex-col w-full">
          <Accordion multiple>
            {modelSpecsKeys.map((specKey) => {
              if (specKey === "materialCharacteristics") {
                const charactristicsKeys = Object.keys(modelSpecs[specKey]);
                return (
                  <AccordionItem
                    key={specKey}
                    title="Material Characteristics"
                    style="small"
                  >
                    <div className="pb-8">
                      {charactristicsKeys.map((characteristicKey) => {
                        return (
                          <div
                            key={characteristicKey}
                            className="flex items-start py-1 gap-5 border-b-[1px] border-dashed border-[#ffffff26]"
                          >
                            <div className="text-[#5A5A5A] text-base leading-[150%] font-normal min-w-[240px]">
                              {
                                modelSpecs[specKey][characteristicKey]
                                  .characteristic
                              }
                            </div>
                            <div className="text-base leading-[150%] font-normal">
                              {modelSpecs[specKey][characteristicKey].value}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </AccordionItem>
                );
              }
              if (specKey === "packagingInformation") {
                return (
                  <AccordionItem
                    key={specKey}
                    title="Packaging Information"
                    style="small"
                  >
                    <div className="pb-8">
                      <div className="text-[#5A5A5A] text-base leading-[150%] font-normal min-w-[240px]">
                        {modelSpecs[specKey]}
                      </div>
                    </div>
                  </AccordionItem>
                );
              }
              if (specKey === "certificates") {
                return (
                  <AccordionItem
                    key={specKey}
                    title="Certificates"
                    style="small"
                  >
                    <div className="pb-8">
                      <div className="text-[#5A5A5A] text-base leading-[150%] font-normal min-w-[240px]">
                        {modelSpecs[specKey]}
                      </div>
                    </div>
                  </AccordionItem>
                );
              }

              return (
                <AccordionItem key={specKey} title="Dimensions" style="small">
                  <div className="pb-8">
                    <Image
                      src={`/images/option/${modelSpecs[specKey]}`}
                      alt={modelSpecs[specKey]}
                      priority
                      width={455}
                      height={433}
                      className="inline-block"
                    />
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </BasicWidthContainer>
  );
}
