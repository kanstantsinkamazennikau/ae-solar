"use client";

import Button from "@/app/[locale]/components/common/Button";
import { InputsProps } from "@/app/[locale]/components/common/BuyerForm/types";
import DropdownInput from "@/app/[locale]/components/common/DropdownInput";
import Input from "@/app/[locale]/components/common/Input";
import PhoneNumberInput from "@/app/[locale]/components/common/PhoneNumberInput";
import PickerInput from "@/app/[locale]/components/common/PickerInput";
import TextArea from "@/app/[locale]/components/common/TextArea";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import {
  DROPDOWN_INPUT_VALUES,
  PICKER_INPUT_VALUES,
} from "@/app/[locale]/utils/constants";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function BuyerForm({
  formHeader,
  formHeaderStyle,
  formFields,
  register,
  inputsRules,
  errors,
  setValue,
  handleSubmit,
  onClose,
  getValues,
  isShowCloseIcon,
  hideDivider = false,
  formStyles,
  inputBorders,
  agreementTextColor,
  agreementInputColor,
}: InputsProps) {
  const [agreement, setAgreement] = useState(false);

  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  const onChangeAgreement = () => {
    setAgreement((prevState) => !prevState);
  };

  return (
    <form
      className={`
        xl:px-14
        xl:py-14
        lg:px-12
        lg:py-12
        md:px-10
        md:py-10
        px-5
        py-8
        flex
        flex-col
        border
        border-solid
        border-[#131313]
        rounded-[40px]
        bg-[#000000b3]
        backdrop-blur-[50px]
        relative
        max-w-[1080px]
        mx-auto
        my-0
        ${formStyles}
      `}
    >
      {isShowCloseIcon && (
        <Image
          src={`/images/close.svg`}
          alt="glow"
          priority
          width={32}
          height={32}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={onClose}
        />
      )}

      <div
        className={`
          [font-size:_clamp(32px,5vw,80px)]
          font-extrabold
          leading-[100%]
          -tracking-[2.88px]
          text-white
          mb-5
          ${formHeaderStyle}
        
        `}
      >
        {formHeader}
      </div>
      {!hideDivider && (
        <Image
          src={`/images/glowFull.png`}
          alt="glow"
          priority
          width={1320}
          height={60}
          className="mt-2 rotate-180"
        />
      )}
      <div className="flex flex-col gap-3 mb-2 ">
        {formFields.map((inputField) => {
          if (inputField.type === "input")
            return (
              <div
                key={inputField.name}
                className="
                  flex
                  min-[1380px]:content-center
                  min-[1380px]:items-end
                  content-start
                  min-[1380px]:gap-3 gap-0
                  self-stretch
                  [font-size:_clamp(20px,2.5vw,30px)]
                  min-[1380px]:flex-row
                  flex-col
                  flex-nowrap
                "
              >
                <span className="font-semibold leading-[120%] xl:whitespace-nowrap">
                  {t(inputField.formTitle)}
                </span>
                <Input
                  externalStyle={`font-light leading-[120%] pr-3 placeholder:[font-size:_clamp(20px,2vw,30px)] ${inputBorders} placeholder:text-[#505050]`}
                  externalContainerStyle="!w-full"
                  name={inputField.name}
                  placeholder={t(inputField.placeholder || "")}
                  register={register(
                    inputField.name,
                    inputsRules[inputField.name as keyof typeof inputsRules]
                  )}
                  error={errors?.[inputField.name]}
                />
              </div>
            );
          if (inputField.type === "dropdown")
            return (
              <div
                key={inputField.name}
                className="flex items-center content-center min-[1380px]:gap-3 gap-0 self-stretch flex-wrap [font-size:_clamp(20px,2.5vw,30px)]"
              >
                <span className="font-semibold leading-[120%]">
                  {t(inputField.formTitle)}
                </span>
                <DropdownInput
                  externalStyle="font-light leading-[120%] pr-3 placeholder:[font-size:_clamp(20px,2.5vw,30px)]"
                  name={inputField.name}
                  placeholder={t(inputField.placeholder || "")}
                  setValue={setValue}
                  register={register(
                    inputField.name,
                    inputsRules[inputField.name as keyof typeof inputsRules]
                  )}
                  error={errors?.[inputField.name]}
                  dropDownValues={DROPDOWN_INPUT_VALUES[inputField.name]}
                />
              </div>
            );
          if (inputField.type === "picker")
            return (
              <div
                key={inputField.name}
                className="flex items-center content-center min-[640px]:gap-3 gap-0 self-stretch flex-wrap [font-size:_clamp(20px,2.5vw,30px)]"
              >
                <span className="font-semibold leading-[120%]">
                  {t(inputField.formTitle)}
                </span>
                <PickerInput
                  externalStyle="font-light leading-[120%] "
                  name={inputField.name}
                  placeholder={t(inputField.placeholder || "")}
                  register={register(
                    inputField.name,
                    inputsRules[inputField.name as keyof typeof inputsRules]
                  )}
                  setValue={setValue}
                  pickerValues={PICKER_INPUT_VALUES[inputField.name]}
                  getValues={getValues}
                />
              </div>
            );
          if (inputField.type === "phone")
            return (
              <div
                key={inputField.name}
                className="
                  flex
                  content-center 
                  min-[1380px]:gap-3 
                  gap-1 
                  flex-nowrap
                  min-[1380px]:flex-row
                  flex-col
                  min-[1380px]:items-end
                  items-start
                  [font-size:_clamp(20px,2.5vw,30px)]
                "
              >
                <span className="font-semibold leading-[120%] xl:whitespace-nowrap">
                  {t(inputField.formTitle)}
                </span>
                <PhoneNumberInput
                  externalStyle="font-light leading-[120%]"
                  name={inputField.name}
                  placeholder={t(inputField.placeholder || "")}
                  register={register(
                    inputField.name,
                    inputsRules[inputField.name as keyof typeof inputsRules]
                  )}
                  setValue={setValue}
                  error={errors?.[inputField.name]}
                  inputBorders={inputBorders}
                />
              </div>
            );
          if (inputField.type === "textarea")
            return (
              <div
                key={inputField.name}
                className="
                  flex
                  min-[1380px]:content-center
                  items-start
                  content-start
                  min-[1380px]:gap-3 gap-0
                  self-stretch
                  [font-size:_clamp(20px,2.5vw,30px)]
                  min-[1380px]:flex-row
                  flex-col
                  flex-nowrap
                "
              >
                <span className="font-semibold leading-[120%] whitespace-nowrap">
                  {t(inputField.formTitle)}
                </span>
                <TextArea
                  externalStyle={`font-light leading-[120%] pr-3 placeholder:[font-size:_clamp(20px,2vw,30px)] ${inputBorders} placeholder:text-[#505050]`}
                  externalContainerStyle="!w-full"
                  name={inputField.name}
                  placeholder={t(inputField.placeholder || "")}
                  register={register(
                    inputField.name,
                    inputsRules[inputField.name as keyof typeof inputsRules]
                  )}
                  error={errors?.[inputField.name]}
                />
              </div>
            );
        })}
      </div>

      <label
        className={`flex items-center cursor-pointer mb-4 border-t border-solid border-[#2D2D2D] pt-2 mt-4 w-full`}
      >
        <input
          type="checkbox"
          checked={agreement}
          className={`
            ${agreementInputColor}
            grid
            place-content-center
            appearance-none
            w-4
            h-4
            border-2
            border-[#E7E7E7]
            rounded-[3px]
            bg-black
            before:shadow-[inset_1em_1em_#F60109]
            before:content-['']
            before:w-2
            before:h-2
            before:rounded-[1px]
            before:scale-0
            before:transition-transform
            before:delay-150
            before:ease-in-out
            checked:before:scale-[1]
            disabled:border-dark-gray-650
            cursor-pointer
            text-green-700  
          `}
          onChange={onChangeAgreement}
        />
        <span
          className={`
            ml-[6px]
            font-normal
            [font-size:_clamp(12px,1vw,14px)]
           ${agreementTextColor}
          `}
        >
          {t("Consult agreement")}
        </span>
      </label>

      <Button
        onClick={handleSubmit}
        showArrow
        externalStyle="min-[1380px]:w-fit w-full !py-[14px] !px-[26px]"
        disabled={!agreement}
      >
        {t("Send Request")}
      </Button>
    </form>
  );
}
