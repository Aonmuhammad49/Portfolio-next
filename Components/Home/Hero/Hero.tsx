"use client"
import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import { getData } from '../../../lib/firebase';

type HeroData = {
  name?: string;
  field?: string;
  coverLetter?: string;
  cvUrl?: string;
  imageUrl?: string;
};

const Hero = () => {
  const [data, setData] = useState<HeroData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData('Portfolio/HomePage');
        console.log('Firebase HomePage Data:', result);
        if (result) {
          setData(result);
        } else {
          console.warn('No data received from Firebase');
        }
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return (
      <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative flex items-center justify-center'>
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative' >
      <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>

          {/* {Text Content} */}
          <div>
            {/* Sub Heading */}
            <h1 data-aos="fade-left" className='text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold'>
              I am {data.name || 'Developer'}
            </h1>

            {/* Title */}
            <h1 data-aos="fade-right" data-aos-delay="100" className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold 
              md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white'>
              {data.field || 'Full Stack Developer'}
            </h1>

            {/* Description */}
            <p data-aos="fade-left" data-aos-delay="200"  className='mt-6 text-sm md:text-base text-white text-opacity-60'>
              {data.coverLetter || 'Passionate developer creating amazing web experiences'}
            </p>

            {/* Download Button */}
            <a
              href={data.cvUrl || '/resume.pdf'}
              download
              data-aos="zoom-in"
              data-aos-delay="300"
              className='inline-flex items-center gap-2 md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg
              transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900'
            >
              <span>Download</span>
              <FaDownload />
            </a>
          </div>

          {/* {Image Content} */}
          <div data-aos="zoom-in" data-aos-delay="400" className='mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950
          overflow-x-hidden'>
            <Image 
              src={data.imageUrl || '/default-profile.jpg'} 
              alt={data.name || 'Profile'} 
              width={450} 
              height={450}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/default-profile.jpg';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;