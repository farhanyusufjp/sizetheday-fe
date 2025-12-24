'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri';

import { products } from '@/data/content';

type Product = (typeof products)[number];

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // ini buat dropdown dari search input
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts([]);
      setIsOpen(false);
      return;
    }

    const filtered = products.filter(
      (product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
    setIsOpen(filtered.length > 0);
  }, [searchTerm]);

  // ini buat close dropdown dari search input no
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProductClick = () => {
    setSearchTerm('');
    setIsOpen(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div ref={searchRef} className="relative">
      {/* Search Input */}
      <div className="flex items-center gap-1 rounded-full border border-neutral-300 bg-white px-4 transition-all focus-within:border-neutral-500">
        <RiSearch2Line className="text-xl text-neutral-500" />
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ outline: 'none', boxShadow: 'none' }}
          className="w-32 bg-transparent text-sm !outline-none !ring-0 !border-none focus:!outline-none focus:!ring-0 focus:!border-none placeholder:text-neutral-400 focus:w-48 transition-all duration-300"
        />
      </div>

      {/* Dropdown Results */}
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-80 max-h-96 overflow-y-auto rounded-xl border border-neutral-200 bg-white shadow-lg">
          <div className="p-2">
            <p className="px-3 py-2 text-xs font-medium text-neutral-500">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
            <div className="space-y-1">
              {filteredProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  onClick={handleProductClick}
                  className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-neutral-100"
                >
                  <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                    <Image
                      src={product.coverImage}
                      alt={product.productName}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="truncate text-sm font-medium text-neutral-900">
                      {product.productName}
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* No Results */}
      {searchTerm.trim() !== '' && filteredProducts.length === 0 && (
        <div className="absolute right-0 top-full z-50 mt-2 w-80 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg">
          <p className="text-center text-sm text-neutral-500">
            No products found for "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
