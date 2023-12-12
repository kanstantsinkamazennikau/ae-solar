import { TwoTierHeadingProps } from "@/app/components/common/TwoTierHeading/types";

export default function TwoTierHeading({
  tierOneHeading,
  tierTwoHeading,
}: TwoTierHeadingProps) {
  return (
    <>
      <div className="font-extrabold text-9xl leading-none text-end w-full mb-20">
        <div className="text-dark-gray-900">{tierOneHeading}</div>
        <div>{tierTwoHeading}</div>
      </div>
    </>
  );
}
