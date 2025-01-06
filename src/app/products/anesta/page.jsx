/** @format */
'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';
import Button from '@/app/components/ui/button/button';
import Explore from '@/app/components/explore/explore';
import AnestIwataProducts from './anestaproduct';
import anesta from '@/../public/images/anesta.jpg';
import anestabg from '@/../public/images/anestabg.jpg';
import anestalogo from '@/../public/images/anestlogo.svg';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
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
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 min-h-screen relative'>
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
      </div>

      <Explore />

      <motion.div
        className='max-w-7xl mx-auto pb-2 pt-12'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={fadeIn}>
        <h1 className='text-4xl font-semibold mb-4 px-2'>Highlights</h1>
      </motion.div>

      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 gap-4 pb-12 px-4 max-w-7xl mx-auto'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={staggerChildren}>
        <motion.div className='bg-[#f4f4f4] p-4' variants={fadeIn}>
          <h1 className='text-2xl font-normal mb-4'>Benefits</h1>
          <motion.ul className='space-y-4' variants={staggerChildren}>
            {benefitsList.map((text, index) => (
              <motion.li
                key={index}
                className='flex items-center'
                variants={fadeIn}>
                <Dot className='h-12 w-12 mr-2' />
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div className='bg-white p-4' variants={fadeIn}>
          <h1 className='text-2xl font-normal mb-4'>Applications</h1>
          <motion.ul className='space-y-4' variants={staggerChildren}>
            {applicationsList.map((text, index) => (
              <motion.li
                key={index}
                className='flex items-center'
                variants={fadeIn}>
                <Dot className='h-12 w-12 mr-2' />
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      <div className='bg-primary pb-12'>
        <motion.div
          className='max-w-7xl mx-auto py-12 px-4 text-white flex flex-col gap-6'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={staggerChildren}>
          <motion.h1 variants={fadeIn} className='text-4xl font-bold mb-4'>
            Overview
          </motion.h1>
          <motion.p variants={fadeIn} className='leading-loose'>
            Anest Iwata, a global leader in air compressors, vacuum pumps, and
            coating equipment, is renowned for its innovative and
            energy-efficient solutions. The company offers a comprehensive range
            of products, including oil-free and lubricated air compressors,
            high-performance vacuum pumps, and precision-engineered spray guns.
            These products are meticulously designed to meet the diverse needs
            of industries such as automotive, healthcare, food and beverage,
            electronics, and general manufacturing. With a focus on
            sustainability, Anest Iwata incorporates eco-friendly technologies
            to minimize environmental impact while delivering exceptional
            performance.
          </motion.p>
          <motion.p variants={fadeIn} className='leading-loose'>
            The company's commitment to quality and reliability is evident in
            its advanced engineering and rigorous testing standards. Anest
            Iwata's solutions are widely recognized for their precision,
            durability, and cost-effectiveness, making them a preferred choice
            for businesses worldwide. From enhancing productivity in industrial
            operations to supporting critical applications in healthcare and
            electronics, Anest Iwata's products are at the forefront of
            technological innovation, empowering industries to achieve higher
            efficiency and sustainability.
          </motion.p>
          <motion.h1 variants={fadeIn} className='z-1 text-xl font-bold'>
            Download our quick reference guide:
          </motion.h1>
        </motion.div>

        <motion.div
          className='flex flex-col justify-center items-left gap-6 py-12 max-w-7xl mx-auto h-[300px] bg-white rounded-sm relative text-white'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <Image
            src={anestabg}
            alt='Anest Iwata'
            fill
            objectFit='cover'
            className='absolute top-0 left-0 w-full h-full object-cover'
          />
          <div className='absolute p-6 gap-4 flex flex-col'>
            <motion.h1 variants={fadeIn} className='z-1 text-4xl font-bold'>
              Anesta Iwata
            </motion.h1>
            <motion.h2 variants={fadeIn} className='text-xl font-bold'>
              Download Brochure
            </motion.h2>
          </div>
        </motion.div>
      </div>

      <AnestIwataProducts />
    </div>
  );
};

export default Anesta;
