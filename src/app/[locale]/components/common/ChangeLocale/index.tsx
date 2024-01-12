import FlagsList from "@/app/[locale]/components/common/ChangeLocale/FlagsList";
import SelectedLanguage from "@/app/[locale]/components/common/ChangeLocale/SelectedLanguage";
import { ChangeLocaleProps } from "@/app/[locale]/components/common/ChangeLocale/types";
import Image from "next/image";
import {
  useParams,
  useRouter,
  useSelectedLayoutSegments,
} from "next/navigation";
import { useRef, useState } from "react";

export default function ChangeLocale({ mobileNavigation }: ChangeLocaleProps) {
  const router = useRouter();
  const params = useParams();
  const urlSegments = useSelectedLayoutSegments();
  const [isSelection, setIsSelection] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelection = (code: string) => {
    const newLocale = code.toLowerCase();
    router.push(`/${newLocale}/${urlSegments.join("/")}`);
  };

  return (
    <div className={`flex relative min-[640px]:w-auto w-full`}>
      <div className="bg-transparent outline-none flex w-full">
        <SelectedLanguage
          locale={(params.locale as string).toUpperCase()}
          setIsSelection={setIsSelection}
          dropdownRef={dropdownRef}
          mobileNavigation={mobileNavigation}
        />
        {isSelection && !mobileNavigation && (
          <div
            ref={dropdownRef}
            className="
              max-h-[200px]
              overflow-y-scroll
              absolute
              codeDropdown
              p-2
              border
              border-solid
              border-[#d0d8e91a]
              rounded-[5px]
              bg-[#474545b3]
              backdrop-blur-[50px]
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
