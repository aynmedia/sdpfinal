/** @format */

'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../ui/button/button';
import herohome from '@/../public/images/herohome.jpg';
import purplebg from '@/../public/images/herosection.jpg';
import anestlogo from '@/../public/images/anestlogo.svg';
import kobelco from '@/../public/images/kobelco.svg';
const Herosection = () => {
  return (
    <div className='relative w-full h-[100vh] overflow-hidden'>
      {/* Background Image */}
      <Image
        src={purplebg}
        alt='Slider Background'
        layout='fill'
        objectFit='cover'
        className='absolute top-0 left-0 w-full h-full'
      />
      {/* <div className='absolute inset-0 top-0 bg-gradient-to-b from-black/70 to-transparent'></div> */}

      {/* Overlay Structure - Modified to 2 columns */}
      <div className='absolute inset-0 grid md:grid-cols-2 gap-0'>
        {/* Left colored panel */}
        <motion.div
          className='col-span-1 '
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        {/* Right colored panel */}
        <motion.div
          className='col-span-1 '
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Content Container - Split into two sections */}
      <div className='absolute inset-0 grid md:grid-cols-2'>
        {/* Left Content */}
        <motion.div
          className='flex flex-col justify-center md:pl-24 px-6 gap-6 col-span-1'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <motion.h1
            className='text-primary text-4xl md:text-6xl font-bold font-oswald'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            Precision Engineering, Redefined
          </motion.h1>

          <motion.p
            className='text-primary text-md'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}>
            Welcome to S.D. Pneumatics – Innovating Excellence in
            Compressed Air Solutions
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

          <div className='flex flex-col gap-2'>
            <h1 className='text-primary text-3xl font-normal mb-6'>
              Authorized Dealers of
            </h1>
            <div className='bg-white rounded-lg p-2 shadow-sm w-fit flex gap-6'>
              <Image
                src={anestlogo}
                alt='Anest Iwata'
                width={200}
                height={200}
                className='max-w-full h-auto'
              />
              <Image
                src={kobelco}
                alt='Anest Iwata'
                width={200}
                height={200}
                className='max-w-full h-auto'
              />
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className='flex flex-col justify-center e col-span-1 relative'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}></motion.div>
      </div>
    </div>
  );
};

export default Herosection;
