/** @format */

'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import hero from '@/../public/images/gears.jpg';

const HomeProducts = () => {
  const products = [
    {
      title: 'Anest Iwata',
      description:
        'Anest Iwata offers an extensive range of products covering the entire spectrum of paint coating equipment to meet varied requirements of its customers across different industries.',
      link: '/products/anesta',
    },
    {
      title: 'Kobelco',
      description:
        'KOBELCO COMPRESSORS is a global compressed air solution provider from Japan, having over 100 years history. Introducing corporate philosophy, history, locations and other corporate information.',
      link: '/products/kobelco',
    },
    {
      title: 'Oxygen Generator',
      description:
        'Oxygen generators deliver pure, dry oxygen gas suitable for a wide range of industrial and commercial applications, ensuring efficiency and reliability.',
      link: '/products/oxygen-generators',
    },
    {
      title: 'Nitrogen Generator',
      description:
        'Nitrogen generators deliver pure, dry nitrogen gas suitable for a wide range of industrial and commercial applications, ensuring efficiency and reliability.',
      link: '/products/nitrogen-generators',
    },
    {
      title: 'Spare Parts',
      description:
        'We provide a comprehensive selection of high-quality spare parts to ensure the optimal performance and longevity of your equipment. Our reliable solutions help minimize downtime and maximize efficiency across various industrial applications.',
      link: '/products/nitrogen-generators',
    },
    {
      title: 'Others',
      description:
        'SD Pneumatics offers an extensive range of products covering the entire spectrum of paint coating equipment to meet varied requirements of its customers across different industries.',
      link: '/products/others',
    },
  ];

  return (
    <div className='relative bg-[#001233] py-16'>
      {/* Parallax Background */}
      <div
        className='absolute inset-0 bg-cover bg-fixed'
        style={{ backgroundImage: `url(${hero.src})` }}>
        <div className='absolute inset-0 bg-[#001233]/70'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Heading Section */}
        <div className='text-center mb-12'>
          <p className='text-white text-sm tracking-wider mb-2 '>What we do?</p>
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
              className='relative bg-white/80 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group cursor-pointer text-white'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}>
              {/* Card Content */}
              <Link href={product.link}>
                <div className='p-6'>
                  <h1 className='text-2xl font-semibold text-[#001233] group-hover:text-[#5039bf] transition-colors duration-300'>
                    {product.title}
                  </h1>
                  <p className='text-gray-600 mt-3 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300'>
                    {product.description}
                  </p>
                  {/* <a href='/products/anesta/'> */}
                  <p className='text-[#001233] mt-4 inline-block font-bold hover:underline'>
                    Explore More →
                  </p>
                  {/* </a> */}
                </div>
              </Link>
              {/* Hover Accent */}
              {/* <div className='absolute inset-0 bg-gradient-to-r from-[#001233]/20 to-[#0056b3]/10 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-300'></div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
