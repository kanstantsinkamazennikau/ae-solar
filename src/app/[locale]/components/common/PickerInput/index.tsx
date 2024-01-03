import Button from "@/app/[locale]/components/common/Button";
import { PickerInputProps } from "@/app/[locale]/components/common/PickerInput/types";
import { useState } from "react";

export default function PickerInput({
  pickerValues,
  name,
  setValue,
  getValues,
}: PickerInputProps) {
  const [activeValue, setActiveValue] = useState<string>(getValues(name));

  return (
    <div className="flex gap-2 pt-1">
      {pickerValues.map((value) => (
        <Button
          key={value}
          style={`${activeValue === value ? "outline" : "transparent"}`}
          onClick={(e) => {
            e.preventDefault();
            setActiveValue(value);
            setValue(name, value);
          }}
          size="extrasmall"
        >
          <span className="text-xl font-semibold -tracking-[0.2px]">
            {value}
          </span>
        </Button>
      ))}
    </div>
  );
}
