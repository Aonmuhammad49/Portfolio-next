'use client'
import React from 'react'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'

type Service = {
  id?: number | string
  title?: string
  name?: string
  description: string
  icon?: string
  imageUrl?: string
  image?: string
}

type Props = {
  service: Service
}

const ServiceCard = ({ service }: Props) => {
  // Get the image URL from various possible properties
  const getImageUrl = () => {
    return service.icon || service.imageUrl || service.image || '/default-service-icon.png';
  };

  // Get the title/name from various possible properties
  const getTitle = () => {
    return service.name || service.title || 'Service Title';
  };

  return (
    <Tilt className="shadow-2xl p-6 rounded-lg bg-[#814ced]">
      <div className="flex justify-start">
        {getImageUrl() && (
          <Image
            src={getImageUrl()}
            alt={getTitle()}
            width={50}
            height={50}
            className="object-cover"
            onError={(e) => {
              // Fallback to default image if loading fails
              const target = e.target as HTMLImageElement;
              target.src = '/default-service-icon.png';
            }}
          />
        )}
      </div>
      <h1 className="mt-4 text-lg font-bold text-gray-100">
        {getTitle()}
      </h1>
      <p className="mt-3 text-sm text-white text-opacity-80">
        {service.description || 'Service description will appear here'}
      </p>
    </Tilt>
  )
}

export default ServiceCard