import { MobileNavigationProps } from "@/app/[locale]/components/common/Navigation/types";
import { Dispatch, RefObject, SetStateAction } from "react";

export interface SelectedLanguageProps {
  locale: string;
  setIsSelection: Dispatch<SetStateAction<boolean>>;
  externalStyle?: string;
  dropdownRef: RefObject<HTMLDivElement>;
  mobileNavigation?: boolean;
  languageText?: string;
}

export interface FlagsListProps {
  handleSelection: (locale: string) => void;
  mobileNavigation?: boolean;
  chooseLanguageText?: string;
}

export interface ChangeLocaleProps {
  mobileNavigation?: boolean;
  mobileNavigationLanguageSelectorText?: MobileNavigationProps;
}
