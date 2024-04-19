import DifferenceCenter from "@/app/[locale]/company/components/ExploreOurDifference/DifferenceCenter";
import DifferenceRow from "@/app/[locale]/company/components/ExploreOurDifference/DifferenceRow";
import {
  ABOUT_EXPLORE_FOOTER,
  ABOUT_EXPLORE_HEADER,
} from "@/app/[locale]/company/constants";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Starfield from "@/app/[locale]/products/components/StarField";
import Image from "next/image";

export default function ExploreOurDifference() {
  return (
    <div
      className="
        flex
        justify-center
        items-center
        overflow-hidden
        relative
        xl:pt-[240px]
        xl:pb-[230px]
        md:pt-[140px]
        md:pb-[130px]
        pt-[40px]
        pb-[30px]
        xl:mb-[180px]
        lg:mb-[140px]
        md:mb-[100px]
        mb-[80px]
      "
    >
      <div
        className={`absolute top-0 object-cover w-full h-full md:block hidden`}
      >
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.02}
          backgroundColor="black"
          style="absolute h-full"
        />
      </div>
      <BasicWidthContainer styles="!px-0">
        <div>
          <div
            className="
                [font-size:_clamp(32px,3vw,40px)]
                font-extrabold
                leading-[130%]
                text-center
                -tracking-[0.96px]
                mb-8
                md:hidden
              "
          >
            <DifferenceCenter />
          </div>
          <div
            className="
              grid
              xl:grid-cols-[repeat(3,minmax(400px,1fr))]
              md:grid-cols-[repeat(3,minmax(200px,1fr))]
              grid-cols-[repeat(1,minmax(0,1fr))]
              items-center justify-center
              gap-4
              px-5
              md:w-fit
              mx-auto
            "
          >
            {ABOUT_EXPLORE_HEADER.map((header, index) => (
              <DifferenceRow key={header} rowText={header} index={index} />
            ))}
          </div>

          {/* MOBILE */}
          <div className="mb-4 md:hidden"></div>
          <div className="relative md:block hidden">
            <Image
              src="/images/about/differencesBack.svg"
              alt="solar panel"
              priority
              width={980}
              height={580}
              className="md:-my-[210px] -my-[110px] md:h-[710px] h-[400px] mx-auto object-cover"
            />
            <div
              className="
                [font-size:_clamp(28px,4vw,64px)]
                font-bold
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                leading-[100%]
                text-center
              "
            >
              <DifferenceCenter />
            </div>
          </div>

          <div
            className="
              grid
              xl:grid-cols-[repeat(3,minmax(400px,1fr))]
              md:grid-cols-[repeat(3,minmax(200px,1fr))]
              grid-cols-[repeat(1,minmax(0,1fr))]
              items-center justify-center
              gap-4
              px-5
              md:w-fit
              mx-auto
            "
          >
            {ABOUT_EXPLORE_FOOTER.map((footer, index) => (
              <DifferenceRow
                key={footer}
                rowText={footer}
                index={ABOUT_EXPLORE_HEADER.length + index}
              />
            ))}
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
