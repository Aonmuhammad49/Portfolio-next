'use client';
import React, { useEffect, useState } from 'react';
import SectionHeading from '@/Components/Helper/SectionHeading';
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import { getData } from '../../../lib/firebase';
import { aboutInfo } from '@/Data/data';
import 'aos/dist/aos.css';

const About = () => {
  const [result, setResult] = useState<typeof aboutInfo>(aboutInfo);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData('Portfolio/AboutPage');
        console.log('Firebase AboutPage Data:', res);
        if (res) {
          setResult(res);
        } else {
          console.warn('No AboutPage data received from Firebase');
        }
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };
    fetchData();
  }, []);

  const customersImageUrl = '/Images/customer.png';
  const experienceImageUrl = '/Images/experience.jpg';
  const projectsImageUrl = '/Images/completed.png';
  const websitesImageUrl = '/Images/rocket.png';

  const customersCount = result?.client || aboutInfo.client;
  const experienceCount = result?.experience || aboutInfo.experience;
  const projectsCount = result?.project || aboutInfo.project;
  const websitesCount = result?.website || aboutInfo.website;

  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
      <SectionHeading>About Me</SectionHeading>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'>
            {result?.title || 'About Me'}
          </h1>
          <p className='mt-6 text-base text-gray-500'>
            {result?.description || 'Passionate developer with expertise in modern web technologies'}
          </p>
          <div className='mt-8'>
            {['Frontend Development', 'Backend Development', 'Full Stack Development'].map((skill, i) => (
              <div key={i} className='flex items-center space-x-2 mb-6'>
                <div className={`w-7 h-7 ${i === 0 ? 'bg-blue-800' : i === 1 ? 'bg-orange-800' : 'bg-green-800'} flex items-center justify-center`}>
                  <FaCheck className='text-white' />
                </div>
                <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="150" className='grid grid-cols-2 gap-16 items-center lg:mx-auto'>
          <div>
            {customersImageUrl && (
              <Image 
                src={customersImageUrl} 
                alt='Satisfied Customers' 
                width={80} 
                height={80} 
                className='mx-auto'
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            )}
            <p className='mt-3 font-bold text-xl text-white text-center'>
              {customersCount}
            </p>
            <p className='text-base sm:text-lg text-gray-400 text-center'>Satisfied Customers</p>
          </div>

          <div>
            {experienceImageUrl && (
              <Image 
                src={experienceImageUrl} 
                alt='Years Experience' 
                width={80} 
                height={80} 
                className='mx-auto'
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            )}
            <p className='mt-3 font-bold text-xl text-white text-center'>
              {experienceCount}
            </p>
            <p className='text-base sm:text-lg text-gray-400 text-center'>Years Experience</p>
          </div>

          <div>
            {projectsImageUrl && (
              <Image 
                src={projectsImageUrl} 
                alt='Completed Projects' 
                width={80} 
                height={80} 
                className='mx-auto'
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            )}
            <p className='mt-3 font-bold text-xl text-white text-center'>
              {projectsCount}
            </p>
            <p className='text-base sm:text-lg text-gray-400 text-center'>Completed Projects</p>
          </div>

          <div>
            {websitesImageUrl && (
              <Image 
                src={websitesImageUrl} 
                alt='Websites Launched' 
                width={80} 
                height={80} 
                className='mx-auto'
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            )}
            <p className='mt-3 font-bold text-xl text-white text-center'>
              {websitesCount}
            </p>
            <p className='text-base sm:text-lg text-gray-400 text-center'>Websites Launched</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
