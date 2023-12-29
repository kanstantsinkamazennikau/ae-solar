import { InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldErrors,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  RegisterOptions,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  externalStyle?: string;
  rule?: RegisterOptions;
  register: UseFormRegisterReturn<string>;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  name: string;
  setValue: UseFormSetValue<FieldValues>;
}
