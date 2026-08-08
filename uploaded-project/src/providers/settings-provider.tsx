"use client";

import { createContext, useContext } from "react";

const SettingsContext = createContext(null);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  // TODO: implement Settings state/logic
  return (
    <SettingsContext.Provider value={null}>{children}</SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
