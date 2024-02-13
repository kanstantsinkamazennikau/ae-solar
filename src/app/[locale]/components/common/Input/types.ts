import { InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  externalStyle?: string;
  externalContainerStyle?: string;
  rule?: RegisterOptions;
  register?: UseFormRegisterReturn<string>;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  name?: string;
  showDot?: boolean;
}
