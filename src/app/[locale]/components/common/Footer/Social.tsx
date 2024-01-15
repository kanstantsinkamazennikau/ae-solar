import {
  FOOTER_SOCIAL,
  FOOTER_WE_ARE_SOCIAL,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function Social() {
  return (
    <div className="flex flex-col gap-4 w-fit">
      <span className="font-medium text-[#505050] [font-size:_clamp(16px,2vw,24px)] leading-[100%]">
        {FOOTER_WE_ARE_SOCIAL}
      </span>
      <div className="flex justify-around w-full">
        {FOOTER_SOCIAL.map(({ icon, link }) => (
          <a href={link} target="_blank" key={link}>
            <Image
              src={`/images/footer/${icon}`}
              alt={icon}
              priority
              width={24}
              height={24}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
