import React from 'react';

import ProductCard from '@/components/ProductCard';
import {products } from '@/data/content';
// import ButtonPrimary from '@/shared/Button/ButtonPrimary';
// import Heading from '@/shared/Heading/Heading';

const SectionProducts = () => {
  return (
    <div className='container'>
      {/* <Heading showDash className='pb-16'>
        {midText}
      </Heading> */}

      <div className='space-y-10'>
       

        <div className='grid gap-7 md:grid-cols-3'>
          {products.slice(0, 3).map((product) => (
            <ProductCard product={product} key={product.productName} />
          ))}
        </div>

        <div className='mt-16 h-px w-full bg-neutral-300' />
      </div>
    </div>
  );
};

export default SectionProducts;
