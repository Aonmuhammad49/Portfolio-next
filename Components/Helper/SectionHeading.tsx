import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <h1
      className='
        text-white font-bold tracking-wide rounded-xl shadow-lg 
        px-4 py-3 text-xl 
        sm:px-8 sm:py-4 sm:text-3xl 
        md:px-10 md:py-5 md:text-4xl 
        lg:text-5xl 
        bg-gradient-to-r from-blue-700 to-purple-800 
        uppercase w-fit mx-auto 
        transform -rotate-3 sm:-rotate-2 md:-rotate-1 
        scroll-mt-[12vh] transition-all duration-300 ease-in-out
        hover:scale-105
      '
    >
      {children}
    </h1>
  );
};

export default SectionHeading;
