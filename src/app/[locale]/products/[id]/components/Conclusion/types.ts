import { Applications } from "@/app/[locale]/catalogue/components/Catalogue/types";
import { Model } from "@/app/[locale]/context/ConstructorContext";
import { PanelsListPrettyfiedResponse } from "@/app/[locale]/products/[id]/types";

export interface ConclusionProps {
  id: Model;
  panelsList?: PanelsListPrettyfiedResponse[] | null;
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

export interface PanelsListResponseAttributes {
  attributes: {
    model: string;
    powerRange: string;
    moduleColor: {
      data: {
        id: 1;
        attributes: {
          color: string;
        };
      };
    };
    moduleDimension: {
      id: 1;
      length: string;
      width: string;
      height: string;
    };
    links: {
      tooltip: string;
      link: string;
      icon: string;
    }[];
    frameColor: {
      data: {
        attributes: {
          color: string;
        };
      };
    };
    cellType: {
      data: {
        attributes: {
          cell: string;
        };
      };
    };
    moduleDesign: {
      data: {
        attributes: {
          design: string;
        };
      };
    };
    backCover: {
      data: {
        attributes: {
          cover: string;
        };
      };
    };
    applications: {
      data: {
        attributes: {
          application: string;
        };
      };
    };
    techName: {
      data: {
        attributes: {
          techName: string;
        };
      };
    };
  };
}
