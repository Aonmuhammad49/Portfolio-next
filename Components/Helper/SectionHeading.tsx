import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <h1
      className='bg-gradient-to-r from-blue-700 to-purple-800 text-white font-bold tracking-wide rounded-xl shadow-lg 
      px-4 py-3 text-xl 
      sm:px-8 sm:py-4 sm:text-2xl 
      md:px-10 md:py-5 md:text-3xl 
      lg:text-4xl xl:text-5xl 
      uppercase w-full max-w-fit sm:w-fit mx-auto 
      transform -rotate-2 sm:-rotate-3 md:-rotate-2 
      text-center sm:text-left scroll-mt-[12vh]'
    >
      {children}
    </h1>
  );
};

export default SectionHeading;
