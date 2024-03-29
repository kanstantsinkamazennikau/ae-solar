import { Dispatch, RefObject, SetStateAction } from "react";

export type Applications =
  | "Shade Resistant"
  | "Carport"
  | "PV-Thermal"
  | "Agri-Voltaics"
  | "Snow Resistant";

export interface CataloguePanelDetailsProps {
  cellType: string;
  moduleDesign: string;
  powerRange: string;
  moduleColor: string;
  frameColor: string;
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

export interface SortOption {
  label: string;
  value: string;
}
export interface SelectedSortOptionProps {
  selectedOption: SortOption;
  setIsSelection: Dispatch<SetStateAction<boolean>>;
  dropdownRef: RefObject<HTMLDivElement>;
  isSelection: boolean;
}

export interface OptionsSortProps {
  handleSelection: (option: SortOption) => void;
  optionsList: SortOption[];
}

export interface DropdownSortProps {
  param: string;
  title: string;
  dropDownValues: SortOption[];
  externalStyle: string;
}

export interface SectionHeaderProps {
  title: string;
  clarification?: string;
}
