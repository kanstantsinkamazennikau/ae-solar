import {
  Dispatch,
  InputHTMLAttributes,
  RefObject,
  SetStateAction,
} from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  RegisterOptions,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";

export interface DropdownInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  externalStyle?: string;
  rule?: RegisterOptions;
  register?: UseFormRegisterReturn<string>;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  name: string;
  dropDownValues: { label: string; value: string }[];
  setValue: UseFormSetValue<FieldValues>;
}

export interface OptionsProps {
  handleSelection: (option: string) => void;
  optionsList: { label: string; value: string }[];
}

export interface SelectedOptionProps {
  selectedOption: string;
  setIsSelection: Dispatch<SetStateAction<boolean>>;
  externalStyle?: string;
  dropdownRef: RefObject<HTMLDivElement>;
  placeholder?: string;
}
