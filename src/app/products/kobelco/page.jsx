/** @format */
'use client';
import Image from 'next/image';
import React from 'react';
import anesta from '@/../public/images/anesta.jpg';
import { Dot } from 'lucide-react';
import kobel from '@/../public/images/kobel.png';

import kobelcoscrew from '@/../public/images/kobelcoscrew.jpg';
import AnestIwataProducts from './anestaproduct';
import kobelcologo from '@/../public/images/kobelco.svg';
import Button from '@/app/components/ui/button/button';
import Explore from '@/app/components/explore/explore';
import screw from '@/../public/images/screw.jpg';
import { motion } from 'framer-motion';
import sliderbg2 from '@/../public/images/sliderbg2.jpg';
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

const Kobelco = () => {
  return (
    <div>
      <div className='absolute w-full h-screen'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          <Image src={sliderbg2} alt='product bg' fill objectFit='cover' />
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
              src={kobelcologo}
              alt='Anesta Iwata'
              width={200}
              height={200}
            />
            <motion.h1
              className='text-4xl font-bold'
              variants={fadeIn}></motion.h1>
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
            <Image src={kobel} alt='Anesta Iwata' width={700} height={700} />
          </motion.div>
        </motion.div>
      </div>
      <Explore />

      <div className='bg-white pb-12'>
        <div className='max-w-7xl mx-auto py-12 px-4 text-primary  flex flex-col gap-6'>
          <h1 className='text-4xl font-bold mb-4'>
            Comprehensive Product Portfolio
          </h1>
          <p className='leading-loose '>
            Kobelco Compressors offers a diverse range of advanced compressor
            solutions to meet the specific needs of various industries. Their
            product portfolio includes oil-free compressors, which are ideal for
            applications requiring contaminant-free air, such as food
            processing, pharmaceuticals, and electronics. They also specialize
            in screw compressors, valued for their durability and energy
            efficiency in manufacturing and automotive sectors, and centrifugal
            compressors, which cater to high-volume and high-pressure demands in
            industries like power generation, petrochemicals, and steel
            production. Additionally, Kobelco provides customized solutions
            tailored to address unique operational challenges, ensuring optimal
            performance and reliability for their customers.
          </p>
          <h1 className='text-4xl font-bold mb-4'>
            Commitment to Innovation and Sustainability
          </h1>
          <p className='leading-loose'>
            Innovation and sustainability are at the heart of Kobelco's
            operations. The company invests heavily in research and development
            to create energy-efficient compressors that reduce operational costs
            while maintaining superior performance. With a focus on
            environmental responsibility, Kobelco integrates eco-friendly
            designs to minimize carbon footprints and support global
            sustainability initiatives. Their products also feature advanced
            technologies, such as IoT-enabled monitoring systems, allowing users
            to optimize performance and implement predictive maintenance
            strategies, further enhancing efficiency and reliability.
          </p>
          <h1 className='text-4xl font-bold mb-4'>
            Global Reach and Customer Support
          </h1>
          <p className='leading-loose'>
            Kobelco's extensive global presence ensures seamless service and
            support for its customers across the world. Through a robust network
            of offices, service centers, and distributors, the company provides
            comprehensive customer support, including maintenance services,
            spare parts, and technical assistance. Kobelco’s customer-centric
            approach extends to offering training programs, empowering clients
            with the knowledge and skills needed to efficiently operate and
            maintain their equipment. This combination of a strong global reach
            and dedicated support services makes Kobelco a trusted partner for
            industries seeking reliable and high-performing compressor
            solutions.
          </p>
          <h1 className='z-1 text-xl font-bold '>
            Download our quick reference guide:
          </h1>
        </div>

        <div className='flex flex-col justify-center items-left gap-6 py-12 max-w-7xl mx-auto h-[300px] bg-white rounded-sm relative text-white'>
          <h1 className='z-1 text-4xl font-bold '>Anesta Iwata</h1>
          <Image
            src={screw}
            alt='Anest Iwata'
            fill
            objectFit='cover'
            className='absolute top-0 left-0 w-full h-full object-cover'
          />
          <div className='absolute p-6 gap-4 flex flex-col text-white'>
            <h1 className='z-1 text-4xl font-bold '>Kobelco</h1>
            <h2 className='text-xl font-bold'>Download Brochure</h2>
          </div>
        </div>
      </div>
      <AnestIwataProducts />
    </div>
  );
};

export default Kobelco;
