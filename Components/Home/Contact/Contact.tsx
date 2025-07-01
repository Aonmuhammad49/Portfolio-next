// Components/Home/Contact/Contact.tsx
import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import SectionHeading from '../../Helper/SectionHeading'

const Contact = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715] px-2 sm:px-0'>
      <SectionHeading>Contact</SectionHeading>
      <div className='w-[95%] sm:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-20 items-stretch'>
        <div className="animate-fadeInUp">
          <ContactForm />
        </div>
        <div className="animate-fadeInUp" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
export default Contact;