// import Image from 'next/image';
import React from 'react';

// import bgPattern from '@/images/background.svg';
// import bannerImg from '@/images/banner.png';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';

const SectionMidBanner = () => {
  return (
    <div className='container'>
      <div
        className='relative h-[400px] w-full overflow-hidden rounded-3xl bg-cover bg-center md:h-[500px] lg:h-[650px]'
        style={{ backgroundImage: "url('/midbanner.jpg')" }} // ganti sesuai path gambar
      >
        <a href='https://linktr.ee/seizetheday.id' target='_blank' rel='noopener noreferrer'>
          <div className='absolute bottom-7 left-0 flex w-full justify-center'>
            <ButtonSecondary
              fontSize='text-xl'
              className='glassmorphism border-prumary z-20 w-4/5 border-2  text-white md:w-3/5'
            >
              Shop Now
            </ButtonSecondary>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SectionMidBanner;
