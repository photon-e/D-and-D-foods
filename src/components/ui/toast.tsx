import { CheckCircle2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
  return (
    <div className="fixed bottom-6 right-6 z-[80] flex max-w-sm items-center gap-3 rounded-2xl border border-orange-100 bg-white p-4 shadow-glow" role="status" aria-live="polite">
      <CheckCircle2 className="h-5 w-5 text-primary" />
      <p className="text-sm font-semibold text-foreground">{message}</p>
      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onClose} aria-label="Dismiss notification">
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}
