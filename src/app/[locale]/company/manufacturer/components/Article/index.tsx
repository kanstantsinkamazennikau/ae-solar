import { MANUFACTURER_ARTICLE } from "@/app/[locale]/company/manufacturer/constants";
import parse from "html-react-parser";
import Image from "next/image";
import { Fragment } from "react";

const ArtcileHeading = ({ heading }: { heading: string }) => {
  return (
    <p className="[font-size:_clamp(36px,3vw,48px)] leading-[120%] -tracking-[0.36px]">
      {heading}
    </p>
  );
};

const ArticleParagraph = ({ paragraph }: { paragraph: string }) => {
  return (
    <p className="[font-size:_clamp(16px,1.5vw,20px)] font-walsheim leading-[150%] -tracking-[0.36px] font-normal">
      {parse(paragraph)}
    </p>
  );
};

export default function Artcile() {
  return (
    <div className="max-w-[650px] flex flex-col gap-[30px] w-full max-[920px]:mx-auto">
      {MANUFACTURER_ARTICLE.map(({ paragraphHeading, paragraphs }) => (
        <Fragment key={paragraphHeading}>
          <ArtcileHeading heading={paragraphHeading} />
          {paragraphs.map((paragraph, index) => {
            if (paragraph.type === "text")
              return (
                <ArticleParagraph paragraph={paragraph.value} key={index} />
              );
            if (paragraph.type === "image")
              return (
                <div
                  key={index}
                  className="flex gap-1 md:flex-row flex-col items-center"
                >
                  {paragraph.mobileSrc &&
                    paragraph.mobileSrc.map((image) => (
                      <Image
                        src={`/images/about/manufacturer/${image}`}
                        alt="articleImg1"
                        width={paragraph.width}
                        height={paragraph.height}
                        quality={100}
                        key={image}
                        className={`${paragraph.mobileStyle} md:hidden block`}
                      />
                    ))}
                  {paragraph.src.map((image) => (
                    <Image
                      src={`/images/about/manufacturer/${image}`}
                      alt="articleImg1"
                      width={paragraph.width}
                      height={paragraph.height}
                      quality={100}
                      key={image}
                      className={`${paragraph.style} ${
                        paragraph.mobileSrc && "md:block hidden"
                      }`}
                    />
                  ))}
                </div>
              );
          })}
        </Fragment>
      ))}
    </div>
  );
}
