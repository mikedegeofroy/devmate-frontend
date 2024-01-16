import { Navbar } from './components/navbar';
import { Toaster } from 'sonner';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster />
    </>
  );
};
