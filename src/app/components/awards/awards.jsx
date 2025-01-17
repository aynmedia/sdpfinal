/** @format */

'use client';
import { motion } from 'framer-motion';
import award1 from '@/../public/images/award1.jpg';
import award2 from '@/../public/images/award2.jpg';
import Image from 'next/image';

const awards = [
  {
    title: 'Best Innovation Award',
    year: 2023,
    description: 'Recognized for outstanding innovation in the industry.',
    image: award1,
  },
  {
    title: 'Excellence in Education',
    year: 2022,
    description:
      'Awarded for significant contributions to education and learning.',
    image: award2,
  },
];

const Awards = () => {
  return (
    <div className='bg-[#001233] py-16 px-6 sm:px-12 lg:px-20 my-12'>
      <h2 className='text-4xl font-bold text-gray-100 text-center mb-12'>
        Our Achievements
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-7xl mx-auto'>
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className='flex flex-col items-center md:items-start space-y-6'>
            <Image
              src={award.image}
              alt={award.title}
              width={300}
              height={300}
              className='rounded-lg shadow-sm w-full h-auto transform transition-transform duration-300 hover:scale-105'
            />
            <div className='space-y-2 text-center md:text-left'>
              <span className='text-lg text-gray-400 font-medium'>
                {award.year}
              </span>
              {/* <h3 className='text-2xl font-semibold text-gray-100'>
                {award.title}
              </h3>
              <p className='text-gray-400'>{award.description}</p> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
