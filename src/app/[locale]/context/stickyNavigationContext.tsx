"use client";

import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { useParams, usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

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
  const path = usePathname();
  const locale = useParams()?.locale as LocaleTypes;

  useEffect(() => {
    if (!["/", `/${locale}`].includes(path)) setSticky(true);
  }, [locale, path]);

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
