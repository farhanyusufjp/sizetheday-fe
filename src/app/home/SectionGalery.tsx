"use client";

import Image from "next/image";
import React from "react";

const people = [
  { src: "/sora-noir/sora-noir-galery.png", alt: "Model 1" },
  { src: "/sora-bay/sora-bay-galery.png", alt: "Model 2" },
  { src: "/sora-peony/sora-peony-galery.png", alt: "Model 3" },
];

// Define tile height classes for different breakpoints
const TILE_H = {
  base: "h-[500px]",
  md: "md:h-[600px]",
  lg: "lg:h-[650px]",
}

const SectionGallery = () => {
  return (
    <section className="w-full bg-white overflow-hidden"> {/* Ubah w-screen ke w-full dan tambah overflow-hidden */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {people.map((p, i) => (
          <div
            key={i}
            className={`relative w-full ${TILE_H.base} ${TILE_H.md} ${TILE_H.lg} bg-white`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionGallery;
