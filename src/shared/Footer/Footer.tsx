'use client';

import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container text-center space-y-4">
        <h4 className="text-lg font-medium">CONNECT WITH US:</h4>
        
        <div className="space-y-1 text-sm md:text-base">
          <p>@seizetheday.id</p>
          <p>seizetheday.id@gmail.com</p>
        </div>

        <div className="flex items-center justify-center gap-6 pt-3 text-2xl">
          <Link href="https://instagram.com/seizetheday.id" target="_blank">
            <FaInstagram />
          </Link>
          <Link href="mailto:seizetheday.id@gmail.com">
            <FaEnvelope />
          </Link>
          <Link href="https://wa.me/6281234567890" target="_blank">
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
