import FlagsList from "@/app/[locale]/components/common/ChangeLocale/FlagsList";
import SelectedLanguage from "@/app/[locale]/components/common/ChangeLocale/SelectedLanguage";
import { ChangeLocaleProps } from "@/app/[locale]/components/common/ChangeLocale/types";
import Image from "next/image";
import {
  useParams,
  usePathname,
  useRouter,
  useSelectedLayoutSegments,
} from "next/navigation";
import { useRef, useState } from "react";

export default function ChangeLocale({
  mobileNavigation,
  host,
}: ChangeLocaleProps) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isSelection, setIsSelection] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelection = (code: string) => {
    const newLocale = code.toLowerCase();
    newLocale === "de"
      ? router.push(`https://de.ae-solar.com${pathname}`)
      : router.push(`https://staging.ae-solar.com${pathname}`);
  };

  return (
    <div className={`flex relative min-[640px]:w-auto w-full`}>
      <div className="bg-transparent outline-none flex w-full">
        <SelectedLanguage
          locale={host && host[0] === "DE" ? "DE" : "EN"}
          setIsSelection={setIsSelection}
          dropdownRef={dropdownRef}
          mobileNavigation={mobileNavigation}
        />
        {isSelection && !mobileNavigation && (
          <div
            ref={dropdownRef}
            className="
              max-h-[200px]
              overflow-y-auto
              absolute
              codeDropdown
              p-2
              border-2
              border-solid
              border-option-border
              rounded-[12px]
              bg-[#131313d9]
              backdrop-blur-[50px]
              min-[920px]:items-center
              shadow-[0_4px_25px_0px_rgba(0,0,0,0.65)]
              translate-y-[52px]
              z-10
              min-w-[74px]
            "
          >
            <FlagsList handleSelection={handleSelection} />
          </div>
        )}

        {mobileNavigation && (
          <div
            className={`
            min-[920px]:hidden 
            h-screen 
            bg-black 
            fixed 
            w-full 
            top-0 
            overflow-y-auto 
            bottom-0 
            px-4 
            py-[34px]
            duration-500 
            z-10
            cursor-default
            ${isSelection ? "left-0" : "left-[-100%]"}
          `}
          >
            <Image
              src={`/images/glowFull.png`}
              alt="glow"
              priority
              width={1320}
              height={30}
              className="mb-5"
            />
            <FlagsList handleSelection={handleSelection} mobileNavigation />
          </div>
        )}
      </div>
    </div>
  );
}
