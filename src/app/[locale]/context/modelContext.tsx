"use client";

import { createContext, useState } from "react";

export type Model = "Aurora" | "Comet" | "Meteor" | "Terra" | "Neptun" | "HSF";

export interface ModelContext {
  setModel: (model: Model) => void;
  model: Model;
}

export const ModelContext = createContext<ModelContext>(null!);

export default function ModelProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [model, setModel] = useState<Model>("Aurora");

  return (
    <ModelContext.Provider
      value={{
        model,
        setModel,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
}
