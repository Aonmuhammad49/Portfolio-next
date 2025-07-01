// Components/Home/Services/Services.tsx
'use client'

import SectionHeading from '@/Components/Helper/SectionHeading'
import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'
import { getData } from '../../../lib/firebase'
import { servicesData as fallbackData } from '@/Data/data'
import 'aos/dist/aos.css';

type ServiceType = {
  id?: string | number;
  title?: string;
  description: string;
  icon?: string;
  name?: string;
  imageUrl?: string;
  image?: string;
};

const Services = () => {
  const [servicesData, setServicesData] = useState<ServiceType[]>(fallbackData);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const res = await getData('Portfolio/ServicePage');
        console.log('Firebase ServicePage Data:', res);
        
        // Simple data handling
        if (res && typeof res === 'object') {
          // Convert object to array if needed
          const servicesArray = Array.isArray(res) ? res : Object.values(res);
          setServicesData(servicesArray);
        }
      } catch (error) {
        console.error('Error fetching services data:', error);
      }
    };
    
    fetchServicesData();
  }, []);

  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
      <SectionHeading>Services</SectionHeading>
      <div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20'
      >
        {servicesData.map((service, i) => (
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${i * 150}`}
            key={service.id || i}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services;