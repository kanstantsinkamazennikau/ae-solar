"use client";

import { CheckoutFormFileds } from "@/app/[locale]/cart/components/CheckoutForm/types";
import BuyerForm from "@/app/[locale]/components/common/BuyerForm";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import {
  CART_LOCALSTORAGE,
  CHECKOUT_FILL_OUT,
  CHECKOUT_FORM_FIELDS,
  FORMS_FIELDS,
} from "@/app/[locale]/utils/constants";
import { useContext } from "react";
import { FieldValues, RegisterOptions } from "react-hook-form";
import { toast } from "react-toastify";

export default function CheckoutForm() {
  const { modelsInBag, setModelsInBag } = useContext(ConstructorContext);

  const sendCheckoutEmail = async (data: FieldValues) => {
    const apiEndpoint = "/api/checkout";

    try {
      const res = await fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify({ ...data, modelsInBag }),
      });

      setModelsInBag([]);
      localStorage.setItem(CART_LOCALSTORAGE, JSON.stringify([]));
      // toast.success("Thank You! We are Contact You Soon");
      if (!res.ok) throw new Error("Something went wrong");
    } catch (err) {
      throw err;
    }
  };

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
    [FORMS_FIELDS.comment]: "",
  };

  return (
    <div className="pb-20">
      <BuyerForm
        inputsRules={inputsRules as RegisterOptions}
        defaultValues={defaultValues}
        formFields={CHECKOUT_FORM_FIELDS}
        formHeader={CHECKOUT_FILL_OUT}
        submitFunction={sendCheckoutEmail}
        hideBackgroundImage
        formHeaderStyle="
          [font-size:_clamp(30px,3vw,48px)!important]
          flex
          flex-col
          whitespace-break-spaces
          [&>*:first-child]:text-[#9A9A9A]
          [&>div]:block
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
        isShowCloseIcon={false}
      />
    </div>
  );
}
