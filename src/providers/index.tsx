"use client";

import { AuthProvider } from "./auth-provider";
import { SettingsProvider } from "./settings-provider";
import { MotionProvider } from "./motion-provider";
import { PwaProvider } from "./pwa-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <SettingsProvider>
        <MotionProvider>
          <PwaProvider>{children}</PwaProvider>
        </MotionProvider>
      </SettingsProvider>
    </AuthProvider>
  );
}
