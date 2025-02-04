/** @format */

import React from 'react';
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
import jindal from '@/../public/images/clients/jindal.jpeg';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';

const data = [
  {
    image: aster,
  },
  {
    image: anthem,
  },
  {
    image: aurigene,
  },
  {
    image: BEML,
  },
  {
    image: bharat_electronics_logo,
  },
  {
    image: bio,
  },
  {
    image: fortis,
  },
  {
    image: jain,
  },
  {
    image: manipal,
  },
  {
    image: manipalhost,
  },
  {
    image: micro,
  },
  {
    image: nhh,
  },
  {
    image: reddy,
  },
  {
    image: semi,
  },
  {
    image: ranga,
  },
  {
    image: mvj,
  },
  {
    image: als,
  },
  {
    image: confident,
  },
  {
    image: bioneeds,
  },
  {
    image: hal,
  },
  {
    image: jindal,
  },
];

const ReviewCard = ({ image }) => {
  return (
    <figure
      className={cn(
        'relative w-96 cursor-pointer overflow-hidden gap-0 flex justify-center items-center'
      )}>
      <Image
        src={image}
        width={200}
        height={200}
        alt='category'
        className='flex justify-center items-center'
      />
    </figure>
  );
};
const Clients = () => {
  return (
    <div className='text-primary py-12'>
      <div className='max-w-7xl mx-auto text-center my-6'>
        {' '}
        <h1 className='text-2xl font-semibold mt-2'>Industrial Applications</h1>
        <h2 className='text-md  max-w-4xl mx-auto my-2'>
          With a strong foundation in global expertise, we provide trusted
          solutions that cater to diverse industries, consistently delivering
          exceptional performance and groundbreaking innovation worldwide.
        </h2>
      </div>
      <div className='relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden'>
        <Marquee pauseOnHover className='[--duration:60s]'>
          {data.map((data, index) => (
            <ReviewCard key={index} {...data} />
          ))}
        </Marquee>
        {/* <div className='pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white'></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white'></div> */}
      </div>
    </div>
  );
};

export default Clients;
