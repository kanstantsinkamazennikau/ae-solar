export default function HalfBentobox({
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
        2xl:w-[650px]
        2xl:h-[290px]
        lg:w-[450px]
        lg:h-[190px]
        w-[350px]
        h-[165px]
        bg-[#131313]
        rounded-xl
        border
        border-solid
        border-[#191919]
        2xl:px-6
        2xl:py-8
        px-4
        py-4
        flex
        flex-col
        justify-end
        items-center
        bg-contain
        bg-no-repeat
        bg-center
      "
      style={{
        backgroundImage: imageUrl,
        gridArea: gridArea,
      }}
    >
      {shortDescription &&
        shortDescription.split(/\r?\n|\r|\n/g).map((string) => (
          <div
            className="[font-size:_clamp(16px,1.5vw,24px)] font-semibold md:-tracking-[0.96px] capitalize"
            key={string}
          >
            {string}
          </div>
        ))}
    </div>
  );
}
