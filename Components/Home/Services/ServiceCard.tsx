'use client'
import React from 'react'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'
type Service = {
  id: number
  title: string
  description: string
  icon: string
}
type Props = {
  service: Service
}
const ServiceCard = ({ service }: Props) => {
  return (
    <Tilt className="shadow-2xl p-6 rounded-lg bg-[#814ced]">
      <div className="flex justify-start">
        <Image
          src={service.icon}
          alt={service.title}
          width={50}
          height={50}
        />
      </div>
      <h1 className="mt-4 text-lg font-bold text-gray-100">{service.title}</h1>
      <p className="mt-3 text-sm text-white text-opacity-80">{service.description}</p>
    </Tilt>
  )
}
export default ServiceCard