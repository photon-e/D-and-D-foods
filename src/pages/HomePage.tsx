import { ArrowRight, Clock, ConciergeBell, Leaf, Search, ShieldCheck, Star, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import categories from '@/data/categories.json';
import menu from '@/data/menu.json';
import services from '@/data/services.json';
import testimonials from '@/data/testimonials.json';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/shared/Section';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import type { Category, MenuItem, Service, Testimonial } from '@/types';

const typedMenu = menu as MenuItem[];
const typedCategories = categories as Category[];
const typedServices = services as Service[];
const typedTestimonials = testimonials as Testimonial[];

const benefits = [
  { label: 'Fresh Ingredients', Icon: Leaf },
  { label: 'Fast Delivery', Icon: Truck },
  { label: 'Professional Catering', Icon: ConciergeBell },
  { label: 'Trusted by Customers', Icon: ShieldCheck },
];

const gallery = [
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?auto=format&fit=crop&w=700&q=80',
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden pt-24">
        <img src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1800&q=85" alt="Elegant catered dinner table" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1F2937]/90 via-[#1F2937]/60 to-[#1F2937]/15" />
        <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl text-white">
            <Badge className="bg-white/15 text-white backdrop-blur">Jos-based • Chef-prepared • Event-ready</Badge>
            <h1 className="mt-6 font-display text-5xl font-bold leading-tight tracking-tight sm:text-7xl">Delicious Meals Delivered. Exceptional Catering Experiences.</h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-white/85">Freshly prepared meals and premium catering across Jos, Plateau State.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild><Link to="/menu" className="flex items-center gap-2">Order Now <ArrowRight className="h-5 w-5" /></Link></Button>
              <Button size="lg" variant="secondary" asChild><Link to="/catering">Request Catering</Link></Button>
            </div>
            <div className="mt-8 flex max-w-xl items-center gap-3 rounded-[1.75rem] bg-white p-2 shadow-glow">
              <Search className="ml-4 h-5 w-5 text-primary" />
              <Input aria-label="Search meals" placeholder="Search family meals, desserts, or event platters" className="border-0 shadow-none focus-visible:ring-0" />
              <Button className="hidden sm:inline-flex">Search</Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="hidden lg:block">
            <Card className="bg-white/92 p-4 backdrop-blur">
              <img src="https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=900&q=80" alt="Chef plated bowl" className="h-[30rem] w-full rounded-[1.5rem] object-cover" />
            </Card>
          </motion.div>
        </div>
      </section>

      <Section eyebrow="Popular this week" title="Featured Dishes" description="Delivery favorites and catering-ready signatures made with seasonal ingredients.">
        <Swiper modules={[Autoplay, Pagination]} pagination={{ clickable: true }} autoplay={{ delay: 3500 }} spaceBetween={24} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
          {typedMenu.filter((item) => item.popular).map((item) => <SwiperSlide key={item.id} className="pb-12"><MenuItemCard item={item} /></SwiperSlide>)}
        </Swiper>
      </Section>

      <Section eyebrow="Explore" title="Food for every rhythm of life" className="bg-orange-50/50">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {typedCategories.map((category) => (
            <motion.div key={category.id} whileHover={{ y: -8 }}>
              <Card className="group overflow-hidden">
                <img src={category.image} alt={category.name} className="h-40 w-full object-cover transition duration-700 group-hover:scale-110" />
                <CardContent>
                  <h3 className="text-xl font-extrabold">{category.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Full-service catering" title="Events handled with warmth and precision">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {typedServices.map((service) => (
            <Card key={service.id} className="overflow-hidden">
              <img src={service.image} alt={service.name} className="h-44 w-full object-cover" />
              <CardContent>
                <h3 className="font-display text-2xl font-bold">{service.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why choose us" title="Hospitality you can taste" className="bg-[#1F2937] text-white">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ label, Icon }) => (
            <Card key={label} className="border-white/10 bg-white/10 text-white backdrop-blur">
              <CardContent>
                <Icon className="h-10 w-10 text-secondary" />
                <h3 className="mt-5 text-xl font-extrabold">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">Thoughtful systems, warm service, and food prepared with consistent care.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Loved locally" title="What customers are saying">
        <Swiper modules={[Autoplay, Pagination]} pagination={{ clickable: true }} autoplay={{ delay: 4200 }} spaceBetween={24} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
          {typedTestimonials.map((review) => (
            <SwiperSlide key={review.id} className="pb-12">
              <Card className="h-full"><CardContent>
                <div className="mb-5 flex gap-1">{Array.from({ length: review.rating }).map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}</div>
                <p className="text-lg leading-8">“{review.quote}”</p>
                <p className="mt-6 font-extrabold">{review.name}</p><p className="text-sm text-muted-foreground">{review.role}</p>
              </CardContent></Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>

      <Section eyebrow="Follow the flavor" title="From our kitchen feed" className="bg-orange-50/50">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {gallery.map((image, index) => <img key={image} src={image} alt={`D&D Foods gallery ${index + 1}`} className="aspect-square rounded-[1.5rem] object-cover shadow-soft" />)}
        </div>
      </Section>

      <section className="container py-16">
        <div className="overflow-hidden rounded-[2.5rem] bg-primary p-8 text-white shadow-glow md:p-14">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div><p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em]"><Clock className="h-4 w-4" /> Booking now</p><h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Planning Your Next Event?</h2></div>
            <Button size="lg" variant="secondary" asChild><Link to="/catering">Get A Catering Quote</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
