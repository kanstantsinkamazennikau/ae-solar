import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import {
  TECH_INFO_A_CLOSE_LOOK_AT,
  TECH_INFO_PANELS,
  TECH_INFO_PANELS_DETAILS,
  TECH_INFO_THE_HIDDEN_LAYERS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function Tech() {
  return (
    <>
      <TwoTierHeading
        tierOneHeading={TECH_INFO_THE_HIDDEN_LAYERS}
        tierTwoHeading={TECH_INFO_A_CLOSE_LOOK_AT}
        align="right"
      />
      <div className="inline-flex flex-col items-start gap-10">
        <div className="grid grid-rows-2 grid-flow-col gap-5">
          {TECH_INFO_PANELS.map((panel, index) => {
            const isFullGridImage = index === 0;
            return (
              <div
                key={panel}
                className={`
                border-4 
                border-solid 
                border-black-900 
                rounded-[20px] 
                overflow-hidden
                flex
                items-end
                ${isFullGridImage ? "row-span-2" : ""}
                `}
              >
                <Image
                  src={`/images/techInfo/${panel}`}
                  alt="structure"
                  width={isFullGridImage ? 986 : 310}
                  height={isFullGridImage ? 640 : 314}
                  priority
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-between gap-5">
          {TECH_INFO_PANELS_DETAILS.map(({ title, description }) => (
            <div key={title}>
              <div className="text-2xl font-semibold mb-6">{title}</div>
              <div className="text-lg leading-normal font-semibold mb-6 text-dark-gray-900">
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
