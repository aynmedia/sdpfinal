/** @format */
'use client';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/../public/images/logo.png';

// Menu configuration object
const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/products', label: 'Products' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      backgroundColor: isScrolled
        ? 'rgba(29, 29, 29, 1)'
        : 'rgba(29, 29, 29, 0)',
      transition: { duration: 0.3 },
    });
  }, [isScrolled, controls]);

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const textColorClass = isScrolled ? 'text-white' : 'text-white';

  const renderMenuItem = (item, isMobile = false) => (
    <Link href={item.path} key={item.path}>
      <span
        onClick={isMobile ? () => setMenuOpen(false) : undefined}
        className={`${
          isMobile
            ? 'block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700'
            : 'px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700'
        }`}>
        {item.label}
      </span>
    </Link>
  );

  return (
    <motion.nav
      animate={controls}
      className={`fixed w-full z-10 ${textColorClass}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-24'>
          <div className='flex items-center'>
            <Link href='/'>
              <span className='text-xl font-bold'>
                <Image src={logo} alt='Logo' width={100} height={100} />
              </span>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {menuItems.map((item) => renderMenuItem(item))}
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`hover:text-white focus:outline-none ${textColorClass}`}>
              {menuOpen ? (
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={mobileMenuVariants}
          className='md:hidden bg-green-800 text-white'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            {menuItems.map((item) => renderMenuItem(item, true))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
