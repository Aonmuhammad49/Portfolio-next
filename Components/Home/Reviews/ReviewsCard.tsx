// Components/Home/Reviews/ReviewsCard.tsx
import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa';

type Props = {
  review: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
  }
}

const ReviewsCard = ({ review }: Props) => {
  const { image, name, profession, rating, review: clientReview } = review;

  return (
    <div className="bg-[#140c1c] m-4 rounded-md overflow-hidden flex flex-col min-h-[420px]">
      
      {/* Review Content */}
      <div className="p-6 flex flex-col flex-grow">
        <Image src="https://i.ibb.co/DHsYsWX2/images/q.png" alt="quote-start" height={50} width={50} />
        <p className="text-white opacity-70 flex-grow mt-4">{clientReview}</p>
        <div className="flex justify-end mt-4">
          <Image src="/images/q.png" alt="quote-end" height={50} width={50} />
        </div>
      </div>

      {/* Rating */}
      <div className="px-6 py-3 mx-auto mb-3 rounded-full flex items-center space-x-3 bg-indigo-900 text-white font-bold">
        <span>{rating}/5</span>
        <FaStar className="text-yellow-500" />
      </div>

      {/* Reviewer Info */}
      <div className="bg-gray-100">
        <div className="p-6 flex items-center space-x-6">
          <Image src={image} alt={name} width={40} height={40} className="rounded-full" />
          <div>
            <h1 className="text-lg font-bold">{name}</h1>
            <p className="text-base text-gray-700">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsCard;