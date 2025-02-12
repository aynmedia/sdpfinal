/** @format */

import React from 'react';
import Image from 'next/image';
import Aboutbg from '../../../public/images/about/aboutbg.jpg';
import Marquee from 'react-fast-marquee';
import Clients from '../components/clients/clients';

const Page = () => {
  return (
    <>
      {/* Hero Section with Split Design */}
      <div className='min-h-screen flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 h-[50vh] md:h-screen relative'>
          <Image
            src={Aboutbg}
            alt='SD Pneumatics Facility'
            layout='fill'
            objectFit='cover'
          />
          <div className='absolute inset-0 bg-[#0B0E2E]/30'></div>
        </div>

        <div className='w-full md:w-1/2 flex items-center p-8 md:p-16 lg:p-24 bg-[#06091B]'>
          <div className='max-w-xl'>
            <p className='text-[#5039bf] text-sm tracking-wider mb-4'>
              ESTABLISHED EXCELLENCE
            </p>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-8'>
              Our Story
            </h1>
            <p className='text-gray-300 text-lg leading-relaxed'>
              S.D. Pneumatics has carved a niche amongst the dependable
              Suppliers of an expansive range of Machines. Under the leadership
              of our Managing Director, Mr. Pramod Gosi, we've become a trusted
              name in Bangalore, Karnataka for quality pneumatic solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement - Minimal Design */}
      <div className='py-12 px-8 md:px-16 lg:px-24'>
        <div className='max-w-screen-xl mx-auto'>
          <div className='flex flex-col md:flex-row md:items-center gap-16'>
            <div className='md:w-1/3'>
              <p className='text-blue-600 text-sm tracking-wider mb-2'>
                OUR MISSION
              </p>
              <h2 className='text-3xl md:text-4xl font-bold text-[#0B0E2E]'>
                Driving Innovation Forward
              </h2>
            </div>
            <div className='md:w-2/3'>
              <p className='text-md text-gray-600 leading-relaxed'>
                To provide innovative, reliable, and efficient pneumatic
                solutions that empower our clients to achieve their operational
                goals while maintaining the highest standards of quality and
                environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Showcase */}
      <div className=''>
        <Marquee
          speed={50}
          gradient
          gradientColor={[249, 250, 251]}
          className='py-12 bg-[#06091B] overflow-hidden'>
          <p className='text-xl md:text-2xl font-medium text-white'>
            Auto Drain Valves • Air Dryers • Air Receivers Tanks • Pressure
            Gauges • AMC for Compressor Air Dryers • All Make Air Compressor
            Spare Parts • Air Receiver Tank • LPG • CO2 Tank • Safety Valve
            Testing
          </p>
        </Marquee>
      </div>
      {/* Core Values - Grid Layout */}
      <div className='py-24 px-8 md:px-16 lg:px-24 bg-white'>
        <div className='max-w-screen-xl mx-auto'>
          <p className='text-blue-600 text-sm tracking-wider mb-2'>
            CORE VALUES
          </p>
          <h2 className='text-3xl md:text-4xl font-bold text-[#0B0E2E] mb-16'>
            Our Principles
          </h2>

          <div className='grid md:grid-cols-3 gap-12'>
            {[
              {
                title: 'Quality Assurance',
                description:
                  'We adhere to strict quality control measures to ensure that all our products meet the highest industry standards.',
              },
              {
                title: 'Innovation',
                description:
                  'Our R&D team constantly works on developing new technologies and improving existing products to stay ahead in the market.',
              },
              {
                title: 'Customer Support',
                description:
                  'We provide comprehensive after-sales support and technical assistance to ensure customer satisfaction.',
              },
            ].map((value, index) => (
              <div key={index} className='group'>
                <div className='w-12 h-1 bg-blue-600 mb-8'></div>
                <h3 className='text-2xl font-bold mb-4 text-[#0B0E2E]'>
                  {value.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sustainability - Horizontal Scroll */}
      <div className='bg-[#06091B] text-white py-24 px-8 md:px-16 lg:px-24'>
        <div className='max-w-screen-xl mx-auto'>
          <p className='text-[#5039bf] text-sm tracking-wider mb-2'>
            SUSTAINABILITY
          </p>
          <h2 className='text-3xl md:text-4xl font-bold mb-16'>
            Environmental Commitment
          </h2>

          <div className='grid md:grid-cols-2 gap-12'>
            <div>
              <div className='w-12 h-1 bg-blue-400 mb-8'></div>
              <h3 className='text-2xl font-bold mb-4'>Energy Efficiency</h3>
              <p className='text-gray-300 leading-relaxed'>
                We continuously strive to improve the energy efficiency of our
                products and manufacturing processes, helping our clients reduce
                their carbon footprint.
              </p>
            </div>
            <div>
              <div className='w-12 h-1 bg-blue-400 mb-8'></div>
              <h3 className='text-2xl font-bold mb-4'>Waste Reduction</h3>
              <p className='text-gray-300 leading-relaxed'>
                Our lean manufacturing practices and recycling programs minimize
                waste and promote the responsible use of resources.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Clients />
      {/* Global Presence - Full Width */}
      <div className='py-24 px-8 md:px-16 lg:px-24'>
        <div className='max-w-screen-xl mx-auto'>
          <div className='flex flex-col md:flex-row md:items-center gap-16'>
            <div className='md:w-1/2'>
              <p className='text-[#5039bf] text-sm tracking-wider mb-2'>
                GLOBAL REACH
              </p>
              <h2 className='text-3xl md:text-4xl font-bold text-[#0B0E2E]'>
                Worldwide Impact
              </h2>
            </div>
            <div className='md:w-1/2'>
              <p className='text-xl text-gray-600 leading-relaxed'>
                With a strong global presence, SD Pneumatics serves clients
                across multiple continents. Our international network allows us
                to provide localized support while leveraging our global
                expertise to deliver innovative solutions worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
