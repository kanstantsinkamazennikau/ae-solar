import { Dispatch, RefObject, SetStateAction } from "react";

export interface SelectedLanguageProps {
  locale: string;
  setIsSelection: Dispatch<SetStateAction<boolean>>;
  externalStyle?: string;
  dropdownRef: RefObject<HTMLDivElement>;
  mobileNavigation?: boolean;
}

export interface FlagsListProps {
  handleSelection: (locale: string) => void;
  mobileNavigation?: boolean;
}

export interface ChangeLocaleProps {
  mobileNavigation?: boolean;
}
