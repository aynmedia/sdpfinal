/** @format */
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Twitter, Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';
import logo from '@/../public/images/logo.png';
import map from '@/../public/images/map.png';
const Footer = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  return (
    <footer className='bg-black text-white pt-16 pb-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
          {/* Company Info */}
          <motion.div
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={fadeInUp}>
            <Image src={logo} alt='Logo' width={100} height={100} />
            <p className='text-gray-300 mb-6'>
              Dedicated to providing high-quality pneumatic solutions that drive
              efficiency and innovation across industries.
            </p>
            <div className='flex space-x-4'>
              <Link
                href='#'
                className='text-gray-400 hover:text-white transition-colors'>
                <Twitter size={20} />
              </Link>
              <Link
                href='#'
                className='text-gray-400 hover:text-white transition-colors'>
                <Facebook size={20} />
              </Link>
              <Link
                href='#'
                className='text-gray-400 hover:text-white transition-colors'>
                <Linkedin size={20} />
              </Link>
            </div>
          </motion.div>

          {/* What we do */}
          <motion.div
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={fadeInUp}>
            <h3 className='text-xl font-semibold mb-6'>
              What we are dealing with
            </h3>
            <ul className='space-y-4'>
              {['Anesta Iwata', 'Kobelco', 'Oxygen Generators', 'Others'].map(
                (service, index) => (
                  <li key={index} className='text-gray-300'>
                    {service}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={fadeInUp}>
            <h3 className='text-xl font-semibold mb-6'>Contact information</h3>
            <div className='space-y-4 text-gray-300'>
              <p>456, 4th Main Rd, Manjunath Nagar, Basaveshwar Nagar,</p>
              <p>Bengaluru, Karnataka 560010</p>
              <p className='text-green-600'>+91 99865 23331</p>
              <p>Mon-Sat, 9:00am-8:00pm</p>
              <p>
                <Link
                  href='mailto:care@sdpneumatics.in'
                  className='text-green-600 hover:text-yellow-300'>
                  care@sdpneumatics.in
                </Link>
              </p>
            </div>
          </motion.div>

          {/* Offices */}
          <motion.div
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='gap-6'>
            <h3 className='text-xl font-semibold mb-6'>Offices</h3>
            <p className='text-gray-300 mb-4'>
              Join us in driving the future of pneumatics with cutting-edge
              technology and a customer-first approach.
            </p>
            <Image src={map} alt='Logo' width={400} height={400} />
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className='mt-16 pt-8 border-t border-gray-800 text-center text-gray-400'>
          <p>© {new Date().getFullYear()} SD Pneumatics, All Rights Reserved</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
