/** @format */

import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Factory, Droplets, Tablets, Pizza } from 'lucide-react';
import oil from '@/../public/images/nitrogen/oil.jpg';
import lasercutting from '@/../public/images/nitrogen/lasercutting.jpg';
import electronic from '@/../public/images/nitrogen/electronic.jpg';
import pharmaceuticals from '@/../public/images/nitrogen/pharmaceuticals.jpg';
import foodpack from '@/../public/images/nitrogen/foodpack.jpg';

import Image from 'next/image';
const ApplicationCard = ({
  IconComponent,
  title,
  description,
  imageUrl,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative w-full h-64 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div
        className={`relative w-full h-full transition-transform duration-500 ${
          isHovered ? 'scale-105' : 'scale-100'
        }`}
        style={{
          transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0)',
          transformStyle: 'preserve-3d',
        }}>
        {/* Front of card */}
        <div
          className='absolute w-full h-full backface-hidden bg-white rounded-lg shadow-sm cursor-pointer'
          style={{ backfaceVisibility: 'hidden' }}>
          <div className='flex flex-col items-center justify-center h-full p-6 space-y-4'>
            <IconComponent className='w-12 h-12 text-blue-600' />
            <h3 className='text-lg font-semibold text-center'>{title}</h3>
            <p className='text-sm text-center text-gray-600'>{description}</p>
          </div>
        </div>

        {/* Back of card */}
        <div
          className='absolute w-full h-full rounded-lg overflow-hidden'
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}>
          <Image
            src={imageUrl || '/api/placeholder/256/256'}
            alt={title}
            objectFit='cover'
            className='w-full h-full'
            fill
          />
        </div>
      </div>
    </div>
  );
};

const ApplicationsSection = () => {
  const applications = [
    {
      IconComponent: Droplets,
      title: 'Oil and Gas',
      description:
        'Purging and blanketing to prevent combustion and contamination in storage and processing facilities.',
      imageUrl: oil,
    },
    {
      IconComponent: Factory,
      title: 'Laser Cutting',
      description:
        'Providing high-purity nitrogen for precise and oxidation-free laser cutting processes.',
      imageUrl: lasercutting,
    },
    {
      IconComponent: Cpu,
      title: 'Electronics Manufacturing',
      description:
        'Creating inert atmospheres for soldering and assembly processes to prevent oxidation.',
      imageUrl: electronic,
    },
    {
      IconComponent: Tablets,
      title: 'Pharmaceuticals',
      description:
        'Maintaining controlled environments for production and packaging to ensure product integrity.',
      imageUrl: pharmaceuticals,
    },
    {
      IconComponent: Pizza,
      title: 'Food and Beverage Packaging',
      description:
        'Ensuring product freshness and extending shelf life through modified atmosphere packaging.',
      imageUrl: foodpack,
    },
  ];

  return (
    <div className='py-12 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Applications</h2>
          <p className='text-lg text-gray-600'>
            Our nitrogen generators are suitable for a wide range of
            applications, including:
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {applications.map((app, index) => (
            <ApplicationCard key={index} {...app} index={index} />
          ))}
        </div>

        <div className='text-center mt-12'>
          <button className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
            Learn More About Our Applications
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsSection;
