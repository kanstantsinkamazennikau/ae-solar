import { PostStatsProps } from "@/app/[locale]/about/blog/components/BlogPostStats/types";
import Image from "next/image";

export default function BlogPostStats({ statistics }: PostStatsProps) {
  const statisticsParamsWithIconsMapping = {
    creationDate: "calendar",
    readingTime: "time",
    author: "author",
  };

  return (
    <div className="flex [&>*:last-child]:border-none [&>*:first-child]:pl-0">
      {Object.keys(statisticsParamsWithIconsMapping).map((statParam) => (
        <div
          key={statParam}
          className="flex border-r border-solid border-base-red px-4 items-center"
        >
          <Image
            src={`/images/about/blog/${
              statisticsParamsWithIconsMapping[
                statParam as keyof typeof statisticsParamsWithIconsMapping
              ]
            }.svg`}
            alt={statParam}
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="[font-size:_clamp(10px,1vw,14px)] font-bold font-walsheim text-dark-gray-900 leading-[100%]">
            {statistics[statParam as keyof typeof statistics]}
          </span>
        </div>
      ))}
    </div>
  );
}
