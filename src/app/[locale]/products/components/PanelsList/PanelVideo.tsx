import { PanelVideoProps } from "@/app/[locale]/products/components/PanelsList/types";
import { useEffect, useRef } from "react";

export default function PanelVideo({ onLoaded, panel }: PanelVideoProps) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current && (ref.current as HTMLVideoElement).play();
  }, []);

  return (
    <>
      <video
        playsInline
        ref={ref}
        width="650"
        height="340"
        loop
        muted
        onPlay={() => {
          onLoaded();
        }}
        className="w-[650px] max-md:min-h-[330px] max-md:object-cover"
      >
        <source src={`/videos/products/${panel}Choose.mp4`} type="video/mp4" />
      </video>
    </>
  );
}
