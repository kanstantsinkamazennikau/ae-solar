import LinkWithArrow from "@/app/components/common/LinkWithArrow";
import {
  AWARDS_AND_STATS_GERMAN_ENGINEERING,
  AWARDS_AND_STATS_PRODUCTION_PLANTS,
  AWARDS_AND_STATS_AWARDS_IMAGES,
  AWARDS_AND_STATS_SEE_ALL_AWARDS,
  AWARDS_AND_STATS_STATS_WITH_DETAILS,
} from "@/app/utils/constants";
import Image from "next/image";

function Stats() {
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

function Production() {
  return (
    <div className="flex gap-[120px]">
      <div className="flex justify-end items-center gap-4 flex-grow flex-shrink basis-0">
        <div className="text-[40px] font-bold leading-none">
          {AWARDS_AND_STATS_GERMAN_ENGINEERING}
        </div>
        <Image
          src="/images/german.svg"
          alt="german"
          width={76}
          height={76}
          priority
        />
      </div>
      <div className="w-1 bg-white opacity-20 h-auto" />
      <div className="text-[40px] font-bold leading-none flex-grow flex-shrink basis-0">
        {AWARDS_AND_STATS_PRODUCTION_PLANTS}
      </div>
    </div>
  );
}

function Rewards() {
  return (
    <div className="flex gap-2.5 flex-col self-stretch items-center">
      <div className="flex gap-5">
        {AWARDS_AND_STATS_AWARDS_IMAGES.map((image) => (
          <div key={image} className="flex">
            <Image
              src={`/images/awards/${image}`}
              alt={image}
              width={150}
              height={150}
              priority
              key={image}
            />
          </div>
        ))}
      </div>
      <LinkWithArrow label={AWARDS_AND_STATS_SEE_ALL_AWARDS} href="href" />
    </div>
  );
}

export default function AwardsAndStats() {
  return (
    <div className="flex flex-col gap-20">
      <Stats />
      <Production />
      <Rewards />
    </div>
  );
}
