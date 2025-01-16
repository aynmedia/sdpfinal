/** @format */

'use client';
import React from 'react';
import { motion } from 'framer-motion';
import hero from '@/../public/images/gears.jpg';

const HomeProducts = () => {
  const products = [
    {
      title: 'Anest Iwata',
      description:
        'Anest Iwata offers an extensive range of products covering the entire spectrum of paint coating equipment to meet varied requirements of its customers across different industries.',
    },
    {
      title: 'Kobelco',
      description:
        'KOBELCO COMPRESSORS is a global compressed air solution provider from Japan, having over 100 years history. Introducing corporate philosophy, history, locations and other corporate information.',
    },
    {
      title: 'Oxygen Generator',
      description:
        'Oxygen generators deliver pure, dry oxygen gas suitable for a wide range of industrial and commercial applications, ensuring efficiency and reliability.',
    },
    {
      title: 'Nitrogen Generator',
      description:
        'Nitrogen generators deliver pure, dry nitrogen gas suitable for a wide range of industrial and commercial applications, ensuring efficiency and reliability.',
    },
    {
      title: 'Others',
      description:
        'SD Pneumatics offers an extensive range of products covering the entire spectrum of paint coating equipment to meet varied requirements of its customers across different industries.',
    },
  ];

  return (
    <div className='relative bg-[#001233] py-16'>
      {/* Parallax Background */}
      <div
        className='absolute inset-0 bg-cover bg-fixed'
        style={{ backgroundImage: `url(${hero.src})` }}>
        <div className='absolute inset-0 bg-black/30'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Heading Section */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-white'>
            Discover Industrial Excellence
          </h1>
          <p className='text-lg text-gray-300 mt-4'>
            Explore our extensive range of innovative solutions designed to meet
            your specific industrial needs.
          </p>
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {products.map((product, index) => (
            <motion.div
              key={index}
              className='relative bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 overflow-hidden group'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}>
              {/* Card Content */}
              <div>
                <h2 className='text-2xl font-semibold text-[#001233] group-hover:text-[#0056b3] transition-colors duration-300'>
                  {product.title}
                </h2>
                <p className='text-gray-600 mt-3 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300'>
                  {product.description}
                </p>
              </div>
              {/* Hover Accent */}
              <div className='absolute inset-0 bg-gradient-to-r from-[#001233]/20 to-[#0056b3]/10 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-300'></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
