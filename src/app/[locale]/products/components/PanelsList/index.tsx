import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { Model } from "@/app/[locale]/context/constructorContext";
import Panel from "@/app/[locale]/products/components/PanelsList/Panel";
import {
  PRODUCT_TIME_TO_CHOOSE,
  PRODUCT_YOUR_MODULE,
} from "@/app/[locale]/products/constants";
import {
  PRODUCT_INTRO_CALCULATE_YOUR_MODEL,
  PRODUCT_INTRO_PANELS_IMAGES,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import Link from "next/link";

export default function PanelsList() {
  return (
    <div className="flex flex-col items-center">
      <TwoTierHeading
        tierOneHeading={PRODUCT_TIME_TO_CHOOSE}
        tierTwoHeading={PRODUCT_YOUR_MODULE}
        align="center"
        externalStyle="[font-size:_clamp(40px,6vw,102px)!important] font-semibold mb-[60px]"
      />
      <BasicWidthContainer>
        <Image
          src={`/images/glowFull.png`}
          alt="glow"
          priority
          width={1320}
          height={60}
          className="rotate-180 h-[60px] mb-[60px]"
        />
        <div className="w-full flex justify-center items-start content-start md:gap-5 gap-3 flex-wrap md:mb-[60px] mb-[40px]">
          {PRODUCT_INTRO_PANELS_IMAGES.map((panel) => (
            <Panel panel={panel as Model} key={panel} />
          ))}
        </div>
        <Link href={"/calculate"}>
          <Button externalStyle="!py-[14px] mx-auto relative z-10">
            {PRODUCT_INTRO_CALCULATE_YOUR_MODEL}
          </Button>
        </Link>
      </BasicWidthContainer>
    </div>
  );
}
