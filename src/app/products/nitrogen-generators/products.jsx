/** @format */

import React from 'react';
import modpsa from '@/../public/images/nitrogen/modpsa.png';
import psa from '@/../public/images/nitrogen/psa.jpg';
import membrane from '@/../public/images/nitrogen/membrane.png';
import food from '@/../public/images/nitrogen/food.jpg';
import compact from '@/../public/images/nitrogen/compact.jpg';
import plug from '@/../public/images/nitrogen/plug.png';
import laser from '@/../public/images/nitrogen/laser.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/app/components/ui/button/button';
import { Download } from 'lucide-react';

const productData = [
  {
    id: 1,
    title:
      'PSA Twin Tower oxygen generators for medium to high fuel consumption',
    description:
      'The ideal solution where larger oxygen consumptions apply. Built to last for years of trouble-free continuous heavy-duty operation at low operational costs.',
    image: modpsa,
  },
  {
    id: 2,
    title: 'Modular PSA Oxygen Generators',
    description:
      'A range of generators providing users with unique flexibility: thanks to the addition of independent PSA modules, the capacity of the equipment can be very easily increased.',
    image: psa,
  },
  {
    id: 3,
    title: 'DS-PSA Oxygen Generator: Very High Purity Oxygen produced on site',
    description:
      'A new generation of oxygen generator applying a unique and patented technology. Based on a two-stage molecular separation process, the DS-PSA removes nitrogen, argon and traces of pollutants remaining after the first stage. This technology allows to obtain an ultra high purity oxygen (up to 99,5%). In addition, the OCS patented system ensures an exceptional stability of O2 purity, at +/- 0,2%.',
    image: laser,
  },
  {
    id: 4,
    title: 'Mobile Oxygen Generators',
    description:
      'Forget high pressure cylinders and liquid oxygen deliveries, NOVAIR has designed ModulO2, a compact, mobile and featured with a friendly use system oxygen generator.',
    image: membrane,
  },
  {
    id: 5,
    title:
      'VPSA Oxygen Generator: high energy efficiency for the highest consumption',
    description:
      'For applications needing particularly high oxygen flows, NOVAIR introduces a new range of V-PSA solutions. Thanks to a low power consumption, the V-PSA technology allows a drastic reduction of oxygen production costs.',
    image: food,
  },
  {
    id: 6,
    title: 'Oxygen cylinder filling',
    description:
      'we offers a full range of high pressure oxygen cylinder filling systems with a filling capacity of up to 100 cylinders per day.',
    image: compact,
  },
  {
    id: 7,
    title: 'Plug&Play Container OXYFACTORY',
    description:
      'We Industries presents OXYFACTORY, a turnkey solution that includes both autonomous oxygen production and cylinders filling.',
    image: plug,
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
