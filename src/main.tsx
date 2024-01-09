import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Dashboard } from '@/pages/dashboard';
import { Navbar } from '@/components/navbar';
import { Landing } from '@/pages/landing';
import { Toaster } from '@/components/ui/sonner';
import { Page404 } from '@/pages/404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <Page404 />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
