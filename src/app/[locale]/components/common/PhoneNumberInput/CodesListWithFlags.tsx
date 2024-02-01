"use client";

import { COUNTRIES_LIST } from "@/app/[locale]/components/common/PhoneNumberInput";
import { CodesListWithFlagsProps } from "@/app/[locale]/components/common/PhoneNumberInput/types";
import Image from "next/image";

export default function CodesListWithFlags({
  handleSelection,
}: CodesListWithFlagsProps) {
  return (
    <>
      {COUNTRIES_LIST.map(({ code }) => (
        <div
          className="
            cursor-pointer
            flex
            items-center
            gap-2
            mb-2
            [font-size:_clamp(20px,2.5vw,30px)]
            hover:text-base-red
          "
          key={code}
          onClick={() => handleSelection(code)}
        >
          {code}
        </div>
      ))}
    </>
  );
}
