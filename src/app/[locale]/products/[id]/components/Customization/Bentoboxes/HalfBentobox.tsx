export default function HalfBentobox({
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
        w-[650px]
        h-[290px]
        bg-[#131313]
        rounded-xl
        border
        border-solid
        border-[#191919]
        px-6
        py-8
        flex
        flex-col
        justify-end
        items-center
      "
      style={{
        backgroundImage: imageUrl,
        gridArea: gridArea,
      }}
    >
      {shortDescription &&
        shortDescription.split(/\r?\n|\r|\n/g).map((string) => (
          <div
            className="[font-size:_clamp(16px,1.5vw,24px)] font-semibold md:-tracking-[0.96px]"
            key={string}
          >
            {string}
          </div>
        ))}
    </div>
  );
}
