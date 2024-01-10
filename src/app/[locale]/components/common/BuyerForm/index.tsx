"use client";

import { CheckoutFormFileds } from "@/app/[locale]/cart/component/CheckoutForm/types";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import Inputs from "@/app/[locale]/components/common/BuyerForm/Inputs";
import { BuyerFormProps } from "@/app/[locale]/components/common/BuyerForm/types";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import {
  CHECKOUT_FILL_OUT,
  CHECKOUT_FORM_FIELDS,
  CHECKOUT_GO_TO_HOME_PAGE,
  CHECKOUT_THANK_YOU,
  FORMS_FIELDS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import {
  FieldValues,
  RegisterOptions,
  SubmitHandler,
  useForm,
} from "react-hook-form";

export default function BuyerForm({
  inputsRules,
  defaultValues,
  formFields,
  formHeader,
  isShowCloseIcon = true,
}: BuyerFormProps) {
  const locale = useParams()?.locale;
  const router = useRouter();
  const { setIsShowCheckoutForm } = useContext(ConstructorContext);
  const [isShowMessageAfterSubmit, setIsShowMessageAfterSubmit] =
    useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FieldValues>({
    defaultValues,
  });

  const onClose = () => {
    setIsShowCheckoutForm(false);
  };

  const handleClick = () => {
    router.push(`/${locale}/`);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsShowMessageAfterSubmit(true);
    console.log(data);
  };

  return (
    <div className="w-full flex justify-center items-center relative min-h-screen -top-[64px] -mb-[144px]">
      <Image
        src={`${
          isShowMessageAfterSubmit
            ? "/images/cart/submittedFormBack.svg"
            : "/images/cart/checkout.svg"
        }`}
        alt="solar panel"
        priority
        width={1920}
        height={1080}
        className="object-fill h-full absolute"
      />
      <BasicWidthContainer>
        <div className="mt-[135px] mb-4">
          {isShowMessageAfterSubmit ? (
            <div
              className="
              relative
              flex
              flex-col
              justify-center
              items-center
              gap-10
            "
            >
              <div
                className="
                [font-size:_clamp(32px,5vw,96px)]
                font-extrabold
                leading-[100%]
                -tracking-[2.88px]
              text-white
                text-center
              "
              >
                {CHECKOUT_THANK_YOU.split(/\r?\n|\r|\n/g).map(
                  (string, index) => (
                    <div
                      key={string}
                      className={`${index === 0 ? "text-dark-gray-900" : ""}`}
                    >
                      {string}
                    </div>
                  )
                )}
              </div>
              <Button
                style="outline"
                size="thin"
                showArrow
                onClick={handleClick}
              >
                {CHECKOUT_GO_TO_HOME_PAGE}
              </Button>
            </div>
          ) : (
            <Inputs
              errors={errors}
              formFields={formFields}
              formHeader={formHeader}
              handleSubmit={handleSubmit(onSubmit)}
              inputsRules={inputsRules as RegisterOptions}
              register={register}
              setValue={setValue}
              onClose={onClose}
              getValues={getValues}
              isShowCloseIcon={isShowCloseIcon}
            />
          )}
        </div>
      </BasicWidthContainer>
    </div>
  );
}
