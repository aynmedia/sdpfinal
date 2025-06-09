/** @format */

import React from 'react';
import twin from '@/../public/images/oxygen/twin.jpg';
import modular from '@/../public/images/oxygen/modularpsa.png';
import dspsa from '@/../public/images/oxygen/dspsa.jpg';
import vpsa from '@/../public/images/oxygen/vpsa.jpg';
import mobileoxygen from '@/../public/images/oxygen/mobileoxygen.png';
import oxygenfilling from '@/../public/images/oxygen/oxygenfilling.jpg';
import plugnplay from '@/../public/images/oxygen/plugnplay.png';
import oxygengencompact from '@/../public/images/oxygen/oxygengencompact.png';
import oxygenbio from '@/../public/images/oxygen/oxygenbio.png';
import oxygenplant from '@/../public/images/oxygen/oxygenplant.png';
import vlx from '@/../public/images/oxygen/vlx.png';
import water from '@/../public/images/oxygen/water.webp';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import GetQuoteModal from './../GetQuoteModal';
import { ArrowDownToLine } from 'lucide-react';

const productData = [
  {
    id: 1,
    title:
      'PSA Twin Tower oxygen generators for medium to high fuel consumption',
    description:
      'The ideal solution where larger oxygen consumptions apply. Built to last for years of trouble-free continuous heavy-duty operation at low operational costs.',
    image: twin,
  },
  {
    id: 2,
    title: 'Modular PSA Oxygen Generators',
    description:
      'A range of generators providing users with unique flexibility: thanks to the addition of independent PSA modules, the capacity of the equipment can be very easily increased.',
    image: modular,
  },
  {
    id: 3,
    title: 'DS-PSA Oxygen Generator: Very High Purity Oxygen produced on site',
    description:
      'A new generation of oxygen generator applying a unique and patented technology. Based on a two-stage molecular separation process, the DS-PSA removes nitrogen, argon and traces of pollutants remaining after the first stage. This technology allows to obtain an ultra high purity oxygen (up to 99,5%). In addition, the OCS patented system ensures an exceptional stability of O2 purity, at +/- 0,2%.',
    image: dspsa,
  },
  {
    id: 4,
    title: 'Mobile Oxygen Generators',
    description:
      'Forget high pressure cylinders and liquid oxygen deliveries, NOVAIR has designed ModulO2, a compact, mobile and featured with a friendly use system oxygen generator.',
    image: mobileoxygen,
  },
  {
    id: 5,
    title:
      'VPSA Oxygen Generator: high energy efficiency for the highest consumption',
    description:
      'For applications needing particularly high oxygen flows, NOVAIR introduces a new range of V-PSA solutions. Thanks to a low power consumption, the V-PSA technology allows a drastic reduction of oxygen production costs.',
    image: vpsa,
  },
  {
    id: 6,
    title: 'Oxygen cylinder filling',
    description:
      'we offers a full range of high pressure oxygen cylinder filling systems with a filling capacity of up to 100 cylinders per day.',
    image: oxygenfilling,
  },
  {
    id: 7,
    title: 'Plug&Play Container OXYFACTORY',
    description:
      'We Industries presents OXYFACTORY, a turnkey solution that includes both autonomous oxygen production and cylinders filling.',
    image: plugnplay,
  },
  {
    id: 8,
    title: 'Oxygen generator Compact / Plug & Play',
    description:
      'We presents COMPACT-20 an oxygen generator that is compact, mobile, and easy to operate and maintain.',
    image: oxygengencompact,
  },
  {
    id: 9,
    title: 'Oxygen production for biogas desulphurisation',
    description:
      'We offers a complete range of generators that meet all needs in terms of flow rate, pressure and purity, all adapted to the production of oxygen that will then be injected into the gas stream or into the activated carbon.',
    image: oxygenbio,
  },
  {
    id: 10,
    title: 'ONE, the Most Compact Oxygen Plant',
    description:
      'We proudly presents ONE, an ultra-compact plug-and-play Oxygen Plant that redefines on-site oxygen production.',
    image: oxygenplant,
  },
  {
    id: 11,
    title: 'VLX, the ideal air compressor for Oxygen Generators.',
    description:
      'A pioneering company in Medical Oxygen Generators, VLX is the premier Air Compressor uniquely engineered to integrate seamlessly with an Oxygen Generator',
    image: vlx,
  },
  {
    id: 12,
    title: 'High efficiency on-site oxygen generation for water industries',
    description:
      'We proposes OXYPURE WATERPACK, a high-efficiency on-site oxygen generation system specially designed to meet the demands of Water Industries.',
    image: water,
  },
];

const Products = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
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
                <div
                  className='text-gray-600 text-sm mb-2 flex flex-row gap-2 hover:text-green-600 transition-colors cursor-pointer'
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowQuoteModal(true);
                  }}>
                  <ArrowDownToLine className='h-4 w-4' />
                  <span className='font-bold'>Get Quote</span>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
      <GetQuoteModal
        isOpen={showQuoteModal}
        onClose={() => setShowQuoteModal(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default Products;
