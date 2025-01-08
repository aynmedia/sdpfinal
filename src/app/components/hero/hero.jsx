/** @format */
'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CircleArrowRight, ChevronDown } from 'lucide-react';

// Import images (assuming these are already imported in your project)
import sliderbg1 from '@/../public/images/sliderbg1.jpeg';
import sliderbg2 from '@/../public/images/sliderbg2.jpg';
import anesta from '@/../public/images/anesta.png';
import kobel from '@/../public/images/kobel.png';
import anestlogo from '@/../public/images/anestlogo.svg';
import kobelco from '@/../public/images/kobelco.svg';
import oxy from '@/../public/images/oxygen.png';

const slides = [
  {
    image: anesta,
    bg: sliderbg1,
    title: 'Anesta Iwata',
    description:
      'We are an authorized dealer for Anest Iwata, offering high-performance air compressors designed for reliability and efficiency across industries. Explore our range today.',
    logo: anestlogo,
  },
  {
    image: kobel,
    bg: sliderbg2,
    title: 'Kobelco',
    description:
      'KOBELCO COMPRESSORS, with over 100 years of history, is a leading global provider of compressed air solutions from Japan. Committed to innovation and quality, they deliver reliable and efficient systems for various industries worldwide.',
    logo: kobelco,
  },
  {
    image: oxy,
    bg: sliderbg1,
    title: 'Oxygen Generators',
    description:
      'Efficient and reliable oxygen generators designed to meet the demands of various industries. Delivering high-purity oxygen on-site, these systems ensure cost-effectiveness and continuous supply, eliminating the need for cylinder storage. Perfect for medical, industrial, and environmental applications.',
  },
];

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Autoplay functionality
  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // 5 seconds autoplay

      return () => clearInterval(timer);
    }
  }, [isHovering]);

  // Slide change handler
  const changeSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // Slide transition variants
  const slideVariants = {
    initial: { opacity: 0, scale: 0.9 },
    enter: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, scale: 1.1, transition: { duration: 0.8 } },
  };

  return (
    <div
      className='relative w-full h-[700px] max-h-screen justify-around flex overflow-hidden'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: `url(${slides[currentSlide].bg.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
        {/* Optional Gradient Overlay */}
        {/* <div className='absolute inset-0 bg-gradient-to-b from-gray-100/60 to-gray-100/60'></div> */}
      </div>

      {/* Slides Container */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial='initial'
          animate='enter'
          exit='exit'
          variants={slideVariants}
          className='relative flex items-center justify-center h-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 w-full  h-full '>
            <div className='grid grid-cols-1 md:grid-cols-3 w-full  h-full '>
              <div className='col-span-1 md:col-span-1 w-full h-full bg-primary'>
                tailored for your business
              </div>{' '}
              <div className='col-span-1 md:col-span-2 w-full h-full'></div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Vertical Navigation */}
      <div className='hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-1 flex-col space-y-4'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`relative w-4 h-4 md:w-6 md:h-6 flex items-center justify-center rounded-full border-2 transition-all duration-300 ease-in-out hover:scale-110 ${
              currentSlide === index
                ? 'border-white bg-green-500'
                : 'border-gray-300/80 bg-transparent hover:bg-white/30'
            }`}>
            {currentSlide === index && (
              <motion.span
                layout
                className='absolute inset-0 w-full h-full rounded-full bg-green-500 opacity-50 animate-ping'></motion.span>
            )}
          </button>
        ))}
      </div>

      {/* Mobile Navigation Dots */}
      <div className='md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-green-500 w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator with Animation */}
      <div className='hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20'>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className='text-gray-800'>
          <ChevronDown size={30} />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSlider;
