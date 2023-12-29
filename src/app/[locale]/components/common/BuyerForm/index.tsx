"use client";

import Button from "@/app/[locale]/components/common/Button";
import { BuyerFormProps } from "@/app/[locale]/components/common/BuyerForm/types";
import Input from "@/app/[locale]/components/common/Input";
import PhoneNumberInput from "@/app/[locale]/components/common/PhoneNumberInput";
import { CHECKOUT_SEND_REQUEST } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BuyerForm({
  formHeader,
  formFields,
  register,
  inputsRules,
  errors,
  setValue,
  handleSubmit,
  onClose,
}: BuyerFormProps) {
  const router = useRouter();
  return (
    <form className="p-20 flex flex-col border border-solid border-[#d0d8e91a] rounded-[40px] bg-[#000000b3] backdrop-blur-[50px] relative">
      <Image
        src={`/images/close.svg`}
        alt="glow"
        priority
        width={32}
        height={32}
        className="absolute top-5 right-5 cursor-pointer"
        onClick={onClose}
      />
      <div className="[font-size:_clamp(32px,5vw,96px)] font-extrabold leading-[100%] -tracking-[2.88px] text-white mb-5 ">
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
        className="mt-2 mb-8 rotate-180"
      />
      <div className="flex flex-col gap-3 mb-10">
        {formFields.map((inputField) => {
          if (inputField.type === "input")
            return (
              <div
                key={inputField.name}
                className="flex items-center content-center gap-3 self-stretch flex-wrap [font-size:_clamp(20px,2.5vw,40px)]"
              >
                <span className="font-semibold leading-[120%]">
                  {inputField.formTitle}
                </span>
                <Input
                  externalStyle="font-light leading-[120%] "
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
          if (inputField.type === "phone")
            return (
              <div
                key={inputField.name}
                className="flex items-center content-center gap-3 self-stretch flex-wrap [font-size:_clamp(20px,2.5vw,40px)]"
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
      <div>
        <Button onClick={handleSubmit} showArrow size="normal">
          {CHECKOUT_SEND_REQUEST}
        </Button>
      </div>
    </form>
  );
}
