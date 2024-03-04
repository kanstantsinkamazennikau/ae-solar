"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

export interface ProductsContext {
  setIsStartAnimation: Dispatch<SetStateAction<boolean>>;
  isStartAnimation: boolean;
  setIsLongVideoLoadingTime: Dispatch<SetStateAction<boolean>>;
  isLongVideoLoadingTime: boolean;
}

export const ProductsContext = createContext<ProductsContext>(null!);

export default function ProductsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isStartAnimation, setIsStartAnimation] = useState(false);
  const [isLongVideoLoadingTime, setIsLongVideoLoadingTime] = useState(false);

  return (
    <ProductsContext.Provider
      value={{
        isStartAnimation,
        setIsStartAnimation,
        isLongVideoLoadingTime,
        setIsLongVideoLoadingTime,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
