/** @format */
'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';
import Button from '@/app/components/ui/button/button';
import Explore from '@/app/components/explore/explore';
import AnestIwataProducts from './anestaproduct';
import kobel from '@/../public/images/kobel.png';
import screw from '@/../public/images/screw.jpg';
import kobelcologo from '@/../public/images/kobelco.svg';
import kobelcoscrew from '@/../public/images/kobelcoscrew.jpg';
import sliderbg2 from '@/../public/images/sliderbg2.jpg';

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
  'Advanced compressor solutions including oil-free, screw, and centrifugal compressors for diverse industry needs.',
  'Energy-efficient designs with IoT-enabled monitoring systems for optimal performance and predictive maintenance.',
  'Comprehensive customer support through global network of offices, service centers, and distributors.',
  'Eco-friendly technologies that minimize carbon footprint while maintaining superior performance.',
  'Customized solutions tailored to address unique operational challenges across industries.',
];

const applicationsList = [
  'Food processing and pharmaceuticals benefit from contaminant-free air with oil-free compressors.',
  'Manufacturing and automotive sectors utilize durable and efficient screw compressors.',
  'Power generation and petrochemicals rely on high-volume centrifugal compressors.',
  'Electronics industry requires precision-controlled compressed air systems.',
  'Steel production facilities leverage high-pressure compression solutions.',
];

const Kobelco = () => {
  return (
    <div className='relative'>
      {/* Background Section */}
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
            <source src='/images/bgko.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <div className='absolute inset-0 bg-gradient-to-b from-[#001233]/30 to-[#001233]/30'></div>
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
              <Image src={kobelcologo} alt='Kobelco' width={200} height={200} />
              <motion.h1
                className='text-4xl font-bold'
                variants={fadeIn}></motion.h1>
              <motion.p
                className='text-white text-md font-semibold'
                variants={fadeIn}>
                Innovation Meets Excellence. Explore cutting-edge solutions in
                air compression technology crafted to optimize productivity
                across industries. Trust Kobelco for precision-driven results.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Button
                  color='white'
                  text='Contact Us'
                  link='https://www.google.com'
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <Explore />

        {/* Content sections with background */}
        <div className='bg-white relative z-10'>
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
              <div className='space-y-4 flex flex-col justify-center py-12'>
                <h1 className='text-3xl font-bold tracking-tight'>Overview</h1>
                <p className='leading-normal'>
                  Kobelco Compressors offers a diverse range of advanced
                  compressor solutions to meet the specific needs of various
                  industries. Their product portfolio includes oil-free
                  compressors, which are ideal for applications requiring
                  contaminant-free air, such as food processing,
                  pharmaceuticals, and electronics. They also specialize in
                  screw compressors, valued for their durability and energy
                  efficiency in manufacturing and automotive sectors.
                </p>
                <p className='leading-normal'>
                  Innovation and sustainability are at the heart of Kobelco's
                  operations. The company invests heavily in research and
                  development to create energy-efficient compressors that reduce
                  operational costs while maintaining superior performance. With
                  a focus on environmental responsibility, Kobelco integrates
                  eco-friendly designs to minimize carbon footprints and support
                  global sustainability initiatives.
                </p>
              </div>
              <div className='flex justify-center items-center py-4'>
                <Image
                  src={kobelcoscrew}
                  alt='kobelco'
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>

          <AnestIwataProducts />
        </div>
      </div>
    </div>
  );
};

export default Kobelco;
