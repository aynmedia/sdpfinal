/** @format */

import Image from 'next/image';
import React from 'react';
import anesta from '@/../public/images/anesta.jpg';
import { Dot } from 'lucide-react';
import kobelcoscrew from '@/../public/images/kobelcoscrew.jpg';
import AnestIwataProducts from './anestaproduct';
import kobelcologo from '@/../public/images/kobelco.svg';
import Button from '@/app/components/ui/button/button';
import Explore from '@/app/components/explore/explore';
import screw from '@/../public/images/screw.jpg';
const Kobelco = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 min-h-screen relative'>
        {' '}
        {/* <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#051D3F] via-transparent to-[#051D3F] z-10 pointer-events-none'></div> */}
        <div className='relative order-last md:order-last flex flex-col justify-center bg-primary text-white'>
          {/* <div className='absolute  top-0 left-0 w-full h-full bg-gradient-to-b from-[#051D3F] via-transparent to-[#051D3F] pointer-events-none'></div> */}
          <div className='md:mx-24 mx-4 flex gap-6 flex-col z-10'>
            <div className='p-4 bg-primary w-fit rounded-sm'>
              <Image
                src={kobelcologo}
                alt='Anesta Iwata'
                width={200}
                height={200}
              />
            </div>
            <p className='text-white text-4xl font-bold'>Kobelco</p>
            <p className='text-white text-md font-normal'>
              KOBELCO COMPRESSORS, with over 100 years of history, is a leading
              global provider of compressed air solutions from Japan. Committed
              to innovation and quality, they deliver reliable and efficient
              systems for various industries worldwide.
            </p>
            <Button
              color='white'
              text='Contact Us'
              link='https://www.google.com'
            />
          </div>
        </div>
        <div className='order-first md:order-first relative w-full h-full'>
          <div className='relative w-full h-full'>
            {/* Gradient Effect */}
            {/* <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-transparent to-primary z-10 pointer-events-none'></div> */}

            {/* Image */}
            <Image
              src={kobelcoscrew}
              alt='Anesta Iwata'
              layout='fill'
              objectFit='cover'
              className='w-full h-full'
            />
          </div>
        </div>
      </div>
      <Explore />

      <div className='bg-white pb-12'>
        <div className='max-w-7xl mx-auto py-12 px-4 text-primary  flex flex-col gap-6'>
          <h1 className='text-4xl font-bold mb-4'>
            Comprehensive Product Portfolio
          </h1>
          <p className='leading-loose '>
            Kobelco Compressors offers a diverse range of advanced compressor
            solutions to meet the specific needs of various industries. Their
            product portfolio includes oil-free compressors, which are ideal for
            applications requiring contaminant-free air, such as food
            processing, pharmaceuticals, and electronics. They also specialize
            in screw compressors, valued for their durability and energy
            efficiency in manufacturing and automotive sectors, and centrifugal
            compressors, which cater to high-volume and high-pressure demands in
            industries like power generation, petrochemicals, and steel
            production. Additionally, Kobelco provides customized solutions
            tailored to address unique operational challenges, ensuring optimal
            performance and reliability for their customers.
          </p>
          <h1 className='text-4xl font-bold mb-4'>
            Commitment to Innovation and Sustainability
          </h1>
          <p className='leading-loose'>
            Innovation and sustainability are at the heart of Kobelco's
            operations. The company invests heavily in research and development
            to create energy-efficient compressors that reduce operational costs
            while maintaining superior performance. With a focus on
            environmental responsibility, Kobelco integrates eco-friendly
            designs to minimize carbon footprints and support global
            sustainability initiatives. Their products also feature advanced
            technologies, such as IoT-enabled monitoring systems, allowing users
            to optimize performance and implement predictive maintenance
            strategies, further enhancing efficiency and reliability.
          </p>
          <h1 className='text-4xl font-bold mb-4'>
            Global Reach and Customer Support
          </h1>
          <p className='leading-loose'>
            Kobelco's extensive global presence ensures seamless service and
            support for its customers across the world. Through a robust network
            of offices, service centers, and distributors, the company provides
            comprehensive customer support, including maintenance services,
            spare parts, and technical assistance. Kobelco’s customer-centric
            approach extends to offering training programs, empowering clients
            with the knowledge and skills needed to efficiently operate and
            maintain their equipment. This combination of a strong global reach
            and dedicated support services makes Kobelco a trusted partner for
            industries seeking reliable and high-performing compressor
            solutions.
          </p>
          <h1 className='z-1 text-xl font-bold '>
            Download our quick reference guide:
          </h1>
        </div>

        <div className='flex flex-col justify-center items-left gap-6 py-12 max-w-7xl mx-auto h-[300px] bg-white rounded-sm relative text-white'>
          <h1 className='z-1 text-4xl font-bold '>Anesta Iwata</h1>
          <Image
            src={screw}
            alt='Anest Iwata'
            fill
            objectFit='cover'
            className='absolute top-0 left-0 w-full h-full object-cover'
          />
          <div className='absolute p-6 gap-4 flex flex-col text-white'>
            <h1 className='z-1 text-4xl font-bold '>Kobelco</h1>
            <h2 className='text-xl font-bold'>Download Brochure</h2>
          </div>
        </div>
      </div>
      <AnestIwataProducts />
    </div>
  );
};

export default Kobelco;
