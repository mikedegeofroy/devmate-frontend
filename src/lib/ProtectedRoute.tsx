import { useAuth } from '@/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { authenticated } = useAuth();
  return authenticated ? <Outlet /> : <Navigate to='/login'></Navigate>;
};
