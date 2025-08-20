import React from 'react';

import SectionCategories from './SectionCategories';
import SectionHeader from './SectionHeader';
import SectionMidBanner from './SectionMidBanner';
import SectionProducts from './SectionProducts';
import SectionSlider from './SectionSlider';
import SectionStyle from './SectionStyle';

const page = () => {
  return (
    <div>
      <div className='pb-10'>
        <SectionHeader />
      </div>

      {/* <div className="pb-1"> */}
      <SectionSlider />
      {/* </div> */}

      <div className='py-24'>
        <SectionProducts />
      </div>

      <div className='pb-24'>
        <SectionCategories />
      </div>

      <div className='pb-24'>
        <SectionMidBanner />
      </div>

      <div className='pb-24'>
        <SectionStyle />
      </div>
    </div>
  );
};

export default page;
