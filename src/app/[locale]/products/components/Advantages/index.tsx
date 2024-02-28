import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Tier1 from "@/app/[locale]/components/common/Tier1";
import {
  PRODUCT_ADVANTAGES,
  PRODUCT_SINCE,
  PRODUCT_SINCE_HIGHLIGHT,
  PRODUCT_WE_ARE_TIER,
  PRODUCT_WE_ARE_TIER_HIGHLIGHT,
} from "@/app/[locale]/products/constants";
import Image from "next/image";

export default function Advantages() {
  return (
    <div
      className="
        relative
        xl:mb-[140px]
        lg:mb-[120px]
        md:mb-[100px]
        mb-[80px]
      "
    >
      <Image
        src={`/images/products/advantagesBackStars.svg`}
        alt="AdvantagesBackStars"
        width={1920}
        height={1080}
        priority
        className={`absolute top-0 h-full object-cover`}
      />

      <Tier1
        tier1TextStyle="text-[#F60109]"
        tier1Text={PRODUCT_WE_ARE_TIER}
        tier1TextHighlight={PRODUCT_WE_ARE_TIER_HIGHLIGHT}
        descriptionText={PRODUCT_SINCE}
        descriptionTextHighlight={PRODUCT_SINCE_HIGHLIGHT}
        externalStyle="border-t-0 -mt-10 md:mt-0 !py-0"
      />
      <BasicWidthContainer styles="mx-auto -mt-5">
        <div
          className="
            xl:columns-[2]
            max-xl:grid
            max-xl:grid-cols-2
            max-[650px]:grid-cols-1
            gap-5
            w-fit
            mx-auto
            relative
          "
        >
          <Image
            src={`/images/products/advantagesBackgroundCube.svg`}
            alt="advantagesBackgroundCube"
            width={640}
            height={640}
            priority
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-[650px]:block hidden`}
          />
          {PRODUCT_ADVANTAGES.map(({ description, title, image }) => (
            <div
              key={title}
              className="
                max-w-[538px]
                p-10
                xl:mb-5
                min-[920px]:pt-[120px]
                min-[920px]:pb-[40px]
                min-[920px]:px-[40px]
                md:pt-[80px]
                pt-[40px]
                pb-[25px]
                px-[25px]
                rounded-[20px]
                relative
                [background:linear-gradient(227deg,#f10109_0%,rgb(49_9_10/73%)_27%,#3E0002_51%,rgb(246_1_9/28%)_80%,#3E0002_100%)]
              "
            >
              <div
                className="
                  absolute 
                  top-[1px]
                  left-[1px]
                  right-[1px]
                  bottom-[1px]
                  rounded-[20px]
                  bg-[url('/images/getInTouchBackground.svg')]
                "
              />
              <div
                className="
                  rounded-[20px]
                  z-[4]
                  absolute 
                  top-0
                  left-0
                  right-0
                  bottom-0
                  [background:radial-gradient(160.36%_141.42%_at_100%_0%,rgb(246_1_9/25%)_0%,rgba(246,1,9,0.00)_50%,rgba(246,1,9,0.00)_100%),#00000070]
                "
              />
              <Image
                src={`/images/products/${image}`}
                alt="automation"
                width={300}
                height={300}
                priority
                className={`absolute top-[1px] right-[1px] z-[5]`}
              />
              <div
                className="
                  font-medium
                  leading-[120%]
                  [font-size:_clamp(20px,2.5vw,32px)]
                  w-full
                  mb-4
                  relative
                  z-10
                "
              >
                {title.split(/\r?\n|\r|\n/g).map((string, index) => (
                  <div key={string}>{string}</div>
                ))}
              </div>
              <div
                className="
                  font-walsheim
                  font-normal
                  [font-size:_clamp(14px,1.5vw,16px)]
                  w-full
                  leading-[150%]
                  relative
                  z-10
                "
              >
                {description}
              </div>
            </div>
          ))}
        </div>
      </BasicWidthContainer>
    </div>
  );
}
