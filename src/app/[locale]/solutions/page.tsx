import ContactUs from "@/app/[locale]/solutions/components/ContactUs";
import Cooperation from "@/app/[locale]/solutions/components/Cooperation";
import Discover from "@/app/[locale]/solutions/components/Discover";
import GlobalImpact from "@/app/[locale]/solutions/components/GlobalImpact";
import JoinOurMission from "@/app/[locale]/solutions/components/JoinOurMission";

export default function SolutionsPage() {
  return (
    <div
      className="
        xl:mb-[140px]
        lg:mb-[120px]
        md:mb-[100px]
        mb-[80px]
      "
    >
      <Discover />
      {/* <Cooperation /> */}
      <Cooperation />
      <GlobalImpact />
      <JoinOurMission />
      <ContactUs />
    </div>
  );
}
