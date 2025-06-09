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
import motor from '@/../public/images/bgred.jpg';
import anestalogo from '@/../public/images/anestlogo.svg';

export const metadata = {
  title: 'Anest Iwata | Air Compressors & Coating Equipment',
  description:
    "Discover Anest Iwata's innovative air compressors, vacuum pumps, and coating equipment. Energy-efficient, reliable, and sustainable solutions for every industry.",
  openGraph: {
    title: 'Anest Iwata | Air Compressors & Coating Equipment',
    description:
      "Discover Anest Iwata's innovative air compressors, vacuum pumps, and coating equipment. Energy-efficient, reliable, and sustainable solutions for every industry.",
    url: 'https://yourdomain.com/products/anesta',
    siteName: 'SD Pneumatics',
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Anest Iwata',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const slideIn = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
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
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
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
      {/* Video Section */}
      <div className='fixed w-full h-screen top-0 left-0 -z-10'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ willChange: 'transform' }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='w-full h-screen object-cover'
            poster='/images/video-thumbnail.jpg'
            style={{
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
            }}>
            <source src='/images/bg.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <div className='absolute inset-0 bg-gradient-to-b from-[#06091B] to-gray-100/20'></div>
        </motion.div>
      </div>

      {/* Content wrapper */}
      <div className='relative z-10'>
        <div className='grid grid-cols-2 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center'>
          <motion.div
            className='absolute flex md:flex-row gap-5 justify-left items-center min-h-screen'
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
                width={300}
                height={300}
              />
              <motion.h1
                className='text-4xl font-bold'
                variants={fadeIn}></motion.h1>
              <motion.p
                className='text-white/90 text-md font-semibold'
                variants={fadeIn}>
                Innovation Meets Excellence. Explore cutting-edge solutions in
                air compression, vacuum technology, and coating systems crafted
                to optimize productivity across industries. Trust Anest Iwata
                for precision-driven results.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Button color='white' text='Contact Us' href='/contact' />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <Explore />

        {/* Content sections with background */}
        <div className='bg-white/95 relative z-10'>
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

          <div className='bg-[#06091B] text-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 max-w-7xl mx-auto my-4'>
              <div className='space-y-4 flex flex-col justify-center'>
                <h1 className='text-3xl font-bold tracking-tight'>Overview</h1>
                <p className='leading-normal'>
                  Anest Iwata is a global leader in air compressors, vacuum
                  pumps, and coating equipment, delivering innovative,
                  energy-efficient solutions. Its range includes oil-free and
                  lubricated compressors, high-performance vacuum pumps, and
                  precision spray guns, catering to industries like automotive,
                  healthcare, food & beverage, electronics, and manufacturing.
                </p>
                <p className='leading-normal'>
                  With a focus on quality and sustainability, Anest Iwata
                  integrates advanced engineering and eco-friendly technologies
                  to ensure reliability, durability, and efficiency. Trusted
                  worldwide, its solutions enhance productivity and support
                  critical applications across industries.
                </p>
              </div>
              <div className='flex justify-center items-center py-4'>
                <Image src={motor} alt='anesta' width={400} height={400} />
              </div>
            </div>
          </div>

          <AnestIwataProducts />
        </div>
      </div>
    </div>
  );
};

export default Anesta;
