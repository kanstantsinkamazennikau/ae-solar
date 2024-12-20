import { useCallback, useEffect, useRef, useState } from "react";

export const usePlayIntersection = () => {
  const containerRef = useRef(null);
  const [observer, setObserver] = useState<IntersectionObserver>();
  useEffect(() => {
    const cb = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) (target as HTMLVideoElement).play();
        else {
          (target as HTMLVideoElement).currentTime = 0;
        }
      });
    };

    const obs = new IntersectionObserver(cb, {
      root: containerRef.current,
      rootMargin: "0%",
      threshold: 1,
    });
    setObserver(obs);

    return () => {
      obs.disconnect();
    };
  }, []);

  const observe = useCallback(
    //@ts-ignore
    (el) => {
      if (observer) {
        try {
          observer.observe(el);
        } catch (error) {
          observer.disconnect();
        }
      }
    },
    [observer]
  );

  return [observe, containerRef];
};
