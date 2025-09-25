'use client';

import Link from 'next/link';
import React from 'react';

const SectionPromo: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container">
        {/* divider atas */}
        {/* <div className="h-px w-full bg-neutral-300 mb-8" /> */}

        {/* grid promo */}
        <div className="grid gap-7 md:grid-cols-3">
          {/* Kartu kiri */}
          <article className="relative rounded-md bg-[#145FE2] p-8 md:p-10 text-white md:col-span-1">
            {/* ikon kertas terbang */}
            <svg
              viewBox="0 0 24 24"
              className="absolute right-6 top-6 h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>

            <h3 className="font-extrabold uppercase leading-[1.05] tracking-tight text-[36px] md:text-[44px]">
              <span className="block">Enjoy</span>
              <span className="block">Free</span>
              <span className="block">Shipping</span>
            </h3>

            <Link
              href={`https://shopee.co.id/seizetheday?entryPoint=ShopBySearch&searchKeyword=seizetheday`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-sm bg-[#F8E180] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black"
            >
              Shop Now
            </Link>
          </article>

          {/* Kartu kanan (lebih lebar) */}
          <article className="rounded-md bg-[#145FE2] p-8 md:p-10 text-white md:col-span-2">
            <h3 className="font-extrabold uppercase leading-[1.05] tracking-tight text-[32px] md:text-[44px]">
              <span className="block">Redeem your</span>
              <span className="block">voucher &amp; save</span>
              <span className="block">up to 30% off</span>
            </h3>

            <Link
              href={`https://shopee.co.id/seizetheday?entryPoint=ShopBySearch&searchKeyword=seizetheday`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-sm bg-[#F8E180] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black"
            >
              Shop Now
            </Link>
          </article>
        </div>

        {/* divider bawah */}
        <div className="mt-10 h-px w-full bg-neutral-300" />
      </div>
    </section>
  );
};

export default SectionPromo;
