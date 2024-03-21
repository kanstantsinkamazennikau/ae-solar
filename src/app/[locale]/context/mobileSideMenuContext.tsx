"use client";

import { createContext, useState } from "react";

export interface MobileSideMenuContext {
  setIsHamburgerMenuOpen: (isOpen: boolean) => void;
  isHamburgerMenuOpen: boolean;
}

export const MobileSideMenuContext = createContext<MobileSideMenuContext>(
  null!
);

export default function MobileSideMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  return (
    <MobileSideMenuContext.Provider
      value={{
        setIsHamburgerMenuOpen,
        isHamburgerMenuOpen,
      }}
    >
      {children}
    </MobileSideMenuContext.Provider>
  );
}
