"use client";

import BuyerForm from "@/app/[locale]/components/common/BuyerForm";
import { ConsultFormFileds } from "@/app/[locale]/consult/types";
import {
  CONSULT_FORM_FIELDS,
  CONSULT_READY_TO_CONSULT,
  FORMS_FIELDS,
  PICKER_INPUT_VALUES,
} from "@/app/[locale]/utils/constants";
import { useSearchParams } from "next/navigation";
import { FieldValues, RegisterOptions } from "react-hook-form";

async function sendContactUsEmail(data: FieldValues) {
  const apiEndpoint = "/api/contact_us";

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

const patnerTypeMapping = {
  partner: "partnership",
  investor: "investing",
  installer: "installing",
};

export default function Consult() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const inputsRules: { [key in keyof ConsultFormFileds]: RegisterOptions } = {
    name: {
      required: "Name is required",
    },
    budget: {
      required: "Budget is required",
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Invalid email address",
      },
    },
    service: {
      required: "Service is required",
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
    [FORMS_FIELDS.interest]: type
      ? patnerTypeMapping[type as keyof typeof patnerTypeMapping]
      : PICKER_INPUT_VALUES[FORMS_FIELDS.interest][0],
    [FORMS_FIELDS.budget]: PICKER_INPUT_VALUES[FORMS_FIELDS.budget][0],
    [FORMS_FIELDS.email]: "",
    [FORMS_FIELDS.phone]: "",
    [FORMS_FIELDS.code]: "+49",
    [FORMS_FIELDS.comment]: "",
  };

  return (
    <div className="pb-20">
      <BuyerForm
        inputsRules={inputsRules as RegisterOptions}
        defaultValues={defaultValues}
        formFields={CONSULT_FORM_FIELDS}
        formHeader={CONSULT_READY_TO_CONSULT}
        isShowCloseIcon={false}
        submitFunction={sendContactUsEmail}
      />
    </div>
  );
}
