import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import {
  PRODUCT_ADVANCED_TECHNOLOGY,
  PRODUCT_FOR_YOU,
  PRODUCT_INNOVATIVE_PRODUCTS,
  PRODUCT_WE_TRANSFORM,
} from "@/app/[locale]/products/constants";
import Image from "next/image";

export default function Power() {
  return (
    <div className="flex justify-center">
      <BasicWidthContainer styles="relative justify-center items-center flex">
        <div
          className="
            mt-[148px]
            xl:py-[60px]
            xl:px-[60px]
            md:py-[40px]
            md:px-[40px]
            py-[20px]
            px-[20px]
            border
            border-solid
            backdrop-blur-[10px]
            bg-[#000000c2]
            [border-image:linear-gradient(154deg,_#f60109_0%,_rgb(49_9_10_/_73%)_27%,_rgb(49_9_10_/_73%)_51%,_rgb(246_1_9_/_28%)_80%,_#f60109_100%)_1]
            xl:max-w-[870px]
            lg:max-w-[670px]
            md:max-w-[550px]
            min-[560px]:max-w-[400px]
            max-w-[300px]
            flex
            flex-col
            md:gap-12
            gap-5
            justify-center
            mx-auto
            relative
            overflow-hidden
            z-10
          "
        >
          <div className="[font-size:_clamp(24px,2.5vw,48px)] capitalize font-extrabold -tracking-[1.44px] leading-[120%]">
            <p className="max-w-[540px]">{PRODUCT_WE_TRANSFORM}</p>
            <p className="text-[#B30006]">{PRODUCT_FOR_YOU}</p>
          </div>
          <div className="flex justify-center items-start md:gap-8 gap-4 self-stretch [font-size:_clamp(12px,1.5vw,20px)] leading-[150%] font-walsheim z-10">
            <p className="max-w-[360px]">{PRODUCT_ADVANCED_TECHNOLOGY}</p>
            <p className="max-w-[360px]">{PRODUCT_INNOVATIVE_PRODUCTS}</p>
          </div>
          <Image
            src={`/images/products/moduleAngle.png`}
            alt="moduleAngle"
            priority
            width={200}
            height={200}
            className="absolute right-0 bottom-[1px]"
          />
        </div>
        <Image
          src={`/images/products/backLight.svg`}
          alt="backLight"
          priority
          width={1320}
          height={136}
          className="absolute translate-y-[calc(10%)] scale-x-[1.2] scale-y-[1]"
        />
      </BasicWidthContainer>
    </div>
  );
}
