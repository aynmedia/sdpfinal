/** @format */

import Link from 'next/link';
import React from 'react';

const Explore = () => {
  const products = [
    {
      title: 'Anesta Iwata',
      href: '/products/anesta',
    },
    {
      title: 'Kobelco',
      href: '/products/kobelco',
    },
    {
      title: 'Oxygen Generators',
      href: '/products/oxygen-generators',
    },
    {
      title: 'Nitrogen Generators',
      href: '/products/nitrogen-generators',
    },
    {
      title: 'Others',
      href: '/products/others',
    },
  ];
  return (
    <div className='bg-[#f4f4f4]'>
      <div className='py-12 max-w-7xl mx-auto grid grid-cols-3 gap-6'>
        <h1 className='text-2xl font-normal mb-4 col-span-3'>
          Explore Further
        </h1>
        {products.map((product, index) => (
          <div
            key={product.title}
            className={`col-span-1 ${
              index % 3 === 0
                ? 'col-start-1'
                : index % 3 === 1
                ? 'col-start-2'
                : 'col-start-3'
            }`}>
            <Link href={product.href}>
              <span className='flex items-center font-medium gap-2 hover:text-green-600 transition-colors cursor-pointer'>
                <span>{product.title}</span>
                <svg
                  className='w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
