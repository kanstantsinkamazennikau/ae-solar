import Image from "next/image";
const warrantyText = `Years
Warranty`;

export default function WarrantyYears({ gridArea }: { gridArea?: string }) {
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
      <div
        className="
          w-full
          text-[184px]
          leading-[100%]
          -tracking-[34.96px]
          font-light
          bg-clip-text
          text-transparent
          bg-[linear-gradient(180deg,#FFF_0%,#FFF_50%,rgba(255,255,255,0.10)_100%)]
          relative
          left-1/2
          -translate-x-[calc(50%+17px)]
        "
      >
        30
      </div>

      {warrantyText.split(/\r?\n|\r|\n/g).map((string) => (
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
