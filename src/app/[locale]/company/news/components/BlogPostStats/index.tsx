import { PostStatsProps } from "@/app/[locale]/company/news/components/BlogPostStats/types";
import Image from "next/image";

const statisticsParamsWithIconsMapping = {
  readingTime: "time",
  author: "author",
};

const defaultValues = {
  readingTime: "5min",
  author: "NL",
};

export default function BlogPostStats({
  statistics,
  dividerColor,
}: PostStatsProps) {
  return (
    <div
      className="
        flex
        [&>*:last-child]:border-none
        [&>*:first-child]:pl-0
        [&>*:first-child]:flex
        md:[&>*:nth-child(2)]:pl-4
      "
    >
      {Object.keys(statisticsParamsWithIconsMapping).map((statParam) => (
        <div
          key={statParam}
          className={`
            flex
            border-r
            border-solid
            ${dividerColor === "gray" ? "border-[#2D2D2D]" : "border-base-red"}
            px-4
            items-center
          `}
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
          <span className="[font-size:_clamp(12px,1vw,14px)] font- font-walsheim text-dark-gray-900 leading-[100%]">
            {statistics[statParam as keyof typeof statistics] ||
              defaultValues[statParam as keyof typeof defaultValues]}
          </span>
        </div>
      ))}
    </div>
  );
}
