import { TwoTierHeadingProps } from "@/app/[locale]/components/common/TwoTierHeading/types";

const textAlign = {
  right: "text-right",
  left: "text-left",
};

export default function TwoTierHeading({
  tierOneHeading,
  tierTwoHeading,
  align = "right",
}: TwoTierHeadingProps) {
  return (
    <>
      <div
        className={`font-extrabold text-9xl leading-none w-full mb-20 ${textAlign[align]}`}
      >
        <div className="text-dark-gray-900">{tierOneHeading}</div>
        <div>{tierTwoHeading}</div>
      </div>
    </>
  );
}
