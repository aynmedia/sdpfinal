/** @format */

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import aster from '@/../public/images/clients/aster.png';
import anthem from '@/../public/images/clients/anthem.png';
import aurigene from '@/../public/images/clients/aurigene.png';
import BEML from '@/../public/images/clients/BEML.png';
import bharat_electronics_logo from '@/../public/images/clients/bharat_electronics_logo.png';
import bio from '@/../public/images/clients/bio.png';
import fortis from '@/../public/images/clients/fortis.png';
import jain from '@/../public/images/clients/jain.png';
import manipal from '@/../public/images/clients/manipal.png';
import manipalhost from '@/../public/images/clients/manipal.jpeg';
import micro from '@/../public/images/clients/micro.png';
import semi from '@/../public/images/clients/semi.png';
import nhh from '@/../public/images/clients/nhh.jpeg';
import reddy from '@/../public/images/clients/reddy.png';
import ranga from '@/../public/images/clients/ranga.jpeg';
import mvj from '@/../public/images/clients/mvj.png';
import als from '@/../public/images/clients/als.png';
import confident from '@/../public/images/clients/confident.png';
import bioneeds from '@/../public/images/clients/bioneeds.png';
import hal from '@/../public/images/clients/hal.jpeg';
import jindal from '@/../public/images/clients/jindal.png';

const data = [
  { image: aster },
  { image: anthem },
  { image: aurigene },
  { image: BEML },
  { image: bharat_electronics_logo },
  { image: bio },
  { image: fortis },
  { image: jain },
  { image: manipal },
  { image: manipalhost },
  { image: micro },
  { image: nhh },
  { image: reddy },
  { image: semi },
  { image: ranga },
  { image: mvj },
  { image: als },
  { image: confident },
  { image: bioneeds },
  { image: hal },
  { image: jindal },
];

const ReviewCard = ({ image }) => {
  return (
    <div className='group flex justify-center items-center p-4 transition-transform duration-300'>
      <Image
        src={image}
        width={150}
        height={150}
        alt='client-logo'
        className='object-contain transform group-hover:scale-110 transition-transform duration-300'
      />
    </div>
  );
};

const Clients = () => {
  return (
    <div className='text-primary py-12'>
      <div className='max-w-7xl mx-auto text-center my-6'>
        <h1 className='text-3xl font-semibold mt-2'>
          Proudly Trusted by Top Companies Worldwide
        </h1>
        <p className='text-gray-500 mt-2'>
          We take pride in collaborating with industry leaders across various
          sectors, delivering excellence and building lasting relationships.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-7xl mx-auto px-4'>
        {data.map((data, index) => (
          <ReviewCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
