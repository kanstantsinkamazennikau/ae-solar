"use client";

import { ModelSpecsKeys } from "@/app/[locale]/calculate/components/ChooseModel/types";
import DocumentationLink from "@/app/[locale]/calculate/components/GeneratedModel/DocumentationLink";
import Accordion from "@/app/[locale]/components/common/Accordion";
import AccordionItem from "@/app/[locale]/components/common/Accordion/AccordionItem";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import {
  CONSTRUCTOR_MODELS_ADVANTAGES,
  CONSTRUCTOR_MODELS_SPECS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext, useState } from "react";

const advantagesWithIconMappping = {
  Benefit: "document.svg",
  "Documentation (pdf)": "file.svg",
};

export default function ModelSpecs() {
  const { constructorModel } = useContext(ConstructorContext);
  const modelSpecs = CONSTRUCTOR_MODELS_SPECS[constructorModel.model];
  const modelAdvantages = CONSTRUCTOR_MODELS_ADVANTAGES[constructorModel.model];
  const modelSpecsKeys = Object.keys(modelSpecs) as ModelSpecsKeys[];
  const specKeyWithAccordionTitleMapping = {
    materialCharacteristics: "Material Characteristics",
    certificates: "Certificates",
    packagingInformation: "Packaging Information",
    dimensionsImage: "Dimensions",
  };

  return (
    <BasicWidthContainer>
      <div className="flex xl:gap-[60px] lg:gap-[45px] md:gap-[30px] md:flex-row flex-col-reverse">
        <div
          className="
            xl:max-w-[400px]
            lg:max-w-[300px]
            md:max-w-[275px]
            lg:p-10
            md:p-5
            p-4
            flex
            flex-col
            lg:gap-8
            md:gap-5
            gap-4
            border
            border-solid
            border-[#191919]
            bg-[#0D0D0D]
            rounded-xl
            h-full
          "
        >
          {modelAdvantages.map(
            ({ advantageCategory, advantageDescription }) => (
              <div key={advantageCategory} className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Image
                    src={`/images/option/${
                      advantagesWithIconMappping[
                        advantageCategory as keyof typeof advantagesWithIconMappping
                      ]
                    }`}
                    alt={advantageCategory}
                    priority
                    width={24}
                    height={24}
                    className="inline-block"
                  />
                  <span className="leading-[120%] font-semibold [font-size:_clamp(14px,1.5vw,20px)]">
                    {advantageCategory}
                  </span>
                </div>
                <p className="[font-size:_clamp(11px,1.5vw,14px)] font-medium leading-[150%] font-walsheim text-dark-gray-900">
                  {Array.isArray(advantageDescription)
                    ? advantageDescription.map(({ datasheet, link }) => (
                        <DocumentationLink
                          key={datasheet}
                          datasheet={datasheet}
                          link={link}
                        />
                      ))
                    : advantageDescription}
                </p>
              </div>
            )
          )}
        </div>

        <div className="flex flex-col w-full">
          <Accordion multiple>
            {modelSpecsKeys.map((specKey) => {
              const styledTitle = (
                <p
                  className={`${"[font-size:_clamp(12px,1.5vw,20px)] leading-[100%] font-semibold"}`}
                >
                  {
                    specKeyWithAccordionTitleMapping[
                      specKey as keyof typeof specKeyWithAccordionTitleMapping
                    ]
                  }
                </p>
              );
              if (specKey === "materialCharacteristics") {
                const charactristicsKeys = Object.keys(modelSpecs[specKey]);
                return (
                  <AccordionItem key={specKey} title={styledTitle}>
                    <div className="pb-8">
                      {charactristicsKeys.map((characteristicKey) => {
                        return (
                          <div
                            key={characteristicKey}
                            className="flex items-start py-1 gap-5 border-b-[1px] border-dashed border-[#ffffff26]"
                          >
                            <div className="text-[#5A5A5A] [font-size:_clamp(12px,1.5vw,16px)] leading-[150%] font-normal min-w-[40%]">
                              {
                                modelSpecs[specKey][characteristicKey]
                                  .characteristic
                              }
                            </div>
                            <div className="[font-size:_clamp(12px,1.5vw,16px)] leading-[150%] font-normal">
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
                  <AccordionItem key={specKey} title={styledTitle}>
                    <div className="pb-8">
                      <div className="text-[#5A5A5A] [font-size:_clamp(12px,1.5vw,16px)] leading-[150%] font-normal min-w-[240px]">
                        {modelSpecs[specKey]}
                      </div>
                    </div>
                  </AccordionItem>
                );
              }
              if (specKey === "certificates") {
                return (
                  <AccordionItem key={specKey} title={styledTitle}>
                    <div className="pb-8">
                      <div className="text-[#5A5A5A] [font-size:_clamp(12px,1.5vw,16px)] leading-[150%] font-normal min-w-[240px]">
                        {modelSpecs[specKey]}
                      </div>
                    </div>
                  </AccordionItem>
                );
              }

              return (
                <AccordionItem key={specKey} title={styledTitle}>
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
