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
    height: string;
  };
  powerRange: {
    from: string;
    to?: string;
  };
  applications?: Applications[];
}
export interface ConstructorModelWithId extends ConstructorModel {
  id: string | number;
}

export interface ConstructorContext {
  setConstructorModel: (model: any) => void;
  constructorModel: ConstructorModel;
  setIsFilterModels: (flag: boolean) => void;
  isFilterModels: boolean;
  setModelsInBag: Dispatch<SetStateAction<ConstructorModelWithId[]>>;
  modelsInBag: ConstructorModelWithId[];
  setIsBagLoading: (flag: boolean) => void;
  isBagLoading: boolean;
  setIsShowCheckoutForm: (flag: boolean) => void;
  isShowCheckoutForm: boolean;
  setSearchInputValue: Dispatch<SetStateAction<string>>;
  searchInputValue: string;
  isResetFilter: boolean;
  setIsResetFilter: Dispatch<SetStateAction<boolean>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
}

export const ConstructorContext = createContext<ConstructorContext>(null!);

export default function ConstructorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultModel = CONSTRUCTOR_MODELS_SPEC.Aurora.params;
  const [modelsInBag, setModelsInBag] = useState<ConstructorModelWithId[]>([]);
  const [isFilterModels, setIsFilterModels] = useState<boolean>(true);
  const [isResetFilter, setIsResetFilter] = useState<boolean>(false);
  const [isBagLoading, setIsBagLoading] = useState<boolean>(true);
  const [isShowCheckoutForm, setIsShowCheckoutForm] = useState<boolean>(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [error, setError] = useState("");
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
      height: "",
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
        height: "",
      },
      powerRange: {
        from: "",
        to: "",
      },
      applications: [selectedModelParams.applications.values[0]],
    });
    // setIsFilterModels(false);
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
        setIsFilterModels,
        isFilterModels,
        setModelsInBag,
        modelsInBag,
        setIsBagLoading,
        isBagLoading,
        setIsShowCheckoutForm,
        isShowCheckoutForm,
        searchInputValue,
        setSearchInputValue,
        isResetFilter,
        setIsResetFilter,
        error,
        setError,
      }}
    >
      {children}
    </ConstructorContext.Provider>
  );
}
