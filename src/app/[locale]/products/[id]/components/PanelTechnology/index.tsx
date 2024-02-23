import { PanelTechnologyProps } from "@/app/[locale]/products/[id]/components/PanelTechnology/types";
import { PRODUCT_PANEL_TECHNOLOGIES_AND_DESCRIPTIONS } from "@/app/[locale]/products/[id]/constants";
import Image from "next/image";

export default function PanelTechnology({ id }: PanelTechnologyProps) {
  return (
    <div
      className="
        relative
        min-[2560px]:-mb-[0%]
        2xl:-translate-y-[11%]
        2xl:xl:-mb-[11%]
        xl:-translate-y-[15%]
        xl:-mb-[15%]
        lg:-translate-y-[18%]
        lg:-mb-[18%]
        md:-translate-y-[24%]
        md:-mb-[24%]
        min-[600px]:-translate-y-[24%]
        min-[540px]:-translate-y-[34%]
        min-[540px]:-mb-[26%]
        -translate-y-[40%]
        -mb-[40%]
        overflow-hidden
        w-full
        h-full
        z-10
        min-[1340px]:min-h-[1320px]
        min-[540px]:min-h-[100vw]
      "
    >
      <Image
        src={`/images/products/${id}StarPath.svg`}
        alt="starPath"
        width={1320}
        height={1320}
        className="mx-auto min-[540px]:w-auto min-[540px]:h-auto h-[610px] min-[540px]:object-contain object-cover"
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
          min-[540px]:max-w-[650px]
          flex
          flex-col
          md:gap-8
          gap-5
          justify-center
          absolute
          bottom-[108px]
          left-1/2
          -translate-x-1/2
          min-[540px]:w-auto
          max-w-[320px]
          w-full
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
