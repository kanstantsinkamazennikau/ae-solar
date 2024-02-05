import Awards from "@/app/[locale]/components/AwardsAndStats/Awards";
import Production from "@/app/[locale]/components/AwardsAndStats/Production";
import Stats from "@/app/[locale]/components/AwardsAndStats/Stats";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Image from "next/image";

export default async function AwardsAndStats() {
  return (
    <BasicWidthContainer styles="mx-auto z-30 relative -top-[64px]">
      <div
        className="
          flex
          flex-col
          md:gap-20
          lg:gap-14
          gap-10
          xl:mb-[280px]
          lg:mb-[180px]
          md:mb-[100px]
          mb-[80px]
          relative
          mt-[60px]
          py-[60px]
          bg-[linear-gradient(0deg,_rgb(0_0_0_/_50%),_rgb(0_0_0_/_50%)),_linear-gradient(0deg,_#19191947,_#19191947)]
          border
          border-solid
          border-[#191919]
        "
      >
        <Image
          src="/images/awards/dividerSmall.svg"
          alt="dividerSmall"
          width={30}
          height={30}
          className="absolute top-0 -left-[1px]"
        />

        <Stats />
        <Production />
        <Awards />
        <Image
          src="/images/awards/dividerBig.svg"
          alt="dividerBig"
          width={300}
          height={300}
          className="absolute bottom-0 -right-[1px]"
        />
      </div>
    </BasicWidthContainer>
  );
}
