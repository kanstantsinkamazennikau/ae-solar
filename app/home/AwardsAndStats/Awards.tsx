import LinkWithArrow from "@/app/components/common/LinkWithArrow";
import {
  AWARDS_AND_STATS_AWARDS_IMAGES,
  AWARDS_AND_STATS_SEE_ALL_AWARDS,
} from "@/app/utils/constants";
import Image from "next/image";

export default function Awards() {
  return (
    <div className="flex gap-2.5 flex-col self-stretch items-center">
      <div className="flex gap-5">
        {AWARDS_AND_STATS_AWARDS_IMAGES.map((image) => (
          <div key={image} className="flex">
            <Image
              src={`/images/awards/${image}`}
              alt={image}
              width={150}
              height={150}
              priority
              key={image}
            />
          </div>
        ))}
      </div>
      <LinkWithArrow label={AWARDS_AND_STATS_SEE_ALL_AWARDS} href="href" />
    </div>
  );
}
