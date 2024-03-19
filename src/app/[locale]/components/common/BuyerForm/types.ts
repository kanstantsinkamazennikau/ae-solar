import {
  FORMS_FIELDS,
  FORM_FIELDS_INPUT_TYPES,
} from "@/app/[locale]/utils/constants";
import { ReactElement } from "react";
import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

type FormFieldName = keyof typeof FORMS_FIELDS;
type FormFieldType = keyof typeof FORM_FIELDS_INPUT_TYPES;

export interface FormFileds {
  formTitle: string;
  placeholder?: string;
  name: FormFieldName;
  type: FormFieldType;
}

export interface BuyerFormProps {
  submitFunction: (data: FieldValues) => Promise<void>;
  formHeader: string | ReactElement<any, any>;
  formFields: FormFileds[];
  defaultValues: {
    [key: string]: string;
  };
  inputsRules: RegisterOptions;
  isShowCloseIcon?: boolean;
  hideBackgroundImage?: boolean;
  formHeaderStyle?: string;
  hideDivider?: boolean;
  formStyles?: string;
  containerStyle?: string;
  basicWidthContainerStyles?: string;
  inputBorders?: string;
  agreementTextColor?: string;
  agreementInputColor?: string;
}

export interface InputsProps {
  formHeader: string | ReactElement<any, any>;
  formFields: FormFileds[];
  register: UseFormRegister<FieldValues>;
  inputsRules: RegisterOptions;
  errors: FieldErrors<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  handleSubmit: () => void;
  onClose: () => void;
  getValues: UseFormGetValues<FieldValues>;
  isShowCloseIcon: boolean;
  formHeaderStyle?: string;
  hideDivider?: boolean;
  formStyles?: string;
  inputBorders?: string;
  agreementTextColor?: string;
  agreementInputColor?: string;
}
