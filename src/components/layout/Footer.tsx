import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  Company: ['About', 'Menu', 'Catering', 'Contact'],
  Services: ['Family Meals', 'Meal Prep', 'Weddings', 'Corporate Events'],
  Support: ['Delivery Areas', 'FAQs', 'Allergens', 'Catering Quote'],
};

export function Footer() {
  return (
    <footer className="border-t border-orange-100 bg-[#1F2937] text-white">
      <div className="container grid gap-10 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary font-display text-xl font-bold shadow-glow">D</span>
            <span className="font-display text-2xl font-bold">D&D Foods</span>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-white/70">Family-owned catering and delivery with chef-crafted meals, warm hospitality, and event-ready presentation.</p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, index) => <a key={index} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-primary" aria-label="Social media"><Icon className="h-5 w-5" /></a>)}
          </div>
        </div>
        {Object.entries(footerLinks).map(([heading, items]) => (
          <div key={heading}>
            <h3 className="font-bold">{heading}</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {items.map((item) => <li key={item}><Link to={item === 'About' ? '/about' : item === 'Contact' ? '/contact' : item === 'Menu' ? '/menu' : '/catering'} className="hover:text-white">{item}</Link></li>)}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="font-bold">Stay in the kitchen loop</h3>
          <p className="mt-4 text-sm leading-6 text-white/70">Get seasonal menus, catering dates, and family meal drops.</p>
          <div className="mt-5 flex gap-2">
            <Input placeholder="Email address" className="border-white/10 bg-white/10 text-white placeholder:text-white/50" />
            <Button>Join</Button>
          </div>
          <div className="mt-6 space-y-3 text-sm text-white/70">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 014-2026</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@danddfoods.example</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 124 Market Street, Your City</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">© 2026 D&D Foods. Crafted for delivery, catering, and community.</div>
    </footer>
  );
}
