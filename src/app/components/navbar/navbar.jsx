/** @format */
'use client';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import logo from '@/../public/images/logo.png';
import motor from '@/../public/images/motor.jpg';

const menuItems = [
  { path: '/', label: 'Home' },
  {
    path: '/products',
    label: 'Products',
    hasMegaMenu: true,
    megaMenuContent: [
      {
        title: 'Main Products',
        links: [
          { label: 'Anest Iwata', href: '/products/anesta' },
          { label: 'Kobelco', href: '/products/kobelco' },
          { label: 'Oxygen Generators', href: '/products/oxygen-generators' },
          {
            label: 'Nitrogen Generators',
            href: '/products/nitrogen-generators',
          },
          { label: 'Others', href: '/products/others' },
        ],
      },
    ],
  },
  { path: '/about', label: 'About' },
  { path: '/blogs', label: 'Blogs' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [megaMenuTimer, setMegaMenuTimer] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const handleMenuEnter = () => {
    if (megaMenuTimer) clearTimeout(megaMenuTimer);
    setMegaMenuOpen(true);
  };

  const handleMenuLeave = () => {
    const timer = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 300);
    setMegaMenuTimer(timer);
  };

  const handleSubMenuClick = () => {
    setMegaMenuOpen(false);
    setMenuOpen(false);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const megaMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const textColorClass = isScrolled ? 'text-white' : 'text-primary';

  const renderMegaMenu = () => (
    <motion.div
      initial='hidden'
      animate={megaMenuOpen ? 'visible' : 'hidden'}
      variants={megaMenuVariants}
      className='absolute left-0 w-full bg-white dark:bg-gray-800 shadow-lg'
      onMouseEnter={handleMenuEnter}
      onMouseLeave={handleMenuLeave}>
      <div className='max-w-7xl mx-auto grid grid-cols-5 gap-4 p-4'>
        <div className='space-y-1'>
          {menuItems[1].megaMenuContent[0].links.map((link, index) => (
            <Link href={link.href} key={index} onClick={handleSubMenuClick}>
              <span className='block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'>
                <span className='text-base text-gray-900 dark:text-white hover:text-green-700 dark:hover:text-green-500'>
                  {link.label}
                </span>
              </span>
            </Link>
          ))}
        </div>
        <div className='col-span-4 relative h-[50vh]'>
          <div className='absolute inset-0 bg-green-800 rounded-lg overflow-hidden'>
            <Image
              src={motor}
              alt='Featured Products'
              className='w-full h-full object-cover'
            />
            <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
              <h3 className='text-xl font-bold mb-2'>Featured Products</h3>
              <p className='text-sm'>Discover our latest innovations</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderMenuItem = (item, isMobile = false) => {
    if (item.hasMegaMenu && !isMobile) {
      return (
        <div
          key={item.path}
          onMouseEnter={handleMenuEnter}
          onMouseLeave={handleMenuLeave}
          className='relative group'>
          <span className='flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 cursor-pointer'>
            {item.label}
            <ChevronDown className='w-4 h-4' />
          </span>
        </div>
      );
    }

    if (item.hasMegaMenu && isMobile) {
      return (
        <div key={item.path} className='space-y-1'>
          <div className='flex items-center justify-between px-3 py-2 rounded-md text-base font-medium'>
            <span>{item.label}</span>
            <ChevronDown className='w-4 h-4' />
          </div>
          <div className='pl-4'>
            {item.megaMenuContent[0].links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                onClick={handleSubMenuClick}>
                <span className='block px-3 py-1.5 text-sm hover:bg-green-700 rounded'>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      );
    }

    return (
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
  };

  return (
    <>
      <motion.nav
        animate={controls}
        className={`fixed w-full z-20 ${textColorClass}`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-24'>
            <div className='flex items-center'>
              <Link href='/'>
                <span className='text-xl font-bold'>
                  <Image src={logo} alt='Logo' width={100} height={100} />
                </span>
              </Link>
            </div>

            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                {menuItems.map((item) => renderMenuItem(item))}
              </div>
            </div>

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

        {megaMenuOpen && !menuOpen && renderMegaMenu()}

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
      {/* Overlay for mega menu */}
      {megaMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-10'
          onMouseEnter={handleMenuEnter}
          onClick={() => setMegaMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
