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
    <div
      className="
        flex
        min-[650px]:flex-col
        gap-6
        items-center
        justify-between
        flex-row
        col-start-1
        col-end-3
        min-[650px]:col-end-auto 
        min-[650px]:col-start-auto
        max-[500px]:col-start-auto
        max-[500px]:col-end-auto
        max-[500px]:flex-col
        max-[500px]:items-start
      "
    >
      <div className="min-[650px]:px-6 px-0 flex flex-col gap-[10px]">
        {FOOTER_CONTACT_INFO.map(({ icon, info, linkTo }) => {
          return (
            <div
              key={info}
              className="flex items-start leading-[130%] font-normal font-walsheim gap-1 max-w-[185px] [font-size:_clamp(10px,1vw,14px)]"
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
      <div className="flex p-6 flex-col gap-4 bg-[#0D0D0D] border border-solid border-[#191919] rounded-xl w-full">
        <p className="text-base leading-[120%] text-dark-gray-900 [font-size:_clamp(11px,1vw,16px)]">
          {FOOTER_SUBSCRIBE_NEWSLETTER}
        </p>
        <Input
          placeholder={FOOTER_YOUR_EMAIL}
          externalStyle="placeholder:[font-size:_clamp(11px,1vw,16px)] "
        />
        <Button
          onClick={() => console.log("subscribe")}
          style="transparent"
          size="extrasmall"
        >
          <span className="text-sm leading-none [font-size:_clamp(10px,1vw,14px)]">
            {FOOTER_SUBSCRIBE}
          </span>
        </Button>
      </div>
    </div>
  );
}
