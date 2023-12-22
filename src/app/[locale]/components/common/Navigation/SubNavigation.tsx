import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Models from "@/app/[locale]/components/common/Navigation/Models";
import { SubNavigationProps } from "@/app/[locale]/components/common/Navigation/types";
import { StickyNavigationContext } from "@/app/[locale]/context/stickyNavigationContext";
import { useContext } from "react";

export default function SubNavigation({ isLink }: SubNavigationProps) {
  const { sticky } = useContext(StickyNavigationContext);
  return sticky ? (
    <div
      className="bg-sub-navigation-black 
        backdrop-blur-[10px] 
        border-b border-solid 
        border-sub-navigation-border 
        py-2 
        md:flex 
        hidden
        justify-center
        relative
        -z-[1]
        "
    >
      <BasicWidthContainer>
        <Models {...{ isLink }} />
      </BasicWidthContainer>
    </div>
  ) : null;
}
