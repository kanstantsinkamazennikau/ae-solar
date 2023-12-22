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

export interface RangeInterface<Tname1, Tname2> {
  measure1: string;
  measure2: string;
  lowerLimit: string;
  name1: Tname1;
  name2: Tname2;
  upperLimit?: string;
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
    };
    applications: string[];
  };
}
