'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Navbar() {
  const { username, authenticated } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className='p-5 fixed w-full bg-white'
    >
      <NavigationMenu className='w-full max-w-none justify-between'>
        <Link
          to={authenticated ? '/dashboard' : '/'}
          className='flex flex-row items-end'
        >
          <h1 className='text-2xl font-semibold'>DevM8</h1>
          <h2 className='text-xs font-semibold p-1 pb-[3px]'>[BETA]</h2>
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
    </motion.div>
  );
}
