import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import {
  PRODUCT_IN_CONCLUSION,
  PRODUCT_PERC_TECHNOLOGY,
} from "@/app/[locale]/products/[id]/constants";

export default function Conclusion() {
  return (
    <div className="flex justify-center xl:mb-[150px] lg:mb-[120px] md:mb-[100px] mb-[80px]">
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
            max-w-[870px]
            flex
            flex-col
            xl:gap-10
            md:gap-6
            gap-5
            justify-center
            mx-auto
            relative
          "
        >
          <p className="[font-size:_clamp(24px,2.5vw,48px)] capitalize font-extrabold -tracking-[1.44px] leading-[120%]">
            {PRODUCT_IN_CONCLUSION}
          </p>
          <p className="[font-size:_clamp(12px,1.5vw,20px)] leading-[150%] font-walsheim">
            {PRODUCT_PERC_TECHNOLOGY}
          </p>
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
