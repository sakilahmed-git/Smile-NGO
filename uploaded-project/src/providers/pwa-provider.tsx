"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

type NavigatorWithStandalone = Navigator & {
  standalone?: boolean;
};

type PwaContextValue = {
  canInstall: boolean;
  isStandalone: boolean;
  install: () => Promise<void>;
  dismissInstallPrompt: () => void;
};

const PwaContext = createContext<PwaContextValue>({
  canInstall: false,
  isStandalone: false,
  install: async () => {},
  dismissInstallPrompt: () => {},
});

export function PwaProvider({ children }: { children: React.ReactNode }) {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const isStandalone =
    typeof window !== "undefined" &&
    (window.matchMedia("(display-mode: standalone)").matches ||
      Boolean((window.navigator as NavigatorWithStandalone).standalone));

  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    }

    const onBeforeInstall = (event: Event) => {
      event.preventDefault();
      setPromptEvent(event as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    return () => window.removeEventListener("beforeinstallprompt", onBeforeInstall);
  }, []);

  const value = useMemo<PwaContextValue>(
    () => ({
      canInstall: Boolean(promptEvent),
      isStandalone,
      install: async () => {
        if (!promptEvent) return;
        await promptEvent.prompt();
        await promptEvent.userChoice.catch(() => undefined);
        setPromptEvent(null);
      },
      dismissInstallPrompt: () => setPromptEvent(null),
    }),
    [isStandalone, promptEvent],
  );

  return <PwaContext.Provider value={value}>{children}</PwaContext.Provider>;
}

export function usePwa() {
  return useContext(PwaContext);
}
