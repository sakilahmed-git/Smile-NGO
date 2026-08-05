"use client";

import { createContext, useContext } from "react";

const MotionContext = createContext(null);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  // TODO: implement Motion state/logic
  return (
    <MotionContext.Provider value={null}>{children}</MotionContext.Provider>
  );
}

export function useMotion() {
  return useContext(MotionContext);
}
