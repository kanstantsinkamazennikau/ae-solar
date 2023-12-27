import ChooseModel from "@/app/[locale]/calculate/components/ChooseModel";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { CONSTRUCTOR_OPTION_LINES } from "@/app/[locale]/utils/constants";

export default function Option() {
  return (
    <BasicWidthContainer>
      <div className="flex items-start gap-10 self-stretch mt-10 mb-[80px]">
        {/* IMG */}
        <div className="border-4 border-solid border-option-border rounded-[20px] max-w-[985px] h-[640px] w-full sticky top-[90px] md:top-[140px]">
          <div
            className="bg-[url('/images/featuredProducts.png')] 
              bg-no-repeat 
              bg-contain
              bg-center
              max-w-full
              max-h-full
              h-full
              relative
            "
          >
            <div className="md:pt-20 pt-28">
              {CONSTRUCTOR_OPTION_LINES.map(
                ({ panelName, lineHeight, position }) => (
                  <div
                    className={`inline-flex flex-col items-start gap-2 shrink-0 absolute`}
                    style={{ left: position }}
                    key={panelName}
                  >
                    <span className="text-base font-normal text-option-text">
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
          </div>
        </div>
        <ChooseModel />
      </div>
    </BasicWidthContainer>
  );
}
