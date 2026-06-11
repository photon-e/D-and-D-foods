export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  image: string;
  popular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface CateringRequest {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  guestCount: string;
  budget: string;
  notes: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
