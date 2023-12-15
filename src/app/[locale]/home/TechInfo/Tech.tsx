import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import {
  TECH_INFO_A_CLOSE_LOOK_AT,
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
      />
      <div className="inline-flex flex-col items-start gap-10">
        <div className="flex px-14 justify-center items-center border-4 border-solid border-black-900 rounded-[20px]">
          <Image
            src="/images/techInfo/structure.png"
            alt="structure"
            width={1200}
            height={570}
            priority
          />
        </div>
        <div className="flex items-start gap-5">
          {TECH_INFO_PANELS_DETAILS.map(({ image, title, description }) => (
            <div key={title}>
              <div
                className="
                border-4 
                border-solid 
                border-black-900 
                rounded-[20px] 
                flex 
                items-center 
                max-h-[430px] 
                max-w-[430px]
                overflow-hidden
                mb-10
                "
              >
                <Image
                  src={`/images/techInfo/${image}`}
                  alt={image}
                  width={430}
                  height={430}
                  priority
                  className="h-[430px] w-[430px] flex"
                />
              </div>
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
