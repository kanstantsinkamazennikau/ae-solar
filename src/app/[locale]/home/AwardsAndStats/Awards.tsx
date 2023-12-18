import LinkWithArrow from "@/app/[locale]/components/common/LinkWithArrow";
import {
  AWARDS_AND_STATS_AWARDS_IMAGES,
  AWARDS_AND_STATS_SEE_ALL_AWARDS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function Awards() {
  return (
    <div className="flex gap-2.5 flex-col self-stretch items-center">
      <div className="flex gap-5 relative">
        {AWARDS_AND_STATS_AWARDS_IMAGES.map((image) => (
          <Image
            src={`/images/awards/${image}`}
            alt={image}
            width={120}
            height={120}
            priority
            key={image}
          />
        ))}
        <div className="absolute bg-gradient-awards top-0 bottom-0 left-0 right-0"></div>
      </div>
    </div>
  );
}
