import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ eyebrow, title, description, children, className }: SectionProps) {
  return (
    <motion.section
      className={cn('py-16 sm:py-24', className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="container">
        {(eyebrow || title || description) && (
          <div className="mx-auto mb-10 max-w-3xl text-center">
            {eyebrow && <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>}
            {title && <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h2>}
            {description && <p className="mt-4 text-lg leading-8 text-muted-foreground">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}
