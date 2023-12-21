export interface SectionHeaderProps {
  title: string;
  clarification: string;
}

export type ConstructorParams =
  | "slider"
  | "color"
  | "range/power"
  | "range/dimension";
export type ConstructorSubCategory = "power" | "dimension";

export interface ColorInterface {
  color: string;
  icon: string;
}

export interface RangeInterface {
  measure1: string;
  measure2: string;
  lowerLimit: string;
  upperLimit?: string;
}

export interface PanelParams {
  [key: string]: {
    panelTechnology: string;
    params: {
      solarCellTechnology: {
        type: ConstructorParams;
        text: string;
        clarification?: string;
        values: string[];
      };
      moduleSpecification: {
        type: string;
        text: string;
        clarification?: string;
        values: string[];
      };
      moduleColor: {
        type: string;
        text: string;
        clarification?: string;
        values: ColorInterface[];
      };
      backCover: {
        type: string;
        text: string;
        clarification?: string;
        values: string[];
      };
      frameColor: {
        type: string;
        text: string;
        clarification?: string;
        values: ColorInterface[];
      };
      moduleDimension: {
        type: string;
        text: string;
        clarification?: string;
        values: RangeInterface;
      };
      powerRange: {
        type: string;
        text: string;
        clarification?: string;
        values: RangeInterface;
      };
    };
    applications: string[];
  };
}
