import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import {
  SOLUTIONS_COOPERATION,
  SOLUTIONS_EXPLORE_OUR,
  SOLUTIONS_TO_COOPERATION,
  SOLUTIONS_WE_ARE_OPEN,
} from "@/app/[locale]/solutions/constants";
import Image from "next/image";
import Link from "next/link";

export default function Cooperation() {
  return (
    <div
      className="
        xl:mb-[180px]
        lg:mb-[140px]
        md:mb-[100px]
        mb-[80px]
      "
    >
      <div className="flex flex-col items-center">
        <BasicWidthContainer>
          <TwoTierHeading
            tierOneHeading={SOLUTIONS_WE_ARE_OPEN}
            tierTwoHeading={SOLUTIONS_TO_COOPERATION}
            align="left"
            size="small"
            externalStyle="[font-size:_clamp(40px,6vw,96px)!important] [&>*:last-child]:[font-size:_clamp(40px,6vw,96px)!important]"
            reverseColor
          />
          {SOLUTIONS_COOPERATION.map(
            ({ clientType, description, links, picture }, index) => (
              <div
                className={`
                  flex
                  flex-col
                  w-full
                  py-[60px]
                  items-center
                  xl:gap-[60px]
                  gap-[30px]
                  ${
                    index % 2 === 0
                      ? "min-[640px]:flex-row flex-col"
                      : "min-[640px]:flex-row-reverse flex-col"
                  }
                  border-t
                  border-solid
                  border-[#191919]
                `}
                key={clientType}
              >
                <Image
                  src={`/images/solutions/${picture}`}
                  alt="dividerSmall"
                  width={610}
                  height={360}
                  className="min-[640px]:w-[46%]"
                />
                <div
                  className="
                  min-[640px]:w-[650px]
                    flex
                    flex-col
                    items-start
                    xl:gap-10
                    gap-6
                  "
                >
                  <div className="flex gap-6 items-start [font-size:_clamp(30px,3.5vw,64px)] leading-[100%] ">
                    <span className="text-[#505050]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold -tracking-[1.08px]">
                      {clientType}
                    </span>
                  </div>
                  <p
                    className="
                      [font-size:_clamp(16px,1.5vw,20px)]
                      leading-[150%]
                      font-normal
                      font-walsheim
                    "
                  >
                    {description}
                  </p>
                  <div className="flex gap-4 items-baseline">
                    {clientType.toLowerCase() === "installers" && (
                      <div className="[font-size:_clamp(16px,1.5vw,20px)] font-normal">
                        {SOLUTIONS_EXPLORE_OUR}
                      </div>
                    )}
                    <div className="flex flex-col gap-3">
                      {links.map(({ link, title }) => (
                        <Link href={link} key={link}>
                          <Button
                            style="textOnly"
                            externalStyle="!p-0 text-base-red"
                            showRedArrow
                          >
                            <span className="[font-size:_clamp(16px,1.5vw,20px)] font-semibold leading-[100%] -tracking-[0.2px]">
                              {title}
                            </span>
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </BasicWidthContainer>
      </div>
    </div>
  );
}
