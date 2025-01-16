/** @format */
'use client';
import React from 'react';
import { Hospital, Factory, Droplets, Fish, Tablets } from 'lucide-react';
import { motion } from 'framer-motion';

const ApplicationCard = ({ IconComponent, title, description }) => (
  <div className='group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md'>
    <div className='absolute -right-4 -top-4 h-24 w-24 rounded-full bg-sky-50 transition-transform group-hover:scale-110' />
    <div className='relative'>
      <div className='mb-4 inline-block rounded-lg bg-sky-100 p-3'>
        <IconComponent className='h-6 w-6 text-sky-600' />
      </div>
      <h3 className='mb-2 text-lg font-semibold text-gray-900'>{title}</h3>
      <p className='text-gray-600/80'>{description}</p>
    </div>
  </div>
);

const ApplicationsSection = () => {
  const applications = [
    {
      IconComponent: Hospital,
      title: 'Healthcare',
      description:
        'Medical oxygen supply for hospitals, clinics, and emergency care facilities, ensuring reliable access to life-saving oxygen.',
    },
    {
      IconComponent: Factory,
      title: 'Manufacturing',
      description:
        'Essential oxygen supply for cutting, welding, and various industrial processes that require precise oxygen levels.',
    },
    {
      IconComponent: Droplets,
      title: 'Water Treatment',
      description:
        'Oxygen enrichment solutions for wastewater treatment, helping maintain environmental compliance and efficiency.',
    },
    {
      IconComponent: Fish,
      title: 'Aquaculture',
      description:
        'Maintaining optimal oxygen levels for aquatic farming, ensuring healthy growth and sustainable production.',
    },
    {
      IconComponent: Tablets,
      title: 'Pharmaceuticals',
      description:
        'High-purity oxygen generation for pharmaceutical research, development, and production processes.',
    },
  ];

  return (
    <section className='bg-gray-50 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Applications</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Our oxygen generators are designed for a wide range of industrial
            and medical applications, delivering reliable and efficient oxygen
            supply wherever it's needed.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1,
                },
              }}
              viewport={{ once: true }}>
              <ApplicationCard {...app} />
            </motion.div>
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
