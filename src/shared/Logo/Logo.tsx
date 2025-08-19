import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import { MdOutlineFilterVintage } from 'react-icons/md';
import Image from "next/image";

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link
      className="flex cursor-pointer items-center gap-2 text-primary"
      href="/"
    >
      {/* <MdOutlineFilterVintage className="text-4xl" /> */}
    <div className="relative h-16 w-40 overflow-hidden rounded-lg">
  <Image
    src="/logo.jpg"   // atau .svg
    alt="SeizeTheDay Logo"
    fill
    className="object-cover" // kunci cover
    sizes="160px"
    priority
  />
</div>
    </Link>
  );
};

export default Logo;
