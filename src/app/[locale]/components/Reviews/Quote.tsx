import { QuoteProps } from "@/app/[locale]/components/Reviews/types";

export function Quote({ quote, author, organisation }: QuoteProps) {
  return (
    <div className="flex flex-col xl:gap-20 lg:gap-16 md:gap-12 gap-10 self-stretch flex-grow flex-shrink-0 basis-full">
      <div className="text-5xl leading-tight max-h-[240px] [font-size:_clamp(16px,2vw,3rem)]">
        {quote}
      </div>
      <div className="flex flex-col gap-4 self-stretch">
        <span className="font-semibold leading-tight [font-size:_clamp(20px,3vw,40px)]">
          {author}
        </span>
        <span className="leading-normal text-dark-gray-800 [font-size:_clamp(12px,1.5vw,24px)]">
          {organisation}
        </span>
      </div>
    </div>
  );
}
