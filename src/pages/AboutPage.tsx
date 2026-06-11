import { Award, HeartHandshake, Sprout, Users } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { Section } from '@/components/shared/Section';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  { title: 'Freshness', Icon: Sprout, text: 'Seasonal sourcing and scratch-made staples.' },
  { title: 'Hospitality', Icon: HeartHandshake, text: 'Every order should feel generous and cared for.' },
  { title: 'Reliability', Icon: Award, text: 'Clear timing, careful packing, and event-ready execution.' },
  { title: 'Community', Icon: Users, text: 'A family business built to serve neighbors well.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="Our story" title="Family recipes, professional hospitality" description="D&D Foods began around a family table and grew into a modern catering kitchen serving meals with soul and systems that scale." image="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1800&q=85" />
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80" alt="Chef finishing a plate" className="rounded-[2.5rem] shadow-soft" />
          <div><p className="text-sm font-extrabold uppercase tracking-[0.25em] text-primary">Company story</p><h2 className="mt-4 font-display text-5xl font-bold">Cooking with care has always been our family language.</h2><p className="mt-6 text-lg leading-9 text-muted-foreground">What started as weekend trays for neighbors became a trusted local kitchen for family meals, office lunches, weddings, and celebrations. We keep the warmth of home cooking while using the planning standards of a polished catering team.</p></div>
        </div>
      </Section>
      <Section eyebrow="Mission & values" title="Premium food without losing the personal touch" className="bg-orange-50/50">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, Icon, text }) => <Card key={title}><CardContent><Icon className="h-10 w-10 text-primary" /><h3 className="mt-5 text-xl font-extrabold">{title}</h3><p className="mt-2 leading-7 text-muted-foreground">{text}</p></CardContent></Card>)}
        </div>
      </Section>
      <Section eyebrow="Meet the chef" title="Led by flavor and grounded in service">
        <div className="grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=900&q=80" alt="Executive chef portrait" className="rounded-[2.5rem] shadow-soft" />
          <Card><CardContent className="p-8"><h2 className="font-display text-4xl font-bold">Chef Denise Daniels</h2><p className="mt-4 text-lg leading-9 text-muted-foreground">Denise blends comforting family favorites with refined catering presentation. Her menus are designed to be vibrant, abundant, and practical for delivery or event service.</p><div className="mt-8 grid grid-cols-3 gap-4 text-center"><Stat value="12+" label="Years cooking" /><Stat value="450+" label="Events served" /><Stat value="4.9" label="Avg rating" /></div></CardContent></Card>
        </div>
      </Section>
      <Section eyebrow="Team" title="A small team that moves with care" className="bg-[#1F2937] text-white">
        <div className="grid gap-6 md:grid-cols-3">
          {['Catering Coordinators', 'Prep Chefs', 'Delivery Hosts'].map((role, index) => <Card key={role} className="border-white/10 bg-white/10 text-white"><CardContent><img src={`https://images.unsplash.com/photo-${index === 0 ? '1556761175-b413da4baf72' : index === 1 ? '1556909114-f6e7ad7d3136' : '1521737604893-d14cc237f11d'}?auto=format&fit=crop&w=700&q=80`} alt={role} className="mb-5 h-56 w-full rounded-[1.5rem] object-cover" /><h3 className="font-display text-2xl font-bold">{role}</h3><p className="mt-2 text-white/70">Focused professionals who make every delivery and event feel seamless.</p></CardContent></Card>)}
        </div>
      </Section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-3xl bg-orange-50 p-4"><p className="text-3xl font-extrabold text-primary">{value}</p><p className="mt-1 text-sm font-semibold text-muted-foreground">{label}</p></div>;
}
