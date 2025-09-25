// import { MdOutlineFilterVintage } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link className='flex cursor-pointer items-center gap-2 text-primary' href='/'>
      {/* <MdOutlineFilterVintage className="text-4xl" /> */}
      <div className='relative h-16 w-60 overflow-hidden rounded-lg'>
        <Image
          src='/logo.jpg' // atau .svg
          alt='SeizeTheDay Logo'
          fill
          className='object-cover' // kunci cover
          sizes='400px'
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
