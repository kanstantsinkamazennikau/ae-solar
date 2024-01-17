import Button from "@/app/[locale]/components/common/Button";
import Input from "@/app/[locale]/components/common/Input";
import { DOCUMENTS_SEARCH } from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function SearchBar() {
  return (
    <>
      <div
        className="
          sticky
          min-[920px]:top-[80px]
          top-[64px]
          z-30
          pb-2
          bg-black
          backdrop-blur-3xl
        "
      >
        <div
          className="
            flex
            pl-2
            pr-[6px]
            border-solid
            border
          border-option-border
            items-center
            rounded-full
          bg-[#0D0D0D]
            w-full
          "
        >
          <div className="flex py-3 px-2 w-full">
            <Image
              src={`/images/documents/search.svg`}
              alt="glow"
              priority
              width={24}
              height={24}
            />
            <Input
              externalStyle="border-none"
              externalContainerStyle="!w-full"
              placeholder="I’m looking for…"
            />
          </div>
          <div>
            <Button size="extrasmall">
              <span className="[font-size:_clamp(12px,1.5vw,16px)] leading-[100%]">
                {DOCUMENTS_SEARCH}
              </span>
            </Button>
          </div>
        </div>
      </div>

      <hr className="bg-option-border h-[1px] border-none w-full mt-2" />
    </>
  );
}
