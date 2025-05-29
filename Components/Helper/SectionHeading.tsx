import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <h1
      className='bg-gradient-to-r from-blue-700 to-purple-800 text-white font-bold tracking-wide rounded-xl shadow-lg 
      px-6 py-4 pt-20 sm:px-10 sm:py-5 text-2xl sm:text-3xl md:text-4xl uppercase w-fit mx-auto 
      transform -rotate-3 sm:-rotate-2 scroll-mt-[12vh]'
    >
      {children}
    </h1>
  );
};

export default SectionHeading;
