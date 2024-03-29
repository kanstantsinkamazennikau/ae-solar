"use client";

import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function ModuleDimensions() {
  const { isResetFilter } = useContext(ConstructorContext);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");
  const [dimensions, setDimensions] = useState({
    length: params.get("length") || "",
    width: params.get("width") || "",
    height: params.get("height") || "",
  });

  useEffect(() => {
    if (isResetFilter) {
      setDimensions({
        length: "",
        width: "",
        height: "",
      });
    }
  }, [isResetFilter]);

  const handleOnChange = (keyParam: string, value: string) => {
    if (!value) {
      params.delete(keyParam);
    } else {
      params.set(keyParam, `${value}`);
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const dimensionsFields = ["length", "width", "height"];

  return (
    <div>
      <div className="[font-size:_clamp(14px,2vw,16px)] font-medium -tracking-[0.4px] mb-2 capitalize font-walsheim">
        {t("Module Dimension")}{" "}
        <span className="lowercase font-normal text-dark-gray-900">{`(${t(
          "From"
        )})`}</span>
      </div>
      <div className="flex gap-1">
        {dimensionsFields.map((field) => {
          return (
            <div className="flex items-center flex-col gap-2 w-1/2" key={field}>
              <input
                className="
                  p-3
                  border-2
                  rounded-xl
                  border-solid
                  border-[#191919]
                  focus:border-base-red
                  focus:outline-none
                  bg-black
                  text-center
                  md:max-w-[75px]
                  max-[768px]:w-full
                  [font-size:_clamp(11px,2vw,14px)]
                  placeholder:[font-size:_clamp(11px,2vw,14px)]
                "
                placeholder={"0"}
                value={dimensions[field as keyof typeof dimensions]}
                onChange={(e) => {
                  const re = /^[0-9\b]+$/;
                  if (e.target.value === "" || re.test(e.target.value)) {
                    setDimensions((prevState) => ({
                      ...prevState,
                      [field]: e.target.value,
                    }));
                    handleOnChange(field, e.target.value);
                  }
                }}
              />
              <span className="text-sm font-walsheim leading-[1.2] font-normal text-dark-gray-900">
                {t(field)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
