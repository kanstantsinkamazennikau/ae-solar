import { BensPopUpProps } from "@/app/[locale]/components/TechInfo/types";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import { TECH_INFO_CLOSE } from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function BensPopUp({
  onClose,
  title,
  fullDescription,
}: BensPopUpProps) {
  return (
    <div className="fixed justify-center z-[40] flex w-full top-0 left-0 h-full items-center">
      <div
        className="bg-[#000000bf] backdrop-blur-md absolute w-full h-full"
        onClick={onClose}
      />
      <BasicWidthContainer styles="">
        <div
          className="
            bg-[#131313]
            flex
            flex-col
            w-full
            mx-auto
            max-w-[1320px]
            h-[700px]
            rounded-xl
            border
            border-solid
            border-[#191919]
            relative
          "
        >
          <Image
            src={`/images/techInfo/popUpHeader.png`}
            alt="popUpHeader"
            width={1320}
            height={300}
            priority
            className="min-h-[160px] rounded-xl"
          />
          <div className="absolute top-[30px] right-[30px]">
            <Button externalStyle="!py-2 !px-3" onClick={onClose}>
              <div className="flex justify-center items-center gap-1">
                {TECH_INFO_CLOSE}
                <Image
                  src={`/images/close.svg`}
                  alt="close"
                  priority
                  width={20}
                  height={20}
                />
              </div>
            </Button>
          </div>

          <div className="w-full md:p-8 p-4 overflow-y-scroll bensPopUp relative overflow-x-hidden">
            <Image
              src={`/images/techInfo/fadeBackground.svg`}
              alt="fadeBackground"
              width={408}
              height={408}
              priority
              className={`-top-32 -right-1/4 w-full h-full absolute`}
            />
            <div className="leading-[110%] font-semibold [font-size:_clamp(24px,3vw,48px)] mt-5 mb-6">
              {title}
            </div>

            {fullDescription?.split(/\r?\n|\r|\n/g).map((string) => (
              <p
                key={string}
                className="mb-6 last:mb-0 [font-size:_clamp(14px,1.5vw,20px)] font-walsheim"
              >
                {string}
              </p>
            ))}
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
