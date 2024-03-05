import Image from "next/image";
const warrantyText = `Years
Warranty`;

export default function WarrantyYears({ gridArea }: { gridArea?: string }) {
  return (
    <div
      className="
        2xl:w-[315px]
        2xl:h-[290px]
        w-[215px]
        h-[190px]
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
      <div
        className="
          w-full
          2xl:text-[184px]
          text-[114px]
          leading-[100%]
          2xl:-tracking-[34.96px]
          -tracking-[20px]
          font-light
          bg-clip-text
          text-transparent
          bg-[linear-gradient(180deg,#FFF_0%,#FFF_50%,rgba(255,255,255,0.10)_100%)]
          relative
          left-1/2
          2xl:-translate-x-[calc(50%+17px)]
          -translate-x-[calc(50%+10px)]
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
