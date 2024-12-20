"use client";

import {
  POWER_RANGE_FROM,
  POWER_RANGE_TO,
} from "@/app/[locale]/catalogue/constants";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function PowerRange() {
  const { setError, error, isResetFilter } = useContext(ConstructorContext);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const { translation } = useContext(i18nProviderContext);
  const [powerRange, setPowerRange] = useState({
    from: params.get(POWER_RANGE_FROM) || "",
    to: params.get(POWER_RANGE_TO) || "",
  });

  const handleOnChange = (keyParam: string, value: string) => {
    if (!value) {
      params.delete(keyParam);
    } else {
      params.set(keyParam, `${value}`);
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    if (isResetFilter) {
      setPowerRange({
        from: "",
        to: "",
      });
    }
  }, [isResetFilter]);

  useEffect(() => {
    if (powerRange.from && powerRange.to) {
      +powerRange.from > +powerRange.to
        ? setError(translation.minimumValueError)
        : setError("");
    }
  }, [powerRange.from, powerRange.to, setError, translation.minimumValueError]);

  const powerRangeRenderFields = ["from", "to"];

  return (
    <div>
      <div className="[font-size:_clamp(14px,2vw,16px)] font-medium -tracking-[0.4px] mb-2 capitalize font-walsheim">
        {translation.powerRange}
      </div>
      <div className="flex gap-1">
        {powerRangeRenderFields.map((field) => {
          const isFromField = field === "from";
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
                  md:max-w-[115px]
                  max-[768px]:w-full
                  [font-size:_clamp(11px,2vw,14px)]
                  placeholder:[font-size:_clamp(11px,2vw,14px)]
                "
                placeholder={isFromField ? "0" : "1000"}
                value={powerRange[field as keyof typeof powerRange]}
                onChange={(e) => {
                  const re = /^[0-9\b]+$/;
                  if (e.target.value === "" || re.test(e.target.value)) {
                    setPowerRange((prevState) => ({
                      ...prevState,
                      [field]: e.target.value,
                    }));

                    handleOnChange(
                      isFromField ? POWER_RANGE_FROM : POWER_RANGE_TO,
                      e.target.value
                    );
                  }
                }}
                // onBlur={() => {
                //   if (powerRange.from && powerRange.to) {
                //     +powerRange.from > +powerRange.to
                //       ? setError(translation.minimumValueError)
                //       : setError("");
                //   }
                // }}
              />
              <span className="text-sm font-walsheim leading-[1.2] font-normal text-dark-gray-900">
                {isFromField ? translation.from : translation.upTo}
              </span>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-base-red mt-2 text-center">{error}</p>
    </div>
  );
}
