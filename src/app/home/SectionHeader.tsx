'use client';

import React, { useState, useEffect } from 'react';

const SectionHeader = () => {
  const images = [
    '/bannersize1.jpg',
    '/bannersize2.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <div 
        className="relative overflow-hidden h-[700px] transition-all duration-700"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Optional overlay for better visibility */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Dots indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentImage === index ? 'bg-white w-4' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;