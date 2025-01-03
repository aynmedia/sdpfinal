/** @format */
'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import anestlogo from '@/../public/images/anestlogo.svg';
import kobelco from '@/../public/images/kobelco.svg';

const HomeAbout = () => {
  const heroStats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '10+', label: 'Years of Experience' },
    { number: '95%', label: 'Customer Satisfaction Rate' },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className='bg-primary grid md:grid-cols-2'>
      <motion.div
        className='flex flex-col justify-center items-center px-4 md:px-12 bg-[#F4F4F4] gap-6 py-12 md:py-32'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}>
        <motion.h1
          className='text-xl md:text-2xl font-bold uppercase'
          variants={fadeInUp}>
          Discover the Power of Air Compressors with SD Pneumatics
        </motion.h1>

        <motion.div className='w-full' variants={scaleIn}>
          <iframe
            width='100%'
            height='415'
            src='https://www.youtube.com/embed/zODMDux4Loc?autoplay=1&mute=1&loop=0'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='rounded-lg shadow-lg'
          />
        </motion.div>
      </motion.div>

      <motion.div
        className='flex flex-col justify-center items-center px-4 md:px-12 py-12 text-primary gap-6 bg-white'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}>
        <motion.p variants={fadeInUp} className='text-md leading-normal'>
          The new line of Anest Iwata oil lubricated rotary vane vacuum pumps,
          designed and manufactured in Germany, offers the best in Class
          performance to the demanding needs of various industries and
          applications
        </motion.p>

        <motion.div
          className='grid grid-cols-3 gap-4'
          variants={staggerChildren}>
          {heroStats.map((stat, index) => (
            <motion.div key={index} className='text-left' variants={fadeInUp}>
              <motion.span
                className='text-3xl md:text-4xl font-bold block text-primary'
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                {stat.number}
              </motion.span>
              <p className='text-sm md:text-base'>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h1 className='text-primary text-2xl mt-12' variants={fadeInUp}>
          Authorized dealer of
        </motion.h1>

        <motion.div
          className='w-full flex md:flex-row flex-col items-center gap-6 justify-center mt-8 bg-white p-4 rounded-lg'
          variants={scaleIn}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
            <Image
              src={anestlogo}
              alt='Anest Iwata'
              width={300}
              height={300}
              className='max-w-full h-auto'
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
            <Image
              src={kobelco}
              alt='Kobelco'
              width={200}
              height={200}
              className='max-w-full h-auto'
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeAbout;
