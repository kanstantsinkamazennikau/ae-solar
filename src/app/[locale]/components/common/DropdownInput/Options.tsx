"use client";

import { OptionsProps } from "@/app/[locale]/components/common/DropdownInput/types";

export default function Options({
  handleSelection,
  optionsList,
}: OptionsProps) {
  return (
    <>
      {optionsList.map(({ label, value }) => (
        <div
          className=" cursor-pointer flex items-center gap-2 mr-3 mb-2 [font-size:_clamp(20px,2.5vw,40px)]"
          key={value}
          onClick={() => handleSelection(value)}
        >
          {label}
        </div>
      ))}
    </>
  );
}
