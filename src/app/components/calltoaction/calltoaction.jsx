/** @format */
'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../ui/button/button';
import Quote from '../../../../public/images/quote.jpg';
import spare from '../../../../public/images/spare.jpg';
import service from '../../../../public/images/service.jpg';

const CardContent = ({ title, description, delay }) => (
  <motion.div
    className='absolute inset-0 flex flex-col justify-center gap-10 p-6'
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}>
    <h1 className='text-xl md:text-2xl font-bold capitalize'>{title}</h1>
    <p className='text-sm md:text-md'>{description}</p>
    <Button color='black' text='Request' link='https://www.google.com' />
  </motion.div>
);

const Card = ({ overlayColor, delay, image, ...props }) => (
  <motion.div
    className='relative w-full aspect-square group'
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.02 }}>
    <div className='absolute inset-0'>
      <Image
        src={image}
        alt={props.title}
        fill
        className='object-cover'
        priority
      />
    </div>
    <motion.div
      className={`absolute inset-0 ${overlayColor}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay + 0.2 }}
    />
    <CardContent delay={delay + 0.4} {...props} />
  </motion.div>
);

const Calltoaction = () => {
  const cards = [
    {
      title: 'Request Quote',
      description:
        'Get a customized quote tailored to your specific pneumatic needs. Our team is ready to provide you with the best solutions at competitive prices.',
      overlayColor: 'bg-primary/70',
      image: Quote,
    },
    {
      title: 'Support Request',
      description:
        'Whether you have a technical query or need assistance with a product, submit your support request.',
      overlayColor: 'bg-primary',
      image: spare,
    },
    {
      title: 'Request Spare Parts',
      description:
        'Submit your request for spare parts, and our team will ensure you receive the right components to keep your systems running smoothly.',
      overlayColor: 'bg-primary/70',
      image: spare,
    },
    {
      title: 'Service Request',
      description:
        'Submit your service request, and our expert team will assist you promptly. We’re committed to ensuring your pneumatic systems operate at their best with minimal downtime.',
      overlayColor: 'bg-primary/70',
      image: service,
    },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-primary text-white w-full overflow-hidden'>
      {cards.map((card, index) => (
        <Card key={index} delay={index * 0.2} {...card} />
      ))}
    </div>
  );
};

export default Calltoaction;
