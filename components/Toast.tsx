"use client";

import { useEffect } from "react";
import { Check } from "lucide-react";

interface ToastProps {
  message: string;
  visible: boolean;
  onHide: () => void;
}

export default function Toast({ message, visible, onHide }: ToastProps) {
  useEffect(() => {
    if (visible) {
      const t = setTimeout(onHide, 2500);
      return () => clearTimeout(t);
    }
  }, [visible, onHide]);

  return (
    <div
      className={
        visible
          ? "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-full shadow-xl text-sm font-medium transition-all duration-300 opacity-100 translate-y-0"
          : "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-full shadow-xl text-sm font-medium transition-all duration-300 opacity-0 translate-y-4 pointer-events-none"
      }
    >
      <span className="flex items-center justify-center w-5 h-5 bg-indigo-600 rounded-full">
        <Check size={12} strokeWidth={3} />
      </span>
      {message}
    </div>
  );
}
