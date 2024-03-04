import {
  MANUFACTURER_DO_IT_TOGETHER,
  MANUFACTURER_SAVE_THE_WORLD,
} from "@/app/[locale]/company/manufacturer/constants";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Image from "next/image";

export default function SaveTheWorld() {
  return (
    <BasicWidthContainer styles={`mx-auto w-full max-[540px]:!px-0 mt-28`}>
      <div
        className={`
            flex
            flex-col
            w-full
            bg-[url('/images/getInTouchBackground.svg')]
            lg:py-[120px]
            lg:pr-[80px]
            lg:pl-[270px]
            md:py-[80px]
            md:pr-[80px]
            md:pl-[160px]
            py-[60px]
            px-[40px]
            rounded-[40px]
            max-[540px]:rounded-none
            max-[540px]:border-x-0
            border-2
            border-solid
            border-[#3e0002]
            relative
            overflow-hidden
            bg-[#111]
          `}
      >
        <div
          className="
              [background:radial-gradient(100%_100%_at_50%_100%,rgba(109,2,7,0.30)_0%,rgba(109,2,7,0.00)_100%),linear-gradient(297deg,#000_0%,rgba(0,0,0,0.00)_100%),#0d0d0d00]
              w-full
              h-full
              absolute
              left-0
            "
        />

        {/* CLIENT TYPE */}

        <Image
          src={`/images/products/weTransformPathes.svg`}
          alt="weTransformPathes"
          priority
          width={540}
          height={540}
          className="absolute left-0 bottom-0 max-lg:max-h-[300px] max-lg:max-w-[300px]"
        />

        <div
          className="
             
              z-10
              leading-[100%]
              flex
              flex-col
              md:gap-6
              gap-4
              self-end
              text-start
            "
        >
          <p
            className="
              [font-size:_clamp(20px,2.5vw,36px)]
              font-medium
              leading-[100%]
              -tracking-[0.36px]
              text-base-red
            "
          >
            {MANUFACTURER_DO_IT_TOGETHER}
          </p>
          <p
            className="
              leading-[100%]
              [font-size:_clamp(30px,4.5vw,64px)]
              font-extrabold
              md:-tracking-[1.28px]
            "
          >
            {MANUFACTURER_SAVE_THE_WORLD}
          </p>
        </div>
      </div>
    </BasicWidthContainer>
  );
}
