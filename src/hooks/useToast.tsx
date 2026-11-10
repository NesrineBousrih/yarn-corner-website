import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { Check, Info, X } from 'lucide-react';

type ToastTone = 'success' | 'info';
interface ToastState {
  id: number;
  message: string;
  tone: ToastTone;
}

const ToastContext = createContext<(message: string, tone?: ToastTone) => void>(() => {});

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState | null>(null);
  const timer = useRef<number>();

  const show = useCallback((message: string, tone: ToastTone = 'info') => {
    window.clearTimeout(timer.current);
    setToast({ id: Date.now(), message, tone });
    timer.current = window.setTimeout(() => setToast(null), 6000);
  }, []);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <ToastContext.Provider value={show}>
      {children}
      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-24 z-50 flex justify-center px-4">
        {toast && (
          <div
            key={toast.id}
            role="status"
            className="pointer-events-auto flex max-w-md animate-fade-up items-start gap-3 rounded-2xl border border-blush bg-white px-5 py-4 text-sm text-ink shadow-lift"
          >
            <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-petal text-burgundy">
              {toast.tone === 'success' ? <Check size={14} /> : <Info size={14} />}
            </span>
            <p className="leading-relaxed">{toast.message}</p>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="-mr-1 shrink-0 rounded-full p-1 text-muted transition hover:bg-petal hover:text-burgundy"
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
