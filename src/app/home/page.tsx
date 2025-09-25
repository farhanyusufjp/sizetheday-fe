import React from 'react';

// import SectionCategories from './SectionCategories';
import SectionHeader from './SectionHeader';
import SectionsubHeader from './SectionSubHeader';
// import SectionMidBanner from './SectionMidBanner';
import SectionProducts from './SectionProducts';
import SectionSlider from './SectionSlider';
// import SectionStyle from './SectionStyle';
import SectionDescription from './SectionDesctiption';
import SectionGalery from './SectionGalery';
import SectionTestimonial from './SectionTestimonial';
import SectionPromo from './SectionPromo';

const page = () => {
  return (
    <div>
      
     
      <SectionHeader />
      <SectionsubHeader />
    <SectionSlider /> 
      <SectionDescription/>

      <div className='pb-24'>
      <SectionGalery/>
      </div>

      <div className='pb-10'>
        <SectionProducts />
      </div>

        <div  className='pb-20'><SectionTestimonial/></div>
        <div  className='pb-20'><SectionPromo/></div>

   

      {/* <div className='pb-24'>
        <SectionMidBanner />
      </div> */}

      {/* <div className='pb-24'>
        <SectionStyle />
      </div> */}
    </div>
  );
};

export default page;
