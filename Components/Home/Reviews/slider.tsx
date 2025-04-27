// Components/Home/Reviews/Slider.tsx
"use client"
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { clientReviews } from '@/Data/data';
import ReviewsCard from './ReviewsCard';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
  },
};

const Slider = () => {
  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite
      responsive={responsive}
      >
      {clientReviews.map((review) => (
        <div key={review.image}>
          <ReviewsCard review={review} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;