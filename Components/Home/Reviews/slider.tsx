// Components/Home/Reviews/Slider.tsx
"use client"
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { clientReviews as fallbackData } from '@/Data/data';
import ReviewsCard from './ReviewsCard';

type Props = {
  reviews?: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
  }[];
};

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

const Slider = ({ reviews = fallbackData }: Props) => {
  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite
      responsive={responsive}
    >
      {reviews.map((review, idx) => (
        <div key={idx}>
          <ReviewsCard review={review} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;