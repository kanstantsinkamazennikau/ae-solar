import { CheckoutFormFileds } from "@/app/[locale]/cart/components/CheckoutForm/types";
import BuyerForm from "@/app/[locale]/components/common/BuyerForm";
import {
  CHECKOUT_FILL_OUT,
  CHECKOUT_FORM_FIELDS,
  FORMS_FIELDS,
} from "@/app/[locale]/utils/constants";
import { FieldValues, RegisterOptions } from "react-hook-form";

async function sendCheckoutEmail(data: FieldValues) {
  const apiEndpoint = "/api/checkout";

  try {
    const res = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Something went wrong");
  } catch (err) {
    throw err;
  }
}

export default function CheckoutForm() {
  const inputsRules: { [key in keyof CheckoutFormFileds]: RegisterOptions } = {
    name: {
      required: "Name is required",
    },
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
    [FORMS_FIELDS.email]: "",
    [FORMS_FIELDS.phone]: "",
    [FORMS_FIELDS.code]: "+49",
  };

  return (
    <div className="pb-20">
      <BuyerForm
        inputsRules={inputsRules as RegisterOptions}
        defaultValues={defaultValues}
        formFields={CHECKOUT_FORM_FIELDS}
        formHeader={CHECKOUT_FILL_OUT}
        submitFunction={sendCheckoutEmail}
      />
    </div>
  );
}
