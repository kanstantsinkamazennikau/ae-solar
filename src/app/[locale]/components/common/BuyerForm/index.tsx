"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import Inputs from "@/app/[locale]/components/common/BuyerForm/Inputs";
import { BuyerFormProps } from "@/app/[locale]/components/common/BuyerForm/types";
import Loader from "@/app/[locale]/components/common/Loader";
import { ConstructorContext } from "@/app/[locale]/context/ConstructorContext";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import {
  FieldValues,
  RegisterOptions,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Trans } from "react-i18next";
import { toast } from "sonner";

export default function BuyerForm({
  inputsRules,
  defaultValues,
  formFields,
  formHeader,
  isShowCloseIcon = true,
  submitFunction,
  hideBackgroundImage = false,
  formHeaderStyle,
  hideDivider,
  formStyles,
  containerStyle,
  basicWidthContainerStyles,
  inputBorders,
  agreementInputColor,
  agreementTextColor,
}: BuyerFormProps) {
  const locale = useParams()?.locale;
  const { translation } = useContext(i18nProviderContext);
  const router = useRouter();
  const { setIsShowCheckoutForm } = useContext(ConstructorContext);
  const [isShowMessageAfterSubmit, setIsShowMessageAfterSubmit] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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
    try {
      setLoading(true);
      await submitFunction(data);
      setIsShowMessageAfterSubmit(true);
    } catch (error) {
      toast.error((error as Error).message, { duration: 3000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`
        w-full
        flex
        justify-center
        items-center
        relative
        min-h-screen
        min-[920px]:-top-[80px]
        min-[920px]:-mb-[160px]
        -top-[64px]
        -mb-[144px]
        overflow-hidden
        ${containerStyle}
      `}
    >
      {!hideBackgroundImage && (
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
          className={`
            object-fill
            h-full
            absolute
            w-full
            ${
              isShowMessageAfterSubmit
                ? `translate-y-[40px] lg:scale-100 min-[640px]:scale-[1.25] min-[500px]:scale-[1.5] scale-[1.95]`
                : `translate-y-[80px] lg:scale-100 min-[640px]:scale-150 min-[500px]:scale-[2.25] scale-[2.75]`
            }
          
        `}
        />
      )}
      <BasicWidthContainer styles={basicWidthContainerStyles}>
        <div className="mt-[95px] mb-4">
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
                  [font-size:_clamp(26px,5vw,96px)]
                  font-extrabold
                  leading-[100%]
                  -tracking-[2.88px]
                text-white
                  text-center
                "
              >
                <Trans
                  components={{
                    br: <p />,
                  }}
                >
                  {translation.weContactYou}
                </Trans>
              </div>
              <Button
                style="outline"
                externalStyle="!py-[9px] !px-[26px]"
                showArrow
                onClick={handleClick}
              >
                {translation.goToHomepage}
              </Button>
            </div>
          ) : loading ? (
            <Loader />
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
              hideDivider={hideDivider}
              formHeaderStyle={formHeaderStyle}
              formStyles={formStyles}
              inputBorders={inputBorders}
              agreementInputColor={agreementInputColor}
              agreementTextColor={agreementTextColor}
            />
          )}
        </div>
      </BasicWidthContainer>
    </div>
  );
}
