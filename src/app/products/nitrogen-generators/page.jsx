/** @format */

'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/app/components/ui/button/button';
import Image from 'next/image';
import { Dot } from 'lucide-react';
import ApplicationsSection from './application';
import Products from './products';
import nitro from '@/../public/images/nitro.jpg';
import NavigationBar from '@/app/components/explore/explore';
import SmokeEffect from './nitrogen';

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
      <section className='relative min-h-screen'>
        <div className='absolute inset-0 w-full h-full'>
          <Image src={nitro} alt='background' layout='fill' objectFit='cover' />
        </div>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#001233]' />
        <SmokeEffect />
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <motion.div
            className='grid md:grid-cols-2 gap-8 items-center'
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}>
            <motion.div
              variants={slideIn}
              className='space-y-6 flex flex-col justify-center min-h-screen'>
              <motion.h1
                variants={fadeIn}
                className='text-4xl font-bold text-white'>
                Nitrogen Generators
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className='text-white/80 font-semibold'>
                Discover advanced nitrogen generation solutions tailored for
                industries demanding high-purity, on-site nitrogen. SD
                Pneumatics delivers reliability, efficiency, and cost savings in
                every system.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Button color='white' text='Contact Us' href='/contact' />
              </motion.div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className='flex items-center justify-center'>
              {/* Optional: Add product image */}
            </motion.div>
          </motion.div>
        </div>
      </section>
      <NavigationBar />

      <section className='pt-16 pb-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold mb-6'>
            On-Site Nitrogen Solutions Tailored for Your Needs
          </h1>
          <p className='leading-relaxed'>
            SD Pneumatics specializes in providing cutting-edge nitrogen
            generators that offer reliable, cost-effective, and energy-efficient
            on-site nitrogen production. Designed for diverse industries, our
            systems eliminate the need for conventional nitrogen supply methods,
            ensuring a continuous and sustainable source of nitrogen.
          </p>
        </div>
      </section>

      <section className='bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white rounded-lg p-8 shadow-sm'>
              <h2 className='text-2xl font-semibold mb-6'>
                Advanced Nitrogen Generation Technologies
              </h2>
              <ul className='space-y-4'>
                {[
                  'PSA Nitrogen Generators: High-purity nitrogen production through proven Pressure Swing Adsorption technology.',
                  'Membrane Nitrogen Generators: Compact systems utilizing membrane separation for flexible, on-demand nitrogen generation.',
                  'Modular PSA Generators: Scalable and space-efficient solutions for industrial applications.',
                  'Custom Nitrogen Solutions: Tailored systems designed to meet specific purity and flow rate requirements.',
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
                Why Choose SD Pneumatics Nitrogen Generators?
              </h2>
              <ul className='space-y-4'>
                {[
                  'Continuous, On-Demand Nitrogen Supply: Eliminate the need for cylinder storage or liquid nitrogen deliveries.',
                  'Energy Efficiency: Advanced systems ensure optimal compressed air-to-nitrogen ratios for reduced operational costs.',
                  'Eco-Friendly Operations: Minimize environmental impact with sustainable, on-site nitrogen generation.',
                  'Cost Savings: Avoid logistics expenses and reduce nitrogen waste for faster ROI.',
                  'Flexible and Reliable: Systems tailored to meet the specific demands of your industry and applications.',
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
      <Products />
    </div>
  );
};

export default Page;
