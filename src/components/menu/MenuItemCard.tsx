import { Plus, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import type { MenuItem } from '@/types';

export function MenuItemCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}>
      <Card className="group h-full overflow-hidden">
        <div className="relative h-56 overflow-hidden">
          <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
          {item.popular && <Badge className="absolute left-4 top-4 bg-white/90">Popular</Badge>}
        </div>
        <CardContent className="flex h-[calc(100%-14rem)] flex-col">
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-extrabold text-foreground">{item.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{item.category}</p>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-sm font-bold">
              <Star className="h-4 w-4 fill-accent text-accent" /> {item.rating}
            </div>
          </div>
          <p className="flex-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-2xl font-extrabold text-foreground">{formatCurrency(item.price)}</span>
            <Button onClick={() => addItem(item)} aria-label={`Add ${item.name} to cart`}>
              <Plus className="h-4 w-4" /> Add
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
