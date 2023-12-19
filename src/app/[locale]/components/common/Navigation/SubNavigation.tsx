import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Models from "@/app/[locale]/components/common/Navigation/Models";

export default function SubNavigation() {
  return (
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
        <Models />
      </BasicWidthContainer>
    </div>
  );
}
