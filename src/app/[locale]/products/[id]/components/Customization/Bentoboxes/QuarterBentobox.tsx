import Image from "next/image";
import { Trans } from "react-i18next";

export default function QuarterBentobox({
  imageUrl,
  shortDescription,
  gridArea,
}: {
  imageUrl?: string;
  shortDescription?: string;
  gridArea?: string;
}) {
  return (
    <div
      className="
        2xl:w-[315px]
        2xl:h-[290px]
        lg:w-[215px]
        lg:h-[190px]
        w-[165px]
        h-[165px]
        2xl:px-6
        2xl:py-8
        px-4
        py-4
        flex
        flex-col
        justify-end
        items-center
        bg-[#131313]
        rounded-xl
        border
        border-solid
        border-[#191919]
        text-center
      "
      style={{ gridArea }}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={imageUrl}
          priority
          width={170}
          height={170}
          className="2xl:h-[170px] 2xl:w-[170px] lg:h-[90px] lg:w-[90px] w-[80px] h-[80px]"
        />
      )}

      {shortDescription && (
        <div className="[font-size:_clamp(16px,1.5vw,24px)] font-semibold md:-tracking-[0.96px] leading-[100%] capitalize">
          <Trans>{shortDescription}</Trans>
        </div>
      )}
    </div>
  );
}
