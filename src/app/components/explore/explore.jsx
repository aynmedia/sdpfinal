/** @format */

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigationBar = () => {
  const pathname = usePathname();
  const navItems = [
    { title: 'Anesta Iwata', href: '/products/anesta' },
    { title: 'Kobelco', href: '/products/kobelco' },
    { title: 'Oxygen Generators', href: '/products/oxygen-generators' },
    { title: 'Nitrogen Generators', href: '/products/nitrogen-generators' },
    { title: 'Others', href: '/products/others' },
  ];

  return (
    <nav className='w-full bg-[#06091B] text-white h-[96px]'>
      <div className='max-w-7xl mx-auto px-4 h-full flex items-center'>
        {/* Desktop Navigation */}
        <ul className='hidden md:flex space-x-8 relative'>
          {navItems.map((item) => (
            <li key={item.title} className='relative'>
              <Link href={item.href}>
                <span
                  className={`text-xl font-normal hover:text-gray-200 transition-colors block py-4
                  ${pathname === item.href ? 'text-white' : 'text-gray-300'}`}>
                  {item.title}
                  {pathname === item.href && (
                    <span
                      className='absolute -top-4 left-0 right-0 h-1 bg-white'
                      style={{ marginTop: '0' }}
                    />
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className='md:hidden'>
          <select
            className='w-full bg-[#001233] text-white py-4 focus:outline-none'
            onChange={(e) => (window.location.href = e.target.value)}
            value={pathname}>
            {navItems.map((item) => (
              <option key={item.title} value={item.href}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
