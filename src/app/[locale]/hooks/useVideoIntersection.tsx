import { useEffect, useRef, useState } from "react";

export const useVideoIntersection = () => {
  const videoRef = useRef(null);
  const [isPlayed, setIsPlayed] = useState(false);

  useEffect(() => {
    if (isPlayed) return;
    if (videoRef.current) {
      const intersectionObserver = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          if (entries[0].isIntersecting) {
            setIsPlayed(true);
            (entries[0].target as HTMLVideoElement).play();
          } else {
            (entries[0].target as HTMLVideoElement).currentTime = 0;
          }
        }
      );

      intersectionObserver.observe(videoRef.current);

      return () => {
        if (videoRef.current) {
          intersectionObserver.unobserve(videoRef.current);
        }
      };
    }
  }, [isPlayed]);

  return { videoRef };
};
