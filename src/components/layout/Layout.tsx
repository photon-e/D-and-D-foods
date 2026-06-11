import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

export function Layout() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
