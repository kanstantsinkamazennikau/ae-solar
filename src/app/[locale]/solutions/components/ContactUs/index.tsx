import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import { SOLUTIONS_CONTACTS_US } from "@/app/[locale]/solutions/constants";
import {
  GET_IN_TOUCH_ELEVATE_GROWTH,
  HEADER_CONTACT_US,
} from "@/app/[locale]/utils/constants";
import Link from "next/link";

export default function ContactUs() {
  return (
    <BasicWidthContainer styles={`mx-auto w-full max-[540px]:!px-0`}>
      <div
        className={`
        flex
        flex-col
        justify-center
        items-center
        w-full
        bg-[url('/images/getInTouchBackground.svg')]
        2xl:py-[150px]
        2xl:px-[150px]
        md:py-[80px]
        md:px-[50px]
        py-[40px]
        min-[540px]:px-[30px]
        px-[8px]
        rounded-[40px]
        max-[540px]:rounded-none
        max-[540px]:border-x-0
        border-2
        border-solid
        border-[#ffffff0d]
        relative
        overflow-hidden
        bg-[#111]
      `}
      >
        <div
          className="
            flex
            flex-col
            xl:gap-20
            lg:gap-14
            md:gap-10
            gap-6
            justify-center
            items-center
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              xl:gap-[60px]
              lg:gap-[40px]
              md:gap-[30px]
              gap-8
              self-stretch
              text-center
              w-full
            "
          >
            <div
              className="
              [font-size:_clamp(24px,4vw,64px)]
              leading-[100%]
              text-base-red
              md:-tracking-[1.92px]
              -tracking-[0.72px]
              font-medium
            "
            >
              {GET_IN_TOUCH_ELEVATE_GROWTH}
            </div>
            <div
              className="
              [font-size:_clamp(36px,5.5vw,96px)]
              md:-tracking-[-2.88px]
              -tracking-[-1.08px]
              font-extrabold
              max-w-[1000px]
              leading-[100%]
            "
            >
              {SOLUTIONS_CONTACTS_US}
            </div>
          </div>
          <Link href={`/consult`}>
            <Button size="normal">
              <span className="[font-size:_clamp(16px,1.5vw,20px)] leading-[100%] whitespace-nowrap">
                {HEADER_CONTACT_US}
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </BasicWidthContainer>
  );
}
