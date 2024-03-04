import Image from "next/image";

export default function QuarterBentobox({
  imageUrl,
  shortDescription,
  gridArea,
}: {
  imageUrl: string;
  shortDescription?: string;
  gridArea?: string;
}) {
  return (
    <div
      className="
        w-[315px]
        h-[290px]
        px-6
        py-8
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
      <Image src={imageUrl} alt={imageUrl} priority width={170} height={170} />

      {shortDescription &&
        shortDescription.split(/\r?\n|\r|\n/g).map((string) => (
          <div
            className="[font-size:_clamp(16px,1.5vw,24px)] font-semibold md:-tracking-[0.96px] leading-[100%]"
            key={string}
          >
            {string}
          </div>
        ))}
    </div>
  );
}
