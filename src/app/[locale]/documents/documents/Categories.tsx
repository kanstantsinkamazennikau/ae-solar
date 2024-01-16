import {
  DOCUMENTS_CATEGORIES,
  DOCUMENTS_FILES,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function Categories() {
  return (
    <div className="flex flex-col sticky top-[80px]">
      <Image
        src={`/images/documents/folderTop.svg`}
        alt="folderTop"
        width={300}
        height={80}
        priority
      />
      <div className="absolute top-4 w-full px-7">
        <p className="font-semibold text-[#505050] [font-size:_clamp(12px,1.5vw,16px)] leading-[120%] mb-4">
          {DOCUMENTS_CATEGORIES}
        </p>
        <hr className="bg-option-border h-[1px] border-none w-full" />
      </div>

      <div
        className="
          pt-0
          px-7
          pb-7
          border-t-0
          border
          border-solid
          border-[#131313]
          bg-[#0D0D0D]
          relative
          -top-[10px]
          rounded-tl-none
          rounded-tr-none
          rounded-xl
          font-semibold
          text-dark-gray-900
          [font-size:_clamp(12px,1.5vw,16px)]
          leading-[120%]
        "
      >
        {DOCUMENTS_FILES.map(({ type }) => (
          <p key={type} className="mt-4">
            {type}
          </p>
        ))}
      </div>
    </div>
  );
}
