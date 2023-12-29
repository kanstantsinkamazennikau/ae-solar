import Button from "@/app/[locale]/components/common/Button";
import Input from "@/app/[locale]/components/common/Input";
import {
  FOOTER_CONTACT_INFO,
  FOOTER_SUBSCRIBE,
  FOOTER_SUBSCRIBE_NEWSLETTER,
  FOOTER_YOUR_EMAIL,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ContactInfo() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="px-6 flex flex-col gap-[10px]">
        {FOOTER_CONTACT_INFO.map(({ icon, info, linkTo }) => {
          return (
            <div
              key={info}
              className="flex items-start text-sm leading-[130%] font-normal font-walsheim gap-1 max-w-[185px]"
            >
              <Image
                src={`/images/footer/${icon}`}
                alt={icon}
                width={16}
                height={16}
                priority
              />
              <div
                onClick={() => {
                  if (linkTo) router.push(linkTo);
                }}
                className={`${linkTo ? "cursor-pointer" : ""}`}
              >
                {info}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex p-6 flex-col gap-4 bg-[#0D0D0D] border border-solid border-[#191919] rounded-xl">
        <p className="text-base leading-[120%] text-dark-gray-900">
          {FOOTER_SUBSCRIBE_NEWSLETTER}
        </p>
        <Input placeholder={FOOTER_YOUR_EMAIL} />
        <Button
          onClick={() => console.log("subscribe")}
          style="transparent"
          size="extrasmall"
        >
          <span className="text-sm leading-none">{FOOTER_SUBSCRIBE}</span>
        </Button>
      </div>
    </div>
  );
}
