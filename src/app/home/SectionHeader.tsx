'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const IMAGES = [
  {
    src: '/bannersize1.png',
    title: <>Everyday Bags, <span className="text-[#F8E180]">Thoughtfully Made</span></>,
    subtitle: 'Lightweight, functional, and designed for your daily rhythm.',
    cta: { label: 'Shop Now', href: '/products' },
  },
  {
    src: '/bannersize2.png',
    title: <>New Season <span className="text-[#145FE2]">• Limited</span></>,
    subtitle: 'Discover our latest collection for your daily essentials.',
    cta: { label: 'Explore Collection', href: '/products' },
  },
  {
    src: '/bannersize3.png',
    title: <>Carry More, <span className="text-[#F8E180]">Worry Less</span></>,
    subtitle: 'Durable materials. Effortless style. Everyday utility.',
    cta: { label: 'View Lookbook', href: '/products' },
  },
];

const SectionHeader = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Preload
  useEffect(() => {
    IMAGES.forEach(item => {
      const img = new window.Image();
      img.src = item.src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev === IMAGES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = IMAGES[currentImage];
  if (!currentSlide) return null;

  return (
    <div className="w-full">
      {/* Kontainer rasio 16:9 supaya gambar tidak dipaksa crop */}
      <div
        className="
          relative w-full
          aspect-[16/9]        /* pertahankan 1920x1080 */
          bg-black             /* warna belakang untuk letterbox */
        "
      >
        {/* Gambar tidak pernah kepotong */}
        <Image
          src={currentSlide.src}
          alt=""
          fill
          priority
          // penting: contain, bukan cover
          className="object-contain"
          // opsional: posisikan fokus (mis. tengah-atas):
          // style={{ objectPosition: 'center 30%' }}
        />

        {/* Overlay tipis (opsional) */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Konten */}
        <div className="relative z-10 flex h-full items-center px-6 md:px-12">
          <div className="max-w-xl">
            <h1 className="text-2xl font-bold sm:text-3xl md:text-5xl leading-tight drop-shadow text-white">
              {currentSlide.title}
            </h1>
            <p className="mt-2 text-sm md:text-lg text-gray-100/95">
              {currentSlide.subtitle}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={currentSlide.cta.href}
                className="rounded-full bg-[#145FE2] px-6 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-[#0e47ad]"
              >
                {currentSlide.cta.label}
              </a>
              <a
                href="/about"
                className="rounded-full border-2 border-[#F8E180] bg-white/10 px-6 py-2.5 text-sm font-medium text-[#F8E180] backdrop-blur-sm transition hover:bg-[#F8E180] hover:text-black"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {IMAGES.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`size-2 rounded-full transition-all ${
                currentImage === index ? 'w-4 bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
