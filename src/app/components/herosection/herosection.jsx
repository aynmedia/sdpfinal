/** @format */

'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../ui/button/button';
import sliderbg1 from '@/../public/images/sliderbg1.jpg';
import purplebg from '@/../public/images/purplebg.jpg';
const Herosection = () => {
  return (
    <div className='relative w-full h-[90vh] overflow-hidden'>
      {/* Background Image */}

      {/* <div className='absolute inset-0 top-0 bg-gradient-to-b from-black/70 to-transparent'></div> */}

      {/* Overlay Structure - Modified to 2 columns */}
      <div className='absolute inset-0 grid md:grid-cols-3 gap-0'>
        {/* Left colored panel */}
        <motion.div
          className='col-span-1 bg-[#111016]'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        {/* Right colored panel */}
        <motion.div
          className='col-span-2 bg-[#111016]/90'
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Content Container - Split into two sections */}
      <div className='absolute inset-0 grid md:grid-cols-3 gap-4'>
        {/* Left Content */}
        <motion.div
          className='flex flex-col justify-center md:pl-24 px-6 gap-6 col-span-1'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <motion.h1
            className='text-white text-4xl md:text-4xl font-bold'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            Efficient Pneumatic Solutions
          </motion.h1>

          <motion.p
            className='text-white text-md'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}>
            We deliver cutting-edge pneumatic systems designed to enhance
            productivity and reliability.
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

        {/* Right Content */}
        <motion.div
          className='flex flex-col justify-center gap-6 bg-white col-span-2 relative'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <Image
            src={purplebg}
            alt='Slider Background'
            layout='fill'
            objectFit='cover'
            className='absolute top-0 left-0 w-full h-full'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Herosection;
