import { Menu, ShoppingBag, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/catering', label: 'Catering' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={cn('fixed left-0 right-0 top-0 z-50 transition-all duration-300', scrolled ? 'bg-background/95 shadow-sm backdrop-blur-xl' : 'bg-transparent')}>
      <nav className="container flex h-20 items-center justify-between" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary font-display text-xl font-bold text-white shadow-glow">D</span>
          <span className="font-display text-2xl font-bold tracking-tight">D&D Foods</span>
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => cn('text-sm font-bold transition hover:text-primary', isActive ? 'text-primary' : 'text-foreground')}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" className="relative" asChild>
            <Link to="/cart" className="flex items-center gap-2"><ShoppingBag className="h-5 w-5" /> Cart {itemCount > 0 && <span className="ml-1 rounded-full bg-primary px-2 py-0.5 text-xs text-white">{itemCount}</span>}</Link>
          </Button>
        </div>
        <button className="rounded-full p-2 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-orange-100 bg-background/98 px-4 pb-6 shadow-soft backdrop-blur-xl lg:hidden">
          <div className="container flex flex-col gap-3 pt-4">
            {links.map((link) => <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-bold hover:bg-orange-50">{link.label}</NavLink>)}
            <Link to="/cart" onClick={() => setOpen(false)} className="rounded-2xl bg-primary px-4 py-3 font-bold text-white">Cart ({itemCount})</Link>
          </div>
        </div>
      )}
    </header>
  );
}
