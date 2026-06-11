import categories from '@/data/categories.json';
import menu from '@/data/menu.json';
import services from '@/data/services.json';
import testimonials from '@/data/testimonials.json';
import type { CateringRequest, Category, MenuItem, Service, Testimonial } from '@/types';

const delay = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms));

// Future Django REST integration point:
// replace these local JSON imports with fetch/axios calls such as:
// GET /api/menu/, GET /api/categories/, POST /api/catering-requests/.
export async function getMenu(): Promise<MenuItem[]> {
  await delay();
  return menu as MenuItem[];
}

export async function getCategories(): Promise<Category[]> {
  await delay();
  return categories as Category[];
}

export async function getTestimonials(): Promise<Testimonial[]> {
  await delay();
  return testimonials as Testimonial[];
}

export async function getServices(): Promise<Service[]> {
  await delay();
  return services as Service[];
}

export async function submitCateringRequest(payload: CateringRequest): Promise<{ ok: true; requestId: string }> {
  await delay(500);
  console.info('Mock catering request. Connect this to Django POST /api/catering-requests/ later.', payload);
  return { ok: true, requestId: crypto.randomUUID() };
}
