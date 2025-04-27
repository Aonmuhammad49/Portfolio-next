// Components/Home/Reviews/Reviews.tsx
import React from 'react';
import SectionHeading from '@/Components/Helper/SectionHeading';
import Slider from '../Reviews/slider'; // ✅ Make sure file is named Slider.tsx with capital "S"

const Reviews = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Client Reviews</SectionHeading>
      <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
        <Slider />
      </div>
    </div>
  );
};

export default Reviews;