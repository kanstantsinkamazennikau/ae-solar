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
    <div className="flex justify-center mt-[148px]">
      <BasicWidthContainer styles="relative justify-center items-center flex">
        <div
          className="
            xl:py-[60px]
            xl:px-[60px]
            md:py-[40px]
            md:px-[40px]
            py-[20px]
            px-[20px]
            border
            border-solid
            backdrop-blur-[10px]
            [border-image:linear-gradient(154deg,_#f60109_0%,_rgb(49_9_10_/_73%)_27%,_rgb(49_9_10_/_73%)_51%,_rgb(246_1_9_/_28%)_80%,_#f60109_100%)_1]
            [background:linear-gradient(0deg,#000_0%,#000_100%),rgba(0,0,0,0.60)]
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
            mt-0
            mb-0
            max-[560px]:-mt-28
            max-[560px]:-mb-24
            min-[560px]:[box-shadow:none]
            [box-shadow:0px_0px_120px_0px_rgba(179,0,6,0.40)]
          "
        >
          <div className="w-full h-[130%] absolute left-0 top-0 [background:radial-gradient(#7474744d_0%,transparent_70%,transparent_100%)] -translate-y-1/2" />
          <div className="[font-size:_clamp(24px,2.5vw,48px)] capitalize font-extrabold -tracking-[1.44px] leading-[120%]">
            <p className="max-w-[540px]">{PRODUCT_WE_TRANSFORM}</p>
            <p className="text-[#B30006]">{PRODUCT_FOR_YOU}</p>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-start md:gap-8 gap-4 self-stretch [font-size:_clamp(12px,1.5vw,20px)] leading-[150%] font-walsheim z-10">
            <p className="max-w-[360px]">{PRODUCT_ADVANCED_TECHNOLOGY}</p>
            <p className="max-w-[360px]">{PRODUCT_INNOVATIVE_PRODUCTS}</p>
          </div>
          <Image
            src={`/images/products/moduleAngle.png`}
            alt="moduleAngle"
            priority
            width={200}
            height={200}
            className="
              absolute
              right-0
              bottom-[1px]
              lg:w-[200px]
              lg:h-[200px]
              md:w-[150px]
              md:h-[150px]
              w-[100px]
              h-[100px]
            "
          />
        </div>
        <Image
          src={`/images/products/backLight.svg`}
          alt="backLight"
          priority
          width={1320}
          height={136}
          className="
            absolute
            xl:scale-110
            lg:scale-125
            md:scale-150
            min-[560px]:scale-150
            min-[560px]:block
            hidden
          "
        />
      </BasicWidthContainer>
    </div>
  );
}
