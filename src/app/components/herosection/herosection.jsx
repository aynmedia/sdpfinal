/** @format */

'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../ui/button/button';
import herohome from '@/../public/images/herohome.jpg';
import purplebg from '@/../public/images/purplebg.jpg';
const Herosection = () => {
  return (
    <div className='relative w-full h-[100vh] overflow-hidden'>
      {/* Background Image */}
      <Image
        src={herohome}
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
            className='text-white text-4xl md:text-6xl font-bold font-oswald'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            Precision Engineering, Redefined
          </motion.h1>

          <motion.p
            className='text-white text-md'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}>
            Step into a world of innovation and reliability with tools and
            solutions designed to empower your projects. From cutting-edge
            technology to unmatched craftsmanship, experience engineering that
            redefines precision and elevates performance at every level.
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
          className='flex flex-col justify-center e col-span-1 relative'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}></motion.div>
      </div>
    </div>
  );
};

export default Herosection;
