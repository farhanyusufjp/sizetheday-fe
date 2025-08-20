'use client';

import React, { useEffect, useState } from 'react';

const IMAGES = ['/bannersize1.jpg', '/bannersize2.jpg']; // <- di luar komponen

const SectionHeader = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev === IMAGES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []); // aman

  return (
    <div className="w-full">
      <div
        className="relative h-[700px] overflow-hidden transition-all duration-700"
        style={{
          backgroundImage: `url(${IMAGES[currentImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {IMAGES.map((src, index) => (
            <button
              key={src}
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
