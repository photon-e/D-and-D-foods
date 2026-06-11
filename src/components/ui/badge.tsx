import * as React from 'react';
import { cn } from '@/lib/utils';

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary', className)} {...props} />;
}
