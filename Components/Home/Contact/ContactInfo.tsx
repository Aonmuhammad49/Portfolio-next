// Components/Home/Contact/ContactInfo.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { contactData as fallbackData } from '@/Data/data'
import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa'
import { getData } from '../../../lib/firebase'

// Define a type for contact info based on fallbackData
// If fallbackData has keys: phone, email, address

type ContactInfoType = {
  phone: string;
  email: string;
  address: string;
};

const ContactInfo = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfoType>(fallbackData);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const res = await getData('Portfolio/ContactPage');
        console.log('Firebase ContactPage Data:', res);
        if (res && typeof res === 'object') {
          setContactInfo(res);
        }
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };
    
    fetchContactData();
  }, []);

  return (
    <div className="rounded-2xl p-6 sm:p-10 shadow-lg h-full flex flex-col justify-center">
      <div className='flex items-center space-x-8'>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col transition-transform duration-300 transform hover:scale-110'>
          <FaPhone className='w-4 h-4 md:h-7 text-white'/>
        </div>
        <div>
          <h1 className='text-lg sm:text-xl text-white font-bold'>Phone</h1>
          <h1 className='text-base sm:text-lg text-white text-opacity-70'>
            {contactInfo.phone || fallbackData.phone}
          </h1>
        </div>
      </div>
      
      <div className='flex items-center space-x-8 mt-8 mb-8'>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col transition-transform duration-300 transform hover:scale-110'>
          <FaEnvelope className='w-4 h-4 md:h-7 text-white'/>
        </div>
        <div>
          <h1 className='text-lg sm:text-xl text-white font-bold'>Email Address</h1>
          <h1 className='text-base sm:text-lg text-white text-opacity-70'>
            {contactInfo.email || fallbackData.email}
          </h1>
        </div>
      </div>
      
      <div className='flex items-center space-x-8'>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col transition-transform duration-300 transform hover:scale-110'>
          <FaMap className='w-4 h-4 md:h-7 text-white'/>
        </div>
        <div>
          <h1 className='text-lg sm:text-xl text-white font-bold'>Address</h1>
          <h1 className='text-base sm:text-lg text-white text-opacity-70'>
            {contactInfo.address || fallbackData.address}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo