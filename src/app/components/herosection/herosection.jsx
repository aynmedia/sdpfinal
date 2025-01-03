/** @format */

import React from 'react';
import Image from 'next/image';
import sliderbg1 from '@/../public/images/sliderbg1.jpeg';
import Button from '../ui/button/button';
const Herosection = () => {
  return (
    <div className='relative w-full h-[90vh] overflow-hidden'>
      {/* Background Image */}
      <Image
        src={sliderbg1}
        alt='Slider Background'
        fill
        className='object-cover'
      />

      {/* Overlay Structure */}
      <div className='absolute inset-0 grid md:grid-cols-3 gap-0'>
        {/* Left colored panel */}
        <div className='col-span-1 bg-primary'></div>
        <div className='col-span-2'></div>
      </div>

      {/* Text Container - Positioned on the left */}
      <div className='absolute inset-y-0 left-0 w-full md:w-1/2 flex flex-col justify-center md:pl-24 px-6 gap-6'>
        <h1 className='text-white text-4xl md:text-4xl font-bold'>
          Efficient Pneumatic Solutions for Every Industry
        </h1>
        <p className='text-white text-md'>
          we deliver cutting-edge pneumatic systems designed to enhance
          productivity and reliability. From innovative products to expert
          support, we’re committed to powering your operations with precision
          and efficiency. Let us help you achieve optimal performance today.
        </p>
        <Button color='white' text='Learn More' link='https://www.google.com' />
      </div>
    </div>
  );
};

export default Herosection;
