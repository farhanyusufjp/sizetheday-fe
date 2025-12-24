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
      <div className="relative w-full aspect-[16/9] bg-black">
        <Image
          src={currentSlide.src}
          alt=""
          fill
          priority
          className="object-contain"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* DESKTOP (≥ md) */}
        <div className="absolute inset-y-0 left-12 z-10 hidden md:flex flex-col justify-center gap-6">
          {/* Title & subtitle */}
          <h2 className="text-white text-4xl lg:text-5xl font-bold drop-shadow-lg leading-tight max-w-2xl">
            {currentSlide.title}
          </h2>
          <p className="text-white/80 text-lg max-w-xl">{currentSlide.subtitle}</p>

          {/* Tombol sejajar horizontal */}
          <div className="flex gap-4">
            <a
              href={currentSlide.cta.href}
              className="rounded-full bg-[#145FE2] px-8 py-3 text-base font-medium text-white shadow-md transition hover:bg-[#0e47ad] text-center"
            >
              {currentSlide.cta.label}
            </a>
            <a
              href="/about"
              className="rounded-full border-2 border-[#F8E180] bg-white/10 px-8 py-3 text-base font-medium text-[#F8E180] backdrop-blur-sm transition hover:bg-[#F8E180] hover:text-black text-center"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* MOBILE (< md) */}
        <div className="absolute bottom-4 right-4 z-10 md:hidden">
          <a
            href={currentSlide.cta.href}
            className="rounded-full bg-[#145FE2] px-4 py-2 text-xs font-medium text-white shadow-md transition hover:bg-[#0e47ad] text-center"
          >
            {currentSlide.cta.label}
          </a>
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
