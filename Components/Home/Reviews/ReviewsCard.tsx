// Components/Home/Reviews/ReviewsCard.tsx
import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa';

type Props = {
  review: {
    id?: number | string;
    name?: string;
    review?: string;
    comment?: string;
    rating?: number;
    profession?: string;
    job?: string;
    image?: string;
    imageUrl?: string;
    profilePic?: string;
  }
}

const ReviewsCard = ({ review }: Props) => {
  // Get the image URL from various possible properties
  const getImageUrl = () => {
    return review.image || review.imageUrl || review.profilePic || '/default-user.png';
  };

  // Get the name from various possible properties
  const getName = () => {
    return review.name || 'Anonymous';
  };

  // Get the profession from various possible properties
  const getProfession = () => {
    return review.profession || review.job || 'Client';
  };

  // Get the review text from various possible properties
  const getReviewText = () => {
    return review.review || review.comment || 'Great service!';
  };

  // Get the rating
  const getRating = () => {
    return review.rating || 5;
  };

  return (
    <div className="bg-[#140c1c] m-4 rounded-md overflow-hidden flex flex-col min-h-[420px]">
      
      {/* Review Content */}
      <div className="p-6 flex flex-col flex-grow">
      <Image src="https://res.cloudinary.com/dwijkyrr2/image/upload/v1752320178/q_k7ikhs.png" alt="quote-end" height={50} width={50} />
        <p className="text-white opacity-70 flex-grow mt-4">{getReviewText()}</p>
        <div className="flex justify-end mt-4">
        <Image src="https://res.cloudinary.com/dwijkyrr2/image/upload/v1752320178/q_k7ikhs.png" alt="quote-end" height={50} width={50} />
        </div>
      </div>

      {/* Rating */}
      <div className="px-6 py-3 mx-auto mb-3 rounded-full flex items-center space-x-3 bg-indigo-900 text-white font-bold">
        <span>{getRating()}/5</span>
        <FaStar className="text-yellow-500" />
      </div>

      {/* Reviewer Info */}
      <div className="bg-gray-100">
        <div className="p-6 flex items-center space-x-6">
          <Image 
            src={getImageUrl()}
            alt={getName()}
            width={40}
            height={40}
            className="rounded-full"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/default-user.png';
            }}
          />
          <div>
            <h1 className="text-lg font-bold text-black">{getName()}</h1>
            <p className="text-base text-gray-700">{getProfession()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsCard;