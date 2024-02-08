import {
  PRODUCT_PERC,
  PRODUCT_PERC_DESCRIPTION,
} from "@/app/[locale]/products/[id]/constants";
import Image from "next/image";

export default function PanelTechnology() {
  return (
    <div className="relative -translate-y-[24%] overflow-hidden w-full [background:radial-gradient(black,transparent)] -mb-[24%]">
      <Image
        src="/images/products/starPath.svg"
        alt="starPath"
        width={1320}
        height={1320}
        className="scale-[1.45] mx-auto"
      />
      <div
        className="
          xl:p-20
          md:p-12
          p-4
          border
          border-solid
          backdrop-blur-[10px]
          bg-[#00000033]
          [border-image:linear-gradient(154deg,_#f60109_0%,_rgb(49_9_10_/_73%)_27%,_rgb(49_9_10_/_73%)_51%,_rgb(246_1_9_/_28%)_80%,_#f60109_100%)_1]
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
        "
      >
        <div className="[font-size:_clamp(24px,2.5vw,48px)] capitalize font-bold -tracking-[0.48px] leading-[100%] text-center">
          <p>{PRODUCT_PERC}</p>
        </div>
        <div className="text-center [font-size:_clamp(12px,1.5vw,20px)] leading-[150%] font-walsheim">
          {PRODUCT_PERC_DESCRIPTION.split(/\r?\n|\r|\n/g).map((string) => (
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
