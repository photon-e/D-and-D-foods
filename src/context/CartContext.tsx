import { createContext, useContext, useMemo, useReducer, type ReactNode } from 'react';
import type { CartItem, MenuItem } from '@/types';

interface CartState { items: CartItem[] }
type CartAction =
  | { type: 'ADD_ITEM'; item: MenuItem }
  | { type: 'REMOVE_ITEM'; id: string }
  | { type: 'UPDATE_QUANTITY'; id: string; quantity: number }
  | { type: 'CLEAR' };

interface CartContextValue extends CartState {
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  deliveryFee: number;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((item) => item.id === action.item.id);
      if (existing) {
        return { items: state.items.map((item) => (item.id === action.item.id ? { ...item, quantity: item.quantity + 1 } : item)) };
      }
      return { items: [...state.items, { ...action.item, quantity: 1 }] };
    }
    case 'REMOVE_ITEM':
      return { items: state.items.filter((item) => item.id !== action.id) };
    case 'UPDATE_QUANTITY':
      if (action.quantity <= 0) return { items: state.items.filter((item) => item.id !== action.id) };
      return { items: state.items.map((item) => (item.id === action.id ? { ...item, quantity: action.quantity } : item)) };
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const value = useMemo<CartContextValue>(() => {
    const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliveryFee = subtotal > 0 ? 4.99 : 0;
    return {
      ...state,
      addItem: (item) => dispatch({ type: 'ADD_ITEM', item }),
      removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', id }),
      updateQuantity: (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', id, quantity }),
      clearCart: () => dispatch({ type: 'CLEAR' }),
      subtotal,
      deliveryFee,
      total: subtotal + deliveryFee,
      itemCount: state.items.reduce((sum, item) => sum + item.quantity, 0),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
