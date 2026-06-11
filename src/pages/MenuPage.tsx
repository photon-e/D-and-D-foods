import { useMemo, useState } from 'react';
import categories from '@/data/categories.json';
import menu from '@/data/menu.json';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import { PageHeader } from '@/components/shared/PageHeader';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import type { Category, MenuItem } from '@/types';

const allMenu = menu as MenuItem[];
const allCategories = categories as Category[];

export default function MenuPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    const result = allMenu.filter((item) => {
      const matchesSearch = `${item.name} ${item.description}`.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || item.category === category;
      return matchesSearch && matchesCategory;
    });
    return [...result].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return Number(b.popular) - Number(a.popular);
    });
  }, [category, search, sort]);

  return (
    <>
      <PageHeader eyebrow="Order online" title="Chef-prepared meals, ready for delivery" description="Browse family dinners, weekly meal prep, drinks, desserts, and catering platters designed to travel beautifully." image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=85" />
      <section className="container pb-24">
        <div className="-mt-10 mb-10 grid gap-4 rounded-[2rem] border border-orange-100 bg-white p-4 shadow-soft md:grid-cols-[1fr_auto_auto]">
          <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search dishes, ingredients, or platters" aria-label="Search menu" />
          <Select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filter by category">
            <option>All</option>
            {allCategories.map((item) => <option key={item.id}>{item.name}</option>)}
          </Select>
          <Select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort menu">
            <option value="featured">Featured</option>
            <option value="rating">Top rated</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </Select>
        </div>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => <MenuItemCard key={item.id} item={item} />)}
        </div>
        {filtered.length === 0 && <p className="rounded-3xl bg-orange-50 p-8 text-center font-semibold text-muted-foreground">No menu items match your search yet.</p>}
      </section>
    </>
  );
}
