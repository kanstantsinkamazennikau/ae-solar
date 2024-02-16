import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import {
  ABOUT_BUSINESS,
  ABOUT_MAP,
  ABOUT_MAP_DESIGNATIONS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function BusinessMap() {
  return (
    <div className="flex flex-col justify-center items-center">
      <BasicWidthContainer>
        <div className="pb-20 -mt-40">
          <TwoTierHeading
            tierOneHeading={ABOUT_BUSINESS}
            tierTwoHeading={ABOUT_MAP}
          />
          <div className="relative">
            <Image
              src="/images/about/map.svg"
              alt="map"
              width={1320}
              height={786}
              priority
            />
            <div
              className="
          inline-flex
          flex-col
          gap-4
          p-8
          border
          border-solid
          border-[#191919]
          bg-[#0D0D0D]
          rounded-xl
          absolute
          left-0
          bottom-0
        "
            >
              {ABOUT_MAP_DESIGNATIONS.map(({ icon, designation, location }) => (
                <div
                  key={designation}
                  className={`flex gap-2 w- ${
                    location ? "items-start" : "items-center"
                  }`}
                >
                  <Image
                    src={`/images/about/${icon}`}
                    alt={icon}
                    width={16}
                    height={16}
                    priority
                  />
                  <div className="font-walsheim text-sm leading-none">
                    <div className="font-normal">{designation}</div>
                    <div className="font-bold mt-1">{location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
