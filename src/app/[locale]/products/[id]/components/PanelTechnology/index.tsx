import { PanelTechnologyProps } from "@/app/[locale]/products/[id]/components/PanelTechnology/types";
import { PRODUCT_PANEL_TECHNOLOGIES_AND_DESCRIPTIONS } from "@/app/[locale]/products/[id]/constants";
import Image from "next/image";

export default function PanelTechnology({ id }: PanelTechnologyProps) {
  return (
    <div className="relative -translate-y-[14%] overflow-hidden w-full -mb-[14%] mt-[100px]">
      <Image
        src={`/images/products/${id}StarPath.svg`}
        alt="starPath"
        width={1320}
        height={1320}
        className=" mx-auto"
      />
      <div
        className={`
          xl:p-20
          md:p-12
          p-4
          border
          border-solid
          backdrop-blur-[10px]
          bg-[#00000033]
          [border-image:linear-gradient(154deg,_#4f4f4f_0%,_#191919_27%,_#191919_51%,_#313131_80%,_#4f4f4f_100%)_1]
          max-w-[650px]
          flex
          flex-col
          md:gap-8
          gap-5
          justify-center
          absolute
          bottom-40
          left-1/2
          -translate-x-1/2
        `}
      >
        <div className="[font-size:_clamp(24px,2.5vw,48px)] capitalize font-bold -tracking-[0.48px] leading-[100%] text-center">
          {PRODUCT_PANEL_TECHNOLOGIES_AND_DESCRIPTIONS[id].technology}
        </div>
        <div className="text-center [font-size:_clamp(12px,1.5vw,20px)] leading-[150%] font-walsheim">
          {PRODUCT_PANEL_TECHNOLOGIES_AND_DESCRIPTIONS[id].description
            .split(/\r?\n|\r|\n/g)
            .map((string) => (
              <p key={string} className="mb-7 last:mb-0">
                {string}
              </p>
            ))}
        </div>
      </div>
      <div className="fade-strip-bottom !z-10"></div>
    </div>
  );
}
