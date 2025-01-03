/** @format */

'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import abouthome from '@/../public/images/abouthome.png';
import kobe from '@/../public/images/kobe.png';
import hero from '@/../public/images/hero.png';

const HomeProducts = () => {
  const products = [
    {
      title: 'Anest Iwata',
      description:
        'Anest Iwata offers an extensive range of products covering the entire spectrum of paint coating equipment to meet varied requirements of its customers across different industries.',
      image: abouthome,
      overlay: 'bg-primary ',
    },
    {
      title: 'Kobelco',
      description:
        'KOBELCO COMPRESSORS is a global compressed air solution provider from Japan, having over 100 years history. Introducing corporate philosophy, history, locations and other corporate information.',
      image: kobe,
      overlay: 'bg-[#171717]/70 backdrop-blur-[1px]',
    },
    {
      title: 'Oxygen Generator',
      description:
        'Anest Iwata offers an extensive range of products covering the entire spectrum of paint coating equipment to meet varied requirements of its customers across different industries.',
      image: hero,
      overlay: 'bg-[#171717]/70 backdrop-blur-[1px]',
    },
    {
      title: 'Others',
      description:
        'Anest Iwata offers an extensive range of products covering the entire spectrum of paint coating equipment to meet varied requirements of its customers across different industries.',
      image: hero,
      overlay: 'bg-primary',
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const productCard = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className='bg-primary grid md:grid-cols-3'>
      <motion.div
        className='flex flex-col justify-center items-center px-4 md:px-12 gap-6 py-12 col-span-1'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}>
        <motion.h1
          className='text-xl md:text-2xl font-normal capitalize text-white'
          variants={fadeInUp}>
          Discover our comprehensive range of industrial solutions, from
          high-performance air compressors to specialized pneumatic systems,
          designed to meet your specific needs.
        </motion.h1>
      </motion.div>

      <motion.div
        className='flex flex-col justify-center items-center bg-white col-span-2'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={staggerContainer}>
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 w-full h-full'
          variants={staggerContainer}>
          {products.map((product, index) => (
            <motion.div
              key={index}
              className='relative h-64 overflow-hidden cursor-pointer'
              variants={productCard}>
              <Image
                src={product.image}
                alt={product.title}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
              <div className={`absolute inset-0 ${product.overlay}`}>
                <div className='absolute inset-0 flex flex-col justify-center px-12'>
                  <h2 className='text-xl font-bold mb-2 text-left text-white'>
                    {product.title}
                  </h2>
                  <p className='text-sm text-left font-normal leading-6 opacity-90 text-white'>
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeProducts;
