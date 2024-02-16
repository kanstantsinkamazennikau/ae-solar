import {
  MANUFACTURER_MANUFACTURER,
  MANUFACTURER_QUALITY,
} from "@/app/[locale]/company/manufacturer/constants";
import HeadingWithBackground from "@/app/[locale]/components/common/HeadingWithBackground";

export default function ManufacturerPage() {
  return (
    <>
      <HeadingWithBackground
        tierOneHeading={MANUFACTURER_MANUFACTURER}
        tierTwoHeading={MANUFACTURER_QUALITY}
        backgroundImage="/images/about/manufacturer/manufacturerBackground.png"
      />
    </>
  );
}
