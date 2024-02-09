import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import {
  CREATE_SPACE,
  PRODUCT_CREATE_YOUR,
  PRODUCT_OWN_SPACE,
} from "@/app/[locale]/products/[id]/constants";
import Image from "next/image";

export default function Customization() {
  return (
    <div className="flex items-center relative flex-col min-[1480px]:w-[1440px] xl:mb-[180px] lg:mb-[100px] md:mb-[50px] mb-[30px]">
      <div className="absolute w-full lg:-top-[400px] -top-[170px] h-full">
        <div
          className="
            w-full
            lg:h-[500px]
            h-[260px]
            min-[1480px]:border-2
            border-0
            border-solid
            min-[1480px]:border-y-0
            border-y-0
            bg-[linear-gradient(180deg,_rgba(19,_19,_19,_0.00)_0%,_#0D0D0D_100%)]
            [border-image:linear-gradient(180deg,_rgba(19,_19,_19,_0.00)_0%,_#131313_100%)_1]
          "
        />
        <div
          className="
            w-full
            lg:h-[800px]
            h-[300px]
            min-[1480px]:border-2
            border-0
            border-solid 
            border-x-[#151515]
            min-[1480px]:border-y-0
            border-y-0
            bg-[#0D0D0D]
            relative
          "
        >
          <Image
            src={`/images/products/stars.svg`}
            alt="stars"
            priority
            width={536}
            height={343}
            className="absolute -translate-y-2/3 -translate-x-[40%] mix-blend-screen z-10"
          />
          <Image
            src={`/images/products/stars.svg`}
            alt="stars"
            priority
            width={536}
            height={343}
            className="absolute right-0 mix-blend-screen z-10"
          />
          <Image
            src={`/images/products/stars.svg`}
            alt="stars"
            priority
            width={536}
            height={343}
            className="absolute right-0  bottom-0 translate-y-2/3 mix-blend-screen z-10"
          />
        </div>
        <div
          className="
            w-full
            lg:h-[500px]
            h-[330px]
            md:h-[250px]
            max-[500px]:h-[100px]
            min-[1480px]:border-2
            border-0
            border-solid
            min-[1480px]:border-y-0
            border-y-0
            bg-[linear-gradient(180deg,_rgba(19,_19,_19,_0.00)_0%,_#0D0D0D_100%)]
            [border-image:linear-gradient(180deg,_rgba(19,_19,_19,_0.00)_0%,_#131313_100%)_1]
            rotate-180
          "
        />
      </div>
      <BasicWidthContainer styles="relative z-10">
        <div className="w-full flex flex-col gap-[20px] items-center">
          <TwoTierHeading
            tierOneHeading={PRODUCT_CREATE_YOUR}
            tierTwoHeading={PRODUCT_OWN_SPACE}
            reverseColor
            align="left"
          />
          <div className="flex justify-center items-start gap-8 self-stretch">
            {CREATE_SPACE.map(
              ({ element, elementDescription, elementTitle, image }) => (
                <div
                  className="flex flex-grow flex-shrink-0 basis-0 gap-10 flex-col"
                  key={element}
                >
                  <Image
                    src={`/images/products/${image}`}
                    alt={image}
                    priority
                    width={644}
                    height={420}
                    quality={100}
                    className="self-stretch"
                  />
                  <div className="flex flex-col items-start gap-5 self-stretch">
                    <div className="flex flex-col gap-3">
                      <p
                        className="
                          [font-size:_clamp(12px,1.5vw,24px)]
                          font-semibold
                          -tracking-[0.24px]
                          uppercase
                          text-[#505050]
                          leading-[100%]
                        "
                      >
                        {element}
                      </p>
                      <p
                        className="
                          [font-size:_clamp(32px,3.5vw,64px)]
                          font-semibold
                          -tracking-[1.92px]
                          capitalize
                          leading-[100%]
                        "
                      >
                        {elementTitle}
                      </p>
                    </div>

                    <p
                      className="
                        [font-size:_clamp(10px,1.5vw,20px)]
                        font-normal
                        leading-[150%]
                        font-walsheim
                        text-dark-gray-900
                        max-w-[540px]
                      "
                    >
                      {elementDescription}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
