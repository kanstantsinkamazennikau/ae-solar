import { PanelVideoProps } from "@/app/[locale]/products/components/PanelsList/types";

export default function PanelVideo({ onLoaded, panel }: PanelVideoProps) {
  return (
    <>
      <video
        width="650"
        height="340"
        autoPlay
        loop
        muted
        onLoad={onLoaded}
        className="min-[1440px]:w-[650px] w-[548px]"
      >
        <source src={`/videos/products/${panel}Choose.mp4`} type="video/mp4" />
      </video>
    </>
  );
}
