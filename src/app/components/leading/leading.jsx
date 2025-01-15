/** @format */
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CircleCheckBig } from 'lucide-react';
import Button from '../ui/button/button';
import abouthome from '@/../public/images/abouthome.png';
import bg from '@/../public/images/leading.jpg';

const products = [
  'Air Compressors',
  'Air Cooled Chiller',
  'Panel Air Conditioner',
  'Dry Scroll Vacuum Pumps',
  'Air Blast Cooling System',
  'Air Blast Oil Cooler',
  'Oxygen Generators',
  'Nitrogen Generators',
];

export function Leading() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className='relative min-h-screen bg-fixed bg-cover bg-center'
      // style={{
      //   backgroundImage: `url(${bg.src})`,
      // }}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}>
      {/* Semi-transparent overlay */}
      <div className='absolute inset-0 bg-white bg-opacity-90' />

      {/* Content */}
      <div className='relative z-0 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 py-16 min-h-screen'>
        <motion.div
          className='md:mt-12 flex flex-1 flex-col justify-center gap-6 px-4 md:px-8'
          variants={itemVariants}>
          <motion.h1
            className='text-2xl md:text-3xl font-semibold capitalize text-primary'
            variants={itemVariants}>
            Leading the Way in Pneumatic Solutions
          </motion.h1>

          <motion.p variants={itemVariants} className='text-primary/90'>
            SD Pneumatics stands out for its commitment to Quality, Innovation,
            and Customer satisfaction. Our tailored solutions are designed to
            improve Performance, Reduce downtime, and increase Operational
            longevity. Here&apos;s why industries trust us.
          </motion.p>

          <motion.p
            className='text-xl font-semibold capitalize text-primary'
            variants={itemVariants}>
            Some of our wide range of products
          </motion.p>

          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 gap-4'
            variants={itemVariants}>
            {products.map((product, index) => (
              <motion.div
                key={`product-${index}`}
                className='text-md flex gap-2 items-center text-primary/90 hover:text-primary'
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}>
                <CircleCheckBig size={20} className='text-blue-400' />
                {product}
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              color='white'
              text='Explore our products'
              link='https://www.google.com'
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className='relative flex h-[500px] md:h-[630px] w-full items-center justify-center p-4'>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='relative w-full max-w-md mt-12'>
            <Image
              src={abouthome}
              alt='Leading Pneumatics'
              width={600}
              height={600}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
