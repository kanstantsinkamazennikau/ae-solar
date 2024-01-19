"use client";

import Button from "@/app/[locale]/components/common/Button";
import { InputsProps } from "@/app/[locale]/components/common/BuyerForm/types";
import DropdownInput from "@/app/[locale]/components/common/DropdownInput";
import Input from "@/app/[locale]/components/common/Input";
import PhoneNumberInput from "@/app/[locale]/components/common/PhoneNumberInput";
import PickerInput from "@/app/[locale]/components/common/PickerInput";
import {
  CHECKOUT_SEND_REQUEST,
  DROPDOWN_INPUT_VALUES,
  PICKER_INPUT_VALUES,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function BuyerForm({
  formHeader,
  formFields,
  register,
  inputsRules,
  errors,
  setValue,
  handleSubmit,
  onClose,
  getValues,
  isShowCloseIcon,
}: InputsProps) {
  return (
    <form
      className="
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
        border-[#d0d8e91a]
        rounded-[40px]
        bg-[#000000b3]
        backdrop-blur-[50px]
        relative
        "
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

      <div className="[font-size:_clamp(32px,5vw,80px)] font-extrabold leading-[100%] -tracking-[2.88px] text-white mb-5 ">
        {formHeader.split(/\r?\n|\r|\n/g).map((string, index) => (
          <div
            key={string}
            className={`${index === 0 ? "text-dark-gray-900" : ""}`}
          >
            {string}
          </div>
        ))}
      </div>
      <Image
        src={`/images/glowFull.png`}
        alt="glow"
        priority
        width={1320}
        height={60}
        className="mt-2 rotate-180"
      />
      <div className="flex flex-col gap-3 mb-10">
        {formFields.map((inputField) => {
          if (inputField.type === "input")
            return (
              <div
                key={inputField.name}
                className="
                  flex
                  min-[640px]:items-center
                  min-[640px]:content-center
                  items-start
                  content-start
                  min-[640px]:gap-3 gap-0
                  self-stretch
                  flex-wrap
                  [font-size:_clamp(20px,2.5vw,30px)]
                  min-[640px]:flex-row
                  flex-col
                "
              >
                <span className="font-semibold leading-[120%]">
                  {inputField.formTitle}
                </span>
                <Input
                  externalStyle="font-light leading-[120%] pr-3 placeholder:[font-size:_clamp(20px,2.5vw,30px)]"
                  name={inputField.name}
                  placeholder={inputField.placeholder}
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
                className="flex items-center content-center min-[640px]:gap-3 gap-0 self-stretch flex-wrap [font-size:_clamp(20px,2.5vw,30px)]"
              >
                <span className="font-semibold leading-[120%]">
                  {inputField.formTitle}
                </span>
                <DropdownInput
                  externalStyle="font-light leading-[120%] pr-3 placeholder:[font-size:_clamp(20px,2.5vw,30px)]"
                  name={inputField.name}
                  placeholder={inputField.placeholder}
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
                  {inputField.formTitle}
                </span>
                <PickerInput
                  externalStyle="font-light leading-[120%] "
                  name={inputField.name}
                  placeholder={inputField.placeholder}
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
                className="flex items-center content-center min-[640px]:gap-3 gap-1 self-stretch flex-wrap [font-size:_clamp(20px,2.5vw,30px)]"
              >
                <span className="font-semibold leading-[120%]">
                  {inputField.formTitle}
                </span>
                <PhoneNumberInput
                  externalStyle="font-light leading-[120%]"
                  name={inputField.name}
                  placeholder={inputField.placeholder}
                  register={register(
                    inputField.name,
                    inputsRules[inputField.name as keyof typeof inputsRules]
                  )}
                  setValue={setValue}
                  error={errors?.[inputField.name]}
                />
              </div>
            );
        })}
      </div>
      <Button
        onClick={handleSubmit}
        showArrow
        size="normal"
        externalStyle="min-[640px]:w-fit w-full"
      >
        {CHECKOUT_SEND_REQUEST}
      </Button>
    </form>
  );
}
