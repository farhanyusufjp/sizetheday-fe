// import Link from 'next/link';
import React from 'react';

// import { LuUser2 } from 'react-icons/lu';
// import { RiSearch2Line } from 'react-icons/ri';
import { NavLinks } from '@/data/content';
import Logo from '@/shared/Logo/Logo';

// import CartSideBar from '../CartSideBar';
import NavigationItem from '../NavItem';
import MenuBar from './MenuBar';

const MainNav = () => {
  return (
    <div className='flex w-full items-center justify-between px-4'>
      {/* Logo di pojok kiri */}
      <div>
        <Logo />
      </div>

      {/* Navigation menu di pojok kanan */}
      <div className='hidden items-center gap-7 lg:flex text-lg'>
        {NavLinks.map((item) => (
          <NavigationItem key={item.id} menuItem={item} />
        ))}
      </div>

      {/* Mobile menu tetap di pojok kanan */}
      <div className='lg:hidden'>
        <MenuBar />
      </div>
    </div>
  );
};

export default MainNav;
