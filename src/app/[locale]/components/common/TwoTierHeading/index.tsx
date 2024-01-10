import { TwoTierHeadingProps } from "@/app/[locale]/components/common/TwoTierHeading/types";

const textAlign = {
  right: "text-right",
  left: "text-left",
};

const headingStyle = (size: "default" | "small") => {
  switch (size) {
    case "default":
      return "[font-size:_clamp(40px,10vw,128px)] las";
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
}: TwoTierHeadingProps) {
  return (
    <>
      <div
        className={`
          font-extrabold
          ${headingStyle(size)}
          leading-none
          w-full
          xl:mb-20
          lg:mb-16
          md:mb-12
          mb-10
          ${textAlign[align]}
        `}
      >
        <div
          className={`${reverseColor ? "text-white" : "text-dark-gray-900"}`}
        >
          {tierOneHeading}
        </div>
        <div
          className={`${reverseColor ? "text-dark-gray-900" : "text-white"}`}
        >
          {tierTwoHeading}
        </div>
      </div>
    </>
  );
}
