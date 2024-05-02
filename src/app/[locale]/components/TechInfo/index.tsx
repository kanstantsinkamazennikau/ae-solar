import SequenceAnimation from "@/app/[locale]/company/components/SequenceAnimation";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Bens from "@/app/[locale]/components/TechInfo/Bens";
import FeaturedProducts from "@/app/[locale]/components/TechInfo/FeaturedProducts";

export default function TechDescription() {
  return (
    <div className="flex items-center relative flex-col min-[1480px]:w-[1440px]">
      <div className="absolute w-full lg:-top-[380px] -top-[170px]">
        <div
          className="
            w-full
            lg:h-[520px]
            h-[260px]
            border-2
            border-y-0
            bg-[linear-gradient(180deg,_rgba(19,_19,_19,_0.00)_0%,_#0D0D0D_100%)]
            [border-image:linear-gradient(180deg,_rgba(19,_19,_19,_0.00)_0%,_#131313_100%)_1]
          "
        />
        <div
          className="
            w-full
            lg:h-[880px]
            h-[800px]
            border-2
            border-x-[#151515]
            border-y-0
            bg-[#0D0D0D]
          "
        />
        <div
          className="
            w-full
            lg:h-[600px]
            h-[330px]
            md:h-[250px]
            max-[500px]:h-[100px]
            border-2
            border-y-0
            bg-[linear-gradient(180deg,_rgba(19,_19,_19,_0.00)_0%,_#0D0D0D_100%)]
            [border-image:linear-gradient(180deg,_rgba(19,_19,_19,_0.00)_0%,_#131313_100%)_1]
            rotate-180
          "
        />
      </div>
      <BasicWidthContainer styles="relative">
        <Bens />
      </BasicWidthContainer>
      <SequenceAnimation />
      <BasicWidthContainer styles="relative">
        <FeaturedProducts />
      </BasicWidthContainer>
    </div>
  );
}
