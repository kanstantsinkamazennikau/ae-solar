"use client";

import { Applications } from "@/app/[locale]/catalogue/components/Catalogue/types";
import { CART_LOCALSTORAGE } from "@/app/[locale]/utils/constants";
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
  model: Model | undefined;
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
  setIsFilterModels: (flag: boolean) => void;
  isFilterModels: boolean;
  setModelsInBag: Dispatch<SetStateAction<ConstructorModelWithId[]>>;
  modelsInBag: ConstructorModelWithId[];
  setIsBagLoading: (flag: boolean) => void;
  isBagLoading: boolean;
  setIsShowCheckoutForm: (flag: boolean) => void;
  isShowCheckoutForm: boolean;
  setIsResetFilter: Dispatch<SetStateAction<boolean>>;
  isResetFilter: boolean;
  setError: Dispatch<SetStateAction<string>>;
  error: string;
  setIsShowFilterMenu: Dispatch<SetStateAction<boolean>>;
  isShowFilterMenu: boolean;
}

export const ConstructorContext = createContext<ConstructorContext>(null!);

export default function ConstructorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modelsInBag, setModelsInBag] = useState<ConstructorModelWithId[]>([]);
  const [isFilterModels, setIsFilterModels] = useState<boolean>(true);
  const [isResetFilter, setIsResetFilter] = useState<boolean>(false);
  const [isShowFilterMenu, setIsShowFilterMenu] = useState<boolean>(false);
  const [isBagLoading, setIsBagLoading] = useState<boolean>(true);
  const [isShowCheckoutForm, setIsShowCheckoutForm] = useState<boolean>(false);
  const [error, setError] = useState("");

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
        setIsFilterModels,
        isFilterModels,
        setModelsInBag,
        modelsInBag,
        setIsBagLoading,
        isBagLoading,
        setIsShowCheckoutForm,
        isShowCheckoutForm,
        isResetFilter,
        setIsResetFilter,
        error,
        setError,
        setIsShowFilterMenu,
        isShowFilterMenu,
      }}
    >
      {children}
    </ConstructorContext.Provider>
  );
}
