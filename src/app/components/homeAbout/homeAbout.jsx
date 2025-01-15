/** @format */
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import Image from 'next/image';
import kobe from '@/../public/images/kobe.png';

const HomeAbout = () => {
  const [isPlaying, setIsPlaying] = useState(false);

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

  const CustomVideo = () => {
    return (
      <div className='relative w-full rounded-2xl overflow-hidden bg-gray-900'>
        <div className='aspect-w-16 aspect-h-9 relative'>
          <div className='relative rounded-2xl overflow-hidden bg-gray-900 shadow-xl'>
            <div className='relative' style={{ paddingTop: '56.25%' }}>
              {' '}
              {/* 16:9 Aspect Ratio */}
              <iframe
                className='absolute top-0 left-0 w-full h-full'
                src='https://www.youtube.com/embed/zODMDux4Loc?autoplay=0&rel=0&showinfo=0'
                title='SD Pneumatics Overview'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-100'>
      <div className='max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-16 items-center'>
          {/* Left Column - Video Section */}
          <motion.div
            className='mb-12 lg:mb-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}>
            <CustomVideo />
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
              <p className='text-lg text-gray-600 leading-relaxed'>
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
                  className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}>
                  <div className='text-4xl font-bold text-green-600 mb-2'>
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
