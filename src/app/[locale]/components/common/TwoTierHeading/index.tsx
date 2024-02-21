import { TwoTierHeadingProps } from "@/app/[locale]/components/common/TwoTierHeading/types";
import Image from "next/image";

const textAlign = {
  right: "text-right",
  left: "text-left",
  center: "text-center",
};

const headingStyle = (size: "default" | "small") => {
  switch (size) {
    case "default":
      return "[font-size:_clamp(40px,10vw,128px)]";
    case "small":
      return "[font-size:_clamp(40px,6vw,96px)] [&>*:last-child]:[font-size:_clamp(24px,4vw,64px)] [&>*:last-child]:font-extrabold";
    default:
      return "";
  }
};

export default function TwoTierHeading({
  tierOneHeading,
  tierTwoHeading,
  align = "right",
  size = "default",
  reverseColor = false,
  marginBottomNone,
  externalStyle,
  showDivider,
}: TwoTierHeadingProps) {
  return (
    <>
      <div
        className={`
          font-extrabold
          ${headingStyle(size)}
          leading-none
          w-full
          relative
          ${!marginBottomNone ? "xl:mb-20 lg:mb-16 md:mb-12 mb-10" : "mb-0"}
          ${textAlign[align]}
          ${externalStyle}
        `}
      >
        {showDivider && (
          <Image
            src="/images/awards/dividerSmall.svg"
            alt="dividerSmall"
            width={30}
            height={30}
            className="absolute top-0 -right-[1px] rotate-90"
          />
        )}
        <div className={`${reverseColor ? "text-white" : "text-[#B30006]"}`}>
          {tierOneHeading}
        </div>
        <div className={`${reverseColor ? "text-[#B30006]" : "text-white"}`}>
          {tierTwoHeading}
        </div>
      </div>
    </>
  );
}
