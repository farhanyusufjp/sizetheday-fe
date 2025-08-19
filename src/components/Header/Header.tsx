import type { FC } from 'react';
import React from 'react';

import MainNav from './MainNav';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="nc-Header sticky inset-x-0 top-0 z-50 bg-white">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between ">
    <MainNav />
  </div>
</div>
  );
};

export default Header;
