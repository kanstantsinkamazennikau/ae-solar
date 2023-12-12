import { QuoteProps } from "@/app/home/Reviews/types";

export function Quote({ quote, author, organisation }: QuoteProps) {
  return (
    <div className="flex flex-col gap-20 self-stretch flex-grow flex-shrink-0 basis-full">
      <div
        className="text-5xl leading-tight max-h-[240px]"
        style={{ fontSize: "clamp(1.25rem, 2vw, 3rem)" }}
      >
        {quote}
      </div>
      <div className="flex flex-col gap-4 self-stretch">
        <span className="text-[40px] font-semibold leading-tight">
          {author}
        </span>
        <span className="text-2xl leading-normal text-dark-gray-800">
          {organisation}
        </span>
      </div>
    </div>
  );
}
