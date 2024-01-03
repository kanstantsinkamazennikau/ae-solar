import StatWithAnimationCounter from "@/app/[locale]/components/AwardsAndStats/StatWithAnimationCounter";
import { AWARDS_AND_STATS_STATS_WITH_DETAILS } from "@/app/[locale]/utils/constants";

export default function Stats() {
  return (
    <div
      className="flex justify-center [&>*:last-child>div:last-child]:hidden"
      id="statAnimationTrigger"
    >
      {AWARDS_AND_STATS_STATS_WITH_DETAILS.map(
        ({ stat, details, initialValue, sign }) => (
          <StatWithAnimationCounter
            key={stat}
            {...{ stat, details, initialValue, sign }}
          />
        )
      )}
    </div>
  );
}
