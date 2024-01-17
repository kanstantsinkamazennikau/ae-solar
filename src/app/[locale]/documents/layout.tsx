import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import DocumentsHeading from "@/app/[locale]/components/common/DocumentsHeading";
import Input from "@/app/[locale]/components/common/Input";
import DocumentsProvider from "@/app/[locale]/context/documentsContext";
import Categories from "@/app/[locale]/documents/components/Categories";
import {
  DOCUMENTS_DOCUMENTS_HEADING,
  DOCUMENTS_SEARCH,
  DOCUMENTS_YOU_NEED_TO_KNOW,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocumentsProvider>
      <div className="relative -mt-[64px]">
        <Image
          src={`/images/documents/documents.png`}
          alt="documents"
          width={1920}
          height={440}
          quality={100}
          priority
          className="h-[440px]"
        />
        <div className="flex w-full justify-center absolute bottom-0">
          <BasicWidthContainer>
            <DocumentsHeading
              tierOneHeading={DOCUMENTS_DOCUMENTS_HEADING}
              tierTwoHeading={DOCUMENTS_YOU_NEED_TO_KNOW}
            />
          </BasicWidthContainer>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <BasicWidthContainer>
          <Image
            src={`/images/glowFull.png`}
            alt="glow"
            priority
            width={1320}
            height={60}
            className="mb-[60px]"
          />
          <div className="flex gap-[60px]">
            <div>
              <Categories />
            </div>

            <div className="w-full">
              <div
                className="
                  sticky
                  min-[920px]:top-[80px]
                  top-[64px]
                  z-30
                  pb-2
                  bg-black
                  backdrop-blur-3xl
                "
              >
                <div
                  className="
                    flex
                    pl-2
                    pr-[6px]
                    border-solid
                    border
                  border-option-border
                    items-center
                    rounded-full
                  bg-[#0D0D0D]
                    w-full
                  "
                >
                  <div className="flex py-3 px-2 w-full">
                    <Image
                      src={`/images/documents/search.svg`}
                      alt="glow"
                      priority
                      width={24}
                      height={24}
                    />
                    <Input
                      externalStyle="border-none"
                      externalContainerStyle="!w-full"
                      placeholder="I’m looking for…"
                    />
                  </div>
                  <div>
                    <Button size="extrasmall">
                      <span className="[font-size:_clamp(12px,1.5vw,16px)] leading-[100%]">
                        {DOCUMENTS_SEARCH}
                      </span>
                    </Button>
                  </div>
                </div>
              </div>

              <hr className="bg-option-border h-[1px] border-none w-full mt-2" />
              {children}
            </div>
          </div>
        </BasicWidthContainer>
      </div>
    </DocumentsProvider>
  );
}
