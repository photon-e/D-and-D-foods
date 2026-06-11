import { type FormEvent, type ReactNode, useState } from 'react';
import services from '@/data/services.json';
import { PageHeader } from '@/components/shared/PageHeader';
import { Section } from '@/components/shared/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Toast } from '@/components/ui/toast';
import { useToast } from '@/hooks/useToast';
import { submitCateringRequest } from '@/services/api';
import type { CateringRequest, Service } from '@/types';

const allServices = services as Service[];
const gallery = [
  'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=900&q=80',
];

const initialForm: CateringRequest = { name: '', email: '', phone: '', eventType: '', guestCount: '', budget: '', notes: '' };

export default function CateringPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof CateringRequest, string>>>({});
  const { message, toast, clear } = useToast();

  const update = (key: keyof CateringRequest, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const validate = () => {
    const next: Partial<Record<keyof CateringRequest, string>> = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Valid email is required';
    if (!form.phone.trim()) next.phone = 'Phone is required';
    if (!form.eventType) next.eventType = 'Choose an event type';
    if (!form.guestCount || Number(form.guestCount) < 5) next.guestCount = 'Guest count must be at least 5';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    await submitCateringRequest(form);
    setForm(initialForm);
    toast('Your catering quote request was received. We will follow up shortly.');
  };

  return (
    <>
      <PageHeader eyebrow="Catering" title="Premium catering for gatherings that matter" description="From intimate dinners to full-service receptions in Jos, D&D Foods brings thoughtful menus, polished presentation, and calm coordination." image="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=85" />
      <Section eyebrow="Event services" title="Menus matched to your moment">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allServices.map((service) => <Card key={service.id} className="overflow-hidden"><img src={service.image} alt={service.name} className="h-56 w-full object-cover" /><CardContent><h2 className="font-display text-3xl font-bold">{service.name}</h2><p className="mt-3 leading-7 text-muted-foreground">{service.description}</p></CardContent></Card>)}
        </div>
      </Section>
      <Section eyebrow="Gallery" title="Presentation designed to be remembered" className="bg-orange-50/50">
        <div className="grid gap-4 md:grid-cols-4">
          {gallery.map((image, index) => <img key={image} src={image} alt={`Catering event ${index + 1}`} className="h-72 w-full rounded-[2rem] object-cover shadow-soft md:even:mt-10" />)}
        </div>
      </Section>
      <section className="container pb-24">
        <div className="grid gap-10 rounded-[2.5rem] bg-white p-6 shadow-soft lg:grid-cols-[.85fr_1.15fr] lg:p-10">
          <div className="rounded-[2rem] bg-[#1F2937] p-8 text-white"><p className="text-sm font-bold uppercase tracking-[0.25em] text-secondary">Quote request</p><h2 className="mt-4 font-display text-4xl font-bold">Tell us about your event.</h2><p className="mt-4 leading-8 text-white/75">This frontend-only form validates inputs today and is ready to post to a Django REST endpoint later through the API service layer.</p></div>
          <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2" noValidate>
            <Field label="Name" error={errors.name}><Input value={form.name} onChange={(e) => update('name', e.target.value)} /></Field>
            <Field label="Email" error={errors.email}><Input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} /></Field>
            <Field label="Phone" error={errors.phone}><Input value={form.phone} onChange={(e) => update('phone', e.target.value)} /></Field>
            <Field label="Event Type" error={errors.eventType}><Select value={form.eventType} onChange={(e) => update('eventType', e.target.value)}><option value="">Select an event</option><option>Wedding</option><option>Corporate Event</option><option>Birthday Party</option><option>Private Event</option><option>Holiday Catering</option></Select></Field>
            <Field label="Guest Count" error={errors.guestCount}><Input type="number" min="5" value={form.guestCount} onChange={(e) => update('guestCount', e.target.value)} /></Field>
            <Field label="Budget"><Input value={form.budget} onChange={(e) => update('budget', e.target.value)} placeholder="₦1,500,000 - ₦3,000,000" /></Field>
            <Field label="Additional Notes" className="md:col-span-2"><Textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} placeholder="Venue, timing, dietary needs, preferred service style..." /></Field>
            <Button type="submit" className="md:col-span-2">Submit Catering Request</Button>
          </form>
        </div>
      </section>
      {message && <Toast message={message} onClose={clear} />}
    </>
  );
}

function Field({ label, error, children, className = '' }: { label: string; error?: string; children: ReactNode; className?: string }) {
  return <label className={`block ${className}`}><span className="mb-2 block text-sm font-bold">{label}</span>{children}{error && <span className="mt-1 block text-sm font-semibold text-red-600">{error}</span>}</label>;
}
