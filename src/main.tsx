import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ProtectedRoute } from '@/lib/ProtectedRoute';
import { Dashboard } from '@/pages/dashboard';
import { Settings } from 'lucide-react';
import { Page404 } from '@/pages/404';
import { Landing } from './pages/landing';
import { Layout } from '@/Layout';
import { Login } from '@/pages/login';
import './index.css';
import { Events } from './pages/events';
import { Event } from './pages/events/event';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} errorElement={<Page404 />}>
            <Route path='/' element={<Landing />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/settings' element={<Settings />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/events' element={<Events />} />
            <Route path='/events/:id' element={<Event />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
