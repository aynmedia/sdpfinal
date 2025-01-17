/** @format */

import React from 'react';
import psa from '@/../public/images/nitrogen/psa.jpg';
import membrane from '@/../public/images/nitrogen/membrane.png';
import food from '@/../public/images/nitrogen/food.jpg';
import compact from '@/../public/images/nitrogen/compact.jpg';
import plug from '@/../public/images/nitrogen/plug.png';
import laser from '@/../public/images/nitrogen/laser.png';
import modpsa from '@/../public/images/nitrogen/modpsa.png';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/app/components/ui/button/button';
import { Download } from 'lucide-react';

const productData = [
  {
    id: 1,
    title: 'Modular PSA Nitrogen Generator',
    description:
      'NITROSWING® is NOVAIRs new generation of modular PSA nitrogen generators offering highest standards in the market for efficiency, flexibility and reliability.',
    image: modpsa,
  },
  {
    id: 2,
    title: 'PSA Nitrogen Generators',
    description:
      'Novair designed a high efficiency PSA nitrogen generator, NITROPLUS. With a wide range of capacities and varied purity levels, NITROPLUS meets the needs of all types of industries, with increased profitability.',
    image: psa,
  },
  {
    id: 3,
    title: 'Nitrogen for Laser Cutting',
    description:
      'Result of the collaboration with industrial users, NOVAIR designed the NITROSWING LASERPACK, an autonomous supply solution of nitrogen suited to all types of cutting machines.',
    image: laser,
  },
  {
    id: 4,
    title: 'Membrane Nitrogen Generator',
    description:
      'Membrane generators particularly suitable for applications not requiring a high purity of nitrogen or in case where nitrogen must be produced under extreme environmental conditions in remote locations.',
    image: membrane,
  },
  {
    id: 5,
    title: 'Nitrogen in Food Packaging',
    description:
      'In order to offer constantly some innovative solutions for food industry, NOVAIR designed the Nitroswing Foodpack for all Modiﬁed Atmosphere Packaging applications.',
    image: food,
  },
  {
    id: 6,
    title: 'Plug&Play Container NITROFACTORY',
    description:
      'With NOVAIRs production cabinets, you can have an autonomous technical room dedicated to nitrogen production, without changing the internal structure of your establishment.',
    image: plug,
  },
  {
    id: 7,
    title: 'Plug&Play Container OXYFACTORY',
    description:
      'ModulN2 is a membrane nitrogen compact generator all-included NOVAIR and is a perfect alternative for industrials looking for a sure, economical, pratice and reliable nitrogen supply.',
    image: compact,
  },
];

const Products = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12'>
      <ul className='space-y-2'>
        {productData.map((product, index) => (
          <motion.li
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='group'>
            <div className='flex flex-col md:flex-row gap-6 p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors duration-200 hover:shadow-md'>
              <div className='w-full md:w-48 h-48 md:h-auto relative flex-shrink-0'>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  className='rounded-lg object-cover w-full h-full'
                />
              </div>
              <div className='flex-1 flex flex-col space-y-4 justify-center'>
                <h2 className='text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-200'>
                  {product.title}
                </h2>
                <p className='text-gray-600 leading-relaxed'>
                  {product.description}
                </p>
                <div className='flex flex-row gap-3 text-primary hover:text-green-600 transition-colors duration-200 cursor-pointer'>
                  <Download className='h-6 w-6' />
                  <p>Get Quote</p>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
