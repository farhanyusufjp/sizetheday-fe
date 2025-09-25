'use client';

import type { Options } from '@splidejs/react-splide';
import { SplideSlide } from '@splidejs/react-splide';
import React from 'react';

import AutoScrollSlider from '@/shared/AutoScroll/AutoScrollSlider';

const SectionSlider = () => {
  const sliderOptions: Options = {
    autoScroll: { speed: 0.8 },
    arrows: false,
    perPage: 6,
    type: 'loop',
    drag: 'free',
    pagination: false,
    gap: '0px', // biar nempel
    breakpoints: {
      640: { perPage: 2, gap: '0px' },
      768: { perPage: 3, gap: '0px' },
      1024: { perPage: 4, gap: '0px' },
      1280: { perPage: 5, gap: '0px' },
      1536: { perPage: 6, gap: '0px' },
    },
  };

  const slides = Array.from({ length: 15 }, (_, index) => (
    <SplideSlide key={index}>
      <span className="text-xl font-black text-primary px-4">
        NEW ARRIVALS
      </span>
    </SplideSlide>
  ));

  return (
    <div className="border-y border-neutral-300 bg-secondary py-3">
      <AutoScrollSlider trigger options={sliderOptions}>
        {slides}
      </AutoScrollSlider>
    </div>
  );
};

export default SectionSlider;
