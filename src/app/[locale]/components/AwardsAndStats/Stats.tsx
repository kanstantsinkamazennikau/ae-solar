import StatWithAnimationCounter from "@/app/[locale]/components/AwardsAndStats/StatWithAnimationCounter";
import { AWARDS_AND_STATS_STATS_WITH_DETAILS } from "@/app/[locale]/utils/constants";

export default function Stats() {
  return (
    <div
      className="flex justify-center [&>*:last-child]:hidden px-5 flex-wrap [&>*:nth-child(4)]:hidden md:[&>*:nth-child(4)]:block"
      id="statAnimationTrigger"
    >
      {AWARDS_AND_STATS_STATS_WITH_DETAILS.map(
        ({ stat, details, initialValue, sign }, index) => (
          <StatWithAnimationCounter
            key={stat}
            {...{ stat, details, initialValue, sign, index }}
          />
        )
      )}
    </div>
  );
}
