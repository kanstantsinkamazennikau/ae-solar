"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

export interface MainPageVideoContext {
  setIsStartAnimation: Dispatch<SetStateAction<boolean>>;
  isStartAnimation: boolean;
  setIsLongVideoLoadingTime: Dispatch<SetStateAction<boolean>>;
  isLongVideoLoadingTime: boolean;
}

export const MainPageVideoContext = createContext<MainPageVideoContext>(null!);

export default function MainPageVideoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isStartAnimation, setIsStartAnimation] = useState(false);
  const [isLongVideoLoadingTime, setIsLongVideoLoadingTime] = useState(false);

  return (
    <MainPageVideoContext.Provider
      value={{
        isStartAnimation,
        setIsStartAnimation,
        isLongVideoLoadingTime,
        setIsLongVideoLoadingTime,
      }}
    >
      {children}
    </MainPageVideoContext.Provider>
  );
}
