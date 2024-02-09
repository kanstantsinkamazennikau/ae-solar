import { TwoTierHeadingProps } from "@/app/[locale]/components/common/TwoTierHeading/types";

const textAlign = {
  right: "text-right",
  left: "text-left",
};

const headingStyle = (size: "default" | "small") => {
  switch (size) {
    case "default":
      return "[font-size:_clamp(40px,10vw,128px)]";
    case "small":
      return "[font-size:_clamp(40px,6vw,96px)] [&>*:last-child]:[font-size:_clamp(24px,4vw,64px)] [&>*:last-child]:font-medium";
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
}: TwoTierHeadingProps) {
  return (
    <>
      <div
        className={`
          font-extrabold
          ${headingStyle(size)}
          leading-none
          w-full
          ${!marginBottomNone ? "xl:mb-20 lg:mb-16 md:mb-12 mb-10" : "mb-0"}
          ${textAlign[align]}
        `}
      >
        <div className={`${reverseColor ? "text-white" : "text-base-red"}`}>
          {tierOneHeading}
        </div>
        <div className={`${reverseColor ? "text-base-red" : "text-white"}`}>
          {tierTwoHeading}
        </div>
      </div>
    </>
  );
}
