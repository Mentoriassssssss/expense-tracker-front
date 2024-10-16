import { createContext, useContext } from "react";

interface ToastContextType {
    open: (message: string, type: "success" | "error") => void;
  }

export const ToastContext = createContext<ToastContextType | null>(null)
export const useToast = () => useContext(ToastContext)