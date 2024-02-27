"use client";

import { Applications } from "@/app/[locale]/calculate/components/ChooseModel/types";
import {
  CART_LOCALSTORAGE,
  CONSTRUCTOR_MODELS_SPEC,
} from "@/app/[locale]/utils/constants";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export type Model =
  | "Aurora"
  | "Comet"
  | "Meteor"
  | "Terra"
  | "Neptune"
  | "ShadeStar";

export enum ModelsEnum {
  Aurora = "Aurora",
  Comet = "Comet",
  Meteor = "Meteor",
  Terra = "Terra",
  Neptune = "Neptune",
  ShadeStar = "ShadeStar",
}

export interface ConstructorModel {
  model: Model | "";
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
interface ConstructorModelWithId extends ConstructorModel {
  id: number;
}

export interface ConstructorContext {
  setConstructorModel: (model: any) => void;
  constructorModel: ConstructorModel;
  setIsGenerateModel: (flag: boolean) => void;
  isGenerateModel: boolean;
  setModelsInBag: Dispatch<SetStateAction<ConstructorModelWithId[]>>;
  modelsInBag: ConstructorModelWithId[];
  setIsBagLoading: (flag: boolean) => void;
  isBagLoading: boolean;
  setIsShowCheckoutForm: (flag: boolean) => void;
  isShowCheckoutForm: boolean;
}

export const ConstructorContext = createContext<ConstructorContext>(null!);

export default function ConstructorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultModel = CONSTRUCTOR_MODELS_SPEC.Aurora.params;
  const [modelsInBag, setModelsInBag] = useState<ConstructorModelWithId[]>([]);
  const [isGenerateModel, setIsGenerateModel] = useState<boolean>(false);
  const [isBagLoading, setIsBagLoading] = useState<boolean>(true);
  const [isShowCheckoutForm, setIsShowCheckoutForm] = useState<boolean>(false);
  const [constructorModel, setConstructorModel] = useState<ConstructorModel>({
    model: "",
    solarCellTechnology: defaultModel.solarCellTechnology.values[0],
    moduleSpecification: defaultModel.moduleSpecification.values[0],
    moduleColor: defaultModel.moduleColor.values[0].color,
    backCover: defaultModel.backCover.values[0],
    frameColor: defaultModel.frameColor.values[0].color,
    moduleDimension: {
      length: "",
      width: "",
    },
    powerRange: {
      from: "",
      to: "",
    },
    applications: [defaultModel.applications.values[0]],
  });

  useEffect(() => {
    const selectedModelParams =
      CONSTRUCTOR_MODELS_SPEC[constructorModel?.model]?.params;

    if (!selectedModelParams) return;
    setConstructorModel({
      model: constructorModel.model,
      solarCellTechnology: selectedModelParams.solarCellTechnology.values[0],
      moduleSpecification: selectedModelParams.moduleSpecification.values[0],
      moduleColor: selectedModelParams.moduleColor.values[0].color,
      backCover: selectedModelParams.backCover.values[0],
      frameColor: selectedModelParams.frameColor.values[0].color,
      moduleDimension: {
        length: "",
        width: "",
      },
      powerRange: {
        from: "",
        to: "",
      },
      applications: [selectedModelParams.applications.values[0]],
    });
    setIsGenerateModel(false);
  }, [constructorModel.model]);

  useEffect(() => {
    const cartItemsFromLocalStorage = localStorage.getItem(CART_LOCALSTORAGE);
    if (cartItemsFromLocalStorage) {
      setModelsInBag(JSON.parse(cartItemsFromLocalStorage));
    }
    setIsBagLoading(false);
  }, []);

  return (
    <ConstructorContext.Provider
      value={{
        setConstructorModel,
        constructorModel,
        setIsGenerateModel,
        isGenerateModel,
        setModelsInBag,
        modelsInBag,
        setIsBagLoading,
        isBagLoading,
        setIsShowCheckoutForm,
        isShowCheckoutForm,
      }}
    >
      {children}
    </ConstructorContext.Provider>
  );
}
