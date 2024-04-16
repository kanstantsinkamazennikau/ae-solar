"use client";

import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { createContext, useEffect } from "react";

export interface i18nProvider {
  translation: {
    [key: string]: string;
  };
}

export const i18nProviderContext = createContext<i18nProvider>(null!);

export default function I18nProvider({
  translate,
  children,
}: {
  children: React.ReactNode;
  translate: {
    [key: string]: string;
  };
}) {
  return (
    <i18nProviderContext.Provider
      value={{
        translation: translate,
      }}
    >
      {children}
    </i18nProviderContext.Provider>
  );
}
