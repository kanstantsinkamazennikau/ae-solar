export interface CataloguePanelDetailsProps {
  cellType: string;
  moduleDesign: string;
  powerRange: string;
  moduleColor: string;
  frameColor: string;
  moduleDimension: {
    length: string;
    width: string;
  };
  links: {
    tooltip: string;
    link: string;
    icon: string;
  }[];
}

export type PlaceToSearch = "applications" | "cellType";
export type Technology = "PERc" | "HJT" | "TOPCon" | "PV" | "Shade";

export interface FilterCheckboxProps {
  placeToSearch: string;
  technology: string;
  title: string;
  showModelIcon?: boolean;
  showColorIcon?: boolean;
}

export interface TechnologyFilterProps {
  checkboxesList: FilterCheckboxProps[];
  filterTitle?: string;
  subCategory?: string;
  showModelIcon?: boolean;
  showColorIcon?: boolean;
}
