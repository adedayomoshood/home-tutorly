"use client";
import { AppProvider } from "@repo/lib/hooks/useAppContext";
import { ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <>{children}</>
    </AppProvider>
  );
}
