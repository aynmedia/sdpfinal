/** @format */
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';
import kobe from '@/../public/images/kobe.png';

const HomeAbout = () => {
  const heroStats = [
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'Delivering excellence across diverse industries',
    },
    {
      number: '10+',
      label: 'Years of Experience',
      description: 'Trusted expertise in pneumatic solutions',
    },
    {
      number: '95%',
      label: 'Customer Satisfaction',
      description: 'Consistently exceeding expectations',
    },
  ];

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

  const handlePlayVideo = () => {
    window.open('https://www.youtube.com/watch?v=zODMDux4Loc', '_blank');
  };

  return (
    <div className='bg-gradient-to-br from-gray-100 to-gray-100'>
      <div className='max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-16 items-center'>
          {/* Left Column - Image with Play Button */}
          <motion.div
            className='relative cursor-pointer rounded-2xl overflow-hidden shadow-lg'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            onClick={handlePlayVideo}>
            <Image src={kobe} alt='Play Video' className='w-full rounded-2xl' />
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
              <Play className='w-16 h-16 text-white' />
            </div>
          </motion.div>

          {/* Right Column - Content Section */}
          <motion.div
            className='space-y-10'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={staggerChildren}>
            <motion.div variants={fadeInUp} className='space-y-4'>
              <h2 className='text-3xl font-bold text-gray-900 tracking-tight'>
                Discover the Power of Innovation
              </h2>
              <p className='text-md text-gray-600 leading-relaxed'>
                Step into a world of innovation and reliability with tools and
                solutions designed to empower your projects. From cutting-edge
                technology to unmatched craftsmanship, experience engineering
                that redefines precision and elevates performance at every
                level.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className='grid grid-cols-1 gap-8 sm:grid-cols-3'>
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className='bg-white rounded-md p-6 shadow-md hover:shadow-xl transition-shadow duration-300'
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}>
                  <div className='text-4xl font-bold text-[#06091B] mb-2'>
                    {stat.number}
                  </div>
                  <div className='text-lg font-semibold text-gray-900 mb-1'>
                    {stat.label}
                  </div>
                  <p className='text-sm text-gray-600'>{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
