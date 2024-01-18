import { useCallback, useRef } from "react";

export const useScrollDebounce = (
  callback: () => void,
  delay: number = 100
) => {
  const callbackRef = useRef(callback);
  let timerRef = useRef<null | ReturnType<typeof setTimeout>>(null);

  return useCallback(
    (...args: any) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        callbackRef.current(...(args as []));
      }, delay);
    },
    [delay]
  );
};
