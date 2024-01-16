import Accordion from "@/app/[locale]/components/common/Accordion";
import AccordionItem from "@/app/[locale]/components/common/Accordion/AccordionItem";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import DocumentsHeading from "@/app/[locale]/components/common/DocumentsHeading";
import Input from "@/app/[locale]/components/common/Input";
import Categories from "@/app/[locale]/documents/documents/Categories";
import Presentation from "@/app/[locale]/documents/documents/Presentation";
import Text from "@/app/[locale]/documents/documents/Text";
import {
  DOCUMENTS_DOCUMENTS_HEADING,
  DOCUMENTS_FILES,
  DOCUMENTS_SEARCH,
  DOCUMENTS_YOU_NEED_TO_KNOW,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function Documents() {
  return (
    <>
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
                  top-[80px]
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
              <Accordion multiple>
                {DOCUMENTS_FILES.map(({ type, data }) => {
                  if (type === "Presentation") {
                    return (
                      <AccordionItem key={type} title={type}>
                        <div className="grid grid-cols-3 gap-[6px] pb-10">
                          {data.map(({ link, linkTitle, title, image }) => (
                            <Presentation
                              {...{ link, title, linkTitle, image }}
                              key={title}
                            />
                          ))}
                        </div>
                      </AccordionItem>
                    );
                  }
                  return (
                    <AccordionItem key={type} title={type}>
                      <div className="pb-10">
                        {data.map(({ linkTitle, link }) => (
                          <Text {...{ linkTitle, link }} key={linkTitle} />
                        ))}
                      </div>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </BasicWidthContainer>
      </div>
    </>
  );
}
