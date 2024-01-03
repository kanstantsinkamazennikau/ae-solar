import { InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  RegisterOptions,
  UseFormGetValues,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";

export interface PickerInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  externalStyle?: string;
  register?: UseFormRegisterReturn<string>;
  name: string;
  setValue: UseFormSetValue<FieldValues>;
  pickerValues: string[];
  getValues: UseFormGetValues<FieldValues>;
}
