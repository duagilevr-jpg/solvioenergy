import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { LeadModal } from "./LeadModal";

type Ctx = { open: () => void; close: () => void };
const LeadModalContext = createContext<Ctx | null>(null);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return (
    <LeadModalContext.Provider value={{ open, close }}>
      {children}
      <LeadModal open={isOpen} onOpenChange={setIsOpen} />
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error("useLeadModal must be used within LeadModalProvider");
  return ctx;
}
