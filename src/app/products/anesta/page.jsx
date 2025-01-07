/** @format */
'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';
import Button from '@/app/components/ui/button/button';
import Explore from '@/app/components/explore/explore';
import AnestIwataProducts from './anestaproduct';
import anesta from '@/../public/images/anesta.png';
import anestabg from '@/../public/images/anestabg.jpg';
import anestalogo from '@/../public/images/anestlogo.svg';
import sliderbg1 from '@/../public/images/sliderbg1.jpg';
// Animation variants
const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const slideIn = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const scaleIn = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const benefitsList = [
  'Advanced technology in air compressors and coating equipment ensures minimal energy consumption while maintaining superior performance.',
  'Products like oil-free compressors and high-precision spray guns deliver consistent performance, critical for industries requiring high accuracy.',
  'Wide range of products designed to cater to diverse industries such as automotive, pharmaceuticals, and manufacturing.',
  'High-quality materials and robust designs ensure long product life, reducing maintenance and replacement costs.',
  'Oil-free compressors and low VOC (Volatile Organic Compound) coating equipment contribute to sustainable industrial practices.',
];

const applicationsList = [
  'Advanced technology in air compressors and coating equipment ensures minimal energy consumption while maintaining superior performance.',
  'Products like oil-free compressors and high-precision spray guns deliver consistent performance, critical for industries requiring high accuracy.',
  'Wide range of products designed to cater to diverse industries such as automotive, pharmaceuticals, and manufacturing.',
  'High-quality materials and robust designs ensure long product life, reducing maintenance and replacement costs.',
  'Oil-free compressors and low VOC (Volatile Organic Compound) coating equipment contribute to sustainable industrial practices.',
];

const Anesta = () => {
  return (
    <div className='relative'>
      {/* <div className='grid grid-cols-1 md:grid-cols-2 min-h-screen relative'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#051D3F] via-transparent to-[#051D3F] z-10 pointer-events-none'></div>
        <motion.div
          className='relative order-last md:order-first flex flex-col justify-center bg-[#051D3F] text-white'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={staggerChildren}>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#051D3F] via-transparent to-[#051D3F] pointer-events-none'></div>
          <div className='md:mx-24 mx-4 flex gap-6 flex-col z-10'>
            <motion.div
              variants={fadeIn}
              className='p-4 bg-white w-fit rounded-sm'>
              <Image
                src={anestalogo}
                alt='Anesta Iwata'
                width={200}
                height={200}
              />
            </motion.div>
            <motion.p
              variants={fadeIn}
              className='text-white text-4xl font-bold'>
              Anesta Iwata
            </motion.p>
            <motion.p
              variants={fadeIn}
              className='text-white text-md font-normal'>
              Innovation Meets Excellence. Explore cutting-edge solutions in air
              compression, vacuum technology, and coating systems crafted to
              optimize productivity across industries. Trust Anest Iwata for
              precision-driven results.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button
                color='white'
                text='Contact Us'
                link='https://www.google.com'
              />
            </motion.div>
          </div>
        </motion.div>

        <div className='order-first md:order-last relative w-full h-full'>
          <motion.div
            className='relative w-full h-full'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#051D3F] via-transparent to-[#051D3F] z-10 pointer-events-none'></div>
            <Image
              src={anesta}
              alt='Anesta Iwata'
              layout='fill'
              objectFit='cover'
              className='w-full h-full'
            />
          </motion.div>
        </div>
      </div> */}
      <div className='absolute w-full h-screen'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          <Image src={sliderbg1} alt='product bg' fill objectFit='cover' />
          <div className='absolute inset-0 bg-gradient-to-b from-gray-100/50 to-gray-100/50'></div>
        </motion.div>
      </div>

      <div className='grid grid-cols-2 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center'>
        <motion.div
          className='absolute flex md:flex-row gap-5 justify-center items-center min-h-screen'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}>
          <motion.div
            className='gap-6 flex flex-col w-full md:w-1/2'
            variants={slideIn}>
            <Image
              src={anestalogo}
              alt='Anesta Iwata'
              width={200}
              height={200}
            />
            <motion.h1 className='text-4xl font-bold' variants={fadeIn}>
              Anesta Iwata
            </motion.h1>
            <motion.p className='text-black/60' variants={fadeIn}>
              Innovation Meets Excellence. Explore cutting-edge solutions in air
              compression, vacuum technology, and coating systems crafted to
              optimize productivity across industries. Trust Anest Iwata for
              precision-driven results.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button
                color='white'
                text='Contact Us'
                link='https://www.google.com'
              />
            </motion.div>
          </motion.div>

          <motion.div
            className='gap-6 flex flex-col w-full md:w-1/2'
            variants={scaleIn}>
            <Image src={anesta} alt='Anesta Iwata' width={700} height={700} />
          </motion.div>
        </motion.div>
      </div>
      <Explore />

      <motion.div
        className='max-w-7xl mx-auto py-12'
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-50px' }}>
        <motion.h1
          className='text-4xl font-semibold mb-4 px-2'
          variants={fadeIn}>
          Highlights
        </motion.h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {[benefitsList, applicationsList].map((list, index) => (
            <motion.div
              key={index}
              className={`p-4 ${index === 0 ? 'bg-[#f4f4f4]' : 'bg-white'}`}
              variants={scaleIn}>
              <h1 className='text-2xl font-normal mb-4'>
                {index === 0 ? 'Benefits' : 'Applications'}
              </h1>
              <motion.ul variants={staggerContainer} className='space-y-4'>
                {list.map((text, idx) => (
                  <motion.li
                    key={idx}
                    variants={fadeIn}
                    className='flex items-center'>
                    <Dot className='h-12 w-12 mr-2' />
                    <span>{text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnestIwataProducts />
    </div>
  );
};

export default Anesta;
