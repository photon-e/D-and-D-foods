import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';

const HomePage = lazy(() => import('@/pages/HomePage'));
const MenuPage = lazy(() => import('@/pages/MenuPage'));
const CateringPage = lazy(() => import('@/pages/CateringPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const CartPage = lazy(() => import('@/pages/CartPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'menu', element: <MenuPage /> },
      { path: 'catering', element: <CateringPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'cart', element: <CartPage /> },
    ],
  },
]);

export default function App() {
  return (
    <Suspense fallback={<div className="grid min-h-screen place-items-center bg-background font-display text-3xl font-bold text-primary">D&D Foods</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
