import { useEffect, useRef, useState } from "react";

export const useIntersection = (threshold = 0) => {
  const [intersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIntersecting(true);
          } else {
            setIntersecting(false);
          }
        },
        {
          threshold,
        }
      );

      intersectionObserver.observe(ref.current);

      return () => {
        if (ref.current) {
          intersectionObserver.unobserve(ref.current);
        }
      };
    }
  }, []);

  return { ref, intersecting };
};
