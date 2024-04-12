import { Applications } from "@/app/[locale]/catalogue/components/Catalogue/types";
import { Model } from "@/app/[locale]/context/constructorContext";

export interface ConclusionProps {
  id: Model;
}

export interface DesktopTableRowProps {
  model: string;
  cellType: string;
  moduleDesign: string;
  powerRange: string;
  moduleColor: string;
  frameColor: string;
  applications: Applications;
  backCover: string;
  moduleDimension: {
    length: string;
    width: string;
    height: string;
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
      height: string;
    },
    applications: Applications,
    powerRange: string,
    backCover: string,
    techName?: Model
  ) => void;
  removeModel: (model: string) => void;
  isShowDimensions?: boolean;
}
