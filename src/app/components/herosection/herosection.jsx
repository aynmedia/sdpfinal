/** @format */
'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../ui/button/button';
import sliderbg1 from '@/../public/images/sliderbg1.jpeg';
import solar from '@/../public/images/presence/SDP_Solar_Industry.png';
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
      <div className='absolute bg-black/20 inset-0 top-0'></div>
      {/* Overlay Structure */}
      <div className='absolute inset-0 grid md:grid-cols-3 gap-0'>
        {/* Left colored panel with slide animation */}
        <motion.div
          className='col-span-1 bg-primary/90'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className='col-span-2' />
      </div>

      {/* Text Container - Positioned on the left */}
      <motion.div
        className='absolute inset-y-0 left-0 w-full md:w-1/2 flex flex-col justify-center md:pl-24 px-6 gap-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <motion.h1
          className='text-white text-4xl md:text-4xl font-bold'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          Efficient Pneumatic Solutions for Every Industry
        </motion.h1>

        <motion.p
          className='text-white text-md'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}>
          we deliver cutting-edge pneumatic systems designed to enhance
          productivity and reliability. From innovative products to expert
          support, we're committed to powering your operations with precision
          and efficiency. Let us help you achieve optimal performance today.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}>
          <Button
            color='white'
            text='Learn More'
            link='https://www.google.com'
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Herosection;
