'use client';

import type { Options } from '@splidejs/react-splide';
import { SplideSlide } from '@splidejs/react-splide';
import React from 'react';

import AutoScrollSlider from '@/shared/AutoScroll/AutoScrollSlider';

const SectionSlider = () => {
  const sliderOptions: Options = {
    autoScroll: {
      speed: 0.5,
    },
    arrows: false,
    perPage: 5,
    type: 'loop',
    drag: 'free',
    pagination: false,
    gap: '50px',
    breakpoints: {
      640: {
        perPage: 2,
        gap: '10px',
      },
      768: {
        perPage: 2,
        gap: '20px',
      },
      1024: {
        perPage: 3,
        gap: '40px',
      },
      1280: {
        perPage: 4,
        gap: '40px',
      },
      1536: {
        perPage: 4,
        gap: '40px',
      },
    },
  };

  const slides = Array.from({ length: 10 }, (_, index) => (
    <SplideSlide key={index}>
      <span className='text-lg font-medium text-secondary'>Change the way you carry everyday</span>
    </SplideSlide>
  ));

  return (
    <div className='border-y border-neutral-300 py-10'>
      <AutoScrollSlider trigger options={sliderOptions}>
        {slides}
      </AutoScrollSlider>
    </div>
  );
};

export default SectionSlider;
