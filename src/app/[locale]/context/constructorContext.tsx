"use client";

import { Applications } from "@/app/[locale]/calculate/components/ChooseModel/types";
import { CONSTRUCTOR_MODELS_SPEC } from "@/app/[locale]/utils/constants";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export type Model = "Aurora" | "Comet" | "Meteor" | "Terra" | "Neptune" | "HSF";

export interface ConstructorModel {
  model: Model;
  solarCellTechnology: string;
  moduleSpecification: string;
  moduleColor: string;
  backCover: string;
  frameColor: string;
  moduleDimension: {
    length: string;
    width: string;
  };
  powerRange: {
    from: string;
    to?: string;
  };
  applications: Applications[];
}

export interface ConstructorContext {
  setConstructorModel: (model: any) => void;
  constructorModel: ConstructorModel;
  setIsGenerateModel: (flag: boolean) => void;
  isGenerateModel: boolean;
  setModelsInBag: Dispatch<SetStateAction<ConstructorModel[]>>;
  modelsInBag: ConstructorModel[];
}

export const ConstructorContext = createContext<ConstructorContext>(null!);

export default function ConstructorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultModel = CONSTRUCTOR_MODELS_SPEC.Aurora.params;
  const [modelsInBag, setModelsInBag] = useState<ConstructorModel[]>([]);
  const [isGenerateModel, setIsGenerateModel] = useState<boolean>(false);
  const [constructorModel, setConstructorModel] = useState<ConstructorModel>({
    model: "Aurora",
    solarCellTechnology: defaultModel.solarCellTechnology.values[0],
    moduleSpecification: defaultModel.moduleSpecification.values[0],
    moduleColor: defaultModel.moduleColor.values[0].color,
    backCover: defaultModel.backCover.values[0],
    frameColor: defaultModel.frameColor.values[0].color,
    moduleDimension: {
      length: defaultModel.moduleDimension.values.lowerLimit,
      width: defaultModel.moduleDimension.values.upperLimit!,
    },
    powerRange: {
      from: defaultModel.powerRange.values.lowerLimit,
      to: "",
    },
    applications: [defaultModel.applications.values[0]],
  });

  console.log(constructorModel);

  useEffect(() => {
    const selectedModelParams =
      CONSTRUCTOR_MODELS_SPEC[constructorModel.model].params;
    setConstructorModel({
      model: constructorModel.model,
      solarCellTechnology: selectedModelParams.solarCellTechnology.values[0],
      moduleSpecification: selectedModelParams.moduleSpecification.values[0],
      moduleColor: selectedModelParams.moduleColor.values[0].color,
      backCover: selectedModelParams.backCover.values[0],
      frameColor: selectedModelParams.frameColor.values[0].color,
      moduleDimension: {
        length: selectedModelParams.moduleDimension.values.lowerLimit,
        width: selectedModelParams.moduleDimension.values.upperLimit!,
      },
      powerRange: {
        from: selectedModelParams.powerRange.values.lowerLimit,
        to: "",
      },
      applications: [selectedModelParams.applications.values[0]],
    });
    //@ts-ignore
    setModelsInBag((prevState) => [
      ...prevState,
      {
        applications: ["Shade Resistant", "Shade Resistant", "Shade Resistant"],
        backCover: "Glass",
        frameColor: "Black",
        model: "Aurora",
        moduleColor: "Transparent",
        moduleDimension: { length: "4000", width: "5000" },
        moduleSpecification: "Mono-Facial",
        powerRange: { from: "100", to: "1000" },
        solarCellTechnology: "PERc",
      },
      {
        applications: ["Shade Resistant"],
        backCover: "Glass",
        frameColor: "Black",
        model: "Neptune",
        moduleColor: "Transparent",
        moduleDimension: { length: "4000", width: "5000" },
        moduleSpecification: "Mono-Facial",
        powerRange: { from: "100", to: "1000" },
        solarCellTechnology: "PERc",
      },
    ]);
    setIsGenerateModel(false);
  }, [constructorModel.model]);

  return (
    <ConstructorContext.Provider
      value={{
        setConstructorModel,
        constructorModel,
        setIsGenerateModel,
        isGenerateModel,
        setModelsInBag,
        modelsInBag,
      }}
    >
      {children}
    </ConstructorContext.Provider>
  );
}
