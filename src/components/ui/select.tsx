import * as React from 'react';
import { cn } from '@/lib/utils';

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, children, ...props }, ref) => (
  <select ref={ref} className={cn('h-12 rounded-2xl border border-orange-100 bg-white px-4 text-sm font-medium shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary', className)} {...props}>
    {children}
  </select>
));
Select.displayName = 'Select';
