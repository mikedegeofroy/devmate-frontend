'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <NavigationMenu className='p-5 fixed w-full max-w-none justify-between bg-white'>
      <Link to='/'>
        <h1 className='text-2xl font-semibold'>DevM8</h1>
      </Link>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to='/docs'>
            <div className={navigationMenuTriggerStyle()}>
              Documentation
            </div>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
