import type { FC } from 'react';
import React from 'react';

import MainNav from './MainNav';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className='nc-Header sticky inset-x-0 top-0 z-50 bg-white'>
      <div className='container flex h-18 items-center justify-between px-4'> {/* Ubah h-16 ke h-20 */}
        <MainNav />
      </div>
    </div>
  );
};

export default Header;
