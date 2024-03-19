import Button from "@/app/[locale]/components/common/Button";
import { PickerInputProps } from "@/app/[locale]/components/common/PickerInput/types";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function PickerInput({
  pickerValues,
  name,
  setValue,
  getValues,
}: PickerInputProps) {
  const [activeValue, setActiveValue] = useState<string>(getValues(name));
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <div className="flex gap-2 pt-1 flex-wrap justify-center">
      {pickerValues.map((value) => (
        <Button
          key={value}
          style={`${activeValue === value ? "outline" : "transparent"}`}
          onClick={(e) => {
            e.preventDefault();
            setActiveValue(value);
            setValue(name, value);
          }}
          externalStyle="py-[10px] px-[10px]"
        >
          <span className="[font-size:_clamp(14px,2.5vw,20px)] font-semibold -tracking-[0.2px]">
            {t(value)}
          </span>
        </Button>
      ))}
    </div>
  );
}
