import { type FormEvent, type ReactNode, useState } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Toast } from '@/components/ui/toast';
import { useToast } from '@/hooks/useToast';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const { message, toast, clear } = useToast();
  const submit = (event: FormEvent) => { event.preventDefault(); setSent(true); toast('Thanks for reaching out. We will respond soon.'); };
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let’s plan something delicious" description="Questions about delivery around Jos, catering availability, custom menus, or dietary needs? Send us a note." image="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=85" />
      <section className="container grid gap-8 pb-24 lg:grid-cols-[1.1fr_.9fr]">
        <Card><CardContent className="p-8"><h2 className="font-display text-4xl font-bold">Contact Form</h2><form onSubmit={submit} className="mt-6 grid gap-4"><Input required placeholder="Name" /><Input required type="email" placeholder="Email" /><Input placeholder="Phone" /><Textarea required placeholder="How can we help?" /><Button type="submit">Send Message</Button>{sent && <p className="text-sm font-semibold text-primary">Message prepared in the frontend demo.</p>}</form></CardContent></Card>
        <div className="space-y-5">
          <Info icon={<Clock />} title="Business Hours" text="Mon–Fri 9am–7pm • Sat 10am–5pm • Sun by event appointment" />
          <Info icon={<Mail />} title="Email" text="hello@danddfoods.ng" />
          <Info icon={<Phone />} title="Phone" text="+234 803 014 2026" />
          <Info icon={<MapPin />} title="Location" text="Bukuru Road, Jos, Plateau State" />
          <div className="grid h-72 place-items-center rounded-[2rem] border border-dashed border-orange-200 bg-orange-50 text-center font-bold text-primary">Embedded Map Placeholder</div>
        </div>
      </section>
      {message && <Toast message={message} onClose={clear} />}
    </>
  );
}

function Info({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return <Card><CardContent className="flex gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-100 text-primary">{icon}</span><div><h3 className="font-extrabold">{title}</h3><p className="mt-1 text-muted-foreground">{text}</p></div></CardContent></Card>;
}
