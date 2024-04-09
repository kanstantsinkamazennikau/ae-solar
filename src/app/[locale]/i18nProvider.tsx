"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

export interface i18nProvider {
  translation: {
    [key: string]: string;
  };
  setTranslation: Dispatch<SetStateAction<{}>>;
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
  const [translation, setTranslation] = useState(translate);

  return (
    <i18nProviderContext.Provider
      value={{
        translation,
        setTranslation,
      }}
    >
      {children}
    </i18nProviderContext.Provider>
  );
}
