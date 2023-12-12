import { AWARDS_AND_STATS_STATS_WITH_DETAILS } from "@/app/utils/constants";

export default function Stats() {
  return (
    <div className="flex justify-center [&>*:last-child>div:last-child]:hidden">
      {AWARDS_AND_STATS_STATS_WITH_DETAILS.map(({ stat, details }) => (
        <div
          key={stat}
          className="flex flex-row items-center bg-black text-center"
        >
          <div>
            <p className="font-semibold leading-none xl:text-[104px] text-5xl">
              {stat}
            </p>
            <p className="text-[32px] text-dark-gray-800">{details}</p>
          </div>

          <div className="w-1 bg-white opacity-20 h-full mx-20" />
        </div>
      ))}
    </div>
  );
}
