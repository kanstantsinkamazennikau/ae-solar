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
      <BasicWidthContainer>
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
            bg-[#00000033]
            [border-image:linear-gradient(154deg,_#f60109_0%,_rgb(49_9_10_/_73%)_27%,_rgb(49_9_10_/_73%)_51%,_rgb(246_1_9_/_28%)_80%,_#f60109_100%)_1]
            max-w-[1096px]
            flex
            flex-col
            md:gap-12
            gap-5
            justify-center
            mx-auto
            relative
          "
        >
          <div className="[font-size:_clamp(24px,2.5vw,48px)] capitalize font-extrabold -tracking-[1.44px] leading-[120%]">
            <p>{PRODUCT_WE_TRANSFORM}</p>
            <p className="text-[#B30006]">{PRODUCT_FOR_YOU}</p>
          </div>
          <div className="flex justify-center items-start md:gap-8 gap-4 self-stretch [font-size:_clamp(12px,1.5vw,20px)] leading-[150%] font-walsheim">
            <p>{PRODUCT_ADVANCED_TECHNOLOGY}</p>
            <p>{PRODUCT_INNOVATIVE_PRODUCTS}</p>
          </div>
          {/* <Image
            src="/images/products/energy.svg"
            alt="energy"
            width={720}
            height={250}
            className="absolute top-0 -translate-y-1/2 -translate-x-1/4"
          />
          <Image
            src="/images/products/energy.svg"
            alt="energy"
            width={720}
            height={250}
            className="absolute bottom-0 -scale-x-100"
          /> */}
        </div>
      </BasicWidthContainer>
    </div>
  );
}
