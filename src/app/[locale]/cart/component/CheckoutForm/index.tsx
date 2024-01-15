import { CheckoutFormFileds } from "@/app/[locale]/cart/component/CheckoutForm/types";
import BuyerForm from "@/app/[locale]/components/common/BuyerForm";
import {
  CHECKOUT_FILL_OUT,
  CHECKOUT_FORM_FIELDS,
  FORMS_FIELDS,
  PICKER_INPUT_VALUES,
} from "@/app/[locale]/utils/constants";
import { RegisterOptions } from "react-hook-form";

export default function CheckoutForm() {
  const inputsRules: { [key in keyof CheckoutFormFileds]: RegisterOptions } = {
    name: {
      required: "Name is required",
    },
    interest: { required: "Interest is required" },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Invalid email address",
      },
    },

    phone: {
      required: "Phone number is required",
      pattern: {
        value: /^[0-9]+$/,
        message: "Please enter a number",
      },
    },
  };

  const defaultValues = {
    [FORMS_FIELDS.name]: "",
    [FORMS_FIELDS.interest]: PICKER_INPUT_VALUES[FORMS_FIELDS.interest][0],
    [FORMS_FIELDS.email]: "",
    [FORMS_FIELDS.phone]: "",
    [FORMS_FIELDS.code]: "+49",
  };

  return (
    <BuyerForm
      inputsRules={inputsRules as RegisterOptions}
      defaultValues={defaultValues}
      formFields={CHECKOUT_FORM_FIELDS}
      formHeader={CHECKOUT_FILL_OUT}
    />
  );
}
