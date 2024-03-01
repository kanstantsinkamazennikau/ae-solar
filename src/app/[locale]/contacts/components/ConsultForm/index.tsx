"use client";

import BuyerForm from "@/app/[locale]/components/common/BuyerForm";
import { ConsultFormFileds } from "@/app/[locale]/contacts/components/ConsultForm/types";
import { CONTACTS_WE_ARE_READY } from "@/app/[locale]/contacts/constants";
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

export default function ConsultForm() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const inputsRules: { [key in keyof ConsultFormFileds]: RegisterOptions } = {
    name: {
      required: "Name is required",
    },
    capacity: {
      required: "Capacity is required",
      pattern: {
        value: /^[0-9]+$/,
        message: "Please enter a number",
      },
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
    [FORMS_FIELDS.capacity]: "",
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
        formHeader={CONTACTS_WE_ARE_READY}
        isShowCloseIcon={false}
        submitFunction={sendContactUsEmail}
        hideBackgroundImage
        formHeaderStyle="
          [font-size:_clamp(30px,3vw,48px)!important]
          flex
          whitespace-break-spaces
          [&>*:first-child]:text-[#B30006]
          [&>div]:inline
          [&>div]:inline
          first:!inline
          !mb-10
          tracking-[0px]
        "
        hideDivider
        formStyles="!bg-[url('/images/getInTouchBackground.svg')] !rounded-[20px]"
        containerStyle="!min-h-full mt-0 !-top-[104px] [&_#loader]:!h-[200px]"
        basicWidthContainerStyles="!p-0"
        inputBorders="!border-[#2D2D2D]"
        agreementInputColor="border-dark-gray-900"
        agreementTextColor="text-dark-gray-900"
      />
    </div>
  );
}
