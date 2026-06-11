import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/lib/utils';

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, deliveryFee, total } = useCart();
  return (
    <>
      <PageHeader eyebrow="Your order" title="Shopping Cart" description="Review quantities, remove items, and see a frontend-only order summary before backend checkout arrives." />
      <section className="container grid gap-8 pb-24 lg:grid-cols-[1fr_24rem]">
        <div className="space-y-4">
          {items.length === 0 && <Card><CardContent className="text-center"><p className="text-lg font-semibold">Your cart is empty.</p><Button className="mt-6" asChild><Link to="/menu">Browse Menu</Link></Button></CardContent></Card>}
          {items.map((item) => (
            <Card key={item.id}><CardContent className="grid gap-5 sm:grid-cols-[8rem_1fr_auto] sm:items-center">
              <img src={item.image} alt={item.name} className="h-32 w-full rounded-3xl object-cover sm:w-32" />
              <div><h2 className="text-xl font-extrabold">{item.name}</h2><p className="mt-1 text-sm text-muted-foreground">{item.description}</p><p className="mt-3 font-bold text-primary">{formatCurrency(item.price)}</p></div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity"><Minus className="h-4 w-4" /></Button>
                <span className="w-8 text-center font-extrabold">{item.quantity}</span>
                <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity"><Plus className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} aria-label="Remove item"><Trash2 className="h-4 w-4" /></Button>
              </div>
            </CardContent></Card>
          ))}
        </div>
        <Card className="h-fit"><CardContent>
          <h2 className="font-display text-3xl font-bold">Order Summary</h2>
          <div className="mt-6 space-y-3 text-sm"><div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div><div className="flex justify-between"><span>Delivery</span><span>{formatCurrency(deliveryFee)}</span></div><div className="border-t border-orange-100 pt-4 text-lg font-extrabold flex justify-between"><span>Total</span><span>{formatCurrency(total)}</span></div></div>
          <Button className="mt-8 w-full" disabled={items.length === 0}>Backend Coming Soon</Button>
        </CardContent></Card>
      </section>
    </>
  );
}
