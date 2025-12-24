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
    <Link className='flex cursor-pointer items-center text-primary pl-2 sm:pl-0' href='/'>
      <div className='relative h-10 w-32 sm:h-14 sm:w-48 overflow-hidden rounded-lg'>
        <Image
          src='/logo.png'
          alt='SeizeTheDay Logo'
          fill
          className='object-cover'
          sizes='(max-width: 640px) 128px, 192px'
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;