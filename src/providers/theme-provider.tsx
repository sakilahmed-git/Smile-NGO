"use client";

import { createContext, useContext } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // TODO: implement Theme state/logic
  return (
    <ThemeContext.Provider value={null}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
