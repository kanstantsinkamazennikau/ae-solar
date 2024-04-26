import { Applications } from "@/app/[locale]/catalogue/components/Catalogue/types";
import { Model } from "@/app/[locale]/context/constructorContext";

export interface ProductPageProps {
  params: {
    id: "Aurora" | "Comet" | "Meteor" | "ShadeStar" | "Neptune" | "Terra";
  };
}

export interface LayoutProps extends ProductPageProps {
  children: React.ReactNode;
}

export interface PanelsListPrettyfiedResponse {
  techName: Model;
  model: string;
  cellType: string;
  moduleDesign: string;
  powerRange: string;
  moduleColor: string;
  frameColor: string;
  backCover: string;
  applications: Applications;
  moduleDimension: {
    length: string;
    width: string;
    height: string;
  };
  links: [
    {
      tooltip: string;
      link: string;
      icon: string;
    }
  ];
}
