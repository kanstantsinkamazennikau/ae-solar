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

export interface PhoneNumberInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  externalStyle?: string;
  rule?: RegisterOptions;
  register: UseFormRegisterReturn<string>;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  name: string;
  setValue: UseFormSetValue<FieldValues>;
  showDot?: boolean;
}

export interface SelectedCodeWithFlagProps {
  code: string;
  setIsSelection: Dispatch<SetStateAction<boolean>>;
  externalStyle?: string;
  dropdownRef: RefObject<HTMLDivElement>;
}

export interface CodesListWithFlagsProps {
  handleSelection: (code: string) => void;
}
