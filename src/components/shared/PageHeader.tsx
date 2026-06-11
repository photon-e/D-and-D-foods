import { motion } from 'framer-motion';

interface PageHeaderProps { eyebrow: string; title: string; description: string; image?: string }
export function PageHeader({ eyebrow, title, description, image }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-radial-warm pt-32">
      {image && <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20" />}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      <motion.div className="container pb-16 pt-10 text-center sm:pb-24" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
        <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
        <h1 className="mx-auto mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight sm:text-7xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>
      </motion.div>
    </section>
  );
}
