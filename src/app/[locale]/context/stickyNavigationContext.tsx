"use client";

import { createContext, useState } from "react";

export interface StickyNavigationContext {
  setSticky: (model: boolean) => void;
  sticky: boolean;
}

export const StickyNavigationContext = createContext<StickyNavigationContext>(
  null!
);

export default function StickyNavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sticky, setSticky] = useState(false);

  return (
    <StickyNavigationContext.Provider
      value={{
        sticky,
        setSticky,
      }}
    >
      {children}
    </StickyNavigationContext.Provider>
  );
}
