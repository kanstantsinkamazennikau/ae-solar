"use client";

import { CheckoutFormFileds } from "@/app/[locale]/cart/component/CheckoutForm/types";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import BuyerForm from "@/app/[locale]/components/common/BuyerForm";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import {
  CHECKOUT_FILL_OUT,
  CHECKOUT_FORM_FIELDS,
  FORMS_FIELDS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext } from "react";
import {
  FieldValues,
  RegisterOptions,
  SubmitHandler,
  useForm,
} from "react-hook-form";

export default function CheckoutForm() {
  const { setIsShowCheckoutForm } = useContext(ConstructorContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      [FORMS_FIELDS.name]: "",
      [FORMS_FIELDS.email]: "",
      [FORMS_FIELDS.phone]: "",
      [FORMS_FIELDS.code]: "+49",
    },
  });

  const onClose = () => {
    setIsShowCheckoutForm(false);
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

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="w-full flex justify-center items-center relative md:-top-[131px] h-screen md:-mb-[210px] -top-[64px] -mb-[144px]">
      <Image
        src="/images/cart/checkout.svg"
        alt="solar panel"
        priority
        width={1920}
        height={1080}
        className="object-fill h-full absolute "
      />
      <BasicWidthContainer>
        <div className="mt-28">
          <BuyerForm
            errors={errors}
            formFields={CHECKOUT_FORM_FIELDS}
            formHeader={CHECKOUT_FILL_OUT}
            handleSubmit={handleSubmit(onSubmit)}
            inputsRules={inputsRules as RegisterOptions}
            register={register}
            setValue={setValue}
            onClose={onClose}
          />
        </div>
      </BasicWidthContainer>
    </div>
  );
}
