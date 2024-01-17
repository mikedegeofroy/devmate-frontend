'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';

export function Navbar() {
  const { username, authenticated } = useAuth();

  return (
    <NavigationMenu className='p-5 fixed w-full max-w-none justify-between bg-white'>
      <Link to={authenticated ? '/dashboard' : '/'}>
        <h1 className='text-2xl font-semibold'>DevM8 Beta</h1>
      </Link>
      <NavigationMenuList>
        <NavigationMenuItem>
          {authenticated ? (
            <Link to={`/settings`}>
              <div className={navigationMenuTriggerStyle()}>{username}</div>
            </Link>
          ) : (
            <Link to='/login'>
              <div className={navigationMenuTriggerStyle()}>Login</div>
            </Link>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
