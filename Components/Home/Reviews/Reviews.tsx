// Components/Home/Reviews/Reviews.tsx
'use client'

import React, { useEffect, useState } from 'react';
import SectionHeading from '@/Components/Helper/SectionHeading';
import Slider from '../Reviews/slider';
import { getData } from '../../../lib/firebase';
import { clientReviews as fallbackData } from '@/Data/data';

// Define a type for reviews if not already defined
// Example:
type Review = {
  name: string;
  review: string;
  rating: number;
  profession: string;
  image: string;
};

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>(fallbackData);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const res = await getData('Portfolio/ReviewsPage');
        console.log('Firebase ReviewsPage Data:', res);
        
        // Simple data handling
        if (res && typeof res === 'object') {
          // Convert object to array if needed
          const reviewsArray = Array.isArray(res) ? res : Object.values(res);
          setReviews(reviewsArray);
        }
      } catch (error) {
        console.error('Error fetching reviews data:', error);
      }
    };
    
    fetchReviewsData();
  }, []);

  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Client Reviews</SectionHeading>
      <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
        <Slider reviews={reviews} />
      </div>
    </div>
  );
};

export default Reviews;