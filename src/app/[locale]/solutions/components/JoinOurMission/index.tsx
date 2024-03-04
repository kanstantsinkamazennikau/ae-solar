import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import {
  SOLUTIONS_JOIN,
  SOLUTIONS_OUR_MISSION,
  SOLUTIONS_OUR_MISSION_TEXT,
} from "@/app/[locale]/solutions/constants";
import Image from "next/image";

export default function JoinOurMission() {
  return (
    <div
      className="
        relative
        md:h-[720px]
        w-full
        h-[420px]
        xl:mb-[140px]
        lg:mb-[120px]
        md:mb-[100px]
        mb-[80px]
      "
    >
      <div className="fade-strip-top md:!h-[125px] !h-[50px]" />
      <Image
        src={`/images/solutions/joinOurMission.svg`}
        alt="joinOurMission"
        width={1920}
        height={600}
        className="
          absolute
          top-0
          md:w-[1920px]
          md:h-[600px]
          w-[800px]
          h-[250px]
          object-cover
          left-1/2
          -translate-x-1/2
        "
      />
      {/* <div className="flex justify-center items-center flex-col">
        <BasicWidthContainer> */}
      <div className="w-full absolute bottom-0 flex justify-center px-5">
        <div className="flex w-[874px] flex-col items-center gap-10">
          <TwoTierHeading
            tierOneHeading={SOLUTIONS_JOIN}
            tierTwoHeading={SOLUTIONS_OUR_MISSION}
            size="small"
            externalStyle="
              md:!text-[96px]
              [&>*:last-child]:md:!text-[96px]
              !text-[40px]
              [&>*:last-child]:!text-[40px]
            "
            reverseColor
            marginBottomNone
            align="center"
          />
          <div className="text-center md:text-[20px] text-[16px] leading-[150%] font-walsheim font-medium md:max-w-[650px] max-w-[450px]">
            {SOLUTIONS_OUR_MISSION_TEXT.split(/\r?\n|\r|\n/g).map((string) => (
              <p key={string} className="mb-6 last:mb-0">
                {string}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* </BasicWidthContainer>
      </div> */}
    </div>
  );
}
