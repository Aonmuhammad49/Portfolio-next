import React from 'react';
import SectionHeading from '@/Components/Helper/SectionHeading';
import { aboutInfo } from '@/Data/data';
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import 'aos/dist/aos.css';

const About = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
      <SectionHeading>About Me</SectionHeading>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'>
            {aboutInfo.title}
          </h1>
          <p className='mt-6 text-base text-gray-500'>{aboutInfo.description}</p>
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
            <Image 
              src="https://i.ibb.co/ZRhmr3hr/customer.png" 
              alt='Satisfied Customers' 
              width={80} 
              height={80} 
              className='mx-auto' 
            />
            <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.client}</p>
            <p className='text-base sm:text-lg text-gray-400 text-center'>Satisfied Customers</p>
          </div>
          <div>
            <Image 
              src="https://i.ibb.co/bjwjH5mr/experience.png" 
              alt='Years Experience' 
              width={80} 
              height={80} 
              className='mx-auto' 
            />
            <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.experience}</p>
            <p className='text-base sm:text-lg text-gray-400 text-center'>Years Experience</p>
          </div>
          <div>
            <Image 
              src="https://i.ibb.co/sv3RwhWR/completed.png" 
              alt='Completed Projects' 
              width={80} 
              height={80} 
              className='mx-auto' 
            />
            <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.project}</p>
            <p className='text-base sm:text-lg text-gray-400 text-center'>Completed Projects</p>
          </div>
          <div>
            <Image 
              src="https://i.ibb.co/zWdqTqqS/rocket.png" 
              alt='Websites Launched' 
              width={80} 
              height={80} 
              className='mx-auto' 
            />
            <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.website}</p>
            <p className='text-base sm:text-lg text-gray-400 text-center'>Websites Launched</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
