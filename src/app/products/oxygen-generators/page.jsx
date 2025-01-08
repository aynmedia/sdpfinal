/** @format */

'use client';
import React from 'react';
import OxygenBubbles from './oxygen';
import { motion } from 'framer-motion';
import oxygen from '@/../public/images/oxygen.png';
import Button from '@/app/components/ui/button/button';
import Image from 'next/image';
import { Dot } from 'lucide-react';
import ApplicationsSection from './application';

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

const Page = () => {
  return (
    <div className='min-h-screen'>
      <section className='relative min-h-screen bg-[#0066CB]'>
        <div className='absolute inset-0 bg-gradient-to-b from-white to-transparent' />
        <OxygenBubbles />

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <motion.div
            className='grid md:grid-cols-2 gap-8 items-center'
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}>
            <motion.div
              variants={slideIn}
              className='space-y-6 flex flex-col justify-center min-h-screen '>
              <motion.h1 variants={fadeIn} className='text-4xl font-bold'>
                Oxygen Generators
              </motion.h1>
              <motion.p variants={fadeIn} className='text-black/80'>
                Innovation Meets Excellence. Explore cutting-edge solutions in
                air compression, vacuum technology, and coating systems crafted
                to optimize productivity across industries. Trust Anest Iwata
                for precision-driven results.
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
              variants={scaleIn}
              className='flex items-center justify-center'>
              <Image
                src={oxygen}
                alt='Oxygen Generator'
                width={900}
                height={900}
                className='max-w-full h-auto'
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className='pt-16 pb-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold mb-6'>
            Reliable On-Site Oxygen Solutions for Every Industry
          </h1>
          <p className='leading-relaxed '>
            At SD Pneumatics, we offer state-of-the-art oxygen generators
            designed to meet diverse industrial and medical application needs.
            Our cutting-edge systems ensure a consistent and eco-friendly supply
            of high-purity oxygen, eliminating reliance on external deliveries
            and enhancing operational efficiency.
          </p>
        </div>
      </section>

      <section className=' bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white rounded-lg p-8 shadow-sm'>
              <h2 className='text-2xl font-semibold mb-6'>
                Our Oxygen Generator Technologies
              </h2>
              <p className='mb-6'>
                We provide a range of advanced oxygen generation technologies to
                suit specific requirements:
              </p>
              <ul className='space-y-4'>
                {[
                  'PSA Oxygen Generators: Proven technology delivering oxygen with 93±3% purity, ideal for various industries.',
                  'Modular PSA Generators: Scalable and compact systems for flexible and space-efficient operations.',
                  'DS-PSA Oxygen Generators: Dual-stage systems ensuring superior energy efficiency and reliability.',
                  'V-PSA Oxygen Solutions: Advanced vacuum-enhanced PSA technology for optimized performance and reduced operational costs.',
                ].map((text, index) => (
                  <li key={index} className='flex items-start'>
                    <Dot className='h-12 w-12 mt-1 flex-shrink-0 text-primary' />
                    <span className='text-gray-700'>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='bg-white rounded-lg p-8 shadow-sm'>
              <h2 className='text-2xl font-semibold mb-6'>
                Why Choose SD Pneumatics Oxygen Generators?
              </h2>
              <ul className='space-y-4'>
                {[
                  'On-Demand Oxygen Production: Generate oxygen as needed, reducing dependency on high-pressure cylinders or liquid oxygen deliveries.',
                  'Energy Efficiency: Our optimized PSA process ensures an excellent compressed air-to-oxygen ratio, minimizing energy consumption.',
                  'Cost Savings: No recurring logistics costs, faster ROI, and reduced oxygen waste.',
                  'Enhanced Safety: No large-scale oxygen storage required, lowering associated risks.',
                ].map((text, index) => (
                  <li key={index} className='flex items-start'>
                    <Dot className='h-12 w-12 mt-1 flex-shrink-0 text-primary' />
                    <span className='text-gray-700'>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ApplicationsSection />
    </div>
  );
};

export default Page;
