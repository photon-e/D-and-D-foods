import * as React from 'react';
import { cn } from '@/lib/utils';

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('rounded-[2rem] border border-orange-100 bg-white shadow-soft', className)} {...props} />
));
Card.displayName = 'Card';

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6', className)} {...props} />
));
CardContent.displayName = 'CardContent';
