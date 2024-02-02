"use client";

import { PhoneNumberInputProps } from "@/app/[locale]/components/common/PhoneNumberInput/types";
import {
  CountrySelector,
  DialCodePreview,
  usePhoneInput,
} from "react-international-phone";
import "react-international-phone/style.css";

export const COUNTRIES_LIST = [{ code: "+49" }, { code: "+375" }];

export default function PhoneNumberInput({
  placeholder,
  register,
  externalStyle,
  error,
  name,
  setValue,
  ...props
}: PhoneNumberInputProps) {
  const phoneInput = usePhoneInput({
    defaultCountry: "de",
    onChange: (data) => {
      setValue("code", data.phone);
    },
  });

  return (
    <div className="min-[640px]:w-auto bg-transparent border-b-2 border-solid border-base-red outline-none pr-2 flex w-full relative">
      <div className="flex relative min-[640px]:w-full w-auto">
        <DialCodePreview
          dialCode={phoneInput.country.dialCode}
          prefix="+"
          style={{
            width: "auto",
            background: "transparent",
            outline: "none",
            border: 0,
            borderRadius: 0,
            color: "white",
            fontSize: "clamp(20px,2.5vw,30px)",
            height: "auto",
            lineHeight: "120%",
            fontWeight: 300,
            order: 1,
            padding: "0 20px 0 0",
          }}
        />
        <CountrySelector
          selectedCountry={phoneInput.country.iso2}
          onSelect={(country) => phoneInput.setCountry(country.iso2)}
          renderButtonWrapper={({ children, rootProps }) => (
            <button {...rootProps} type="button" className="left-0 w-full">
              {children}
            </button>
          )}
          style={{
            position: "absolute",
            right: 0,
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            height: "100%",
          }}
          buttonContentWrapperStyle={{
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "3px",
          }}
          flagStyle={{ opacity: 0 }}
          dropdownArrowStyle={{
            width: "9px",
            height: "6px",
            color: "white",
            borderTop: "4px solid white",
          }}
          dropdownStyleProps={{
            style: {
              height: "150px",
              background: "#131313",
              color: "white",
              border: "2px solid #131313",
              borderRadius: "12px",
              outline: 0,
            },
            className: "dropdownContainer",
            listItemClassName: "listItem",
          }}
        />
      </div>
      <input
        placeholder={placeholder}
        {...register}
        {...props}
        className="bg-transparent outline-none placeholder:[font-size:_clamp(20px,2vw,30px)]"
      />
      {error && (
        <div className="absolute text-xs text-base-red bottom-0 translate-y-full">
          {error.message!.toString()}
        </div>
      )}
    </div>
  );
}
