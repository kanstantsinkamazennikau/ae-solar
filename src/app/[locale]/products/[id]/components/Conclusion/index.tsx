import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import {
  PRODUCT_IN_CONCLUSION,
  PRODUCT_PERC_TECHNOLOGY,
} from "@/app/[locale]/products/[id]/constants";
import Image from "next/image";

export default function Conclusion() {
  return (
    <div className="flex justify-center xl:mb-[150px] lg:mb-[120px] md:mb-[100px] mb-[80px]">
      <BasicWidthContainer styles="relative justify-center items-center flex">
        <div
          className="
            mt-20
            xl:py-[130px]
            xl:px-[60px]
            md:py-[80px]
            md:px-[40px]
            py-[30px]
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
          <p className="[font-size:_clamp(24px,2.5vw,48px)] capitalize font-extrabold -tracking-[1.44px] leading-[120%] text-center">
            {PRODUCT_IN_CONCLUSION}
          </p>
          <p className="[font-size:_clamp(12px,1.5vw,20px)] leading-[150%] font-walsheim text-center">
            {PRODUCT_PERC_TECHNOLOGY}
          </p>
          <Image
            src={`/images/products/moduleAngleConclusionLeft.png`}
            alt="moduleAngleConclusionLeft"
            priority
            width={310}
            height={310}
            className="absolute left-0 top-0"
          />
          <Image
            src={`/images/products/moduleAngleConclusionRight.png`}
            alt="moduleAngleConclusionRight"
            priority
            width={240}
            height={240}
            className="absolute right-0 bottom-0"
          />
        </div>
        <Image
          src={`/images/products/backLight.svg`}
          alt="backLight"
          priority
          width={1320}
          height={136}
          className="absolute translate-y-[calc(4%)] scale-[1.75]"
        />
      </BasicWidthContainer>
    </div>
  );
}
