import ChooseModel from "@/app/[locale]/calculate/components/ChooseModel";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { CONSTRUCTOR_OPTION_LINES } from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function Options() {
  return (
    <BasicWidthContainer>
      <div className="flex items-start gap-10 self-stretch mb-[80px] md:flex-row flex-col relative">
        {/* IMG */}
        <div
          className="
          bg-black
            sticky
            top-[64px]
            md:top-[110px]
            h-[240px]
            min-[500px]:h-[33vh]
            md:h-[calc(100vh-130px)]
            z-10
            w-full
          "
        >
          <div
            className="
            border-4
            border-solid
            border-option-border
            rounded-[20px]
            max-w-[985px]
            min-[500px]:h-[32vh]
            h-[240px]
            md:h-[calc(100vh-130px)]
            w-full
            flex
            justify-center
            items-center
            overflow-hidden
          "
          >
            <div
              className="
              relative
              flex
              justify-center
              items-center
            "
            >
              <Image
                src={`/images/featuredProductsConstructor.svg`}
                alt={"featuredProducts"}
                priority
                width={1920}
                height={1080}
                quality={100}
                className="
                  md:max-w-full
                  min-[500px]:max-w-[400px]
                  max-h-full
                  md:h-full
                  h-[200px]
                  min-[500px]:h-[27vh]
                "
              />
              <div className="absolute w-full top-0">
                {CONSTRUCTOR_OPTION_LINES.map(({ panelName, position }) => (
                  <div
                    className={`inline-flex flex-col items-start gap-2 shrink-0 absolute -top-3`}
                    style={{ left: position }}
                    key={panelName}
                  >
                    <span
                      className={`font-normal text-option-text [font-size:_clamp(9px,1.5vw,16px)]`}
                    >
                      {panelName}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ChooseModel />
      </div>
    </BasicWidthContainer>
  );
}
