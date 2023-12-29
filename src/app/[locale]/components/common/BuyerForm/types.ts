import {
  FORMS_FIELDS,
  FORM_FIELDS_INPUT_TYPES,
} from "@/app/[locale]/utils/constants";
import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  SubmitHandler,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";

type FormFieldName = keyof typeof FORMS_FIELDS;
type FormFieldType = keyof typeof FORM_FIELDS_INPUT_TYPES;

export interface FormFileds {
  formTitle: string;
  placeholder: string;
  name: FormFieldName;
  type: FormFieldType;
}

export interface BuyerFormProps {
  formHeader: string;
  formFields: FormFileds[];
  register: UseFormRegister<FieldValues>;
  inputsRules: RegisterOptions;
  errors: FieldErrors<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  handleSubmit: () => void;
  onClose: () => void;
}
