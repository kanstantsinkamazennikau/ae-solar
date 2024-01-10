import ChooseModel from "@/app/[locale]/calculate/components/ChooseModel";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { CONSTRUCTOR_OPTION_LINES } from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function Option() {
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
            h-[calc(49vh-130px)]
            md:h-[calc(100vh-130px)]
          "
        >
          <div
            className="
            border-4
            border-solid
            border-option-border
            rounded-[20px]
            max-w-[985px]
            h-[calc(47vh-130px)]
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
              h-full
              relative
              flex
              justify-center
              items-center
              
            "
            >
              <Image
                src={`/images/featuredProducts.png`}
                alt={"featuredProducts"}
                priority
                width={1920}
                height={1080}
                className="
                md:max-w-full
                max-h-full
              "
              />
              <div className="md:pt-28 xl:pt-20 absolute w-full top-0 md:block hidden">
                {CONSTRUCTOR_OPTION_LINES.map(
                  ({ panelName, lineHeight, position }) => (
                    <div
                      className={`inline-flex flex-col items-start gap-2 shrink-0 absolute`}
                      style={{ left: position }}
                      key={panelName}
                    >
                      <span
                        className={`font-normal text-option-text [font-size:_clamp(9px,1.5vw,16px)]`}
                      >
                        {panelName}
                      </span>
                      <div
                        className={`optionLine w-[1px]`}
                        style={{
                          height: `${lineHeight}px`,
                        }}
                      ></div>
                    </div>
                  )
                )}
              </div>
              <div className="md:hidden pt-6 absolute w-full top-0 block">
                {CONSTRUCTOR_OPTION_LINES.map(
                  ({ panelName, smallScreenLineHeight, position }) => (
                    <div
                      className={`inline-flex flex-col items-start gap-2 shrink-0 absolute`}
                      style={{ left: position }}
                      key={panelName}
                    >
                      <span
                        className={`font-normal text-option-text [font-size:_clamp(9px,1.5vw,16px)]`}
                      >
                        {panelName}
                      </span>
                      <div
                        className={`optionLine w-[1px]`}
                        style={{
                          height: `${smallScreenLineHeight}px`,
                        }}
                      ></div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <ChooseModel />
      </div>
    </BasicWidthContainer>
  );
}
