/** @format */

import React, { useState } from 'react';
import { Hospital, Factory, Droplets, Fish, Tablets } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import industry from '@/../public/images/oxygen/industry.jpg';
import hospital from '@/../public/images/oxygen/hospital.jpg';
import water from '@/../public/images/oxygen/water.jpg';
import aqua from '@/../public/images/oxygen/aqua.jpg';
import pharma from '@/../public/images/oxygen/pharma.jpg';

const ApplicationCard = ({
  IconComponent,
  title,
  description,
  index,
  imageUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
        },
      }}
      viewport={{ once: true }}
      className='relative h-64 w-full'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div
        className={`relative h-full w-full transition-all duration-500 ${
          isHovered ? 'scale-105' : 'scale-100'
        }`}
        style={{
          transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0)',
          transformStyle: 'preserve-3d',
        }}>
        {/* Front of card */}
        <div
          className='absolute h-full w-full rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md'
          style={{ backfaceVisibility: 'hidden' }}>
          <div className='absolute -right-4 -top-4 h-24 w-24 rounded-full bg-sky-50 transition-transform group-hover:scale-110' />
          <div className='relative flex h-full flex-col items-center justify-center space-y-4'>
            <div className='inline-block rounded-lg bg-sky-100 p-3'>
              <IconComponent className='h-6 w-6 text-sky-600' />
            </div>
            <h3 className='text-lg font-semibold text-center'>{title}</h3>
            <p className='text-sm text-center text-gray-600'>{description}</p>
          </div>
        </div>

        {/* Back of card */}
        <div
          className='absolute h-full w-full overflow-hidden rounded-xl bg-white shadow-sm'
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}>
          <Image
            fill
            src={imageUrl || '/api/placeholder/256/256'}
            alt={title}
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </motion.div>
  );
};

const ApplicationsSection = () => {
  const applications = [
    {
      IconComponent: Factory,
      title: 'Industrial Manufacturing',
      description:
        'Essential oxygen supply for cutting, welding, and various industrial processes that require precise oxygen levels.',
      imageUrl: industry,
    },
    {
      IconComponent: Hospital,
      title: 'Healthcare',
      description:
        'Medical oxygen supply for hospitals, clinics, and emergency care facilities, ensuring reliable access to life-saving oxygen.',
      imageUrl: hospital,
    },

    {
      IconComponent: Droplets,
      title: 'Ozone and Water treatment',
      description:
        'Oxygen enrichment solutions for wastewater treatment, helping maintain environmental compliance and efficiency.',
      imageUrl: water,
    },
    {
      IconComponent: Fish,
      title: 'Aquaculture',
      description:
        'Maintaining optimal oxygen levels for aquatic farming, ensuring healthy growth and sustainable production.',
      imageUrl: aqua,
    },
    {
      IconComponent: Tablets,
      title: 'Pharmaceuticals',
      description:
        'High-purity oxygen generation for pharmaceutical research, development, and production processes.',
      imageUrl: pharma,
    },
  ];

  return (
    <section className='bg-gray-50 py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-3xl font-bold'>Applications</h2>
          <p className='mx-auto max-w-2xl text-gray-600'>
            Our oxygen generators are designed for a wide range of industrial
            and medical applications, delivering reliable and efficient oxygen
            supply wherever it's needed.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {applications.map((app, index) => (
            <ApplicationCard key={app.title} {...app} index={index} />
          ))}
        </div>

        <div className='mt-12 text-center'>
          <button className='inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-white transition-colors hover:bg-green-700'>
            Learn More About Our Applications
            <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
