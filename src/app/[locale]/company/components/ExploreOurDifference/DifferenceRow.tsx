export default function DifferenceRow({ rowText }: { rowText: string }) {
  return (
    <div
      className="
        flex
        relative
        p-0
        gradient-border-mask
        overflow-hidden
        backdrop-blur-[10px]
        rounded-[20px]
        max-w-[400px]
        w-full
        h-full
        lg:min-h-[200px]
        md:min-h-[150px]
        mx-auto
        z-10
        hover:scale-105
        hover:shadow-difference
        transition-all
        duration-300
      "
    >
      <div
        className="
          w-full
          h-auto
          lg:py-10
          py-6
          px-10
          rounded-[25px]
          bg-[#00000033]
          flex
          justify-center
          items-center
          flex-col
          [font-size:_clamp(20px,2.5vw,32px)]
          font-bold
          -tracking-[0.32px]
          text-center
          leading-[120%]
        "
      >
        {rowText.split(/\r?\n|\r|\n/g).map((string, index) => (
          <div key={string}>{string}</div>
        ))}
        {/* {header} */}
      </div>
    </div>
  );
}
