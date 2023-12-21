"use client";

import { CONSTRUCTOR_MODELS_SPEC } from "@/app/[locale]/utils/constants";
import { createContext, useState } from "react";

export type Model = "Aurora" | "Comet" | "Meteor" | "Terra" | "Neptun" | "HSF";

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
}

export interface ConstructorContext {
  setConstructorModel: (model: any) => void;
  constructorModel: ConstructorModel;
}

export const ConstructorContext = createContext<ConstructorContext>(null!);

export default function ConstructorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultModel = CONSTRUCTOR_MODELS_SPEC.Aurora.params;
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
      to: defaultModel.powerRange.values.upperLimit,
    },
  });

  return (
    <ConstructorContext.Provider
      value={{
        constructorModel,
        setConstructorModel,
      }}
    >
      {children}
    </ConstructorContext.Provider>
  );
}
