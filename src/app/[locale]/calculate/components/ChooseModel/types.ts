import { Dispatch, SetStateAction } from "react";

export type ConstructorParams =
  | "slider"
  | "color"
  | "range/power"
  | "range/dimension";
export type ConstructorSubCategory = "power" | "dimension";
export type SliderParamsKey =
  | "solarCellTechnology"
  | "moduleSpecification"
  | "backCover";
export type ColorParamsKey = "moduleColor" | "frameColor";
export type RangeParamsKey = "moduleDimension" | "powerRange";
export type ObjectKeys<T> = {
  [K in keyof T]: T[K] extends { [key: string]: any } ? K : never;
}[keyof T];
export type Applications =
  | "Shade Resistant"
  | "Carport"
  | "PV-Thermal"
  | "Agri-Voltaics";

export interface SectionHeaderProps {
  title: string;
  clarification?: string;
}
export interface ColorInterface {
  color: string;
  icon: string;
}

export interface RangeInterface<Tname1, Tname2> {
  measure1: string;
  measure2: string;
  lowerLimit: string;
  name1: Tname1;
  name2: Tname2;
  upperLimit?: string;
}

export interface SliderProps {
  text: string;
  values: string[];
  paramsKey: SliderParamsKey;
}

export interface ColorProps {
  text: string;
  values: {
    color: string;
    icon: string;
  }[];
  paramsKey: ColorParamsKey;
}

export interface CalculateError {
  power: {
    from?: string;
    to?: string;
  };
  dimension: {
    width?: string;
    length?: string;
  };
}

export interface RangeProps {
  text: string;
  clarification?: string;
  values: RangeInterface<"length", "width"> | RangeInterface<"from", "to">;
  paramsKey: RangeParamsKey;
  rangeSubCategory: "dimension" | "power";
  setError: Dispatch<SetStateAction<CalculateError>>;
}

export interface ApplicationsCheckboxes {
  text: string;
  clarification?: string;
  values: Applications[];
}

export interface PanelParams {
  [key: string]: {
    panelTechnology: string;
    params: {
      solarCellTechnology: {
        type: "slider";
        text: string;
        clarification?: string;
        values: string[];
      };
      moduleSpecification: {
        type: "slider";
        text: string;
        clarification?: string;
        values: string[];
      };
      moduleColor: {
        type: "color";
        text: string;
        clarification?: string;
        values: ColorInterface[];
      };
      backCover: {
        type: "slider";
        text: string;
        clarification?: string;
        values: string[];
      };
      frameColor: {
        type: "color";
        text: string;
        clarification?: string;
        values: ColorInterface[];
      };
      moduleDimension: {
        type: "range/dimension";
        text: string;
        clarification?: string;
        values: RangeInterface<"length", "width">;
      };
      powerRange: {
        type: "range/power";
        text: string;
        clarification?: string;
        values: RangeInterface<"from", "to">;
      };
      applications: {
        type: "applications";
        text: string;
        clarification?: string;
        values: Applications[];
      };
    };
  };
}

export interface ApplicationStandard {
  type: Applications;
  clarification: string;
}

export type ModelSpecsKeys =
  | "materialCharacteristics"
  | "packagingInformation"
  | "dimensionsImage"
  | "certificates";
export interface ModelsSpecs {
  [key: string]: {
    materialCharacteristics: {
      [key: string]: {
        characteristic: string;
        value: string;
      };
    };
    packagingInformation: string;
    dimensionsImage: string;
    certificates: string;
  };
}
