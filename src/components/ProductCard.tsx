import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import type { ProductType } from '@/data/types';
// import Variant from '@/shared/Variant/Variant';

interface ProductCardProps {
  product: ProductType;
  className?: string;
}

// Helper format harga: Rp399.000
// const formatIDR = (n: number | string) => {
//   const v = typeof n === 'string' ? Number(n) : n;
//   return new Intl.NumberFormat('id-ID', {
//     style: 'currency',
//     currency: 'IDR',
//     maximumFractionDigits: 0,
//   }).format(Number.isFinite(v) ? v : 0);
// };


const ProductCard: FC<ProductCardProps> = ({ product, className }) => {
  const { coverImage, productName, price, slug,link } = product;

  return (
    <div className={`relative rounded-xl ${className}`}>
      <div className="relative h-[430px] overflow-hidden rounded-xl">
        <Image
          src={coverImage}
          alt={productName}
          className="size-full object-cover object-top"
          width={1000}
          height={1000}
        />
        <Link href={`/products/${slug}`} className="absolute inset-0 size-full" />
      </div>

      {/* info: center + button */}
      <div className="mt-5 space-y-3 text-center">
        <Link href={`/products/${slug}`} className="block text-2xl font-medium hover:underline">
          {productName}
        </Link>

        {/* <Variant /> */}

       <p className="text-2xl font-semibold text-black">
      Rp{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
      </p>


      <Link
          href={link}
          className="inline-block rounded-md bg-[#145FE2] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#145FE2]/40"
          target="_blank"
          rel="noopener noreferrer"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
