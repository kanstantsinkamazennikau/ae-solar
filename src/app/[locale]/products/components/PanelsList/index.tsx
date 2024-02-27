import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { Model } from "@/app/[locale]/context/constructorContext";
import Panel from "@/app/[locale]/products/components/PanelsList/Panel";
import {
  PRODUCT_TIME_TO_CHOOSE,
  PRODUCT_YOUR_MODULE,
} from "@/app/[locale]/products/constants";
import { PRODUCT_INTRO_PANELS_IMAGES } from "@/app/[locale]/utils/constants";

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
        <div className="w-full flex justify-center items-start content-start md:gap-5 gap-3 flex-wrap">
          {PRODUCT_INTRO_PANELS_IMAGES.map((panel) => (
            <Panel panel={panel as Model} key={panel} />
          ))}
        </div>
      </BasicWidthContainer>
    </div>
  );
}
