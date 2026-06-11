import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:bg-orange-800',
        secondary: 'bg-white text-foreground shadow-soft hover:-translate-y-0.5 hover:bg-orange-50',
        outline: 'border border-orange-200 bg-white/70 text-foreground hover:bg-orange-50',
        ghost: 'text-foreground hover:bg-orange-50',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-red-700',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4',
        lg: 'h-14 px-8 py-4 text-base',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ asChild, className, variant, size, children, ...props }, ref) => {
  const classes = cn(buttonVariants({ variant, size, className }));
  if (asChild && React.isValidElement<{ className?: string }>(children)) {
    return React.cloneElement(children, { className: cn(classes, children.props.className) });
  }
  return <button className={classes} ref={ref} {...props}>{children}</button>;
});
Button.displayName = 'Button';
