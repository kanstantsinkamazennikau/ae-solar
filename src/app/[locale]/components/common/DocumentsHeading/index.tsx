import { DocumentsHeadingProps } from "@/app/[locale]/components/common/DocumentsHeading/types";

export default function DocumentsHeading({
  tierOneHeading,
  tierTwoHeading,
}: DocumentsHeadingProps) {
  return (
    <div className="flex flex-col gap-4">
      <p
        className="
          [font-size:_clamp(24px,4vw,96px)]
          font-extrabold
          leading-[100%]
          -tracking-[2.88]
        "
      >
        {tierOneHeading}
      </p>
      <p
        className="
          [font-size:_clamp(16px,4vw,64px)]
          font-medium
          leading-[100%]
          -tracking-[1.92]
          text-base-red
        "
      >
        {tierTwoHeading}
      </p>
    </div>
  );
}
