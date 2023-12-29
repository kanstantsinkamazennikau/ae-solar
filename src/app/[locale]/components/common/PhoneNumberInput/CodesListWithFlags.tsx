"use client";

import { COUNTRIES_LIST } from "@/app/[locale]/components/common/PhoneNumberInput";
import Image from "next/image";

export default function CodesListWithFlags({
  handleSelection,
}: {
  handleSelection: (code: string) => void;
}) {
  return (
    <>
      {COUNTRIES_LIST.map(({ flagIcon, code }) => (
        <div
          className=" cursor-pointer flex items-center gap-2 mr-3 mb-2 [font-size:_clamp(20px,2.5vw,40px)]"
          key={code}
          onClick={() => handleSelection(code)}
        >
          <Image
            src={`/images/input/${flagIcon}`}
            alt="germany"
            width={24}
            height={24}
          />
          {code}
        </div>
      ))}
    </>
  );
}
