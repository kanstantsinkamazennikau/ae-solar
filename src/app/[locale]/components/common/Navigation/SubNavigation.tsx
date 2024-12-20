import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Models from "@/app/[locale]/components/common/Navigation/Models";
import { SubNavigationProps } from "@/app/[locale]/components/common/Navigation/types";

export default function SubNavigation({
  isLink,
  isProductionIntroBlock = false,
  chooseYourModuleText,
  modulesText,
}: SubNavigationProps) {
  return (
    <div
      className={`
        bg-sub-navigation-black 
        backdrop-blur-[10px] 
        ${
          isProductionIntroBlock
            ? "border-none"
            : "border-b border-solid border-sub-navigation-border max-w-[1920px] mx-auto"
        }
        py-2
        ${isProductionIntroBlock ? "flex" : "md:flex hidden"}
        justify-center
        relative
        -z-[1]
      `}
    >
      <BasicWidthContainer>
        <Models
          {...{
            isLink,
            isProductionIntroBlock,
            chooseYourModuleText,
            modulesText,
          }}
        />
      </BasicWidthContainer>
    </div>
  );
}
