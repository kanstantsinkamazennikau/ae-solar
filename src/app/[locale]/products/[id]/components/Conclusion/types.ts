import { Applications } from "@/app/[locale]/calculate/components/ChooseModel/types";
import { Model } from "@/app/[locale]/context/constructorContext";

export interface ConclusionProps {
  id: Model;
}

export interface DestopTableRowProps {
  model: string;
  cellType: string;
  moduleDesign: string;
  powerRange: string;
  moduleColor: string;
  frameColor: string;
  applications: string[];
  backCover: string;
  moduleDimension: {
    length: string;
    width: string;
  };
  links: {
    tooltip: string;
    link: string;
    icon: string;
  }[];
  addModelToBag: (
    model: string,
    cellType: string,
    moduleDesign: string,
    moduleColor: string,
    frameColor: string,
    moduleDimension: {
      length: string;
      width: string;
    },
    applications: Applications[],
    powerRange: string,
    backCover: string
  ) => void;
  removeModel: (model: string) => void;
}
