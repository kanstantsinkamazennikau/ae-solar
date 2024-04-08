import { LightBoxYoutubeVideoProps } from "@/app/[locale]/components/common/LightBoxYoutubeVideo/types";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function LightBoxYoutubeVideo({
  open,
  onClose,
}: LightBoxYoutubeVideoProps) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      slides={[
        {
          type: "youtube" as const,
          src: "https://www.youtube.com/embed/6C3vl6WycWw",
          title:
            "AE Solar 20th Anniversary: Let the sun shine on the next generations!",
          width: 2144,
          height: 881,
        },
      ]}
      render={{
        slide: ({ slide, rect }) =>
          slide.type === "youtube" ? (
            <iframe
              width={Math.min(
                slide.width,
                rect.width,
                (slide.width * rect.height) / slide.height
              ).toString()}
              height={Math.min(
                slide.height,
                rect.height,
                (slide.height * rect.width) / slide.width
              ).toString()}
              src={slide.src}
              title={slide.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share"
              allowFullScreen
            />
          ) : undefined,
        buttonPrev: () => null,
        buttonNext: () => null,
      }}
    />
  );
}

{
  /* <iframe
  width="2114"
  height="881"
  src="https://www.youtube.com/embed/scHvP6eW0lI"
  title="AE Solar 20th Anniversary: Let the sun shine on the next generations!"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>; */
}
